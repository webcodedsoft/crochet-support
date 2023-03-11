import { ReactElement } from 'react';

export interface ConfigProps {
  publicKey: string;
  project: string;
  env: string;
}

export type SupportReporter = {
  email: string;
  fullName: string;
  metaData?: any;
};

export type errorPriorityTypes = 'High' | 'Medium' | 'Low';

export type ConfigWidgetParams = {
  showWidget: boolean;
  silentMode: boolean;
  errorPriority: errorPriorityTypes;
  recipient: string;
};

export type DrawToolEnum =
  | 'Selection'
  | 'Line'
  | 'Rectangle'
  | 'Pencil'
  | 'Text'
  | 'Brush'
  | 'Eraser'
  | 'Circle';

export type DrawActionEnum =
  | 'None'
  | 'Writing'
  | 'Drawing'
  | 'Moving'
  | 'Resizing';

export type Position = {
  prevMouseX: number;
  prevMouseY: number;
  snapshot: any;
};

export const DrawTools = {
  Hand: 'Hand',
  Line: 'Line',
  Rectangle: 'Rectangle',
  Pencil: 'Pencil',
  Text: 'Text',
  Brush: 'Brush',
  Eraser: 'Eraser',
  Circle: 'Circle',
  Arrow: 'Arrow',
  Clear: 'Clear',
  Download: 'Download',
};

export interface ErrorEventData {
  isTrusted: boolean;
  colno: number;
  lineno: number;
  timeStamp: number;
  type: string;
  message: string;
  filename: string;
  error: Error | null;
  clientInfo: Navigator | null;
}

export type WidgetParams = {
  children: ReactElement;
  config?: ConfigWidgetParams;
};
