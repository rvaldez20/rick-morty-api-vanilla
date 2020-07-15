export default class API {

   // metodo para obtener un character
   getCharacter(id){
   	fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => console.log(data))
	}
}