  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	  chrome.cookies.getAll({}, function(cookies) {
    	  	console.log(cookies);
		    /*startListening();
		    start = new Date();
		    for (var i in cookies) {
		      cache.add(cookies[i]);
		    }
		    timer.reset();
		    reloadCookieTable();
		    */
		  });

    	//TrackURL(tabs);
      //chrome.tabs.executeScript(
      //    tabs[0].id,
      //    {code: 'document.body.style.backgroundColor = "' + color + '";'});
    	});
  };




function TrackURL(tabs)
{
    $.ajax
    (
        {
            type: "POST",
            url: "http://archive.is/aaaa",
            dataType:"json",
            data: 
            {               
                URL:tabs[0].url,
                Title:tabs[0].title,
            },
            success: function(msg)
            {
                console.log("URL Tracked",tabs[0].url,tabs[0].title);
            },
            error: function(msg)
            {
                console.log("URL Tracked",tabs[0].url,tabs[0].title);
            }//end function
        }
    );//End ajax 

}//end function
