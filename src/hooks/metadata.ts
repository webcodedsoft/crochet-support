import { detect } from '../utils/broswer';

export function useMetaData() {
  const getReporterBrowserMeta = () => {
    const browser = detect();
    if (browser) {
      return browser;
    }
    return null;
  };

  const getWebsiteError = () => handleErrorEvent();

  const getBrowerActivities = async () =>
    performance.getEntriesByType('resource');

  const getBrowserViewPort = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    return {
      viewportWidth,
      viewportHeight,
    };
  };

  window.addEventListener('resize', getBrowserViewPort);

  return {
    getReporterBrowserMeta,
    getWebsiteError,
    getBrowserViewPort,
    getBrowerActivities,
  };
}

async function handleErrorEvent(): Promise<void> {
  let errorData: any = null;
  const handleError = (ev: ErrorEvent) => {
    const {
      isTrusted,
      colno,
      lineno,
      timeStamp,
      type,
      message,
      filename,
      error,
      currentTarget,
    } = ev;

    let clientInfo = null;

    if (currentTarget instanceof Window) {
      clientInfo = currentTarget.clientInformation;
    }

    errorData = {
      isTrusted,
      colno,
      lineno,
      timeStamp,
      type,
      message,
      filename,
      error,
      currentTarget,
      clientInfo,
    };
  };

  window.addEventListener('error', handleError);

  await new Promise((resolve) => {
    setTimeout(() => {
      window.removeEventListener('error', handleError);
      resolve(true);
    }, 1000 * 65);
  });

  if (errorData) {
    console.log('An error occurred:', errorData);
  } else {
    console.log('No errors were detected.');
  }
}
