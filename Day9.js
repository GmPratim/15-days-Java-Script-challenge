// Chapter 9: Null, undefined and NaN
//
// Four tasks, one export each. Write each function in place of
// its throw line (task 4 is an array you fill in), then press
// Check.

// Task 1: a number, or null when there is none
//
// When the text is a number (spaces around it allowed), return
// that number. When there is no number, return null: for blank
// text, and for text that Number cannot read.
//
//   Export:   parseQty(text)
//   Returns:  a number, or null
//   Example:  parseQty('3') gives 3
//             parseQty(' 4 ') gives 4
//             parseQty('two') gives null
//   Edge:     '0' gives 0, a real answer, and '' and '   '
//             give null
//
// Careful: Number('') is 0, not NaN, so blank text needs its
// own test.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function parseQty(text) {
  if (text.trim() === '') {
    return null;
  }

  const num = Number(text.trim());

  return Number.isNaN(num) ? null : num;
}

// Task 2: a label for every kind of reading
//
// Return a label for the milk thermometer's reading:
//   undefined   gives 'Not read yet'
//   null        gives 'No sensor'
//   NaN         gives 'Sensor error'
//   any number  gives the number and °C, like '85°C'
//
//   Export:   cleanReading(reading)
//   Returns:  a string
//   Example:  cleanReading(85) gives '85°C'
//   Edge:     0 is a real reading: cleanReading(0) gives '0°C'
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function cleanReading(reading) {
  // throw new Error('Not implemented');
  if (Number.isNaN(reading)){
    return 'Sensor error'
  } else if(reading === null){
    return 'No sensor'
  } else if (reading === undefined){
    return 'Not read yet'
  }
  return `${reading}°C`
}

// Task 3: defaults that keep a cleared note
//
// Return a new object with item (copied), qty and note. A qty
// that is undefined becomes 1, and a note that is undefined
// becomes ''. Every other value is kept: a qty of 0 stays 0,
// and a note set to null (cleared on purpose) stays null. Do
// not change the order you are given.
//
//   Export:   fillMissing(order)
//   Returns:  { item, qty, note }
//   Example:  fillMissing({ item: 'Masala chai' }) gives
//             { item: 'Masala chai', qty: 1, note: '' }
//             fillMissing({ item: 'Bun maska', qty: 0,
//             note: null }) gives
//             { item: 'Bun maska', qty: 0, note: null }
//   Edge:     a qty set to undefined becomes 1 too
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function fillMissing(order) {
  // throw new Error('Not implemented');
  return {
    item: order.item,
    qty: order.qty === undefined ? 1 : order.qty,
    note: order.note === undefined ? '' : order.note
  };
}

// Task 4 (interview question): NaN, isNaN and Object.is
//
// Predict what each expression below gives, and export the ten
// answers in this order. Nine are true or false, and the typeof
// one is text, written as a string. The check works out the
// same ten expressions and compares.
//
//   Export:   emptinessPredictions
//   Returns:  an array of ten values
//
//   NaN === NaN
//   Number.isNaN(NaN)
//   isNaN('chai')
//   Number.isNaN('chai')
//   Object.is(NaN, NaN)
//   typeof NaN
//   null == undefined
//   null === undefined
//   0 === -0
//   Object.is(0, -0)
//
// The interviewer will ask: what does each of isNaN and
// Number.isNaN check, and when can Object.is and === give
// different answers?
//
// Stuck? Press "What do I do next?" under this task. Write
// your ten answers between the square brackets.
export const emptinessPredictions = [false,
  true,
  true,
  false,
  true,
  'number',
  true,
  false,
  true,
  false
];
