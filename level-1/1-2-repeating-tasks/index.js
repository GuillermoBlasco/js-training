
const isWorkday = date => {
  if (date.getDay() === 0) { // domingo
    return false;
  }
  if (date.getDay() === 6) {
    return false;
  }
  return true;
};

const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};
const dateToString = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
const scheduleTasks = config => {
  const { starting, repeat, each } = config;
  const tasks = [];
  let thisTaskDate = new Date(starting);
  if (!isWorkday(thisTaskDate)) {
    if (each % 7 === 0) {
      return [];
    }
  }
  for (i = 0; i < repeat; i++) {
    while (!isWorkday(thisTaskDate)) {
      thisTaskDate = addDays(thisTaskDate, each);
    }
    tasks.push(thisTaskDate);
    thisTaskDate = addDays(thisTaskDate, each);
  }
  return tasks.map(task => dateToString(task));
};

module.exports = {
  scheduleTasks,
};
