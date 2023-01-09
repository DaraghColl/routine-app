import { Reorder } from 'framer-motion';
import { Fragment, useContext } from 'react';
import './App.css';
import { AddRoutineItem } from './components/AddRoutineItem/AddRoutineItem';
import { RoutineItem } from './components/RoutineItem/RoutineItem';
import { RoutineItemDialog } from './components/RoutineItemOptions/RoutineItemOptions';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { RoutineItemInterface } from './models/RoutineItem';
import { RoutineItemsStateContext } from './state/RoutineItemsState';

function App() {
  const { routineItems, setRoutineItems } = useContext(RoutineItemsStateContext);

  return (
    <div className="App h-screen bg-slate-50 dark:bg-slate-700">
      <ThemeSwitch />

      <h1 className="text-center text-2xl font-extrabold text-slate-900 dark:text-slate-200 sm:text-3xl">
        Your Day
      </h1>

      <div className="px-4 py-10">
        <AddRoutineItem />
        <Reorder.Group axis="y" values={routineItems} onReorder={setRoutineItems}>
          {routineItems.map((item: RoutineItemInterface) => {
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
