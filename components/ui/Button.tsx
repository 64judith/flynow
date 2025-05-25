import React from "react";

interface props {
  children: React.ReactNode;
  type?: string;
  className?: string;
  full?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<props> = ({
  children,
  type,
  className,
  full,
  primary,
  secondary,
}) => {
  return (
    <button
      type="button"
      className={[
        `${full?"button__full":"button__inline"}`,
        "button",
        `${
          primary
            ? "bg-[var(--primary)]"
            : secondary
            ? "bg-[var(--secondary)]"
            : null
        }`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};
