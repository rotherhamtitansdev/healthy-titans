export interface ListProps {
title: string;
items: string[];
}
export interface DetailsCardProps {
  name?: string;
  img?: string;
  description?: string;
  list?: ListProps;
  hideTitle?: boolean;
  additionalStyling?: string;
  firebaseName?: string;
}
