fetch("https://superhero-search.p.rapidapi.com/api/?hero=Spiderman", {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '39d59a6313mshe3177bbb6767475p181c69jsn5c1d4f01d1a9',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    document.getElementById('name').innerHTML = 'Name:'+response.name;
	document.getElementById('powerstats').innerHTML = 'Power stats<br> <b>Speed:</b>'+response.powerstats.speed +'<br> <b>Intelligence:</b>'+response.powerstats.intelligence +'<br> <b>Strength:</b>'+response.powerstats.strength +'<br> <b>Durability:</b>'+response.powerstats.durability +'<br> <b>Power:</b>'+response.powerstats.power;
	document.getElementById('appearance').innerHTML = 'Apearance<br> <b>Eye color:</b>'+response.appearance.eyeColor +'<br> <b>Gender:</b>'+response.appearance.gender +'<br> <b>Hair color:</b>'+response.appearance.hairColor +'<br> <b>Height:</b>'+response.appearance.height +'<br> <b>Race:</b>'+response.appearance.race+'<br> <b>Weight:</b>'+response.appearance.weight;
	document.getElementById('biography').innerHTML = 'Biography<br> <b>Aliases:</b>'+response.biography.aliases +'<br> <b>alignment:</b>'+response.biography.alignment +'<br> <b>Alter egos:</b>'+response.biography.alterEgos +'<br> <b>First appearance:</b>'+response.biography.firstAppearance +'<br> <b>Full name:</b>'+response.biography.fullName+'<br> <b>Place of Birth:</b>'+response.biography.placeOfBirth+'<br> <b>Publisher:</b>'+response.biography.publisher;
	document.getElementById('connections').innerHTML = 'Connections<br> <b>Group affiliation:</b>'+response.connections.groupAffiliation +'<br> <b>Relatives:</b>'+response.connections.relatives;
	document.getElementById('images').innerHTML = 'Image <br> <img src="'+response.images.lg+'"/>';
    
})
.catch(err => {
	console.log(err);
});
