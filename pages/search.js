import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';

const SearchPage = () => {
    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>
            {/* Search header */}
            <SearchHeader />

            {/* Search Result */}
        </div>
    );
};

export default SearchPage;
