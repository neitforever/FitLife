import * as React from "react";
import { cn } from "./utils";

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  destructive: "bg-destructive text-white hover:opacity-90",
  outline: "!border-2 !border-gray-800 !bg-white !text-gray-900 hover:!bg-gray-200 hover:!border-black !shadow-md",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  link: "text-primary underline-offset-4 hover:underline",
  gradient: "!bg-gradient-to-r !from-[#FF6B35] !to-[#FF006B] !text-white hover:!from-[#E55A2B] hover:!to-[#E5005A] !shadow-lg !border-0",
  "gradient-outline": "!border-2 !border-white !bg-transparent !text-white hover:!bg-white hover:!text-gray-900 hover:!border-white",
  "gradient-card": "!bg-gradient-to-r !from-[#FF6B35] !to-[#FF006B] !text-white hover:!opacity-90 !shadow-md !border-0",
  "accent": "!bg-[#FF6B35] !text-white hover:!bg-[#E55A2B] !border-0 !shadow-md",
};

const buttonSizes = {
  default: "h-10 px-4 py-2 min-h-[40px]",
  sm: "h-9 px-3 min-h-[36px]",
  lg: "h-12 px-6 min-h-[48px]",
  icon: "h-10 w-10 min-h-[40px] min-w-[40px]",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const isGradient = variant === 'gradient' || variant === 'gradient-card' || variant === 'gradient-outline' || variant === 'accent';

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          buttonVariants[variant],
          buttonSizes[size],
          // Абсолютная защита от наследования стилей для градиентных кнопок
          isGradient && variant !== 'gradient-outline' && "!text-white !border-0 !shadow-lg",
          variant === 'gradient' && "!bg-gradient-to-r !from-[#FF6B35] !to-[#FF006B]",
          variant === 'gradient-card' && "!bg-gradient-to-r !from-[#FF6B35] !to-[#FF006B]",
          variant === 'accent' && "!bg-[#FF6B35]",
          variant === 'gradient-outline' && "!bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-gray-900",
          // Дополнительная защита для всех кнопок
          "!relative !z-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
