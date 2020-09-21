
const initialise = text => {
  return text.split(' ').map(x => x[0]).map(x => x.toUpperCase()).join('')
};

module.exports = {
  initialise,
};
