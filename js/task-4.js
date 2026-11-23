const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const data = {
    email,
    password,
  };

  console.log(data);
  form.reset();
});