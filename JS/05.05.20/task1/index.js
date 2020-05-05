//const buildObject = (keysList, valuesList) => {
//   const arr = [];

//   for (let i = 0; i < keysList.length; i++) {
//        arr.push([keysList[i], valuesList[i]]);
//  }

//  const obj = Object.fromEntries(arr);

//  return obj;
//};

//const buildObject = (keysList, valuesList) => {
//   let obj ={};
//   for (let i = 0; i < keysList.length; i++){
//       obj ={...obj,[keyList[i]]: valueList[i] }
//   }
//   return obj 
//}
function buildObject(keyList, valuesList) {
    keyList.reduce((acc, key, index) => {
        return {
            [key]: valueList[index]
        } /// перезаписивает  значение  


    }, obj);
}

let keys = ['name', 'age'];
let values = ['Tom', 40]