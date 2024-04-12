import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: React.ReactNode;
}

const levelStyles = {
  h1: 'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-6 md:mb-8',
  h2: 'text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9 md:text-5xl md:leading-12 mb-2 md:mb-4',
  h3: 'text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-10 mb-2 md:mb-4',
  h4: 'text-lg font-semibold leading-6 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-7 md:text-3xl md:leading-9 mb-2 md:mb-4',
  h5: 'text-base font-semibold leading-2 tracking-tight text-gray-900 dark:text-gray-100 md:leading-4 mb-1 md:mb-2',
};

const Heading = ({ level, className = '', children }: HeadingProps) => {
  const Tag = level as keyof JSX.IntrinsicElements;
  const defaultClassName = `${levelStyles[level]} ${className}`;

  return (
    <Tag className={defaultClassName}>{children}</Tag>
  );
};

export default Heading;