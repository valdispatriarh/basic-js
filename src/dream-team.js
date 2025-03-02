const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  let arr =[]
  if(!Array.isArray(members)){return false}
  let arr2 = members.filter((el)=>
    typeof el === "string"
  ).sort()
  arr2.forEach((el) => {
  arr.push(el.trim().split("")[0].toUpperCase())
  })
  
  teamName = arr.join("")
  return teamName;
}

module.exports = {
  createDreamTeam
};
