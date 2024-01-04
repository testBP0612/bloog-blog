import { Suspense } from 'react';

import MainContainer from '@components/layout/MainContainer';
import ArticleList from '@app/blog/components/ArticleList';
import Skeleton from '@app/blog/components/Skeleton';
import SearchBar from '@app/blog/components/SearchBar';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = typeof searchParams.q === 'string' ? searchParams.q : undefined;

  return (
    <MainContainer>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        <SearchBar />
      </div>
      <Suspense fallback={<Skeleton count={5} />}>
        <ArticleList search={search} />
      </Suspense>
    </MainContainer>
  );
}
