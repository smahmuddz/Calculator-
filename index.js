const res = document.getElementById("result");
const toast = document.getElementById("toast");
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
  if(chk.checked)
  {
  console.log("Checkbox is checked..");
  document.body.classList.toggle('light');
  document.getElementById("wrapper").style.backgroundColor = "white";
  document.getElementById("toast").style.color = "black";
}
  else
  {
  console.log("Checkbox is unchecked..");
  document.body.classList.toggle('light');
  document.getElementById("wrapper").style.backgroundColor = "black";
  document.getElementById("toast").style.color = "white";
  }
});

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";  
  } else {
    res.value = calculatedValue;
  }
}


// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
 e.preventDefault();

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //dot
  if (e.key === ".") {
    res.value += ".";
  }

  //equal, Enter
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace key
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}