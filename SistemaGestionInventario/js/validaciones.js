//validaciones basicas
console.log("Script validacion cargado");

document.querySelectorAll("form").forEach((form) => {
  if (form.id !== "registroForm") {
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

        Swal.fire({
          icon: "warning",
          title: "Campos obligatorios",
          text: "Por favor completa todos los campos requeridos",
        });
      }
    });
  }
});
