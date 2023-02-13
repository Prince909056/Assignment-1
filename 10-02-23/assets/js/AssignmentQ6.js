//Assignment 6. Take the names as input from a dialog. The dialog should keep asking names till a checkbox on the dialog which says stop further dialogs is checked. After that display the names in alphabetical order which were entered through alert box.

// const name1 = document.getElementById("sp1");
// const name = window.prompt("Please Enter your name in the input box." + name1);

// const name = window.prompt("please enter the name.");
// document.write(name);

// window.alert("<input></input>");

function custom_prompt(text) {
    document.querySelector("#custom_prompt").classList.remove("hidden");
    return new Promise((resolve, reject) => {
        document.querySelector("#promptbutton").onclick = () => {
           resolve(document.querySelector("#promptinput").value); 
           document.querySelector("#custom_propmt").classList.add("hidden");
        }
    });
}
