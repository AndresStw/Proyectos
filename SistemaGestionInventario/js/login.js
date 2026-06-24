//Login

const btnLogin = document.querySelector(".btn-login");

if (btnLogin) {
  btnLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Faltan algunos campos",
        confirmButtonColor: "#DD403A",
      });
      return;
    }

    if (email === "admin@maskot.com" && password === "2580") {
      Swal.fire({
        icon: "success",
        title: "Logueado",
        text: "Bienvenido",
        confirmButtonColor: "#DD403A",
      }).then(() => {
        window.location.href = "Admin/dashboard.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Correo o contraseña erróneos",
        confirmButtonColor: "#DD403A",
      });
    }
  });
}
