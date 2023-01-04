import { Reorder } from 'framer-motion';
import { Fragment, useContext } from 'react';
import './App.css';
import { RoutineItem } from './components/RoutineItem/RoutineItem';
import { RoutineItemDialog } from './components/RoutineItemDialog/RoutineItemDialog';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { RoutineItemInterface } from './models/RoutineItem';
import { RoutineItemsStateContext } from './state/RoutineItemsState';

function App() {
  const { routineItems, setRoutineItems } = useContext(RoutineItemsStateContext);
  const todoItems = routineItems.filter((item: any) => item.status === 'todo');
  const inProgressItems = routineItems.filter((item: any) => item.status === 'progress');
  const completeItems = routineItems.filter((item: any) => item.status === 'complete');

  return (
    <div className="App h-screen bg-slate-100 dark:bg-black">
      <ThemeSwitch />

      <h1 className="text-center text-2xl font-extrabold text-slate-900 dark:text-slate-200 sm:text-3xl">
        Your Day
      </h1>

      <div className="px-4 py-10">
        <Reorder.Group axis="y" values={routineItems} onReorder={setRoutineItems}>
          <h2 className="text-md mb-2 mt-2 font-bold dark:text-white">In Progress</h2>
          {inProgressItems.map((item: RoutineItemInterface) => {
            return (
              <Fragment key={item.id}>
                <RoutineItem item={item} />
              </Fragment>
            );
          })}
          <h2 className="text-md mb-2 mt-2 font-bold dark:text-white">Todo</h2>
          {todoItems.map((item: RoutineItemInterface) => {
            return (
              <Fragment key={item.id}>
                <RoutineItem item={item} />
              </Fragment>
            );
          })}
          <h2 className="text-md mb-2 mt-2 font-bold dark:text-white">Complete</h2>
          {completeItems.map((item: RoutineItemInterface) => {
            return (
              <Fragment key={item.id}>
                <RoutineItem item={item} />
              </Fragment>
            );
          })}
        </Reorder.Group>
      </div>
      <RoutineItemDialog />
    </div>
  );
}

export default App;
