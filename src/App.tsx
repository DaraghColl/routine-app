import { Reorder } from 'framer-motion';
import { useContext } from 'react';
import './App.css';
import { RoutineItem } from './components/RoutineItem/RoutineItem';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { RoutineItemInterface } from './models/RoutineItem';
import { RoutineItemsStateContext } from './state/RoutineItemsState';

function App() {
  const [routineItems, setRoutineItems] = useContext(RoutineItemsStateContext);

  return (
    <div className="App h-screen bg-white dark:bg-black">
      <ThemeSwitch />

      <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
        Your Day
      </h1>

      <div className="px-4 py-10">
        <Reorder.Group axis="y" values={routineItems} onReorder={setRoutineItems}>
          {routineItems.map((item: RoutineItemInterface) => {
            return <RoutineItem item={item} key={item.id} />;
          })}
        </Reorder.Group>
      </div>
    </div>
  );
}

export default App;
