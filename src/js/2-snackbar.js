import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
      });
    })
    .catch(ms => {
      iziToast.error({
        title: '❌',
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}