import { Track } from "../model/Track";
import { Artist } from "../model/Artist";

export enum TimeFrame {
    short_term = "short_term",
    medium_term = "medium_term",
    long_term = "long_term"
}

// `getTopTracks(accessToken, limit: 5, timeFrame: short_term) -> Tracks[]`
// Gets a list of users top tracks over a time period. Returns a list of track objects.
export const getTopTracks = async (accessToken: string, limit: number, timeFrame: TimeFrame): Promise<Track[]> => {
    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${timeFrame}`, {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });
    const { items } = await result.json();
    return items as Track[];
}

// `getTopArtists(accessToken, limit: 5, timeFrame: short_term) -> Artist[]`
// Gets a list of users top artists over a time period. Returns a list of artist objects.
export const getTopArtists = async (accessToken: string, limit: number, timeFrame: TimeFrame): Promise<Artist[]> => {
    const result = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${timeFrame}`, {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });
    const { items } = await result.json();
    return items as Artist[];
}