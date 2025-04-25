import React, { Suspense } from "react";

/**
 * A reusable Suspense wrapper component for consistent loading states.
 * @param {React.ReactNode} children - The dynamic content to be wrapped by Suspense.
 * @param {React.ReactNode} fallback - The loading indicator or fallback content.
 */
const SuspenseWrapper: React.FC<{ children: React.ReactNode; fallback?: React.ReactNode }> = ({
  children,
  fallback = <div>Loading...</div>,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseWrapper;
