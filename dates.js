function getLastDayOfTheCurrentMonth(nextMonth = 1) {
  const currentDate = new Date();
  const dateFormat = { month: "short", day: "numeric", year: "numeric" };

  const lastDayOfTheMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + nextMonth,
    0
  );
  return lastDayOfTheMonth.toLocaleDateString("en-US", dateFormat);
}

function getTenthDayOfTheMonth(
  nextMonth = 1,
  firstDayOfTheMonth = 1,
  tenthDayOfTheMonth = 10
) {
  const currentDate = new Date();
  const dateFormat = { month: "short", day: "numeric", year: "numeric" };

  const firstDayOfTheNextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + nextMonth,
    firstDayOfTheMonth
  );
  const tenthDayOfTheNextMonth = new Date(
    firstDayOfTheNextMonth.getFullYear(),
    firstDayOfTheNextMonth.getMonth(),
    tenthDayOfTheMonth
  );
  return tenthDayOfTheNextMonth.toLocaleDateString("en-US", dateFormat);
}

function getLastMonthFromNow() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth();

  const pastMonth = (currentMonth - 1 + 12) % 12;

  return months[pastMonth];
}

const currentYear = new Date().getFullYear();

module.exports = {
  getLastDayOfTheCurrentMonth,
  getTenthDayOfTheMonth,
  getLastMonthFromNow,
  currentYear,
};
