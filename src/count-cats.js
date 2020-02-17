module.exports = function countCats(backyard) {
  let counter = 0,
      re = /^\^\^$/;
  for (let row of backyard) {
    row.forEach(i => re.test(i) && counter++)
  }
  return counter;
};
