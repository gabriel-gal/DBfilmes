import ListMovie from "@/components/ListMovie/ListMovie";


export default function Home() {
    return (
        <main className="flex justify-center">
            <ListMovie apiKey={`${process.env.API_KEY}`}/>
        </main>
    );
}
