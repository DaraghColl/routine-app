import { FC, Fragment, useContext, useState } from 'react';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { InputItem } from './InputItem';
import { v4 as uuid } from 'uuid';

const AddRoutineItem: FC = () => {
  const { addRoutineItem } = useContext(RoutineItemsStateContext);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    setIsOpen(false);
  };

  const onAddNewItem = () => {
    setIsOpen(true);
  };

  const onSubmit = (data: any) => {
    addRoutineItem({
      id: uuid(),
      title: data.title,
      icon: data.icon,
      subTitle: data.subTitle,
      time: data.time,
      status: 'todo',
    });

    reset();
    closeModal();
  };

  return (
    <div className="mb-4 flex w-full items-center justify-end">
      <button
        className="text-md flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 font-medium text-white focus:outline-none"
        onClick={() => onAddNewItem()}
      >
        <PlusIcon className="mr-2 h-4 w-4 text-white" />
        New Item
      </button>
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
                <Dialog.Panel className="absolute mx-auto h-auto w-11/12 max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-800 dark:text-white">
                  <div className="mb-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <InputItem register={register} name="title" title="Name" />
                        <InputItem register={register} name="icon" title="Icon" />
                        <InputItem register={register} name="subTitle" title="Sub title" />
                        <InputItem register={register} name="time" title="Time" />

                        <button
                          className="text-md mt-2 flex w-full items-center justify-around rounded-md border border-transparent bg-slate-800 px-4 py-2 font-medium text-white focus:outline-none 
                          dark:border-white dark:bg-white dark:text-slate-800"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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

export { AddRoutineItem };
