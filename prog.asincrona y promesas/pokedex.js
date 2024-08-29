let peliculas = [
    {
      "rarity": 5,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "rarity": 5,
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    }
  ];

//Funcion para obtener las peliculas
function obtenerPeliculas(pelis){
    
    return new Promise((resolve, reject) => {
        //Simular un retrazo para al obtener la informacion
        setTimeout(()=>{
        
            //Validar si hay datos en la BD
            if(pelis.length > 0){
                resolve(pelis);
            }else{
                reject("Error, no hay datos en la BD");
            }
        
    
        },2000)
    })
    
}

//Mostrar peliculas en el navegador
//metodo 1
// obtenerPeliculas(peliculas)
// .then((d)=>console.log(d))
// .catch((e)=>console.log(e))

//metodo 2
async function mostrarDatos(movies){
    try {
        let datos = await obtenerPeliculas( movies );
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
    
}
// Mostrar los datos en consola
mostrarDatos(peliculas);