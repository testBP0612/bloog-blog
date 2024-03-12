import MainContainer from '@components/layout/MainContainer';
import Heading from '@components/UI/Heading';
import skills from '@constants/skills';

export default async function Page() {
  return (
    <MainContainer>
      <Heading level="h1">About</Heading>
      <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        Hi, there! I&apos;m
        <b className="font-semibold"> 黃柏鈞 / Bojun Huang</b>, a web developer and I love to write about web
        development, programming, and other tech-related stuff.
      </p>
      <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        I have been working as a web developer for over 5 years. I have experience in building web applications using
        modern technologies such as React, Next.js, and Typescript. My background includes a significant stint in
        project management within a startup environment, where I led teams to turn ideas into successful projects.
      </p>
      <p className="mb-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
        This site is my personal blog, where I share my thoughts and experiences. if you have any questions or
        suggestions, feel free to contact me.
      </p>
      <Heading level="h2" className="mt-8">
        Skills
      </Heading>
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <Heading level="h3">{skill.name}</Heading>
            <ul className="max-w-xs text-left font-medium text-lg leading-none dark:border-blue-200 border-blue-400 divide-y dark:divide-blue-200 divide-blue-400">
              {skill.type.map((type) => (
                <li key={type} className="py-1.5 md:py-3 w-full flex items-center text-gray-600 dark:text-gray-300">
                  <span className="ml-5 mr-2.5 w-1 h-7 rounded-r-md bg-blue-500 dark:bg-blue-300" />
                  <p>{type}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MainContainer>
  );
}
