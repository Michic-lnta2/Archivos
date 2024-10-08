const terminoBusqueda = 'Programación';
const url = 'https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${terminoBusqueda}&format=json&origin=*'; 
async function buscarEnWikipedia () { 
try { 
const respuesta = await fetch (url); 
const datos = await respuesta.json(); 
const resultados = datos.query.search; 
if (resultados.length > 0) { 
document.getElementById('resultados').textContent = Resultados de búsqueda para "${terminoBusqueda}":; 
const listaResultados = 
document.getElementById('listaResultados'); 
resultados.forEach (resultado => { 
const li = document.createElement('li'); 
li.innerHTML = <a href="https://es.wikipedia.org/wiki/${resultado.title}" target="_blank">${resultado.title} </a>-${resultado.snippet}; 
listaResultados.appendChild(li); 
}); 
} else { 
document.getElementById('resultados').textContent = No se encontraron resultados.; 
} 
} catch (error) { No se encontraron resultados. 
document.getElementById('resultados').textContent = Error al obtener los datos de Wikipedia.;
console.error ('Error:', error);
} 
}  
buscarEnWikipedia ();