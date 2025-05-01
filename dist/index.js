let btn = document.querySelector("#btn");
let form = document.querySelector("#form");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  // Clear previous error messages
  document.querySelector("#empty").textContent = "";
  document.querySelector("#pdob").textContent = "";
  document.querySelector("#ppass").textContent = "";
  document.querySelector("#e").textContent = "";

  let fname = document.querySelector("#fullname").value;
  let pWord = document.querySelector("#password").value;
  let dob = document.querySelector("#dob").value;
  let email = document.getElementById("email").value;

  // 1. Check if any field is empty
  if (fname === "" || pWord === "" || dob === "" || email === "") {
    let empty = document.querySelector("#empty");
    empty.style.color = "red";
    empty.textContent = "All fields must be filled!";
    return;
  }

  // email includes@
  if (!email.includes("@")) {
    let e = document.querySelector("#e");
    e.textContent = "must include '@'";
    e.style.color = "red";
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
    pdob.style.color = "red";
    pdob.textContent = "Must be 18 or older!";
    return;
  }

  // 3. Check for special character in password
  let passwordCheck = /[!@#$%^&]/;

  if (!passwordCheck.test(pWord)) {
    let ppass = document.querySelector("#ppass");
    ppass.style.color = "red";
    ppass.textContent =
      "Password must contain at least one special character (!@#$%^&)";
    return;
  }

  if (pWord.length <= 7) {
    let ppass = document.querySelector("#ppass");
    ppass.style.color = "red";
    ppass.textContent = "Password must be more than 7 characters";
    return;
  }

  // ✅ All validations passed — redirect to login page
  window.location.href = "login.html";
});
