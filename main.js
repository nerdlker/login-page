const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const submitButton = document.querySelectorAll(".create-account");
const email = document.getElementById("email");

submitButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("i was pressed");
    if (password.value === cpassword.value && password.value !== "") {
      console.log("passwords Match");
      password.classList.remove("passworderror");
    } else {
      console.log("passwords DO NOT match");
      cpassword.classList.add("passworderror");
      password.classList.add("passworderror");
      event.preventDefault();
    }
  });
});

/*


+-----------------------------------------------------------------+
|    TODO                                                         |
|    Javasscript Form Validation                                  |
|    Responsive CSS                                               |
|                                                                 |
|                                                                 |
+-----------------------------------------------------------------+


*/
