  chrome.runtime.onInstalled.addListener(function() {
    //chrome.storage.sync.set({color: '#3aa757'}, function() {
      //console.log("The color is green.");
    //});
/*
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
*/
  });

chrome.browserAction.onClicked.addListener(function(tab) {
  //var manager_url = chrome.extension.getURL("manager.html");
  //focusOrCreateTab(manager_url);
  chrome.cookies.getAll({}, function(cookies) {
  	console.log(123,"aaaaa",cookies);  	
  });

  alert(123);
});
