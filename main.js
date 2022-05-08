Telegram.WebApp.ready();

const initData = Telegram.WebApp.initData || '';
const initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};
const userData = Telegram.WebApp.WebAppUser || {};
console.log(userData)

document.querySelector('#card--name').innerHTML = `Hi, ${initDataUnsafe.user.first_name}!`