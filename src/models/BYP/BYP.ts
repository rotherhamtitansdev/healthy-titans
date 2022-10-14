import React from "react";

export interface BYPItem {
  key: string;
  name: string;
  icon: React.ReactNode;
  family: string;
  selected: boolean;
  score: number;
}

export interface BYPTableRowFamily {
  family: string;
  items: BYPItem[];
}
