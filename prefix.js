const longestCommonPrefix = (arr) => { 
  if (arr.length >= 1 && arr.length <= 200) {
    let result = arr[0].toLowerCase().trim();
    let length = result.length; 
    if (arr.every((obj) => obj.length >= 0 && obj.length <= 200)) {
      for (let i = 1; i < arr.length; i++) {
        while (arr[i].toLowerCase().trim().indexOf(result) !== 0) {
          result = result.substring(0, length - 1);
          length--;
          if (result === "") {
            return "There is no common prefix among the input strings.";
          }
        }
      }
      return result;
    } else {
      return "string is too long.";
    }
  } else {
    return "length  of string should be more than or equal 1 and less than or equal 200.";
  }
};

// Case : 1
const strs1 = ["flower", "flow", "flight"];
console.log("Answer Case 1 :", longestCommonPrefix(strs1));

// Case : 2
const strs2 = ["dog", "racecar", "car"];
console.log("Answer Case 2 :", longestCommonPrefix(strs2));

// Case : 3
const strs3 = ["flower", "flow", " Flight"];
console.log("Answer Case 3 :", longestCommonPrefix(strs3));

// Case : 4
const strs4 = [""];
console.log("Answer Case 4 :", longestCommonPrefix(strs4));

// Case : 5
const strs5 = [];
console.log("Answer Case 5 :", longestCommonPrefix(strs5))
