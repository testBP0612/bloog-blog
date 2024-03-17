import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitch from '@components/layout/ThemeSwitch';
import { containerClassName } from '@components/layout/MainContainer';
import headerNavLinks from '@constants/headerNavLinks';

const Header = () => {
  return (
    <header className={`flex items-center justify-between py-10 ${containerClassName}`}>
      <div>
        <Link href="/">
          <span className="flex items-center justify-between">
            <Image src="/images/logo.svg" width={48} height={48} alt="logo" />
          </span>
        </Link>
      </div>
      <div className="flex items-center text-sm sm:text-base leading-5">
        <div className="block mr-4">
          {headerNavLinks.map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="p-2 font-medium text-gray-900 dark:text-gray-100 sm:p-4">{link.title}</span>
              </a>
            ) : (
              <Link key={link.title} href={link.href}>
                <span className="p-2 font-medium text-gray-900 dark:text-gray-100 sm:p-4">{link.title}</span>
              </Link>
            )
          )}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
