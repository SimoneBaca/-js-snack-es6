/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/
const cars = [
    {
      brand: "Car 1",
      model: "Model 1",
      fuel: "Benzina"
    },
  
    {
      brand: "Car 2",
      model: "Model 2",
      fuel: "Elettrico"
    },
  
    {
      brand: "Car 3",
      model: "Model 3",
      fuel: "Diesel"
    },
  
    {
      brand: "Car 4",
      model: "Model 4",
      fuel: "Benzina"
    },
  
    {
      brand: "Car 5",
      model: "Model 5",
      fuel: "Diesel"
    },
  
    {
      brand: "Car 6",
      model: "Model 6",
      fuel: "GPL"
    },
  
    {
      brand: "Car 7",
      model: "Model 7",
      fuel: "GPL"
    },
  
    {
      brand: "Car 8",
      model: "Model 8",
      fuel: "Metano"
    },
  
    {
      brand: "Car 9",
      model: "Model 9",
      fuel: "Benzina"
    },
  
    {
      brand: "Car 10",
      model: "Model 10",
      fuel: "Diesel"
    }
  
  ];

  const gasolineCars = cars.filter((car) => {
    return car["fuel"].toLowerCase() == "benzina";
  })
  console.log(gasolineCars);
  
  const dieselCars = cars.filter((car) => {
    return car["fuel"].toLowerCase() == "diesel";
  })
  console.log(dieselCars);;
  
  const otherCars = cars.filter((car) => {
    return car["fuel"].toLowerCase() != "benzina" && car["fuel"].toLowerCase() != "diesel";
  })
  console.log(otherCars);
  