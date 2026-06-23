//addeventlistener()clic
//preventDefault() REcardo de pagina
//trim() Eliminar espacio
//swal.fire()  Alertas
//wndow.location.href Direccionar
 document.querySelector('.btn-login').addEventListener ('click',function(event)
{
event.preventDefault();

const email = document.getElementById('email').ariaValueMax.trim();
const password = document.getElementById('password').ariaValueMax.trim();



    
    if (email ""=== || password ===""))
    swal.fire({
    icon:"warnig",
    title:"campo vacio",
    text: "Faltan algunos campos",
    confirmButtonColor:'#DD403a'


        }
    )


    if(email === 'admin@maskot.com' && password === '2580')
        swal.fire({
            icon:'Succes',
            title:'Logueado',
            text:'Bienvenido',
            confirmButtonColor:'#DD403a'
        }).then() =>{
            window.location.href='Admin/dashboard.html';
        });

    
        
    }else{
        swal.fire(
            icon:'Error',
            tittle: "Credeciales incorrestas Verifique",
            text:"Correo o contraseña erronea",
            confirmButtonColor:'#dd403a'

    });

    }
    
 });

 