import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';

import MdxContent from '@app/blog/[slug]/components/MdxContent';
import ArticleHeader from '@app/blog/[slug]/components/ArticleHeader';
import { getArtistBySlug } from '@lib/blog';

import type { ArticleFrontMatter } from 'types/blog';

interface ArticleProps {
  slug: string;
}

export default async function Article({ slug }: ArticleProps) {
  const { data: frontMatter, content } = await getArtistBySlug(slug);

  const timeReading = readingTime(content);
  const serialized = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
    },
  });

  return (
    <>
      <ArticleHeader frontMatter={frontMatter as ArticleFrontMatter} timeReading={timeReading} />
      <article className="prose md:prose-lg lg:prose-xl prose-sm dark:prose-dark mx-auto max-w-none">
        <MdxContent source={serialized} />
      </article>
    </>
  );
}
