import Countdown from "./coundown.js";

const diasParaONatal = new Countdown('24 December 2023 23:59:59 GMT-0300');

console.log(diasParaONatal.days)
console.log(diasParaONatal.hours)
console.log(diasParaONatal.total)
setInterval(() => {
  console.log(diasParaONatal.total)
}, 6000)