const todaysDate = dayjs().format('dddd, MMMM D');
const rightnowHour = dayjs().format('H');

document.querySelector('.date').textContent = todaysDate;
document.querySelector('#currentDay').textContent = 'Current time: ' + dayjs().format('h:mm A');

const timeBlocks = document.querySelectorAll('.time-block');
timeBlocks.forEach((block) => {
  const blockHour = parseInt(block.id.split('-')[1]);

  if (blockHour < rightnowHour) {
    block.classList.add('past');
  } else if (blockHour === rightnowHour) {
    block.classList.add('present');
  } else {
    block.classList.add('future');
  }
});

const saveBtns = document.querySelectorAll('.saveBtn');
saveBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const userText = btn.previousElementSibling.value.trim(); 
    const time = btn.parentElement.id;
    localStorage.setItem(time, userText);
  });
});

for (let i = 9; i <= 17; i++) {
  const userinputText = localStorage.getItem(`hour-${i}`);
  if (userinputText) {
    document.querySelector(`#hour-${i} textarea`).value = userinputText;
  }
}