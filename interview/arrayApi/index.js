function flattenDeep(list) {
  // type check

  if(!isArray(list)) {
    return [list];
  }
  let rt = [];
  list.forEach((item) => {
    if(!isArray(item)) {
      rt.push(item);
    } else {
      rt = rt.concat(flattenDeep(item));
    }
  })
  return rt;
}
function isArray(data) {
  return Object.prototype.toString.call(data) === "[object Array]";
}

// integer
// function canSumThree(list, total) {
//   // cach two items sum, key: ['k1-k2'], v:sum2
//   var temp = {};
//   for(let i = 0; i < list.length - 2; i++) {
//     for(let j = i + 1; j < list.length - 1; j++) {
//       let sum2 = list[i] + list[j];
//       if(temp[sum2] === void 0) {
//         temp[sum2] = [`${i}-${j}`];
//       } else {
//         temp[sum2].push(`${i}-${j}`);
//       }
//     }
//   }
//   let isAble = false;
//   let items;
//   for(let k = 0; k < list.length; k++ ) {
//     let remain = total - list[k];
//     let candidate = temp[remain];
//     if(candidate) {
//       candidate.forEach((str) => {
//         const k1 = str.split('-')[0];
//         const k2 = str.split('-')[1];
//         if(k !== k1 && k!== k2) {
//           isAble = true;
//           items = [list[k], list[k1], list[k2]];
//         }
//       })
//     }
//   }
//
//   return {
//     isAble,
//     items
//   }
// }

function canSumThree(list, total) {
  list.sort((a, b) => {
    return a - b;
  });
  let results = [];
  for(let i = 0; i < list.length - 2; i++) {
    let j = i + 1;
    let k = list.length - 1;
    while(j < k) {
      const tempSum = list[i] + list[j] + list[k];
      if(tempSum === total) {
        results = [list[i], list[j], list[k]];
        break;
      }
      if(tempSum > total) {
        k--;
      }
      if(tempSum < total) {
        j++;
      }
    }
  }
  return results;

}