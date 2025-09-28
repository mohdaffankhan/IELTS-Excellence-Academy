import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  padding = "md",
}) => {
  const baseClasses = "bg-white rounded-xl shadow-lg border border-gray-100";
  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
