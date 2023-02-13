//Assignment 2. Create a html page which asks a question like 3+4? and shows an input box to enter the answer. if the answer is correct, then the script shows a dialog box to tell if the answer is correct or not.

// updates: user can manually select both the number and operator also.

function myfunction() {
  const x = document.getElementById("inp").value;
  const num1 = document.getElementById("num1").value;
  const oper = document.getElementById("oper").value;
  const num2 = document.getElementById("num2").value;

  const n1 = Number(num1);
  const n2 = Number(num2);
//   console.log(typeof(n1));
//   console.log(Number(num1));
//   console.log(oper);
//   console.log(Number(num2));
//   console.log(x);



  switch (oper) {
    case "+":
      const d1 = n1 + n2;
      if (x == d1) {
        window.alert("correct");
      } else {
        window.alert("not correct");
      }
      break;

    case "*":
      const d2 = n1 * n2;
      if (x == d2) {
        window.alert("correct");
      } else {
        window.alert("not correct");
      }
      break;

    case "-":
      const d3 = n1 - n2;

      if (x == d3) {
        window.alert("correct");
      } else {
        window.alert("not correct");
      }
      break;

    default:
    //   console.log("wrong operator");
      window.alert(
        "Wrong choice of Operator. Please choose any one on them (+, -, *)"
      );
      break;
  }
}
