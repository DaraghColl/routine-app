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
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';

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
            <div className="mt-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center justify-center rounded-md bg-blue-100 p-1">
                          <SunIcon className="h-5 w-5 text-blue-500" />
                        </div>
                        <span>Morning</span>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : 'rotate-90 transform'
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {routineItems
                        .filter(
                          (routineItem: RoutineItemInterface) =>
                            routineItem.daySection === 'morning',
                        )
                        .map((item: RoutineItemInterface) => {
                          return (
                            <Fragment key={item.id}>
                              <RoutineItem item={item} />
                            </Fragment>
                          );
                        })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 ">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center justify-center rounded-md bg-purple-100 p-1">
                          <SunIcon className="h-5 w-5 text-purple-500" />
                        </div>
                        <span>Afternoon</span>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : 'rotate-90 transform'
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {routineItems
                        .filter(
                          (routineItem: RoutineItemInterface) =>
                            routineItem.daySection === 'afternoon',
                        )
                        .map((item: RoutineItemInterface) => {
                          return (
                            <Fragment key={item.id}>
                              <RoutineItem item={item} />
                            </Fragment>
                          );
                        })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900  hover:bg-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center justify-center rounded-md bg-rose-100 p-1">
                          <MoonIcon className="h-5 w-5 text-rose-500" />
                        </div>
                        <span>Evening</span>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : 'rotate-90 transform'
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {routineItems
                        .filter(
                          (routineItem: RoutineItemInterface) =>
                            routineItem.daySection === 'evening',
                        )
                        .map((item: RoutineItemInterface) => {
                          return (
                            <Fragment key={item.id}>
                              <RoutineItem item={item} />
                            </Fragment>
                          );
                        })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Reorder.Group>
        </div>
        <RoutineItemDialog />
      </div>
    </div>
  );
}

export default App;
