import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(url: string):
Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })
        if (!res.ok) throw new Error("Fetch Images error!\n")

        const ImagesResults: ImagesResults = await res.json()

        // console.log(ImagesResults)

        // Parse data with zod schema
        const parsedData = ImagesSchemaWithPhotos.parse
        (ImagesResults)

        if (parsedData.total_results === 0) return undefined

        return parsedData
    } catch (e) {
            // Will show in terminal console
            if (e instanceof Error) console.log(e.stack)
    }
}