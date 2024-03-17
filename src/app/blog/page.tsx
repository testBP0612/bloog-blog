import { Suspense } from 'react';
import type { Metadata } from 'next';

import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
import ArticleList from '@app/blog/components/ArticleList';
import Skeleton from '@app/blog/components/Skeleton';
import SearchBar from '@app/blog/components/SearchBar';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Welcome to my blog where I share insights, tips, and in-depth tutorials on web development technologies and best practices. Dive into the world of coding with articles that cater to both beginners and seasoned developers alike.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = typeof searchParams.q === 'string' ? searchParams.q : undefined;

  return (
    <MainContainer>
      <div className="space-y-2 pb-8 md:space-y-5">
        <Heading level="h1">Blog</Heading>
        <SearchBar />
      </div>
      <Suspense fallback={<Skeleton count={5} />}>
        <ArticleList search={search} />
      </Suspense>
    </MainContainer>
  );
}
