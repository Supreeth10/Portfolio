let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Name = document.getElementById("username");
  let email = document.getElementById("InputEmail");
  let msg = document.getElementById("message");
  if (
    Name.value.length == 0 &&
    email.value.length == 0 &&
    msg.value.length == 0
  ) {
    alert("Can not submit an empty form");
    console.warn("You must fill all fields to submit this form!");
  }
});
