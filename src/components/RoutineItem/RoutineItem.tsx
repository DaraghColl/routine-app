import { Reorder } from 'framer-motion';
import { FC, useContext } from 'react';
import { RoutineItemInterface } from '../../models/RoutineItem';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';

interface RoutineItemProps {
  item: RoutineItemInterface;
}

const RoutineItem: FC<RoutineItemProps> = (props) => {
  const { item } = props;
  const { setItemToEdit, setIsItemOptionsOpen } = useContext(RoutineItemsStateContext);

  const onItemSelect = (itemId: number) => {
    setIsItemOptionsOpen(true);
    setItemToEdit(itemId);
  };

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
        <EllipsisVerticalIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
          onClick={() => onItemSelect(item.id)}
        />
      </div>
    </Reorder.Item>
  );
};

export { RoutineItem };
