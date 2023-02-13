//Assignment 4. Create a javascript array to store the names of students in a class. On loading the page, the script should pick up a random student and display his name in the alert box.

// update: display the name of person also.
const arr = ["Prince", "Bandhan", "Komal", "GurSingh", "Sahil", "Idrees", "Rahul", "Neha", "Deepak", "Deepika"];

const ran = Math.random();
const floorFromRandom = Math.floor(ran*10);


for(let x = 0 ; x < arr.length ; x++){
    // console.log(arr[x]);
    document.write(arr[x] + "<br>");
}
console.log(floorFromRandom);
window.alert(arr[floorFromRandom]);