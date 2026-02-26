/**
 * Shared utility functions
 * Reusable functions across client and server
 */

/**
 * Format a date string for display
 */
export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

// Add more utility functions as needed
