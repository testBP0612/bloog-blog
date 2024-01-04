import Image from 'next/image';

import MainContainer from '@components/layout/MainContainer';

export default function Home() {
  return (
    <MainContainer>
      <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to My Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I&apos;m a Frontend Developer with a passion for building user-friendly and accessible web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
