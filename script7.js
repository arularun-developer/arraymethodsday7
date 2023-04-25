// Get all the countries from the Asia continent /region using the Filter function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Filter countries by region
        const asiaCountriesname = data.filter(country => country.region === "Asia");
        // Log list of Asia countries
        console.log(asiaCountriesname);
    })


// Get all the countries with a population of less than 2 lakhs using Filter function


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Filter countries by population
        const lessThan2Lakhspop = data.filter(country => country.population < 200000);
        // Log list of countries with population less than 2 lakhs
        console.log(lessThan2Lakhspop);
    })


// Print the following details name, capital, flag using forEach function


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Iterate over each country and log its name, capital and flag
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flags.svg}`);
        });
    })


// Print the total population of countries using reduce function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Calculate total population using reduce function
        const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
        // Log total population
        console.log(`Total population of all countries: ${totalPopulation}`);
    })


// Print the country which uses US Dollars as currency.

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Find country using USD as currency
        const usdCountry = data.find(country => country.currencies.USD !== undefined);
        // Log name of country using USD as currency
        console.log(`Country using USD as currency: ${usdCountry.name.common}`);
    })



