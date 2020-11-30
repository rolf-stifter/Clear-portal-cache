chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.ib, { file: "jquery.min.js" }, function() {
    chrome.tabs.executeScript(tab.ib, { file: "ClearCache.js" });
  });
});