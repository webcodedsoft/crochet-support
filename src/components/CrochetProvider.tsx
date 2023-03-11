import React, {
  ReactElement,
  Children,
  cloneElement,
  useState,
  Profiler,
} from 'react';
import { user } from '../testing-data/user';
import { WidgetParams } from '../types';
import {
  manageSilentMode,
  shouldShowWidget,
  validateConfigKeys,
  validateConfigValues,
} from '../utils';
import Button from './Button';
import html2canvas from 'html2canvas';
import CanvaRenderModal from './CanvaRenderModal';
// import { useMetaData } from '../hooks/metadata';
// import { exportNetworkLog } from '../hooks';

type ChildProps = {
  text: string;
  children: ReactElement;
};

let numberofMount = 0;
export default function CrochetProvider({
  children,
  publicKey,
  project,
  env,
  config,
}: WidgetParams): ReactElement {
  // const { getBrowerActivities, getBrowserViewPort } = useMetaData();

  //TODO: Convert this to hooks

  //Forbid multiple initialization
  const onRender = (id: any, phase: any) => {
    if (id === 'crochet' && phase === 'mount') {
      numberofMount = numberofMount + 1;
    }
    if (numberofMount > 1) {
      if (config) {
        manageSilentMode(
          config.silentMode,
          'widget can only be loaded once. its strongly recommend you to wrap this widget only in your root file',
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

  //Check if publicKey is missing
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

  //Check if project is missing
  if (!project) {
    if (config) {
      manageSilentMode(
        config.silentMode,
        'project name must be a provided',
        config.errorPriority
      );
    }
    manageSilentMode(true, 'project name must be a provided', 'High');
  }

  //Check if env is missing
  if (!env) {
    if (config) {
      manageSilentMode(
        config.silentMode,
        'environment must be a provided',
        config.errorPriority
      );
    }
    manageSilentMode(true, 'environment must be a provided', 'High');
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
    const knownConfig = [
      'showWidget',
      'captureMode',
      'silentMode',
      'errorPriority',
    ];
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

  // useEffect(() => {
  //   const logEntries = performance.getEntriesByType('resource');
  //   const viewport = getBrowserViewPort();
  //   const data = exportNetworkLog().saveNetworkLog(logEntries);

  //   const fetg = async () => {
  //     const data = await getBrowerActivities();
  //     console.log('🚀 ~ file: CrochetProvider.tsx:160 ~ fetg ~ data:', data);
  //   };
  //   fetg();
  // }, [getBrowerActivities, getBrowserViewPort]);

  const childrenWithButton = Children.map(children, (child, index) => {
    const childProps = child.props as ChildProps;

    return (
      <Profiler id="crochet_profiler_id" onRender={onRender}>
        <React.Fragment key={index}>
          {cloneElement(child, {
            children: (
              <React.Fragment>
                <div id="crochet-screen">{childProps.children}</div>
                {shouldShowWidget({
                  publicKey,
                  project,
                  env,
                  config,
                }) &&
                  !showDrawingWidget && (
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
/*
Configuration 

Environment
*/
/* Events 

OnForm Sent
OnForm Show
OnCapture
OnFeedbackSent
OnWidgetClose
*/
