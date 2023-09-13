const contenedor = document.getElementById("container-row")
const botonCrear = document.getElementById("btn-new")
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const botonGuardar = document.getElementById("btn-guardar")
const inputTitulo = document.getElementById("inputTitle")
const inputContenido = document.getElementById("inputDescription")
const inputImagen = document.getElementById("inputPoster")
const form = document.getElementById("formulario")


let html = ""
let option = ""
let idformulario = ""



botonCrear.addEventListener("click", () => {
    option = "new"
    botonGuardar.textContent = "Nuevo"
    inputTitulo.value = ""
    inputContenido.value = ""
    inputImagen.value = ""
    myModal.show()
})

document.addEventListener("click", (evento) => {
    if (evento.target.matches("#btn-borrar")) {
        const article = evento.target.closest(".col-4")
        const idArticle = article.id;

        fetch(`http://localhost:3001/api/tareas/${idArticle}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                article.remove()
            }
        }).catch(error => {
            console.error(error)
        })
    }
})

document.addEventListener("click", (evento) => {
    if (evento.target.matches("#btn-editar")) {
        const article = evento.target.closest(".col-4")
        const idArticle = article.id;
        const editarUrlImagen = article.children[0].children[0].src;
        const editarTitulo = article.children[0].children[1].children[0].textContent;
        const editarContenido = article.children[0].children[1].children[1].textContent;
        idformulario = idArticle
        inputImagen.value = editarUrlImagen;
        inputTitulo.value = editarTitulo;
        inputContenido.value = editarContenido;
        option = "editar"
        botonGuardar.textContent = "Editar"
        myModal.show();   
    }
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (option === "new") {
        const nuevoPost = {
            titulo: inputTitulo.value,
            contenido: inputContenido.value,
            imagen_post: inputImagen.value,
                                                       
        };
        fetch("http://localhost:3001/api/tareas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoPost),
        }).then((res) => {
            if (res.ok) {
                alert("Tarea creada con exito");
                myModal.hide();
                location.reload();
            }
        });
    }
    if (option === "editar") {
        const nuevoPost = {
            titulo: inputTitulo.value,
            contenido: inputContenido.value,
            imagen_post: inputImagen.value,
          
        };

        fetch(`http://localhost:3001/api/tareas/${idformulario}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoPost)
        }).then(res => {
            if (res.ok) {
                alert("Post editado correctamente")
                myModal.hide();
                location.reload();
            }
        })
    }
});


