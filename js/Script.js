// validar contra
const formRegistro = document.querySelector("#registroForm");
if (formRegistro) {
  formRegistro.addEventListener("submit", function (e) {
    const pass = document.getElementById("passReg");
    const conf = document.getElementById("passConf");

    if (pass && conf && pass.value !== conf.value) {
      e.preventDefault();
      alert("Las contraseñas no coinciden.");
      conf.focus();
    }
  });
}

document.querySelectorAll("form").forEach((form) => {
  if (!form.id || form.id !== "registroForm") {
    form.addEventListener("submit", function (e) {
      const inputs = this.querySelectorAll(
        "input[required], textarea[required]",
      );
      let valid = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add("is-invalid");
        } else {
          input.classList.remove("is-invalid");
        }
      });
      if (!valid) {
        e.preventDefault();
        alert("Por favor, completa todos los campos obligatorios.");
      }
    });
  }
});

console.log("Script cargado");

//falta la regla
