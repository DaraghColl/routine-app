import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  EllipsisVerticalIcon,
  DocumentCheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: 'Complete',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Edit',
    icon: PencilSquareIcon,
  },
  {
    name: 'Delete',
    icon: TrashIcon,
  },
];

function RoutineItemMenu() {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <EllipsisVerticalIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="w-50 rounded-m absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900">
            {menuItems.map((item) => {
              return (
                <Menu.Item>
                  <button className="group flex w-full items-center rounded-md border-none px-2 py-2 text-sm">
                    <item.icon className="mr-2 h-4 w-4 text-indigo-500" aria-hidden="true" />
                    {item.name}
                  </button>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export { RoutineItemMenu };
