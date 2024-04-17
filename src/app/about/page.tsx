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
  description: 'Web developer and love to write about web development, programming, and other tech-related stuff',
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
          className="rounded-full self-center"
          src="/images/about/personal.jpg"
          width={300}
          height={300}
          alt="personal"
        />
        <div className="text-justify">
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            Hi, there! I&apos;m
            <b className="font-semibold"> 黃柏鈞 / Bloop (Bojun Huang)</b>, a web developer and I love to write about
            web development, programming, and other tech-related stuff.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            I have been working as a web developer for over 5 years. I have experience in building web applications
            using modern technologies such as React, Next.js, and Typescript. My background includes a significant stint
            in project management within a startup environment, where I led teams to turn ideas into successful
            projects.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            This site is my personal blog, where I share my thoughts and experiences. if you have any questions or
            suggestions, feel free to contact me.
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
        Teaching Experience
      </Heading>
      <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        With over four and a half years of teaching experience, I have served as an external instructor for the
        Workforce Development Agency, MOL, specializing in courses covering website planning, front-end and back-end
        development, as well as marketing strategies. I have taught more than 30 classes, benefiting over 900 students
        in their pursuit of web technology expertise.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </MainContainer>
  );
}
