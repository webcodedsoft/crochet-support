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

type SupportEventType =
  | 'load'
  | 'loaderror'
  | 'beforeunload'
  | 'show'
  | 'hide'
  | 'capture'
  | 'feedbackbeforesend'
  | 'feedbacksent'
  | 'feedbackerror'
  | 'feedbackdiscarded';

export type SupportWidgetSdk = {
  show: () => void;
  hide: () => void;
  unload: () => void;

  //   isVisible: () => boolean
  //   capture: (mode: 'fullscreen' | 'advanced') => Promise<void>
  //   cancelCapture: () => void
  //   isExtensionInstalled: () => Promise<boolean>
  //   setReporter: (reporter: SupportReporter) => void
  on: (eventName: SupportEventType, listener: () => void) => void;
};

export type WidgetSdk = {
  initWidget: (params: ConfigProps | ConfigProps) => Promise<SupportWidgetSdk>;
};

export type errorPriorityTypes = 'High' | 'Medium' | 'Low';
export type captureModeTypes = 'fullscreen' | 'advanced';

export type ConfigWidgetParams = {
  showWidget: boolean;
  captureMode: captureModeTypes;
  silentMode: boolean;
  errorPriority: errorPriorityTypes;
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
  publicKey: string;
  project: string;
  env: string;
  config?: ConfigWidgetParams;
};
