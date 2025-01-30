// Listen for the extension icon click event
chrome.action.onClicked.addListener((tab) => {
  // Check if the URL matches the allowed patterns
  const allowedUrls = [
    /^https:\/\/platform\.synack\.com\/.*/
  ];

  const urlMatches = allowedUrls.some(pattern => pattern.test(tab.url));

  if (urlMatches) {
    // Inject the content script into the active tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['main.js']
    });
  } else {
    console.log('This extension only works on synack platform.');
  }
});
