export default class API {

   // metodo para obtener un character
   async getCharacter(id){
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
	const data = await response.json()
	return data
		// .then((response) => response.json())
		// .then((data) => data)
	}
}