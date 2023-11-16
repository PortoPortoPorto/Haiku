// RANDOMISE INDEX BASED ON ARRAY LENGTH AND RETURN RANDOM OBJECT FROM ARRAY
function randomiseIndex(data) {
	const randomIndex = Math.floor(Math.random() * data.length); 
	return data[randomIndex]; 
}


// FETCH HAIKUS FROM JSON FILE
function getRandomHaiku () {
	fetch('haiku.json')
		.then((response) => {
			if(!response.ok) {
				throw new Error (`Network response error ${response.statusText}`); 
			}
			return response.json(); 
		})

		.then((data) => {
			let output = '';
//CALL RANDOM HAIKU FUNCTION TO RETURN RANDOM HAIKU FROM ARRAY			
			const randomHaiku = randomiseIndex(data);
//ADD HAIKU CONTENT TO OUTPUT VARIABLE		
			output += 
			`<h1>${randomHaiku.line1}</h1>
			 <h1>${randomHaiku.line2}</h1>
			 <h1>${randomHaiku.line3}</h1>
			`;
//ADD HAIKU TO THE DOM 
			document.querySelector('#haiku-space').innerHTML= output; 
		})
		.catch((error) => {
			console.error('Error:', error); 
			document.querySelector('#haiku-space').innerHTML = '<h3>Errror fetching haiku. Please reload page and try again.</h3>'
		});
}



document.querySelector('#get-haiku').addEventListener('click',() => getRandomHaiku()); 


