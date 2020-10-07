const params = {
  "_page" : 10,
  "name_like": "batman"
};
// ?_page=10&name_like=batman
// '?' + ['_page=10','name_like=batman'].join('&')
Object.keys(params) // ['_page', 'name_like']

const makeQuery = params => {
  if (!params || Object.keys(params).length === 0) {
    return '';
  }
  return '?' + Object.keys(params).map(key => key + "=" + params[key]).join('&')
};
