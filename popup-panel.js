document.getElementById('open-panel').addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('panel.html') });
});