import { ConfigWidgetParams, errorPriorityTypes } from '../types';

export const manageSilentMode = (
  silentMode: boolean,
  message: string,
  errorPriority: errorPriorityTypes
) => {
  if (!silentMode && errorPriority === 'High') {
    throw new Error(`(Crochet SDK): ${message}`);
  }
  if (!silentMode && errorPriority === 'Medium') {
    console.error(`(Crochet SDK): ${message}`);
  }
  if (!silentMode && errorPriority === 'Low') {
    console.warn(`(Crochet SDK): ${message}`);
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
      console.warn(
        '(Crochet SDK) unknown param "' +
          paramName +
          '" Please read the documentation'
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
    'captureMode' in config &&
    typeof config?.captureMode !== 'string' &&
    config?.captureMode !== 'fullscreen' &&
    config?.captureMode !== 'advanced'
  ) {
    manageSilentMode(
      config.silentMode,
      'captureMode must be fullscreen or advanced',
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
};
