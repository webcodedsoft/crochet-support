import { SupportWidgetSdk } from './../types/index';
import { ConfigProps } from '../types';

declare global {
  interface Window {
    Support: SupportWidgetSdk;
    supportConfig: ConfigProps;
  }
}

export default function useCrochet(
  configs: ConfigProps
): Promise<SupportWidgetSdk> {
  console.log('🚀 ~ file: use-crochet.ts:14 ~ configs:', configs);

  const knownConfig = ['publicKey', 'project'];
  if (!configs) {
    throw new Error('publicKey must be a string');
  }

  Object.keys(configs).forEach((paramName) => {
    if (!knownConfig.includes(paramName)) {
      console.warn(
        '(Crochet SDK) unknown param "' +
          paramName +
          '" Please read the documentation'
      );
    }
  });

  const publicKey = (configs as ConfigProps).publicKey;

  if (typeof publicKey !== 'string') {
    throw new Error('publicKey must be a string');
  }

  // * Widget implementation
  if (window.Support) {
    // Just one Support widget can be loaded at a time
    window.Support.unload();
  }

  window.supportConfig = {
    publicKey,
    project: configs.project,
  };

  const __properties: Array<any> = [];

  // @ts-ignore
  const sdkProperties: SupportWidgetSdk = { __properties };

  for (const methodName of [
    'show',
    'hide',
    'unload',
    // 'isVisible',
    // 'capture',
    // 'cancelCapture',
    // 'reload',
    // 'isExtensionInstalled',
    // 'setReporter',
    // 'setCustomData',
    'on',
    // 'off',
  ]) {
    // @ts-ignore
    sdkProperties[methodName] = function () {
      // eslint-disable-next-line prefer-rest-params
      const t = Array.prototype.slice.call(arguments);
      t.unshift(methodName);
      __properties.push(t as never);
    };
  }

  window.Support = sdkProperties;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://edge.marker.io/latest/shim.js';

  //   const anchorScript = document.getElementsByTagName('script')[0]

  //   if (anchorScript.parentNode) {
  //     anchorScript.parentNode.insertBefore(script, anchorScript)
  //   } else {
  //     (document.body || document.head).appendChild(script)
  //   }

  return new Promise((resolve, reject) => {
    // @ts-ignore
    sdkProperties.on('load', () => {
      console.log('Loaded');
      resolve(window.Support);
    });

    // @ts-ignore
    sdkProperties.on('loaderror', (error) => {
      reject(error);
    });

    script.onerror = (error) => reject(error);
  });
}
