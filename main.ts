/*
    Before deployment all typeScript files must be compiled to JavaScript.
    The resulting JavaScript files are can then be interpreted by the web browser.    

    For these reasons This application requires the typescript compiler. For more information about typeScript
    refference the ReadMe.md file in the root directory.

    The configuration for the the typescript compiler can be found in the tsconfig.json file 
    located in the root directory.
*/


// this class is used to create an object 
// that can will hold user inputs
class NewUserDomain
{
    UserName:string;
    EmailAddress:string;
    PhoneNumber:string;
    //The Phone number must be a valid Phone number
    DesireDomainName:string;
    //desiredWebsiteName can only contain characters lowercase characters a to z,numbers, and dashes(-) to separate words. 
}

// The window is what the user see's when that app loads.
// This function get the button from the document and adds a click even lisenter.
window.onload = function()
{
    // place the button object in memory by assigning it to a variable
    let SumbitUserInformationButton = <HTMLElement>document.querySelector("input[type=button]");
    // gets the button in memory and adds a function that us executed when the button is clicked
    SumbitUserInformationButton.onclick = CollectUserInformation; //VerifyUserInfo is a function that Verifies User Info
}



//This fuction gathers the users input from the the main HTML page and returns an object that contains everything that was entered in the form.
function CollectUserInformation ():NewUserDomain {
    // create a new object named userInput to hold the users input in memory.
    let userInput = new NewUserDomain();
    
    /* There are other ways to do the follow using loops, recursion, and or some 
    other methodes that would obviously be more complicated. 
    For now, for personal sanity and readabilty, each input is manually retrieved.
    */

    // To keep the code easily readable, at least thats the logic for now.
    // gets the user input field from the main html document.
    let userName = <HTMLInputElement>document.getElementById("UserName")
    let userEmailAddress = <HTMLInputElement>document.getElementById("UserEmailAddress")
    let userTelephoneNumber = <HTMLInputElement>document.getElementById("UserTelephoneNumber")
    let userDesiredDomainName = <HTMLInputElement>document.getElementById("UserTelephoneNumber")
    
    
    //Now we will places the value contained in the input field in the userInput Object in memeory.
    userInput.UserName = userName.value;
    userInput.EmailAddress = userEmailAddress.value;
    userInput.PhoneNumber = userTelephoneNumber.value;
    userInput.DesireDomainName = userDesiredDomainName.value;

    return userInput;
}

function DisplayUserInput(){
    // TODO: Display users  verified input below the input form.
}