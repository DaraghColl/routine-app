import { FC, useContext, useRef } from 'react';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';
import { RoutineItemsStateContext } from '../../state/RoutineItemsState';

function parseJsonFile(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => resolve(JSON.parse(event.target.result));
    fileReader.readAsText(file);
  });
}

const UploadData: FC = () => {
  const { routineItems, setRoutineItems } = useContext(RoutineItemsStateContext);
  const inputFile = useRef<HTMLInputElement>(null);

  const uploadDataButtonClick = () => {
    if (inputFile.current) inputFile.current.click();
  };

  const fileUploaded = async (file: File) => {
    const fileData = await parseJsonFile(file);
    setRoutineItems(fileData);
  };

  return (
    <div className="flex justify-end py-2">
      <input
        type="file"
        accept="*.json"
        ref={inputFile}
        style={{ display: 'none' }}
        onChange={async (e: any) => fileUploaded(e.target.files[0])}
      />
      <button
        className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 shadow-lg"
        onClick={uploadDataButtonClick}
      >
        <ArrowUpOnSquareIcon className="h-4 w-4 text-white" />
      </button>
    </div>
  );
};

export { UploadData };
