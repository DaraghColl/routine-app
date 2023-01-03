import { Reorder } from 'framer-motion';
import { FC } from 'react';
import { RoutineItemInterface } from '../../models/RoutineItem';
import { RoutineItemMenu } from '../RoutineItemMenu/RoutineItemMenu';

interface RoutineItemProps {
  item: RoutineItemInterface;
}

const RoutineItem: FC<RoutineItemProps> = (props) => {
  const { item } = props;

  return (
    <Reorder.Item key={item.id} value={item}>
      <div className="relative mb-4 flex justify-between rounded-lg bg-white px-4 py-4 align-middle text-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:bg-gray-900 dark:text-white">
        <div>
          <div className="absolute left-0 top-0 h-full w-2 rounded-l-md bg-blue-500"></div>
          <h3 className="text-base font-medium tracking-tight text-black dark:text-white">
            {item.title}
          </h3>
          {item.subTitle && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.subTitle}</p>
          )}
        </div>
        <RoutineItemMenu />
      </div>
    </Reorder.Item>
  );
};

export { RoutineItem };
