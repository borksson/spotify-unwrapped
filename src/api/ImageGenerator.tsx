import paper from 'paper';
import { TimeFrame, getTopArtists, getTopTracks, getUserProfile, getLoginUserProfile} from './SpotifyFacade';

const wrapText = (text: string, lineLength: number) => {
    const lines = text.split('\n');
    const newLines: string[] = [];
    lines.forEach((line) => {
        if (line.length > lineLength) {
            const words = line.split(' ');
            let newLine = '';
            words.forEach((word) => {
                if (newLine.length + word.length < lineLength) {
                    newLine += word + ' ';
                } else {
                    newLines.push(newLine);
                    newLine = word + ' ';
                }
            });
            newLines.push(newLine);
        } else {
            newLines.push(line);
        }
    });
    return newLines.join('\n');
}

const graphProfile = (userProfile: any) => {
    // Make seven lines with the following labels: acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence
    const rect = new paper.Path.Rectangle(new paper.Point(140, 380), new paper.Point(360, 470));
    rect.fillColor = new paper.Color('white');
    rect.opacity = 0.4;
    
    const x_points = [160, 190, 220, 250, 280, 310, 340];

    const values = [userProfile.acousticness, userProfile.danceability, userProfile.energy, userProfile.instrumentalness, userProfile.liveness, userProfile.speechiness, userProfile.valence];
    const value_titles = ['Acousticness', 'Danceability', 'Energy', 'Instrumentalness', 'Liveness', 'Speechiness', 'Valence'];

    x_points.forEach((x, index) => {
        const line = new paper.Path.Line(new paper.Point(x, 390), new paper.Point(x, 460));
        line.strokeColor = new paper.Color('grey');
        line.strokeWidth = 2;

        const title = new paper.PointText(new paper.Point(x+10, 425));
        title.rotation = 270;
        title.justification = 'center';
        title.fontSize = 8;
        title.fontWeight = 'bold';
        title.fillColor = new paper.Color('grey');
        title.content = value_titles[index];

        const point = new paper.Path.Circle(new paper.Point(x, 390 + (70-(values[index] * 70))), 3);
        point.fillColor = new paper.Color('black');
    });

}

export const ShareImage = async () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'spotify-stats.png';
    link.href = dataURL;
    link.click();
}

export const GenerateImage = async (accessToken: string) => {
    const tracks = await getTopTracks(accessToken, 5, TimeFrame.long_term);
    const artists = await getTopArtists(accessToken, 5, TimeFrame.long_term);
    const userProfile = await getUserProfile(accessToken);
    const userInfo = await getLoginUserProfile(accessToken)

    const tracksNames = tracks.map((track) => track.name);
    const artistsNames = artists.map((artist) => artist.name);

    let tracksString = '';
    tracksNames.forEach((name, index) => {
        tracksString += `${index+1} ${name ? name : 'N/A'}\n`;
    });

    let artistsString = '';
    artistsNames.forEach((name, index) => {
        artistsString += `${index+1} ${name ? name : 'N/A'}\n`;
    });

    tracksString = wrapText(tracksString, 20);
    artistsString = wrapText(artistsString, 20);
    
    const topTrackAlbumArt = tracks[0].album.images[0].url;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    paper.setup(canvas);

    const template = new paper.Raster("/template.png");
    template.crossOrigin = 'anonymous';

    template.position = paper.view.center;
    template.scale(0.25);
    const artist = new paper.Raster(topTrackAlbumArt);
    artist.crossOrigin = 'anonymous';
    artist.position = new paper.Point(250, 130);
    artist.scale(0.25);

    const tracksTitle = new paper.PointText(new paper.Point(130, 255));
    tracksTitle.justification = 'left';
    tracksTitle.fontSize = 10;
    tracksTitle.fontWeight = 'bold';
    tracksTitle.fillColor = new paper.Color('grey');
    tracksTitle.content = 'Top Tracks:';


    const tracksText = new paper.PointText(new paper.Point(130, 270));
    tracksText.justification = 'left';
    tracksText.fontSize = 12;
    tracksText.fontWeight = 'bold';
    tracksText.fillColor = new paper.Color('black');
    tracksText.content = tracksString;

    const artistsTitle = new paper.PointText(new paper.Point(250, 255));
    artistsTitle.justification = 'left';
    artistsTitle.fontSize = 10;
    artistsTitle.fontWeight = 'bold';
    artistsTitle.fillColor = new paper.Color('grey');
    artistsTitle.content = 'Top Artists:';

    const artistsText = new paper.PointText(new paper.Point(250, 270));
    artistsText.justification = 'left';
    artistsText.fontSize = 12;
    artistsText.fontWeight = 'bold';
    artistsText.fillColor = new paper.Color('black');
    artistsText.content = artistsString;

    const userProfileTitle = new paper.PointText(new paper.Point(130, 365));
    userProfileTitle.justification = 'left';
    userProfileTitle.fontSize = 10;
    userProfileTitle.fontWeight = 'bold';
    userProfileTitle.fillColor = new paper.Color('grey');
    userProfileTitle.content = 'User Profile:';

    graphProfile(userProfile);
}