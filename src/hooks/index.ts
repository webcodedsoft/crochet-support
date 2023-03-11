export const exportNetworkLog = () => {
  const saveNetworkLog = (data: any, filename = 'network.log') => {
    console.log('🚀 ~ file: index.ts:3 ~ saveNetworkLog ~ data:', data);
    if (!data) {
      console.error('Console.save: No data');
      return;
    }

    if (typeof data === 'object') {
      data = JSON.stringify(data, undefined, 4);
    }
    return data;
    const blob = new Blob([data], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.dataset.downloadurl = [
      'text/plain',
      downloadLink.download,
      downloadLink.href,
    ].join(':');
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    downloadLink.dispatchEvent(clickEvent);
  };

  const exportObj = { saveNetworkLog };
  return exportObj;
};

// export const consoleCopy = () => {
//   const logs = console._commandLineAPI.history();
//   const log = logs[logs.length - 1];
//   const el = document.createElement('textarea');
//   el.value = log;
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
// };

// chrome.experimental.devtools.console.getMessages(function (messages) {
//   console.log('🚀 ~ file: index.ts:57 ~ messages:', messages);
// });
