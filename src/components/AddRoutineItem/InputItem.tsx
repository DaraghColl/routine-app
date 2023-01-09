import { FC } from 'react';

interface InputItemProps {
  register: any;
  name: string;
  title: string;
}

const InputItem: FC<InputItemProps> = ({ register, name, title, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-slate-500 dark:text-slate-400">
        {title}
      </label>
      <input
        className="mb-2 w-full appearance-none rounded border-2 border-slate-100 bg-slate-100 py-2 px-4 leading-tight text-gray-700 focus:outline-none dark:border-slate-700 dark:bg-slate-700
        dark:text-white"
        id="inline-full-name"
        type="text"
        defaultValue=""
        {...register(name)}
      />
    </div>
  );
};

export { InputItem };
