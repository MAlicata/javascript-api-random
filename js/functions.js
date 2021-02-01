console.log("Inicio script");
async function mostrarUsuarios(cantidad){
    try{
    const response = await fetch('https://randomuser.me/api/?results='+cantidad)
    const datoJson = await response.json()
    const usuarios = datoJson.results
    console.log(usuarios)
    const filaUsuarios = document.getElementById('filaUsuarios')
    filaUsuarios.innerHTML = usuarios.map(cardUsuario).join('')
    }
    catch(error){
        console.log("error en mostrarUsuarios",error)
    }    
}
console.log("Termino script");