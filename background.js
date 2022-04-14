chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: 'search', 
      title: "在必应词典中搜索",
      contexts: ['selection'],
    })
})

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url = 'https://cn.bing.com/dict/search?q=' + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});
});



