'use client';

type HelpPageProps = {
  onClose: () => void;
};

export default function HelpPage({ onClose }: HelpPageProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black overflow-auto">
      <button
        onClick={onClose}
        className="m-5 px-4 py-2 bg-red-500 rounded"
      >
        Close
      </button>

      <h1 className="text-white text-4xl p-10">
        Help Page
      </h1>
    </div>
  );
}