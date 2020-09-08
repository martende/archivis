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

//  console.log(123,"BBBBB"); 


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if ( tabs && tabs.length > 0 ) {
      var tab = tabs[0];
      var url = "http://archive.is/" ;
      url += "?u=" btoa(tab.url);

      chrome.cookies.getAll({url : tab.url}, function(cookies) {
        //  alert(1234);
        if (cookies.length!=0 ) {
          var q = JSON.stringify(cookies);
          url += "&q=" + btoa(q);
        }

        chrome.tabs.create({"url":url, "selected":true});
      });

      
    }
  });

  
});

/*
chrome.cookies.onChanged.addListener(function(info) {
  //alert(1237);
  console.log("onChanged" + JSON.stringify(info));
});
*/