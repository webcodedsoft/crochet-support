import { detect } from '../utils/broswer';

export function useMetaData() {
  const getReporterBrowserMeta = () => {
    const browser = detect();
    if (browser) {
      return browser;
    }
    return null;
  };

  const getWebsiteError = () => {
    return handleErrorEvent();
  };

  const getBrowerActivities = async () => {
    const data = await observePerformanceMetrics('resource');
    console.log(
      '🚀 ~ file: metadata.ts:18 ~ getBrowerActivities ~ data:',
      data
    );

    return data;
  };

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
    getBrowerActivities,
    getBrowserViewPort,
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
    console.log('An error occurredss:', errorData);
  } else {
    console.log('No errors were detected.');
  }
}

// const observePerformanceMetrics = (): Promise<PerformanceEntry[]> => {
//   return new Promise((resolve) => {
//     const entries: PerformanceEntry[] = [];
//     const observer = new PerformanceObserver((list) => {
//       const newEntries = list.getEntries();
//       console.log('New entries:', newEntries);
//       entries.push(...newEntries);
//     });

//     observer.observe({ entryTypes: ['resource', 'navigation', 'measure'] });

//     // Clean up function
//     return () => {
//       console.log('Disconnecting observer...');
//       observer.disconnect();
//       console.log('Resolved with entries:', entries);
//       resolve(entries);
//     };
//   });
// };

// const observePerformanceMetrics = () => {
//   const entries: PerformanceEntry[] = [];

//   return new Promise((resolve) => {
//     const observer = new PerformanceObserver((list) => {
//       list.getEntries().map((entry: PerformanceEntry) => {
//         entries.push(entry.toJSON());
//         resolve(entries);
//       });
//     });

//     observer.observe({ entryTypes: ['resource', 'navigation', 'measure'] });
//     // Clean up function
//     return () => {
//       observer.disconnect();
//     };
//   });
// };
function observePerformanceMetrics(
  entryType: string
): Promise<PerformanceEntryList> {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntriesByType(entryType);
      console.log('Resource timing entries:', entries);
      return resolve(entries);
    });

    observer.observe({ entryTypes: [entryType] });
  });

  //   return new Promise((resolve) => {
  //     const observer = new PerformanceObserver((list) => {
  //       resolve(list.getEntriesByType(entryType));
  //     });

  //     observer.observe({ entryTypes: [entryType] });
  //   });
}
// const entries = performance.getEntriesByType('navigation');
// entries.forEach((entry) => entry);
