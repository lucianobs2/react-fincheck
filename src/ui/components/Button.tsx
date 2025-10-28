import type { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonPros extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonPros) {
  return (
    <button
      {...props}
      className={cn(
        `bg-teal-900 hover:bg-teal-800
        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
        px-6 h-12 rounded-2xl font-medium text-white`,
        className
      )}
    />
  );
}
