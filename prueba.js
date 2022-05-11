$(document).ready(function(){
    var llave = "1823f857"
    $("#formulario_pelis").submit(function(event){
        event.preventDefault()
        var pelicula = $("#pelicula").val()
        var url = "http://www.omdbapi.com/?apikey="+llave
        var resultado = ""
        $.ajax({
            method:'GET',
            url:url+"&t="+pelicula,
            success:function(data){
                console.log(data)
                resultado = `
                <img src="${data.Poster}"/>
                <h2>Director: ${data.Director}</h2>
                <h2>Actores: ${data.Actors}</h2>
                <h2>Genero: ${data.Genre}</h2>
                `

                $("#resultado_busqueda").html(resultado)
            }
        })
    })
})