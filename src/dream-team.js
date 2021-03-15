module.exports = function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) return false;

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
    let a = members[i];
      arr.push(a.trim()[0].toUpperCase());
    }
  }

  if (arr.length) return arr.sort().join("");
  else return false;
};
