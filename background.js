chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({sponsor: true, e_verify: true}, function() {
      console.log('Job Extension is on');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'www.indeed.com/jobs?'},
            // , schemes: ['https']
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
            }]);
    });
});

chrome.runtime.onMessage.addListener (
  function(request, sender, sendResponse)
  {
    if (request.type == "checkH1B")
    // Check for valid H1B companies 
    {
      var url = 'http://localhost:3000/h1b/' + request.data;

      console.log(url);
      fetch(url).then(r => r.text()).then(results => {
      // Check if this a valid text

        console.log(results);
        if (results == "true")
        {
          console.log("Match Found. Adding text to string");
          sendResponse({"isValid": true});
        }
        else
        {
          sendResponse({"isValid": false});
        }

      });
      // Send a message, expect a response 
      return true;
    }

});
