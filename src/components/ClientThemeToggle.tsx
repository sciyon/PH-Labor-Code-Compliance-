"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

export function ClientThemeToggle() {
  return <ThemeToggle />;
}
