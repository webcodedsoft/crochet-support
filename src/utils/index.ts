import {
  ConfigWidgetParams,
  DrawTools,
  errorPriorityTypes,
  WidgetParams,
} from '../types';

export const manageSilentMode = (
  silentMode: boolean,
  message: string,
  errorPriority: errorPriorityTypes
) => {
  if (!silentMode && errorPriority === 'High') {
    console.error(`(Crochet SDK): ${message}`);
  }
  if (!silentMode && errorPriority === 'Medium') {
    console.warn(`(Crochet SDK): ${message}`);
  }
  if (!silentMode && errorPriority === 'Low') {
    console.log(`(Crochet SDK): ${message}`);
  }
};

export const validateConfigKeys = (
  configs: object,
  knownConfig: string[],
  silentMode: boolean,
  errorPriority: errorPriorityTypes
) => {
  Object.keys(configs).forEach((paramName) => {
    if (!knownConfig.includes(paramName)) {
      manageSilentMode(
        silentMode,
        'unknown param "' + paramName + '" Please read the documentation',
        errorPriority
      );
    }
  });
};

export const validateConfigValues = (config: ConfigWidgetParams) => {
  if ('showWidget' in config && typeof config?.showWidget !== 'boolean') {
    manageSilentMode(
      config?.silentMode,
      'showWidget must be a boolean',
      config?.errorPriority
    );
  }
  if ('silentMode' in config && typeof config?.silentMode !== 'boolean') {
    manageSilentMode(
      config.silentMode,
      'silentMode must be a boolean',
      config?.errorPriority
    );
  }
  if (
    'errorPriority' in config &&
    typeof config?.errorPriority !== 'string' &&
    config?.errorPriority !== 'High' &&
    config?.errorPriority !== 'Medium' &&
    config?.errorPriority !== 'Low'
  ) {
    manageSilentMode(
      config.silentMode,
      'errorPriority can only be High | Medium | Low',
      config?.errorPriority
    );
  }
  if ('recipient' in config && typeof config?.recipient !== 'string') {
    manageSilentMode(
      config.recipient,
      'recipient must be a string',
      config?.errorPriority
    );
  }
};

export const determineCursorType = (tool: string) => {
  if (tool === DrawTools.Hand) {
    return 'pointer';
  } else if (tool === DrawTools.Text) {
    return 'text';
  } else {
    return 'crosshair';
  }
};

export const shouldShowWidget = ({
  config,
}: Partial<WidgetParams>): boolean => {
  if (config?.showWidget) {
    return true;
  } else {
    return false;
  }
};
