'use client';

import { useState, useEffect } from 'react';

import useDebounce from '@hooks/useDebounce';
import useSetParamAndPush from '@hooks/useSetParamAndPush';

export default function SearchBar() {
  const setAndPush = useSetParamAndPush();

  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue, 100);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setAndPush('q', debouncedSearchValue);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q');

    if (qParam) {
      setSearchValue(qParam);
      setAndPush('q', qParam);
    }
  }, []);

  return (
    <div className="relative max-w-lg">
      <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="搜尋文章"
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
