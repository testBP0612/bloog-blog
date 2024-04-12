import MainContainer from '@components/layout/MainContainer';
import type { Metadata } from 'next';

import Article from '@app/blog/[slug]/components/Article';
import { getArtistBySlug } from '@lib/blog';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const { data: frontMatter } = await getArtistBySlug(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      url: `https://www.testbp.xyz/blog/${slug}`,
      images: [frontMatter.thumbnailUrl],
      type: 'article',
    },
    keywords: frontMatter.tags,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <MainContainer>
      <Article slug={slug} />
    </MainContainer>
  );
}
