import { Reorder } from 'framer-motion';
import { Fragment, useContext } from 'react';
import './App.css';
import { AddRoutineItem } from './components/AddRoutineItem/AddRoutineItem';
import { DownloadData } from './components/DownloadData/DownloadData';
import { RoutineItem } from './components/RoutineItem/RoutineItem';
import { RoutineItemDialog } from './components/RoutineItemOptions/RoutineItemOptions';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { UploadData } from './components/UploadData/UploadData';
import { RoutineItemInterface } from './models/RoutineItem';
import { RoutineItemsStateContext } from './state/RoutineItemsState';

function App() {
  const { routineItems, setRoutineItems } = useContext(RoutineItemsStateContext);

  return (
    <div className="App h-screen bg-slate-50 dark:bg-slate-700">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-center text-lg font-extrabold text-slate-900 dark:text-slate-200">
            YOUR DAY
          </h1>

          <div className="flex gap-2">
            <DownloadData />
            <UploadData />
            <ThemeSwitch />
          </div>
        </div>

        <div className="px-4 py-10">
          <AddRoutineItem />
          <Reorder.Group axis="y" values={routineItems} onReorder={setRoutineItems}>
            <h3>Morning</h3>
            {routineItems
              .filter((routineItem: RoutineItemInterface) => routineItem.daySection === 'morning')
              .map((item: RoutineItemInterface) => {
                return (
                  <Fragment key={item.id}>
                    <RoutineItem item={item} />
                  </Fragment>
                );
              })}

            <h3>Afternoon</h3>
            {routineItems
              .filter((routineItem: RoutineItemInterface) => routineItem.daySection === 'afternoon')
              .map((item: RoutineItemInterface) => {
                return (
                  <Fragment key={item.id}>
                    <RoutineItem item={item} />
                  </Fragment>
                );
              })}

            <h3>Evening</h3>
            {routineItems
              .filter((routineItem: RoutineItemInterface) => routineItem.daySection === 'evening')
              .map((item: RoutineItemInterface) => {
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
    </div>
  );
}

export default App;
