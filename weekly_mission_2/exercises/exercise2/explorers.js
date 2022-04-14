const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]



   // Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log('Ejercicio 1')
   explorers.forEach( explorer => console.log(explorer.name))   
   

   // Imprime el stack de cada explorer, usa FOR EACH
   console.log('Ejercicio 2')
   explorers.forEach( explorer => console.log(explorer.stack))
   

   // Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   console.log('Ejercicio 3')
   const ejercicio3 = explorers.map(explorer => explorer.stack)
   console.log(ejercicio3)


   //Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
   console.log('Ejercicio 4')
   const ejercicio4 = explorers.filter(explorer => explorer.stack.includes('js'))
   console.log(ejercicio4)
   
   
   // Busca el primer explorer que sea de la CDMX, usa FIND
   console.log('Ejercicio 5')
   const ejercicio5 = explorers.find(explorer => explorer.city === "CDMX")
   console.log(ejercicio5)
   

   // Obtén la suma de todos los exercises_completed, usa REDUCE
   console.log('Ejercicio 6')
   const ejercicio6 = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
   console.log(ejercicio6)


   //Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
   console.log('Ejercicio 7')
   const ejercicio7 = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true)
   console.log(ejercicio7)


   // Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
   console.log('Ejercicio 8')
   const ejercicio8 = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
   console.log(ejercicio8)