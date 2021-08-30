module.exports = function check(str, bracketsConfig) {
  let strBracket = bracketsConfig.flat().join("");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
      if(str[i] === " ") continue;
      let ind = strBracket.indexOf(str[i])
      if (ind % 2 === 0) {          
          if (str[i] === strBracket[ind + 1] && stack[stack.length - 1] === ind) stack.pop();
          else if (str[i] === strBracket[ind + 1] && stack[stack.length - 1] !== ind) stack.push(ind);
          else stack.push(ind);
      } 
      else if(stack.pop() !== ind-1) return false;           
  }
  return stack.length === 0
}
