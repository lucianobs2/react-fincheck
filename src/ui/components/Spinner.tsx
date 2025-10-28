export function Spinner() {
  return (
    <div
      className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-teal-900 rounded-full dark:text-teal-900"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
