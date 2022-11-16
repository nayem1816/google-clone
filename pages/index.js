import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { BiSearch, BiMicrophone } from 'react-icons/bi';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`);
    };

    return (
        <div>
            <Head>
                <title>Google-Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />

            {/* Body */}
            <form className="flex flex-col items-center mt-40">
                <Image
                    width="300"
                    height="100"
                    objectFit="cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
                    alt="google"
                />
                <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-2.5 rounded-full items-center sm:max-w-xl lg:max-w-2xl shadow">
                    <BiSearch className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow focus:outline-none"
                        placeholder="Search Google or type a URL"
                    />
                    <BiMicrophone className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
                    <button
                        onClick={search}
                        className="bg-[#f8f9fa] p-3 rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md"
                    >
                        Google Search
                    </button>
                    <button className="bg-[#f8f9fa] p-3 rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md">
                        I am Feeling Lucky
                    </button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
}
