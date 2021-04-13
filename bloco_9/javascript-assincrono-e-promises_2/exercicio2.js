const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from( {length:10 }, () => Math.floor(Math.random() * 50) + 1);
      
    const soma = array.map(numero => numero * numero).reduce((acc, curr) => acc + curr, 0);
    
    (soma < 8000) ? resolve() : reject();    
  })

  promise
  .then(soma => [2, 3, 5 , 10].map(number => soma/number))  
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();