const original = {
  name: "Alice",
  settings: {
    theme: "dark",
    languages: ["en", "ru"]
  }
};

const copy = deepClone(original);
copy.settings.theme = "light";
copy.settings.languages.push("fr");
copy.name = "Mark";

console.log('original theme:',original.settings.theme); // "dark"
console.log('original languages:', original.settings.languages); // ["en", "ru"]
console.log('original name:', original.name); // "Alice"

//функция копирования
function deepClone(obj) {
  let copyObj = {};
  if(typeof obj !== 'object') return obj;

  // Обработка массивов
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  
  //рекурсивно копируем объекты
  for(let item in obj) {    
      copyObj[item] = deepClone(obj[item])        
  }

  return copyObj;
}