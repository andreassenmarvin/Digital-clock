const clockEl = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button')
const intervalID = setInterval( generateTime, 1000)

function generateTime (){
    const format = clockEl.getAttribute('data-format');
    const date = new Date;
    let hour = date.getHours();
    let timeStatus = '';
    const min = ("0" + date.getMinutes()).substr(-2);
    const sec = ("0" + date.getSeconds()).substr(-2);
    if (format === '12') {
      timeStatus = (hour >= 12) ? 'PM' : 'AM';
      hour = (hour > 12) ? hour % 12 : hour;
    }
    clockEl.innerHTML = `<h1>${hour} : ${min} : ${sec} ${timeStatus}</h1>`
  }

  buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      const format = button.getAttribute('data-format');
      clockEl.setAttribute('data-format', format);
      generateTime();
    })
  })