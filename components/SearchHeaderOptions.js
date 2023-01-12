import React from 'react';
import { useRouter } from 'next/router';
import SearchHeaderOption from './SearchHeaderOption';
import { BiSearch } from 'react-icons/bi';
import { HiPhotograph } from 'react-icons/hi';

const SearchHeaderOptions = () => {
    const router = useRouter();
    return (
        <div className="flex space-x-8 select-none w-full mx-auto justify-center text-sm text-gray-700 md:pl-52 md:justify-start border-b">
            <SearchHeaderOption
                title="All"
                Icon={BiSearch}
                selected={
                    router.query.searchType === '' || !router.query.searchType
                }
            />
            <SearchHeaderOption
                title="Images"
                Icon={HiPhotograph}
                selected={router.query.searchType === 'image'}
            />
        </div>
    );
};

export default SearchHeaderOptions;
