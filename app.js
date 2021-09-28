const clockEl = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button')
const intervalID = setInterval( generateTime, 1000)