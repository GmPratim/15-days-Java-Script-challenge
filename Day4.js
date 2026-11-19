// Chapter 4: Numbers and Math
//
// Five tasks, one function each. Write each function in place
// of its throw line, then press Check.

// Task 1: whole-rupee shares and what is left
//
// total is a bill in whole rupees, and people is how many share
// it (at least 1). Return each, the whole rupees every person
// pays (the share rounded down), and left, the rupees left
// over.
//
//   Export:   splitBill(total, people)
//   Returns:  { each, left }
//   Example:  splitBill(125, 3) gives { each: 41, left: 2 }
//   Edge:     an even split leaves 0: splitBill(120, 3) gives
//             { each: 40, left: 0 }
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function splitBill(total, people) {
  // throw new Error('Not implemented');
  return {each: Math.floor(total / people), left: (total - (Math.floor(total / people) * people))}
}

// Task 2: the number of cups from typed text
//
// Read the whole number at the start of what the customer typed
// and return it as a number. Spaces before the number are fine,
// and reading stops at the first character that is not a digit.
//
//   Export:   parseCups(text)
//   Returns:  a number
//   Example:  parseCups('3 cups') gives 3
//             parseCups('  4 ') gives 4
//             parseCups('2.5') gives 2
//   Edge:     text that does not start with a number gives 0:
//             parseCups('two') and parseCups('') both give 0
//
// Careful: NaN is not equal to anything, not even NaN, so
// triple equals cannot find it.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function parseCups(text) {
  // throw new Error('Not implemented');
  const text2 = parseInt(text)
  // if (Number.isInteger(text2)){
  //   return text2
  // }else if(Number.isNaN(text2)){
  //   return 0
  // } else{
  //   return 0
  // }
  if (Number.isNaN(text2)){
    return 0
  }
  return text2
}

// Task 3 (interview question): 0.1 + 0.2 that comes out as 0.3
//
// Add two wallet amounts in rupees and round the sum to the
// nearest paisa (two decimal places). Return a number, not
// text.
//
//   Export:   addMoney(a, b)
//   Returns:  a number
//   Example:  addMoney(0.1, 0.2) gives 0.3
//             addMoney(19.99, 0.01) gives 20
//   Edge:     whole amounts stay whole: addMoney(40, 25)
//             gives 65
//
// The interviewer will ask: why is 0.1 + 0.2 not 0.3 in
// JavaScript, and how do you handle money safely?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function addMoney(a, b) {
  // throw new Error('Not implemented');
  return Number((a+b).toFixed(2))
}

// Task 4: a price with two decimals
//
// Return text: the rupee sign ₹ followed by the amount rounded
// to exactly two decimal places, with no space between them.
//
//   Export:   formatPrice(amount)
//   Returns:  a string
//   Example:  formatPrice(42.5) gives '₹42.50'
//             formatPrice(12.345678) gives '₹12.35'
//   Edge:     a whole amount still shows two decimals:
//             formatPrice(40) gives '₹40.00'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function formatPrice(amount) {
      return `₹${amount.toFixed(2)}`;

}

// Task 5: whole numbers from 1 to 20
//
// Return true only when qty is a whole number, of the number
// type, from 1 to 20 (1 and 20 included), and false for
// everything else.
//
//   Export:   isValidQty(qty)
//   Returns:  true or false
//   Example:  isValidQty(2) gives true
//             isValidQty(20) gives true
//   Edge:     0, 21, -3, 2.5, NaN and the text '2' give false
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function isValidQty(qty) {
  return Number.isInteger(qty) && qty >= 1 && qty <= 20;
}
