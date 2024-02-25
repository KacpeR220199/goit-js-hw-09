import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const element = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      buttonStart.setAttribute('disabled', true);
      window.alert('Please choose a date in the future');
    } else buttonStart.removeAttribute('disabled');
  },
};
flatpickr(element, options);

const twoNumbers = value => value.toString().padStart(2, '0');

buttonStart.addEventListener('click', () => {
  setInterval(() => {
    element.setAttribute('disabled', true);
    buttonStart.setAttribute('disabled', true);
    const dataInMs = new Date(element.value) - new Date();

    if (dataInMs < 0) {
      clearInterval();
      element.removeAttribute('disabled');
      buttonStart.removeAttribute('disabled');
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(dataInMs);

    spanDays.textContent = twoNumbers(days);
    spanHours.textContent = twoNumbers(hours);
    spanMinutes.textContent = twoNumbers(minutes);
    spanSeconds.textContent = twoNumbers(seconds);
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
