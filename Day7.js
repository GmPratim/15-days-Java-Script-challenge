// Chapter 7: Type coercion
//
// Four tasks, one export each. Task 1 is a bug to fix, task 2
// is a function to write in place of its throw line, and tasks
// 3 and 4 are arrays you fill in. Then press Check.

// Task 1: fix the cart that joins instead of adding
//
// cartQty is the number already in the cart. typed is what the
// customer typed in the quantity box: always a string of
// digits, like '2'. Return the new quantity as a number.
// It is broken now: it gives back text instead of the sum.
//
//   Export:   addToCart(cartQty, typed)
//   Returns:  a number
//   Example:  addToCart(1, '2') gives 3
//             addToCart(5, '10') gives 15
//
// Stuck? Press "What do I do next?" under this task. Fix the
// return line below.
export function addToCart(cartQty, typed) {
  return cartQty + Number(typed);
}

// Task 2: real numbers and booleans from the form
//
// Every field of the form is a string. Return a new object with
// the same three keys: qty and tableNumber as numbers, and
// extraGinger as a boolean: true when the field is the word
// 'true', false when it is the word 'false'.
//
//   Export:   readForm(form)
//   Returns:  { qty, tableNumber, extraGinger }
//   Example:  readForm({ qty: '2', tableNumber: '07',
//             extraGinger: 'false' }) gives
//             { qty: 2, tableNumber: 7, extraGinger: false }
//
// Careful: the word 'false' is not empty text, so Boolean
// cannot read it.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function readForm(form) {
  // throw new Error('Not implemented');
  // `Fuel: ${fuel < 3 ? 'low' : 'ok'}`
  const boll = form.extraGinger === 'false' ? false : true 
  // const boll = form.extraGinger === 'true';
  return {qty: Number(form.qty), tableNumber: Number(form.tableNumber), extraGinger: boll}
}

// Task 3: what mixed-type sums give
//
// Predict what each expression below gives, and export the
// seven answers in this order. The type counts: write a string
// answer in quotes, and a number answer without quotes. The
// check works out the same seven expressions and compares.
//
//   Export:   arithmeticPredictions
//   Returns:  an array of seven values
//
//   '5' + 3
//   '5' - 3
//   '5' * '2'
//   true + 1
//   1 + 2 + '3'
//   '1' + 2 + 3
//   'chai' * 2
//
// Stuck? Press "What do I do next?" under this task. Write
// your seven answers between the square brackets.
export const arithmeticPredictions = ['53', 2, 10, 2, "33", "123", NaN];

// Task 4 (interview question): what == really says
//
// Predict true or false for each comparison below, and export
// the eight answers in this order. The check works out the same
// eight comparisons and compares.
//
//   Export:   looseEqualityPredictions
//   Returns:  an array of eight booleans
//
//   [] == false
//   '' == 0
//   '0' == false
//   null == 0
//   null == undefined
//   '1' == 1
//   NaN == NaN
//   [] == ![]
//
// The interviewer will ask: what does == convert, in which
// order, and why should you use === instead?
//
// Stuck? Press "What do I do next?" under this task. Write
// your eight answers between the square brackets.
export const looseEqualityPredictions = [true, true, true, false, true, true, false, true];
