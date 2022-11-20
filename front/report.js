chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "1",
    title: "გამოამჟღავნე ჯაშუში",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  baseURL = "google.com";
  var newURL = baseURL + info.selectionText;
  chrome.tabs.create({ url: newURL });
});

chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message == "danger") {
    chrome.action.setBadgeText({ text: "!" });
  } else {
    chrome.action.setBadgeText({ text: "" });
  }
});
