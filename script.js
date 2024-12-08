console.log("hellow js");




const input = document.querySelector("#input");
const div = document.querySelector("#output");

function add() {  
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res[0].capital[0])
        console.log(res[0].altSpellings[3])
        console.log(res[0].name.common)
        console.log(res[0].continents[0])
        console.log(res[0].flags.svg)


        div.innerHTML = `
         <div id="container-img">
         <img src="${res[0].flags.svg}" alt="">
         </div>
         <div id="container-contennt">
         <h2 id="name">${res[0].name.common}</h2>
         <h3> Capital:${res[0].capital[0]}</h3>
         <h3> Continent :${res[0].continents[0]}</h3>
         <h3> population :${res[0]. population}</h3>
         <h3> Common languages :${Object.values (res[0].languages)}</h3>
   



         </div>

    
        
        
    
      
        `
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
            
          
               
            
            })
        }