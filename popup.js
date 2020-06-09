// Add javascript reactions for clicking button. 
// Should update chrome.storage.sync.set

var sponsorBol = document.getElementById('sponsor');
var e_verifyBol = document.getElementById('e_verify');

chrome.storage.sync.get(['sponsor', 'e_verify'], function(data){
    // Gets the previous settings from storage
    sponsorBol.checked = data.sponsor;
    e_verifyBol.checked = data.e_verify;
});

// Onchange functions if its changed
sponsor.onchange = function(element) {
    // The sponsor checkbox has been changed.

    let newValue = this.checked;
    chrome.storage.sync.set({sponsor:newValue}, function(){
    });

    // Send message to content.js to make DOM Changes, if this value has been changed 
}

e_verify.onchange = function(element) {
    // The sponsor checkbox has been changed.
    let newValue = this.checked;
    chrome.storage.sync.set({e_verify:newValue}, function(){
    });

    // Send message to content.js to make DOM Changes
}