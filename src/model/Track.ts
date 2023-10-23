import { Album } from "./Album";
import { Artist } from "./Artist";

export type Track = {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: any;
    external_urls: any;
    href: string;
    id: string;
    is_playable?: boolean;
    linked_from?: any;
    restrictions?: any;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

export const getDummyTrack = (): Track => {
    return {
        album: {
          album_type: "single",
          total_tracks: 1,
          available_markets: [],
          external_urls: {
            spotify: "https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc"
          },
          href: "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
          id: "0tGPJ0bkWOUmH7MEOR77qc",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
              height: 640,
              width: 640
            },
            {
              url: "https://i.scdn.co/image/ab67616d00001e027359994525d219f64872d3b1",
              height: 300,
              width: 300
            },
            {
              url: "https://i.scdn.co/image/ab67616d000048517359994525d219f64872d3b1",
              height: 64,
              width: 64
            }
          ],
          name: "Cut To The Feeling",
          release_date: "2017-05-26",
          release_date_precision: "day",
          type: "album",
          uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
              },
              href: "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
              id: "6sFIWsNpZYqfjUpaCgueju",
              name: "Carly Rae Jepsen",
              type: "artist",
              uri: "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
          ]
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
            },
            href: "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
            id: "6sFIWsNpZYqfjUpaCgueju",
            name: "Carly Rae Jepsen",
            type: "artist",
            uri: "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
          }
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 207959,
        explicit: false,
        external_ids: {
          isrc: "USUM71703861"
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl"
        },
        href: "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
        id: "11dFghVXANMlKmJXsNCbNl",
        name: "Cut To The Feeling",
        popularity: 0,
        preview_url: null,
        track_number: 1,
        type: "track",
        uri: "spotify:track:11dFghVXANMlKmJXsNCbNl",
        is_local: false
      }
}