// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

function searchParamsToObject(formStr) {
  //"name=oliver&email=hello@oliverjam.es"

  const key_values = formStr.split('&');
  const searchObj = {};
  for (const p of key_values) {
    const [key, value] = p.split('=');
    searchObj[key] = value;
  }
  return searchObj;
}
searchParamsToObject('name=oliver&email=hello@oliverjam.es');

/*********************is leap year*********************** */
/**
 *
 * @param {Number} year
 * @returns {Boolean|String} returns string if date is negative
 */
function isLeapYear(year) {
  if (year < 0) return 'Year can not be negative';
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return true;
  return false;
}

console.log(isLeapYear(2020));

const form = document.querySelector('#isLeap');
const output = document.querySelector('#output');

const isLeapHandler = (ev) => {
  ev.preventDefault();
  const yearInputValue = Number(new FormData(form).get('year').trim());
  output.innerHTML = Number.isNaN(yearInputValue)
    ? 'Please enter number'
    : isLeapYear(yearInputValue);
};

form.addEventListener('submit', isLeapHandler);
