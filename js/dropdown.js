//button population function
function dropdown() {
    const select = document.getElementById("menu");
//load wikipedia iso csv
    Promise.all([d3.csv('./../Data/wikipedia-iso-country-codes.csv')
    ]).then(data => {
        const countries = data[0]
        //console.log(countries)
        countries.forEach(element => {
            //console.log(element.Country)
            const el = document.createElement("option");
            el.textContent = element.Country
            el.value = element.Numeric_code
            select.appendChild(el);
        })
    })
}

