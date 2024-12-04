import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddToListButton() {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 text-blue-600 transition bg-gray-100 rounded-full hover:text-blue-800 hover:bg-gray-200"
      title="Add to List"
    >
      <PlusIcon className="w-5 h-5" />
    </button>
  );
}
