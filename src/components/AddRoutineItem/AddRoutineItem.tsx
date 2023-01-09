import { FC, useContext } from 'react';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';
import { PlusIcon } from '@heroicons/react/24/outline';

const AddRoutineItem: FC = () => {
  const { addRoutineItem } = useContext(RoutineItemsStateContext);

  return (
    <div className="mb-4 flex w-full items-center justify-end">
      <button
        className="text-md flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 font-medium text-white focus:outline-none"
        onClick={() =>
          addRoutineItem({
            id: 4,
            title: 'Add new',
            icon: '🏃‍♂️',
            subTitle: 'Distance: 5km',
            time: '09:00',
            status: 'todo',
          })
        }
      >
        <PlusIcon className="mr-2 h-4 w-4 text-white" />
        New Item
      </button>
    </div>
  );
};

export { AddRoutineItem };
