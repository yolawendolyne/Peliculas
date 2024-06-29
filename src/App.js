import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasjson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';


function App() {
	const [paginaActual, setPaginaActual]=useState(1);
	let [valorSelect, setValorSelect]=useState(5);
	
	
	
	
	let  peliculas= peliculasjson;
	
	
	let   getNumeroTotal=()=>	{
		return Math.ceil((peliculasjson.length)/valorSelect)
	   
	   };


		
	
	const cargarPeliculas=()=>
		
		{
	peliculas =peliculas.slice((paginaActual-1)*valorSelect,paginaActual*valorSelect);

}


 let numeroPeliculasporPagina=()=> {

	if  (valorSelect===5? setValorSelect(5): setValorSelect(parseInt(document.getElementById('valor_de_select').value)));
	getNumeroTotal();
	setPaginaActual(1);
	return cargarPeliculas();
		
	}

	cargarPeliculas();



  return (

	<PageWrapper>

{peliculas.map(pelicula  =>


<Pelicula  titulo={pelicula.titulo}  calificacion={pelicula.calificacion} duracion={pelicula.duracion} director= {pelicula.director}
estreno={pelicula.estreno} año={pelicula.año} imagen={pelicula.imagen}
estrellas={pelicula.estrellas}   
>
{pelicula.descripcion}
</Pelicula>)


}


<Paginacion  pagina={paginaActual} total={getNumeroTotal()}  onChange={(pagina)=>{

setPaginaActual(pagina);}}

 onChangePaginas={()=>{
	
	{numeroPeliculasporPagina();}
	setValorSelect(parseInt(document.getElementById('valor_de_select').value));



 }}    



>


	
</Paginacion>

	</PageWrapper>
    
  )  ;

  


}

export default App;
