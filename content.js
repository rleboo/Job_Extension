// Writes/Reads changes to the DOM 
let companies = document.getElementsByClassName("company");




chrome.storage.sync.get(['sponsor', 'e_verify'], function(data){
    // Gets the previous settings from storage

    sponsorBol.checked = data.sponsor;
    e_verifyBol.checked = data.e_verify;

    var typeCheck; 
    if (!data.sponsor && !data.e_verify)
    {
        // Both data.sponser and data.e_verifty are false
        return;
    } else if (data.sponsor && data.e_verify)
    {
        typeCheck = "EVerify&H1B";
    }
    else if (data.sponser)
    {
        typeCheck = "checkH1B";
    }
    else
    {
        typeCheck = "checkEVerify"
    }

    for (let i = 0; i < companies.length; i++)
    {
        if (companies[i].children.length > 0)
        // There's a link
        {
            console.log("Child");
            //Manipulate childen

            
            // Send a message to the background.js with company names. # A list? 
            let companyName = companies[i].getElementsByTagName('a')[0].innerHTML;
            chrome.runtime.sendMessage({type:typeCheck, data:companyName}, function(response) {

                // THis is an async response? 
                console.log("Response from background.js: ")
                if (response.isValid)
                {   
                    // TODO: add checks to see if g
                    companies[i].getElementsByTagName('a')[0].innerHTML = companyName + " X X ";
                    //
                }
                // If respose is true, change the text
            });
            //console.log(companies[i].innerHTML);
        }
        else
        {
            let companyName = companies[i].innerHTML;
            console.log(i, companyName);
            chrome.runtime.sendMessage({type:typeCheck, data:companyName}, function(response) {
                // THis is an async response? 
                console.log("Response from background.js: ")
                if (response.isValid)
                {
                    companies[i].innerHTML = companyName + " X X ";
                }
                // If respose is true, change the text
            });
        }
    }
// Go through and add Div to companies locations

});



