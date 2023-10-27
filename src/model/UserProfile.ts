export type UserProfile = {
    acousticness: number,
    danceability: number,
    duration_ms: number,
    energy: number,
    instrumentalness: number,
    key: number,
    liveness: number,
    loudness: number,
    mode: number,
    speechiness: number,
    tempo: number,
    time_signature: number,
    valence: number
}

export const getDummyUserProfile = (): UserProfile => {
    return {
        "acousticness": 0.00242,
        "danceability": 0.585,
        "duration_ms": 237040,
        "energy": 0.842,
        "instrumentalness": 0.00686,
        "key": 9,
        "liveness": 0.0866,
        "loudness": -5.883,
        "mode": 0,
        "speechiness": 0.0556,
        "tempo": 118.211,
        "time_signature": 4,
        "valence": 0.428
    }
}