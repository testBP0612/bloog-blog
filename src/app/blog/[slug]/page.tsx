import MainContainer from '@components/layout/MainContainer';

import Article from '@app/blog/[slug]/components/Article';

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <MainContainer>
      <Article slug={slug} />
    </MainContainer>
  );
}
