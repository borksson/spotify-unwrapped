import { useEffect } from "react"
import { GenerateImage } from "../api/ImageGenerator";

export default function ImagePage() {
    useEffect(() => {
        GenerateImage(sessionStorage.getItem("token")!);
    }, []);

    return (
        <canvas id="canvas" height="500" width="500" />
    )
}