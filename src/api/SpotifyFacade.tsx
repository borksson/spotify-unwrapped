// `getTopTracks(accessToken, limit: 5, timeFrame: short_term) -> Tracks[]`
// Gets a list of users top tracks over a time period. Returns a list of track objects.

import { Track } from "../model/Track";

export enum TimeFrame {
    short_term = "short_term",
    medium_term = "medium_term",
    long_term = "long_term"
}

export const getTopTracks = async (accessToken: string, limit: number, timeFrame: TimeFrame): Promise<Track[]> => {
    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${timeFrame}`, {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });
    const { items } = await result.json();
    return items as Track[];
}