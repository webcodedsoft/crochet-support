export interface ConfigProps {
  publicKey: string;
  project: string;
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

export type ConfigWidgetParams = {
  showWidget: boolean;
  captureMode: 'fullscreen' | 'advanced';
  silentMode: boolean;
  errorPriority: errorPriorityTypes;
};

export type DrawElementTypes = 'Line' | 'Rectangle' | 'Pencil' | 'Text';
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
  Selection: 'Selection',
  Line: 'Line',
  Rectangle: 'Rectangle',
  Pencil: 'Pencil',
  Text: 'Text',
  Brush: 'Brush',
  Eraser: 'Eraser',
  Circle: 'Circle',
  Arrow: 'Arrow',
  Clear: 'Clear',
};
