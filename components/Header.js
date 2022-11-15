import React from 'react';
import User from './User';

const Header = () => {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <p className="hover:underline cursor-pointer">About</p>
                <p className="hover:underline cursor-pointer">Store</p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="hover:underline cursor-pointer">Gmail</p>
                <p className="hover:underline cursor-pointer">Images</p>
                <User />
            </div>
        </header>
    );
};

export default Header;
