const btn = document.querySelector("#btn")
const from = document.querySelector("#from")
const to = document.querySelector("#to")
const ip = document.querySelector("#ip")
let finalans= document.querySelector("#finalans")

    fetch("https://v6.exchangerate-api.com/v6/36defd8baed25a7bbda78b26/latest/USD")
    .then((response)=>response.json())
    .then((value)=>{console.log(value)

        for(let elem in value.conversion_rates){
        console.log(elem)   }

     getCountries(value.conversion_rates)
    })


function getCountries(country_names){
console.log(country_names)

let out=""
out += `<option value="">Countries 1</option>`
for(let country in country_names){
    out +=`<option value="${country}">${country}</option>`
}
from.innerHTML=out;

let out2=""
out2 += `<option value="">Countries 2</option>`
for(let country in country_names){
    out2 +=`<option value="${country}">${country}</option>`
}
to.innerHTML=out2;
}


btn.addEventListener('click',conversionRate)
function conversionRate(){
    let val1 =from.value
    let val2 =to.value
    console.log(val1,val2)

    fetch(" https://v6.exchangerate-api.com/v6/36defd8baed25a7bbda78b26/pair/"+val1+"/"+val2)
    .then((response)=>response.json()

    .then((value)=> {console.log(value)
    converter(value)
}
)
    
)

}

function converter(value) {
    let input = ip.value
    let ans = input*value.conversion_rate
    console.log(ans)
  finalans.textContent=ans
}

