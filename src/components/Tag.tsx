'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('q');
  const [isActive, setIsActive] = useState(search === text);

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);

    if (!search) {
      if (!isActive) {
        router.push(`/blog?q=${text}`);
      }
      return;
    }

    if (isActive) {
      const newQuery = Array.from(searchParams.entries())
        .filter(([key, value]) => !(key === 'q' && value === text))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      router.push(`/blog${newQuery ? '?' + newQuery : ''}`);
    }
  };

  useEffect(() => {
    setIsActive(search === text);
  }, [search]);

  return (
    <span
      onClick={handleTagClick}
      className={`cursor-pointer mr-3 px-1 py-0.5 text-xs font-medium uppercase ${
        isActive
          ? 'text-primary-500 bg-white dark:text-white dark:bg-primary-500'
          : 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
      } border border-gray-400 rounded`}
    >
      {text.split(' ').join('-')}
    </span>
  );
};

export default Tag;
