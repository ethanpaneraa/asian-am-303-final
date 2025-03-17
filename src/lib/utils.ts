import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath() {
  return process.env.NODE_ENV === "production" ? "/asian-am-303-final" : "";
}

export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === "production" ? "/disc-website" : "";
  return `${basePath}${path}`;
};
