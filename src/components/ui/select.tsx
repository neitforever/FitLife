import * as React from "react";
import { cn } from "./utils";

export interface SelectProps<T = string> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  onValueChange?: (value: T) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps<any>>(
  ({ className, children, onValueChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onValueChange?.(e.target.value as any);
      onChange?.(e);
    };

    return (
      <select
        ref={ref}
        className={cn(
          "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onChange={handleChange}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <option value={value}>{children}</option>
);
const SelectTrigger = Select;

export { Select, SelectContent, SelectItem, SelectTrigger };
