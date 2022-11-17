import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';
import SearchResults from '../components/SearchResults';
import { useRouter } from 'next/router';
import ImageResult from '../components/ImageResult';

const SearchPage = ({ results }) => {
    const router = useRouter();
    return (
        <div className="mb-5">
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>
            {/* Search header */}
            <SearchHeader />

            {/* Search web and images Results */}
            {router.query.searchType === 'image' ? (
                <ImageResult results={results} />
            ) : (
                <SearchResults results={results} />
            )}
        </div>
    );
};

export default SearchPage;

export async function getServerSideProps(context) {
    const startIndex = context.query.start || '1';
    const mockData = false;
    const data = mockData
        ? Response
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${
                  process.env.API_KEY
              }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
                  context.query.searchType && '&searchType=image'
              }&start=${startIndex}`
          )
              .then((res) => res.json())
              .catch((err) => console.log(err));

    return {
        props: {
            results: data,
        },
    };
}
