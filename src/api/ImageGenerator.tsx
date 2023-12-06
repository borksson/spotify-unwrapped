import paper from 'paper';
import { TimeFrame, getTopArtists, getTopTracks, getUserProfile } from './SpotifyFacade';

export const GenerateImage = async (accessToken: string) => {
    const tracks = await getTopTracks(accessToken, 5, TimeFrame.long_term);
    const artists = await getTopArtists(accessToken, 5, TimeFrame.long_term);
    const userProfile = await getUserProfile(accessToken);

    const tracksNames = tracks.map((track) => track.name);
    const artistsNames = artists.map((artist) => artist.name);

    const tracksString = `Top Tracks on Spotify: \n1.${tracksNames[0]}\n2.${tracksNames[1]}\n3.${tracksNames[2]}\n4.${tracksNames[3]}\n5.${tracksNames[4]}`
    const artistsString = `Top Artists on Spotify: \n1.${artistsNames[0]}\n2.${artistsNames[1]}\n3.${artistsNames[2]}\n4.${artistsNames[3]}\n5.${artistsNames[4]}`
    const userProfileString = `User Profile: \nAcousticness: ${userProfile.acousticness.toFixed(2)}\tDanceability: ${userProfile.danceability.toFixed(2)}\nEnergy: ${userProfile.energy.toFixed(2)}\tInstrumentalness: ${userProfile.instrumentalness.toFixed(2)}\nLiveness: ${userProfile.liveness.toFixed(2)}\tSpeechiness: ${userProfile.speechiness.toFixed(2)}\nValence: ${userProfile.valence.toFixed(2)}`
    const topTrackAlbumArt = tracks[0].album.images[0].url;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    paper.setup(canvas);

    const template = new paper.Raster('/template.png');

    template.position = paper.view.center;
    template.scale(0.25);
    const artist = new paper.Raster(topTrackAlbumArt);
    artist.position = new paper.Point(250, 130);
    artist.scale(0.25);

    const tracksText = new paper.PointText(new paper.Point(130, 270));
    tracksText.justification = 'left';
    tracksText.fontSize = 11;
    tracksText.fontWeight = 'bold';
    tracksText.fillColor = new paper.Color('black');
    tracksText.content = tracksString;

    const artistsText = new paper.PointText(new paper.Point(250, 270));
    artistsText.justification = 'left';
    artistsText.fontSize = 11;
    artistsText.fontWeight = 'bold';
    artistsText.fillColor = new paper.Color('black');
    artistsText.content = artistsString;

    const userProfileText = new paper.PointText(new paper.Point(150, 370));
    userProfileText.justification = 'left';
    userProfileText.fontSize = 11;
    userProfileText.fontWeight = 'bold';
    userProfileText.fillColor = new paper.Color('black');
    userProfileText.content = userProfileString;

}