import { Suspense } from 'react';

import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
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
      <div className="space-y-2 pb-8 md:space-y-5">
        <Heading level="h1">
          Blog
        </Heading>
        <SearchBar />
      </div>
      <Suspense fallback={<Skeleton count={5} />}>
        <ArticleList search={search} />
      </Suspense>
    </MainContainer>
  );
}
