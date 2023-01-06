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
      title: 'Go running',
      icon: '🏃‍♂️',
      subTitle: 'Distance: 5km',
      time: '09:00',
      status: 'todo',
    },
    {
      id: 1,
      title: 'Brush teeth ',
      icon: '🪥',
      subTitle: '',
      time: '09:30',
      status: 'todo',
    },
    {
      id: 2,
      title: 'Breakfast',
      icon: '🍳',
      subTitle: 'Toast, Eggs, Coffee',
      time: '10:15',
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

  const seRoutineItemStatus = (status: string, id: number) => {
    const itemsArrayCopy = [...routineItems];
    const itemToChangeStatus = itemsArrayCopy.findIndex((item) => item.id === id);
    itemsArrayCopy[itemToChangeStatus].status = status;
    setRoutineItems(itemsArrayCopy);
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
        seRoutineItemStatus,
      }}
    >
      {children}
    </RoutineItemsStateContext.Provider>
  );
};

export { RoutineItemsStateProvider, RoutineItemsStateContext };
