import React from "react";
import Head from "next/head";

export default function Home() {
    const ref = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    });

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
                    <div
                        ref={ref}
                        className="h-full max-w-2xl focus:outline-none text-base"
                        contentEditable
                    ></div>
                </div>
            </main>
        </>
    );
}
