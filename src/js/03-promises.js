const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delayInput = Number(e.target.elements[0].value);
  const stepInput = Number(e.target.elements[1].value);
  const amountInput = Number(e.target.elements[2].value);

  for (i = 0; i < amountInput; i += 1) {
    createPromise(i, delayInput + i * stepInput)
      .then(({ position, delay }) => {
        console.log(`✅Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`🛑Rejected promise ${position} in ${delay}ms`);
      });
  }
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject('error');
      }
    }, delay);
  });
}
