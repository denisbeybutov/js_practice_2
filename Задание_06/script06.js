const array = [
  { name: 'width', value: 123 },
  { name: 'height', value: 222 }
  ];
// {width: 123, height: 222} - должно получиться из массива выше

console.log(array);

const obj = {};

for( let item = 0; item < array.length; item++ ) {
  let objectOfArr = array[item];
  obj[objectOfArr.name] = objectOfArr.value;  
}

console.log(obj);