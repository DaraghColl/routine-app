import { createContext, FC, ReactNode, useState } from 'react';
import { RoutineItemInterface } from '../models/RoutineItem';

const RoutineItemsStateContext = createContext<any>(null);

interface RoutineItemsProps {
  children?: ReactNode;
}

const RoutineItemsStateProvider: FC<RoutineItemsProps> = ({ children }) => {
  const [routineItems, setRoutineItems] = useState<RoutineItemInterface[]>([
    {
      id: 0,
      title: 'Go running 🏃‍♂️',
      subTitle: 'Distance: 5km',
      status: 'todo',
    },
    {
      id: 1,
      title: 'Brush Teeth 🪥',
      subTitle: '',
      status: 'todo',
    },
    {
      id: 2,
      title: 'Breakfast 🍳',
      subTitle: 'Toast, Eggs, Coffee',
      status: 'todo',
    },
  ]);

  const [itemToEdit, setItemToEdit] = useState<number | null>(null);

  const [isItemOptionsOpen, setIsItemOptionsOpen] = useState(false);

  const deleteRoutineItem = (id: number) => {
    const itemsArrayCopy = [...routineItems];
    const newRoutineItems = itemsArrayCopy.filter((item) => item.id !== id);
    setRoutineItems(newRoutineItems);
  };
  return (
    <RoutineItemsStateContext.Provider
      value={{
        routineItems,
        setRoutineItems,
        deleteRoutineItem,
        itemToEdit,
        setItemToEdit,
        isItemOptionsOpen,
        setIsItemOptionsOpen,
      }}
    >
      {children}
    </RoutineItemsStateContext.Provider>
  );
};

export { RoutineItemsStateProvider, RoutineItemsStateContext };
