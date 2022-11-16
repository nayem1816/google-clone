import Image from 'next/image';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { BiSearch, BiMicrophone } from 'react-icons/bi';
import { HiOutlineX } from 'react-icons/hi';
import User from './User';

const SearchHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term.trim()}`);
    };
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    onClick={() => router.push('/')}
                    width="120"
                    height="40"
                    className="cursor-pointer"
                    objectFit="contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
                    alt="google"
                />
                <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2.5 ml-10 mr-5 flex-grow max-w-3xl items-center">
                    <input
                        className="w-full focus:outline-none"
                        type="text"
                        defaultValue={router.query.term}
                        ref={searchInputRef}
                    />
                    <HiOutlineX
                        onClick={() => (searchInputRef.current.value = '')}
                        className="h-7 text-gray-500 cursor-pointer sm:mr-3"
                    />
                    <div className="border border-gray-300 h-6 mr-3 hidden sm:inline-flex " />
                    <BiMicrophone className="h6 hidden sm:inline-flex text-blue-500 mr-3" />
                    <BiSearch className="h-6 hidden sm:inline-flex text-blue-500" />
                    <button onClick={search} type="submit" hidden></button>
                </form>
                <User className="ml-auto whitespace-nowrap" />
            </div>
        </header>
    );
};

export default SearchHeader;
