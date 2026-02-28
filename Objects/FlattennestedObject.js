//  Flatten a nested object  :    { a: { b: { c: 1 }}} → { "a.b.c": 1 }


function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // Recursively flatten nested objects
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}


const nested = { 
  a: { 
    b: { 
      c: 1 
    },
    d: 2
  },
  e: 3
};

console.log(flattenObject(nested));
