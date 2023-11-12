function randomiseIndex(data) {
	const randomIndex = Math.floor(Math.random() * data.length); 
	return data[randomIndex]; 
}



function getRandomHaiku () {
	fetch('haiku.json')
		.then((response) => response.json())
		.then((data) => {
			let output = '';
			const randomHaiku = randomiseIndex(data);
			output += 
			`<h3>${randomHaiku.line1}</h3>
			 <h3>${randomHaiku.line2}</h3>
			 <h3>${randomHaiku.line3}</h3>
			`;
			document.querySelector('#haiku-space').innerHTML= output; 
		})
		.catch((error) => console.log('Error', error)); 
}



document.querySelector('#get-haiku').addEventListener('click',() => getRandomHaiku()); 

