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
      <button className=" px-4 py-2 text-white" onClick={() => setIsDark(!isDark)}>
        {!isDark && <SunIcon className="h-6 w-6 text-slate-600" />}
        {isDark && <MoonIcon className="h-6 w-6 text-white" />}
      </button>
    </div>
  );
};

export { ThemeSwitch };
