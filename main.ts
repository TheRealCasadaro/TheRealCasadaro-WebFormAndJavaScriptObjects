/*
    Before deployment all typeScript files must be compiled to JavaScript.
    The resulting JavaScript files are can then be interpreted by the web browser.    

    For these reasons This application requires the typescript compiler. For more information about typeScript
    refference the ReadMe.md file in the root directory.

    The configuration for the the typescript compiler can be found in the tsconfig.json file 
    located in the root directory.
*/

// The window is what the user see's when that app loads.
// This function get the button from the document and adds a click even lisenter.
window.onload = function()
{
    // place the button object in memory by assigning it to a variable
    let SumbitUserInformationButton = <HTMLElement>document.querySelector("input[type=buttoon]");
    // gets the button in memory and adds a function that us executed when the button is clicked
    SumbitUserInformationButton.ondblclick = VerifyUserInfo; //VerifyUserInfo is a function that Verifies User Info
}

//This fuction will verify the users input(s).
function VerifyUserInfo () {
    // TASKS
    alert("Button Clicked")
}