"use strict";

var end_date = {
  "full_year": "2021",
  // Год
  "month": "05",
  // Номер месяца
  "day": "21",
  // День
  "hours": "12",
  // Час
  "minutes": "00",
  // Минуты
  "seconds": "00" // Секунды

};
var counterWithDay = document.getElementById('counter2');
var counterWithoutDay = document.getElementById("counter");

function diffSubtract(date1, date2) {
  return date2 - date1;
}

var end_date_str = "".concat(end_date.full_year, "-").concat(end_date.month, "-").concat(end_date.day, "T").concat(end_date.hours, ":").concat(end_date.minutes, ":").concat(end_date.seconds),
    timer = setInterval(function () {
  var now = new Date();
  var date = new Date(end_date_str);
  var ms_left = diffSubtract(now, date);

  if (ms_left <= 0) {
    clearInterval(timer);
  } else {
    var res = new Date(ms_left);
    var timerInnerHtml = "".concat(res.getUTCDate() - 1, "\u0414 ").concat(res.getUTCHours(), ":").concat(res.getUTCMinutes(), ":").concat(res.getUTCSeconds());
    counterWithDay.innerHTML = timerInnerHtml;
    counterWithoutDay.innerHTML = timerInnerHtml;
  }
}, 1000);
var rulesBlockAll = document.querySelectorAll('.rules-block');
rulesBlockAll.forEach(function (e) {
  var rulesTitle = e.querySelector('.rules-title');
  var hideBlock = e.querySelector('.hide-block');
  rulesTitle.addEventListener('click', function (e) {
    hideBlock.classList.toggle('active');
  });
});