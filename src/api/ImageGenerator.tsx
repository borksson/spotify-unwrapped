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

export const graphUserProfile = (userProfile: any) => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    paper.setup(canvas);

    graphProfile(userProfile, 30, 220, 2, 0.8, 'white');
}


const graphProfile = (userProfile: any, yCenter: number, xCenter: number, scale: number, bgOpacity: number, bg: string) => {
    // Make seven lines with the following labels: acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence
    // xCenter = 250
    const rectangle = new paper.Path.Rectangle(new paper.Point(xCenter-(110*scale), yCenter-(10*scale)), new paper.Point(xCenter+(110*scale), yCenter+(80*scale)));
    const radius = new paper.Size(10*scale, 10*scale);
    const rect = new paper.Path.Rectangle(rectangle.bounds, radius);
    rect.fillColor = new paper.Color(bg);
    rect.opacity = bgOpacity;
    
    const x_points = [xCenter-(90*scale), xCenter-(60*scale), xCenter-(30*scale), xCenter, xCenter+(30*scale), xCenter+(60*scale), xCenter+(90*scale)];

    const values = [userProfile.acousticness, userProfile.danceability, userProfile.energy, userProfile.instrumentalness, userProfile.liveness, userProfile.speechiness, userProfile.valence];
    const value_titles = ['Acousticness', 'Danceability', 'Energy', 'Instrumentalness', 'Liveness', 'Speechiness', 'Valence'];

    x_points.forEach((x, index) => {
        const line = new paper.Path.Line(new paper.Point(x, yCenter), new paper.Point(x, yCenter+(70*scale)));
        line.strokeColor = new paper.Color('grey');
        line.strokeWidth = 2;

        const title = new paper.PointText(new paper.Point(x+(10*scale), yCenter+(35*scale)));
        title.rotation = 270;
        title.justification = 'center';
        title.fontSize = (8*scale);
        title.fontWeight = 'bold';
        title.fillColor = new paper.Color('grey');
        title.content = value_titles[index];

        const point = new paper.Path.Circle(new paper.Point(x, yCenter + ((70*scale)-(values[index] * (70*scale)))), (3*scale));
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

    const templates = ["/templates/template.png"]//, "/templates/template_1.png", "/templates/template_2.png"]

    const template = new paper.Raster(templates[Math.floor(Math.random() * templates.length)]);
    template.crossOrigin = 'anonymous';

    template.onLoad = () => {
        template.position = paper.view.center;
        const optimalSize = [270, 480]
        const xScale = optimalSize[0] / template.bounds.width;
        const yScale = optimalSize[1] / template.bounds.height;
        console.log(xScale, yScale, template.bounds.width, template.bounds.height)
        template.scale(xScale, yScale);
    }
    const artist = new paper.Raster(topTrackAlbumArt);
    artist.crossOrigin = 'anonymous';
    artist.position = new paper.Point(250, 130);
    artist.scale(0.25);

    const tracksTitle = new paper.PointText(new paper.Point(130, 260));
    tracksTitle.justification = 'left';
    tracksTitle.fontSize = 10;
    tracksTitle.fontWeight = 'bold';
    tracksTitle.fillColor = new paper.Color('grey');
    tracksTitle.content = 'Top Tracks:';


    const tracksText = new paper.PointText(new paper.Point(130, 275));
    tracksText.justification = 'left';
    tracksText.fontSize = 12;
    tracksText.fontWeight = 'bold';
    tracksText.fillColor = new paper.Color('black');
    tracksText.content = tracksString;

    const artistsTitle = new paper.PointText(new paper.Point(250, 260));
    artistsTitle.justification = 'left';
    artistsTitle.fontSize = 10;
    artistsTitle.fontWeight = 'bold';
    artistsTitle.fillColor = new paper.Color('grey');
    artistsTitle.content = 'Top Artists:';

    const artistsText = new paper.PointText(new paper.Point(250, 275));
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

    graphProfile(userProfile, 390, 250, 1, 0.4, 'white');
}