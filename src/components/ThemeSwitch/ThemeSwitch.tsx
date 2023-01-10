import { FC, useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitch: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const isDarkTheme = localStorage.getItem('isDarkTheme');
    if (isDarkTheme) {
      return JSON.parse(isDarkTheme);
    } else {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDark.toString());
    const bodyElement = document.querySelector('body') as HTMLElement;
    isDark ? bodyElement.classList.add('dark') : bodyElement.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex justify-end py-2">
      <button
        className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 shadow-lg"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark && <SunIcon className="h-4 w-4 text-white" />}
        {!isDark && <MoonIcon className="h-4 w-4 text-white" />}
      </button>
    </div>
  );
};

export { ThemeSwitch };
