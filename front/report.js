chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "1",
    title: "გამოამჟღავნე ჯაშუში",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  baseURL =
    "chrome-extension://emagmdgbjeimmchcccaahcfbgdkjaolb/dist/report/form.html";
  chrome.tabs.create({ url: baseURL });
});

chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message == "danger") {
    chrome.action.setBadgeText({ text: "!" });
  } else {
    chrome.action.setBadgeText({ text: "" });
  }
});
