import Head from "next/head";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

export default function Home() {
    return (
        <>
            <Head>
                <title>Chiffon</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen p-12 flex w-full">
                <div className="max-w-4xl mx-auto w-full">
                    <Editor />
                </div>
            </main>
        </>
    );
}
