if (typeof window !== "undefined") {
  if (window.location.protocol === "chrome-extension:") {
    chrome.runtime.sendMessage("neutral");
  } else if (window.location.protocol !== "https:") {
    chrome.runtime.sendMessage("danger");
  } else {
    chrome.runtime.sendMessage("fine");
  }
} else {
  chrome.runtime.sendMessage("fine");
}
