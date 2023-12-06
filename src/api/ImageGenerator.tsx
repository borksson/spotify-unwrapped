import paper from 'paper';
import { TimeFrame, getTopArtists, getTopTracks, getUserProfile } from './SpotifyFacade';

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

export const GenerateImage = async (accessToken: string) => {
    const tracks = await getTopTracks(accessToken, 5, TimeFrame.long_term);
    const artists = await getTopArtists(accessToken, 5, TimeFrame.long_term);
    const userProfile = await getUserProfile(accessToken);

    const tracksNames = tracks.map((track) => track.name);
    const artistsNames = artists.map((artist) => artist.name);

    const tracksString = wrapText(`1 ${tracksNames[0]}\n2 ${tracksNames[1]}\n3 ${tracksNames[2]}\n4 ${tracksNames[3]}\n5 ${tracksNames[4]}`, 20)
    const artistsString = wrapText(`1 ${artistsNames[0]}\n2 ${artistsNames[1]}\n3 ${artistsNames[2]}\n4 ${artistsNames[3]}\n5 ${artistsNames[4]}`, 25)
    const userProfileString = wrapText(`Acousticness: ${userProfile.acousticness.toFixed(2)} Danceability: ${userProfile.danceability.toFixed(2)} Energy: ${userProfile.energy.toFixed(2)} Instrumentalness: ${userProfile.instrumentalness.toFixed(2)} Liveness: ${userProfile.liveness.toFixed(2)} Speechiness: ${userProfile.speechiness.toFixed(2)} Valence: ${userProfile.valence.toFixed(2)}`, 50)
    
    
    const topTrackAlbumArt = tracks[0].album.images[0].url;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    paper.setup(canvas);

    const template = new paper.Raster('/template.png');

    template.position = paper.view.center;
    template.scale(0.25);
    const artist = new paper.Raster(topTrackAlbumArt);
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
    tracksText.fontSize = 11;
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
    artistsText.fontSize = 11;
    artistsText.fontWeight = 'bold';
    artistsText.fillColor = new paper.Color('black');
    artistsText.content = artistsString;

    const userProfileTitle = new paper.PointText(new paper.Point(130, 365));
    userProfileTitle.justification = 'left';
    userProfileTitle.fontSize = 10;
    userProfileTitle.fontWeight = 'bold';
    userProfileTitle.fillColor = new paper.Color('grey');
    userProfileTitle.content = 'User Profile:';

    const userProfileText = new paper.PointText(new paper.Point(130, 380));
    userProfileText.justification = 'left';
    userProfileText.fontSize = 11;
    userProfileText.fontWeight = 'bold';
    userProfileText.fillColor = new paper.Color('black');
    userProfileText.content = userProfileString;

}