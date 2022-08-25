const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const submitButton = document.querySelectorAll(".create-account");
const email = document.getElementById("email");
const passwordmatch = document.querySelector(".passwordmatch");

submitButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("i was pressed");
    if (password.value === cpassword.value && password.value !== "") {
      console.log("passwords Match");
      password.classList.remove("passworderror");
      cpassword.classList.remove("passworderror");
      passwordmatch.style.visibility = "hidden";
    } else {
      event.preventDefault();
      console.log("passwords DO NOT match");
      cpassword.classList.add("passworderror");
      password.classList.add("passworderror");
      passwordmatch.style.visibility = "visible";
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
