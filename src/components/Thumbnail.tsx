import Link from 'next/link';
import Image from 'next/image';

type ThumbnailProps = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail = ({ title, src, slug }: ThumbnailProps) => {
  const image = <Image height={720} width={1280} src={src} alt={`Thumbnail cover image ${title}`} />;

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
