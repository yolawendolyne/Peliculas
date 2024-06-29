import { renderToString } from "react-dom/server"

function stringToHtml(str){
	var arrayNombres=str.split(",");

	let htmlStart  =null;

	
		if (arrayNombres.length==1){
		htmlStart=		<a href='#'>{arrayNombres[0]} </a>;
		  return  htmlStart ;}
		if (arrayNombres.length==2){
			htmlStart=		<><a href='#'>{arrayNombres[0]} </a>,<a href='#'>{arrayNombres[1]} </a></>;
			return  htmlStart ;
		}
		if (arrayNombres.length==3){
			htmlStart=		<><a href='#'>{arrayNombres[0]} </a>,<a href='#'>{arrayNombres[1]} </a>,<a href='#'>{arrayNombres[2]} </a></>;
			return  htmlStart ;}		
	};




	




export default function Pelicula(props){

    return(

<div className="movie-item-style-2">
					<img src={props.imagen} alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">{props.titulo}  <span>{props.año}</span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
						<p className="describe">{props.children}</p>
						<p className="run-time"> Duracion: {props.duracion}  .     <span>MMPA: PG-13 </span>  <span>Estreno: {props.estreno}</span></p>
						<p>Director:{stringToHtml(props.director)}</p>
						<p>Estrellas: {stringToHtml(props.estrellas)}</p>
					</div>
				</div>

    )
    
}