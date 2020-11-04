/*
    Before deployment all typeScript files must be compiled to JavaScript.
    The resulting JavaScript files are can then be interpreted by the web browser.    

    For these reasons This application requires the typescript compiler. For more information about typeScript
    refference the ReadMe.md file in the root directory.

    The configuration for the the typescript compiler can be found in the tsconfig.json file 
    located in the root directory.
*/

class NewUserDomain
// this class is used to create an object 
// that can will hold user inputs
{
    //The Phone number must be a valid Phone number
    //desiredWebsiteName can only contain characters lowercase characters a to z,numbers, and dashes(-) to separate words. 

    UserName: string;
    EmailAddress: string;
    PhoneNumber: string;
    DesireDomainName: string;
}

window.onload = function (): void
// The window is what the user see's when that app loads.
// This function get the button from the document and adds a click even lisenter.
{
    // place the button object in memory by assigning it to a variable
    let SumbitUserInformationButton = <HTMLElement>document.querySelector("input[type=button]");
    // gets the button in memory and adds a function that us executed when the button is clicked
    SumbitUserInformationButton.onclick = CollectUserInformation; //VerifyUserInfo is a function that Verifies User Info

}

function CollectUserInformation(): void {
    //This fuction gathers the users input from the the main HTML page and returns an object that contains everything that was entered in the form.
    console.log("User Collection Triggered")
    // create a new object named userInput to hold the users input in memory.
    let userInput = new NewUserDomain();
    console.log("new user domain instantiated")
    /* There are other ways to do the follow using loops, recursion, and or some 
    other methodes that would obviously be more complicated. 
    For now, for personal sanity and readabilty, each input is manually retrieved.
    */

    // To keep the code easily readable, at least thats the logic for now.
    // gets the user input field from the main html document.
    let userName = <HTMLInputElement>document.getElementById("UserName")
    let userEmailAddress = <HTMLInputElement>document.getElementById("UserEmailAddress")
    let userTelephoneNumber = <HTMLInputElement>document.getElementById("UserTelephoneNumber")
    let userDesiredDomainName = <HTMLInputElement>document.getElementById("UserDesiredDomainName")
    console.log("HTML Elements Retrieved")


    //Now we will places the value contained in the input field in the userInput Object in memeory.
    userInput.UserName = userName.value;
    userInput.EmailAddress = userEmailAddress.value;
    userInput.PhoneNumber = userTelephoneNumber.value;
    userInput.DesireDomainName = userDesiredDomainName.value;
    console.log("user input values extracted from NewUserDomain Object")

    console.log("Verifying Inputs")
    VerifyUserInput(userInput)

}

function DisplayUserInput(DisplayThis): void {
    // TODO: Display users  verified input below the input form.
    let display = document.getElementById("UserInputDisplayArea");
    console.log("user display area retrieved")

    if (typeof DisplayThis === 'string') {
        display.innerHTML = `<h2> ${DisplayThis} </h2>`;

        console.log("displaying error message")
    } else {

        display.innerHTML =
            `
            <h2>${DisplayThis.UserName}</h2>
            <h2>${DisplayThis.EmailAddress}</h2>
            <h2>${DisplayThis.PhoneNumber}</h2>
            <h2>${DisplayThis.DesireDomainName}</h2>
            
            `;
        console.log(DisplayThis)
    }
}

function VerifyUserInput(VerifyUserInput) {
    console.log("input verification initiated")
    // input verification code
    let username: string = VerifyUserInput.UserName;
    let userEmailAddress = VerifyUserInput.EmailAddress;
    let userPhoneNumber = VerifyUserInput.PhoneNumber;
    let userChoosenDomainName = VerifyUserInput.DesireDomainName;
    if (username.length < 3) {
        let message = `username must be greater than 3 characters.`
        DisplayUserInput(message)

    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmailAddress)) {
        let message = `your email address cannonot contain spaces or crazy characters and must have an @ symbol and a domain like .com, .edu, .org, really .anything.`
        DisplayUserInput(message)
    } else if (!/^\d{10}$/.test(userPhoneNumber)) {
        let message = `Your Phone Number Has to 10 Digits, if your're outside of the US, sorry.`
        DisplayUserInput(message)
    } else if (!userChoosenDomainName){
        let message = `Your Website name can't have any space or whild characters.`
        DisplayUserInput(message) 
    } else {
        let message = VerifyUserInput
        DisplayUserInput(message)
        console.log("all inputs verified");
    }
    
}