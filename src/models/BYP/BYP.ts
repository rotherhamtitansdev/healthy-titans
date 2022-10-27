import React from "react";

export interface BYPItem {
  id: string;
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
