import React from "react";

interface props {
  children: React.ReactNode;
  type?: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<props> = ({
  children,
  type,
  className,
  primary,
  secondary,
}) => {
  return (
    <button
      type="button"
      className={[
        "button",
        `${className}`,
        `${primary ? "bg-[var(--primary)]" : secondary ? "bg-[var(--secondary)]" : null}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};
