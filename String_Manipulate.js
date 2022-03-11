function  stringLength(string){
  if (string.length <1 || string.length > 10){
    return false;
  }
  return string.length
}

function reverseString(string){
  return string.split("").reverse().join("")
}

function capitalize(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
module.exports = {stringLength, reverseString, capitalize}