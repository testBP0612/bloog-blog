import Image from 'next/image';
import type { Metadata } from 'next';
import type { BreadcrumbList, WithContext } from 'schema-dts';

import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
import skills from '@constants/skills';

export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: '/about',
  },
  description: 'Web 開發人員，喜歡撰寫有關 Web 開發、程式設計和其他技術相關內容的文章。',
};

export default async function Page() {
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
        name: 'About',
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      },
    ],
  };

  return (
    <MainContainer>
      <Heading level="h1">About</Heading>
      <div className="flex gap-8 flex-col xl:flex-row mb-10 md:mb-14">
        <Image
          className="rounded-full"
          src="/images/about/personal.jpg"
          width={300}
          height={300}
          alt="personal"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRuYGAABXRUJQVlA4WAoAAAAgAAAANgMANgMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg+AQAALCUAJ0BKjcDNwM+7Xa4VqmnJSOgCAEwHYlpbuF3YRtACewD32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk4UAA/v9yQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
        />
        <div className="text-justify">
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            Hi, there! I&apos;m
            <b className="font-semibold"> 黃柏鈞 / Bloop (Bojun Huang)</b>,
            是一名前端工程師。平常喜歡寫些關於網頁開發、程式技術與數位工具應用的文章。
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            我從事網頁開發工作已超過六年，擅長使用現代前端技術如 React、Next.js、Vue.js、TypeScript
            來打造網頁。我也曾在新創公司擔任專案經理，帶領團隊將想法實現為具體產品。
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            這個網站是我個人的技術部落格，主要用來分享學習心得與實務經驗。如果你對內容有任何問題或建議，歡迎隨時聯絡我！
          </p>
        </div>
      </div>
      <Heading level="h2" className="mb-2">
        Skills
      </Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10 md:mb-14">
        {skills.map((skill) => (
          <div key={skill.name}>
            <Heading level="h3">{skill.name}</Heading>
            <ul className="max-w-xs text-left font-medium text-lg leading-none dark:border-blue-200 border-blue-400 divide-y dark:divide-blue-200 divide-blue-400">
              {skill.type.map((type) => (
                <li key={type} className="py-1.5 md:py-3 w-full flex items-center text-gray-600 dark:text-gray-300">
                  <span className="ml-5 mr-2.5 w-1 h-7 rounded-r-md bg-blue-logoSize0 dark:bg-blue-300" />
                  <p>{type}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Heading level="h2" className="mb-2">
        教學經歷
      </Heading>
      <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        我有超過四年半的教學經驗，曾擔任
        勞動部勞動力發展署委外課程的外聘講師，教授課程包含網站企劃、前端與後端開發，以及數位行銷策略。 至今已教授超過 30
        個班級，累積學員人數超過 900
        位，協助許多想進入網頁開發領域的學員打下技術基礎。這段經歷不只讓我更擅長傳遞知識，也培養了我清楚表達與同理學習者的能力。
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </MainContainer>
  );
}
