import React, {
  ReactElement,
  Children,
  cloneElement,
  useState,
  Profiler,
} from 'react';
import { user } from '../testing-data/user';
import { ConfigWidgetParams } from '../types';
import {
  manageSilentMode,
  validateConfigKeys,
  validateConfigValues,
} from '../utils';
import Button from './Button';
// import WidgetModal from './WidgetModal';
import html2canvas from 'html2canvas';
import CanvaRenderModal from './CanvaRenderModal';
import { browserName, parseUserAgent } from '../utils/broswer';

type WidgetParams = {
  children: ReactElement;
  publicKey: string;
  config?: ConfigWidgetParams;
};

type ChildProps = {
  text: string;
  children: ReactElement;
};

let numberofMount = 0;
export default function CrochetProvider({
  children,
  publicKey,
  config,
}: WidgetParams): ReactElement {
  const onRender = (id: any, phase: any) => {
    if (id === 'crochet' && phase === 'mount') {
      numberofMount = numberofMount + 1;
    }
    if (numberofMount > 1) {
      if (config) {
        manageSilentMode(
          config.silentMode,
          'widget can only be loaded once. we strongly recommend you to wrap this widget only in your root file',
          config.errorPriority
        );
      }
      manageSilentMode(
        true,
        'widget can only be loaded once. we strongly recommend you to wrap this widget only in your root file',
        'High'
      );
    }
  };

  console.log(
    '🚀 ~ file: CrochetProvider.tsx:24 ~ config:',
    navigator.userAgent
  );
  if (!publicKey) {
    if (config) {
      manageSilentMode(
        config.silentMode,
        'publicKey must be a provided',
        config.errorPriority
      );
    }
    manageSilentMode(true, 'publicKey must be a provided', 'High');
  }

  if (typeof publicKey !== 'string') {
    if (config) {
      manageSilentMode(
        config.silentMode,
        'publicKey must be a string',
        config.errorPriority
      );
    }
    manageSilentMode(true, 'publicKey must be a string', 'High');
  }

  if (config) {
    const knownConfig = ['show', 'captureMode', 'silentMode'];
    validateConfigKeys(
      config,
      knownConfig,
      config.silentMode,
      config.errorPriority
    );
    validateConfigValues(config);
  }

  const [caputuredScreen, setCapturedScreen] = useState<string>('');
  const [showDrawingWidget, setShowDrawingWidget] = useState<boolean>(false);

  const toggleDrawWidget = () =>
    setShowDrawingWidget((prevState) => !prevState);

  const handleScreenshotClick = async () => {
    const componentNode = document.getElementById('crochet-screen');
    const canvas = await html2canvas(componentNode!);
    const imgData = canvas.toDataURL(); //TODO: Need to work on capturing svg
    setCapturedScreen(imgData);
    toggleDrawWidget();
  };

  const feedBackButtonControl = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleScreenshotClick();
  };

  window.onerror = (
    event: Event | string,
    source: string | undefined,
    lineno: number | undefined,
    colno: number | undefined,
    error: Error | undefined
  ) => {
    console.log(
      `Event: ${event}, Source: ${source}, LineNo: ${lineno}, ColNo: ${colno}, Error: ${JSON.stringify(
        error
      )}`
    );
  };

  window.addEventListener('error', (ev: ErrorEvent) => {
    console.log('window.addEventListener', JSON.stringify(ev), 'ev', ev);
  });

  window.addEventListener('load', (ev: Event) => {
    // const browser = detect();
    const browserN = browserName(navigator.userAgent);
    console.log(
      '🚀 ~ file: CrochetProvider.tsx:133 ~ window.addEventListener ~ browserN:',
      browserN
    );
    const parseUserAge = parseUserAgent(navigator.userAgent);
    console.log(
      '🚀 ~ file: CrochetProvider.tsx:133 ~ window.addEventListener ~ browserName:',
      parseUserAge
    );
    // if (browser) {
    //   console.log(
    //     '🚀 ~ file: CrochetProvider.tsx:133 ~ window.addEventListener ~ browser:',
    //     browser
    //   );
    //   console.log(browser.name);
    //   console.log(browser.version);
    //   console.log(browser.os);
    // }
    // console.log('navigator.userAgent', navigator.userAgent);
    // console.log('window.history', window.history);

    console.log(
      '🚀 ~ file: CrochetProvider.tsx:131 ~ window.addEventListener ~ ev:',
      ev
    );
  });

  window.addEventListener('loadeddata', (ev: Event) => {
    console.log(
      '🚀 ~ file: CrochetProvider.tsx:131 ~ window.addEventListener ~ ev:',
      ev
    );
  });

  window.addEventListener('loadedmetadata', (ev: Event) => {
    console.log(
      '🚀 ~ file: CrochetProvider.tsx:131 ~ window.addEventListener ~ ev:',
      ev
    );
  });

  const childrenWithButton = Children.map(children, (child, index) => {
    const childProps = child.props as ChildProps;

    return (
      <Profiler id="crochet" onRender={onRender}>
        <React.Fragment key={index}>
          {cloneElement(child, {
            children: (
              <React.Fragment>
                <div id="crochet-screen">{childProps.children}</div>
                {config?.showWidget && !showDrawingWidget && (
                  <div className="container">
                    <Button
                      style={user.buttonSettings}
                      onClick={feedBackButtonControl}
                    >
                      <div>Report Bug</div>
                    </Button>
                  </div>
                )}
              </React.Fragment>
            ),
          })}
          {showDrawingWidget && (
            <CanvaRenderModal
              image={caputuredScreen}
              closeFeedback={toggleDrawWidget}
            />
          )}
        </React.Fragment>
      </Profiler>
    );
  });

  return <div>{childrenWithButton}</div>;
}

/* Events 

OnForm Sent
OnForm Show
OnCapture
OnFeedbackSent
OnWidgetClose
*/
