const arr = [1,[2,10,[30,40]],5,[3,7,[4,5,6,[7,8],9]]];
console.log(arr);

function flat(a,num = 1) {
  if(num <= 0) return a;
  
  let newA = [];
  for (let ind = 0; ind < a.length; ind++) {
    if(Array.isArray(a[ind])) {                 
      newA.push(...flat(a[ind], num-1));
    }
    else newA.push(a[ind]);
  };
  
  return newA;
}

console.log('ответ',flat(arr,3));