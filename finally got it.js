const getstarwarsplanetapi = async()=>{

    let planetapi = await fetch("https://swapi.dev/api/planets");

    let planetData = await planetapi.json();
    

    let resultData = planetData.results
    let result = resultData.map(planet=>`<li> name: ${planet.name}---rotation period ${planet.rotation_period}---population ${planet.population}---residents ${planet.residents}</li><br>`)


    return document.body.innerHTML = result.join("");
}
getstarwarsplanetapi()