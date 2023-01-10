import { FC, useContext, useEffect, useState } from 'react';
import { FolderArrowDownIcon } from '@heroicons/react/24/solid';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';

const DownloadData: FC = () => {
  const { routineItems } = useContext(RoutineItemsStateContext);
  const [downloadJsonnRef, setDownloadJsonRef] = useState<string>('');

  useEffect(() => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(routineItems),
    )}`;

    setDownloadJsonRef(jsonString);
  }, [routineItems]);

  return (
    <div className="flex justify-end py-2">
      <a
        href={downloadJsonnRef}
        download="routineItems.json"
        className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 shadow-lg"
      >
        <FolderArrowDownIcon className="h-4 w-4 text-white" />
      </a>
    </div>
  );
};

export { DownloadData };
