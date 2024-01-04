import Link from 'next/link';

import MainContainer from '@components/layout/MainContainer';

export default function NotFound() {
  return (
    <MainContainer>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </MainContainer>
  );
}
