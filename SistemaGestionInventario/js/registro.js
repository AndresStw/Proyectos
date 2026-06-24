//REGISTRO

console.log("Script Registro cargado");

const formRegistro = document.querySelector("#registroForm");

if (formRegistro) {
  formRegistro.addEventListener("submit", function (e) {
    const pass = document.getElementById("passReg");
    const conf = document.getElementById("passConf");

    if (pass && conf && pass.value !== conf.value) {
      e.preventDefault();

      Swal.fire({
        icon: "error",
        title: "Contraseñas diferentes",
        text: "Las contraseñas no coinciden",
      });

      conf.focus();
    }
  });
}