import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmitForm);

const options = {
  width: '400px',
  fontSize: '18px',
  position: 'center-bottom',
  distance: '33px',
  borderRadius: '13px',
  timeout: 8000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
};

function onSubmitForm(e) {
  e.preventDefault();
  let delay = Number(e.target.delay.value);
  const step = Number(e.target.step.value);
  const amount = Number(e.target.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`,
            options
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`, options);
        }, delay);
      });
    delay += step;
  }

  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise);
    }
    reject(objectPromise);
  });
}