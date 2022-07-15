const nextQuoteBtn = document.querySelector('.next');
const paragraph = document.querySelector('.paragraph');
//getRandomQuote();

nextQuoteBtn.addEventListener('click', getRandomQuote);

 async function getRandomQuote() {
      const response = await fetch('https://api.adviceslip.com/advice');
      const respData = await response.json()
      paragraph.innerText = respData.slip.advice;

      console.log(respData);
  };



//ALTERNATIVE __ USING PROMISES

//  const getRandomQuote = function() {
//      fetch('https://api.adviceslip.com/advice')
//      .then((response) => response.json())
//      .then((data) => {
//          paragraph.innerText = data.slip.advice;
//      })
//      .catch((error) => console.log(error))

//  };

//  nextQuoteBtn.addEventListener('click', getRandomQuote);