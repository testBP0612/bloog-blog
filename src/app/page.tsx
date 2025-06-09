import Link from 'next/link';
import Image from 'next/image';

import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
import SimpleArticleList from '@app/components/SimpleArticleList';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 py-8 md:py-12 px-5 md:px-0 mb-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2">
            <div className="w-52 sm:w-64 md:w-full md:max-w-sm xl:max-w-md mb-10 md:mb-20">
              <div className="text-3xl font-bold tracking-tighter text-left sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                Hi, I&apos;m&nbsp;
                <span className="text-primary-600">Bojun</span>
              </div>
              <div className="text-3xl font-bold tracking-tighter text-right sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-primary-600">
                Huang
                <span className="text-gray-700 dark:text-gray-100">.</span>
              </div>
            </div>
            <p className="mx-auto max-w-lg text-gray-500 md:text-xl dark:text-gray-400">
              一位熱衷於打造 友善操作且具備無障礙設計 的網頁應用程式的前端工程師。
            </p>
            <p className="mx-auto max-w-lg text-gray-500 md:text-xl dark:text-gray-400">
              有四年的教學經驗，專注於網頁技術領域，這段經歷讓我在打造易用介面與理解使用者需求上更加深刻，並能以更清晰的方式傳達技術概念。
            </p>
          </div>
        </div>
        <Image
          src="/images/photo.svg"
          width={600}
          height={600}
          alt="photo"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRuYGAABXRUJQVlA4WAoAAAAgAAAANgMANgMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg+AQAALCUAJ0BKjcDNwM+7Xa4VqmnJSOgCAEwHYlpbuF3YRtACewD32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk4UAA/v9yQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
        />
      </div>
      <MainContainer>
        <section className="w-full bg-cover bg-center">
          <Heading level="h2" className="text-center">
            Latest Articles
          </Heading>
          <SimpleArticleList />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700"
            >
              Read more
            </Link>
          </div>
        </section>
      </MainContainer>
    </>
  );
}
