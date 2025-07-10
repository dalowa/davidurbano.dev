'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-2xl font-bold text-red-dalowa mb-4">Something went wrong!</h2>
      <p className="text-gray-300 mb-6">
        `We encountered an error while loading this page. ${error.message}`
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-dalowa text-white rounded-lg hover:bg-red-dalowa/80 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
