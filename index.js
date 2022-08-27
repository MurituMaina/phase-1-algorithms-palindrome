function isPalindrome(word) {
  // Write your algorithm here
  //get the word
  //check the letters left to right
  //compare the letters read from right to left
  ////test case
  // word; has four letters w,o,r,d
  //right to left; d,r,o,w
  //compare the first to the fourth for equity
  //and output the boolean true if match and false otherwise
for(let letter of word){
   let i = word.indexOf(letter)
  if(letter === word[word.length-1-i]){
    console.log("True")
    return true;
  }
  else{
    console.log("False!!")
    return false;
  }
 
}

}


/* 
  Add your pseudocode here
  for each letter of word
  compare 1st letter with last letter[word.length -1- i]
  if they match return true
  otherwise/ else return false
*/

/*
  Add written explanation of your solution here
loop/ check through the word
check the length of the word
start comparing the letter(which is the ith position) with the last in ith position from the other side
(where variable letter is the first letter in the word and word[word.length-1-i] (last one in the first case)is the letter in the same 
  position with letter from the right side of the word )
  /finally return true if the word is palindrome else return false.



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting:true");
  console.log("=>", isPalindrome("abba"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"))
}

module.exports = isPalindrome;
// isPalindrome("abba")
// isPalindrome("racecar")
// isPalindrome("a")
// isPalindrome("robot")
// isPalindrome("ab")
