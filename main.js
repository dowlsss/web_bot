Telegram.WebApp.ready();

const tg = Telegram.WebApp;
const initData = tg.initData || '';
const initDataUnsafe = tg.initDataUnsafe || {};
const userData = tg.WebAppUser || {};
console.log(userData)

document.querySelector('#card--name').innerHTML = `Hi, ${initDataUnsafe.user.first_name}!`