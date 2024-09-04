import { Suspense } from 'react';
import type { Metadata } from 'next';
import type { BreadcrumbList, WithContext } from 'schema-dts';

import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
import ArticleList from '@app/blog/components/ArticleList';
import Skeleton from '@app/blog/components/Skeleton';
import SearchBar from '@app/blog/components/SearchBar';

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog',
  },
  description: '這裡分享有關 Web 開發技術和最佳實踐的見解、技巧文章。適合初學者和經驗豐富的開發人員閱讀。',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = typeof searchParams.q === 'string' ? searchParams.q : undefined;

  const breadcrumbList: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <MainContainer>
        <div className="space-y-2 pb-8 md:space-y-5">
          <Heading level="h1">Blog</Heading>
          <SearchBar />
        </div>
        <Suspense fallback={<Skeleton count={5} />}>
          <ArticleList search={search} />
        </Suspense>
      </MainContainer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </>
  );
}
