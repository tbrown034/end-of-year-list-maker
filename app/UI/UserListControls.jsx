import {
  ChevronUpIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function UserListControls({ onMoveUp, onMoveDown, onRemove }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onMoveUp}
        className="p-1 text-green-800 transition hover:text-green-950 disabled:text-gray-500"
        disabled={!onMoveUp}
      >
        <ChevronUpIcon className="w-8 h-8 transition hover:scale-110" />
      </button>
      <button
        onClick={onMoveDown}
        className="p-1 text-yellow-700 transition hover:text-yellow-950 disabled:text-gray-500"
        disabled={!onMoveDown}
      >
        <ChevronDownIcon className="w-8 h-8 transition hover:scale-110" />
      </button>
      <button
        onClick={onRemove}
        className="p-1 text-red-800 transition hover:text-red-950"
      >
        <XMarkIcon className="w-8 h-8 transition hover:scale-110" />
      </button>
    </div>
  );
}
