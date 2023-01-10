import { Fragment, useContext, useState, FC, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  PlayIcon,
  DocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';

const RoutineItemDialog = () => {
  const {
    deleteRoutineItem,
    setRoutineItemStatus,
    itemToEdit,
    isItemOptionsOpen,
    setIsItemOptionsOpen,
  } = useContext(RoutineItemsStateContext);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setIsItemOptionsOpen(false);
  };

  const routineItemMenuAction = (action: string, itemId?: number) => {
    switch (action) {
      case 'delete':
        deleteRoutineItem(itemId);
        break;
      case 'progress':
        setRoutineItemStatus('progress', itemId);
        break;
      case 'complete':
        setRoutineItemStatus('complete', itemId);
        break;
    }
    closeModal();
  };

  useEffect(() => {
    setIsOpen(isItemOptionsOpen);
  }, [isItemOptionsOpen]);

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="absolute bottom-0 mx-auto h-auto w-11/12 max-w-md transform overflow-hidden rounded-t-lg rounded-b-none bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-800 dark:text-white">
                  <div className="flex flex-col">
                    <button
                      className="text-md mt-2 flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                      onClick={() => routineItemMenuAction('progress', itemToEdit)}
                    >
                      <PlayIcon className="mr-2 h-4 w-4 text-blue-500" />
                      Mark as in progress
                    </button>

                    <button
                      className="text-md mt-2 flex items-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none"
                      onClick={() => routineItemMenuAction('complete', itemToEdit)}
                    >
                      <DocumentCheckIcon className="mr-2 h-4 w-4 text-emerald-500" />
                      Mark as complete
                    </button>

                    <button
                      className="text-md mt-2 flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 font-medium text-red-900 hover:bg-red-200 focus:outline-none"
                      onClick={() => routineItemMenuAction('delete', itemToEdit)}
                    >
                      <TrashIcon className="mr-2 h-4 w-4 text-red-500" />
                      Delete item
                    </button>

                    <button className="text-md mt-2 flex items-center rounded-md border border-transparent bg-slate-100 px-4 py-2 font-medium text-slate-900 hover:bg-slate-200">
                      <PencilSquareIcon className="mr-2 h-4 w-4 text-slate-500 focus:outline-none" />
                      Edit Item
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export { RoutineItemDialog };
