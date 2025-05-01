let btn = document.querySelector("#btn");
let form = document.querySelector("#form");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let fname = document.querySelector("#fullname").value;
  let pWord = document.querySelector("#password").value;
  let dob = document.querySelector("#dob").value;
  let email = document.getElementById("email").value;

  // 1. Check if any field is empty
  if (fname === "" || pWord === "" || dob === "" || email === "") {
    alert("All fields must be filled");
    return;
  }

  // 2. Check age
  let birthDate = new Date(dob);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age < 18) {
    let pdob = document.querySelector("#pdob");
    pdob.style.color = "green";
    pdob.textContent = "must be above 18";
    return;
  }

  // 3. Check for special character in password
  let passwordCheck = /[!@#$%^&]/;

  if (!passwordCheck.test(pWord)) {
    alert("Password must contain at least one special character: !@#$%^&");
    return;
  }

  // ✅ All validations passed — redirect to login page
  window.location.href = "login.html";
});
