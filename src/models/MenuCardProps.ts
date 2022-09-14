export interface MenuCardProps {
  key: number;
  name: string;
  description?: string;
  img?: string;
  path: string;
  externalPath?: boolean;
  disableOnClick?: boolean;
  firebaseName?: string;
  additionalStyling?: string;
}
