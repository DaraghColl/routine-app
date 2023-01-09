import { Reorder } from 'framer-motion';
import { FC, useContext, useState } from 'react';
import { RoutineItemInterface } from '../../models/RoutineItem';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';

interface RoutineItemProps {
  item: RoutineItemInterface;
}

const statusColorMap: Record<string, string> = {
  todo: 'bg-slate-400',
  progress: 'bg-blue-400',
  complete: 'bg-emerald-400',
};

const RoutineItem: FC<RoutineItemProps> = (props) => {
  const { item } = props;
  const { setItemToEdit, setIsItemOptionsOpen } = useContext(RoutineItemsStateContext);

  const onItemSelect = (itemId: number) => {
    setIsItemOptionsOpen(true);
    setItemToEdit(itemId);
  };

  return (
    <Reorder.Item key={item.id} value={item} onClick={() => onItemSelect(item.id)}>
      <div className="relative mb-4 flex cursor-pointer items-center justify-between rounded-lg  bg-white px-4 py-4 align-middle tracking-wide ring-0 dark:border-slate-500 dark:bg-slate-800">
        <div className="w-full">
          <div
            className={`absolute left-0 top-0 h-full w-2 rounded-l-md ${
              statusColorMap[item.status]
            }`}
          ></div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-wider text-slate-900 dark:text-slate-50">
              {item.title}
            </h3>
            <span className="text-2xl">{item.icon}</span>
          </div>
          {item.subTitle && (
            <p className="truncate text-sm leading-6 text-slate-500 dark:text-slate-400">
              {item.subTitle}
            </p>
          )}
        </div>
        <span className="mt-2 min-w-[75px] text-center text-slate-500 dark:text-slate-400">
          {item.time}
        </span>
      </div>
    </Reorder.Item>
  );
};

export { RoutineItem };
