import Link from 'next/link';
import React from 'react';
import User from './User';

const Header = () => {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <Link href="https://about.google">
                    <p className="hover:underline cursor-pointer">About</p>
                </Link>
                <Link href="https://store.google.com">
                    <p className="hover:underline cursor-pointer">Store</p>
                </Link>
            </div>
            <div className="flex space-x-4 items-center">
                <Link href="https://mail.google.com">
                    <p className="hover:underline cursor-pointer">Gmail</p>
                </Link>
                <Link href="https://image.google.com">
                    <p className="hover:underline cursor-pointer">Images</p>
                </Link>

                <User />
            </div>
        </header>
    );
};

export default Header;
