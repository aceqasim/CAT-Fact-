const url = 'https://catfact.ninja/fact'
const para = document.querySelector('#fact')

const getFact = async (params) => {

let response =await fetch(url)
console.log(response)
const data = await response.json()
console.log(data.fact);

    
para.innerHTML=`<p>${data.fact}</p>`

}
getFact()
