import MainContainer from '@components/layout/MainContainer';
import type { Metadata } from 'next';
import type { Article as ArticleLd, BreadcrumbList, WithContext } from 'schema-dts';
import readingTime from 'reading-time';

import Article from '@app/blog/[slug]/components/Article';
import { getArticleBySlug } from '@lib/blog';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const { data: frontMatter } = await getArticleBySlug(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      images: [frontMatter.thumbnailUrl],
      type: 'article',
      siteName: 'Bloop\'s Site',
    },
    keywords: frontMatter.tags,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { data: frontMatter, content } = await getArticleBySlug(slug);

  const timeReading = readingTime(content);

  const articleJsonLd: WithContext<ArticleLd> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontMatter.title,
    image: frontMatter.thumbnailUrl,
    datePublished: new Date(frontMatter.date).toISOString(),
    dateModified: frontMatter.lastModified,
    timeRequired: `PT${timeReading.minutes}M`,
    author: {
      '@type': 'Person',
      name: 'Bloop',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
  };

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
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: frontMatter.title,
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <MainContainer>
      <Article slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </MainContainer>
  );
}
