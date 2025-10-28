import { cn } from '../../app/utils/cn';

interface SpinnerProps {
  classname?: string;
}

export function Spinner({ classname }: SpinnerProps) {
  return (
    <div
      className={cn(
        `animate-spin inline-block size-6
      border-3 border-current border-t-transparent
      text-gray-300 rounded-full
      dark:text-teal-900`,
        classname
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
