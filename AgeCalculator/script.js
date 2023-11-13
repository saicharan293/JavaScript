const calculate = document.getElementById("calculate");

const inputbday = document.getElementById("birthday");

const result = document.getElementById("result");

function Age() {
  const birthday = inputbday.value;
  if (birthday === "") {
    alert("Please enter your date of birth");
  } else {
    const age = getAge(birthday);
    if (age == undefined) {
      result.innerText = "Please try again with correct date of birth";
    } else {
      result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
  }
}

function getAge(birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  if (birthdayDate > currentDate) {
    alert("Please check the date of birth");
  } else {
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();

    if (
      months < 0 ||
      (months === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}

calculate.addEventListener("click", Age);
