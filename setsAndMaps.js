//Question 1
// {1,2,3,4}


//question2
//"ref"

//question 3
//0: {Array(3) => true}
//1: {Array(3) => false}


//Question 4
const hasDuplicate = arr => new Set(arr).size !== arr.length

//question 5

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if("aeiou".includes(char)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }


  console.log(vowelCount("Peneneiioio"))