export const monthsToHuman = time => {
  var years = Math.floor(time / 12);
  var months = time % 12;
  var str = '';
  if (years == 1) {
    str += '1 year ';
  } else if (years > 1) {
    str += `${years} years `;
  }
  if (months == 1) {
    str += '1 month ';
  } else if (months > 1) {
    str += `${months} months `;
  }
  return str.trim();
};
