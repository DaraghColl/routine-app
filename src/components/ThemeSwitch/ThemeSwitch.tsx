import { FC, useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitch: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const bodyElement = document.querySelector('body') as HTMLElement;
    isDark ? bodyElement.classList.add('dark') : bodyElement.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex justify-end py-2 px-4">
      <button
        className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark && <SunIcon className="h-4 w-4 text-white" />}
        {!isDark && <MoonIcon className="h-4 w-4 text-white" />}
      </button>
    </div>
  );
};

export { ThemeSwitch };
