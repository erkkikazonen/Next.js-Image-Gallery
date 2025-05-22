import Gallery from "@/app/components/Gallery";

type Props = {
    params: Promise<{
        myParams: (string | undefined)[]
    }>
}

export async function generateMetadata(props: Props) {
    const params = await props.params;

    const {
        myParams
    } = params;

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return {
        title: `Results for ${topic} - Page ${page}`
    }
}

export default async function SearchResults(props: Props) {
    const params = await props.params;

    const {
        myParams
    } = params;

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return <Gallery topic={topic} page={page} />
}