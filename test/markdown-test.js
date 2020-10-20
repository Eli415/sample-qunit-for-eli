//// Set constant variables
// Include the calculator.js file, which contains functions and exports their returns / results
const { sum, difference, quotient, product, summaryDetail } = require("../markdown");

//// These tests use Quinit and its modules to verify certain conditions then print details about passing / failing

//// TESTS THAT SHOW MARKDOWN
// TO DO: call something like summaryDetail("My summary content"); //"My summary content", "My details content"
QUnit.module('Test that writes markdown');
QUnit.test('Test that writes markdown on fail', assert => {
   // this is where we write our test
   // this should fail and print the appropriate markdown string from the summaryDetail function
   assert.equal(summaryDetail('Eli', 'Mike'), "<details><summary>Eli</summary>Mike</details>"); 
})

//// TESTS FOR SUM
QUnit.module('Tests for sum');
QUnit.test('Sum with two positive numbers', assert => {
   // this is where we write our test 
   assert.equal(sum(3, 4), 7, 'make sure 3 + 4 = 7');
   assert.equal(sum(2, 1), 3, 'make sure 2 + 1 = 3');
})

/* QUnit.test('sum with a negative and positive number', assert => {
   // this is where we write our test 
   assert.equal(sum(-3, 4), 1, 'make sure -3 + 4 = 1');
   assert.equal(sum(2, -1), 1, 'make sure 2 + (-1) = 1');
})
QUnit.test('sum with two negative numbers', assert => {
   // this is where we write our test 
   assert.equal(sum(-3, -4), -7, 'make sure -3 + (-4) = -7');
   assert.equal(sum(-2, -1), -3, 'make sure -2 + (-1) = -3');
})
*/

//// TESTS FOR DIFFERENCE
QUnit.module('Tests for difference');
QUnit.test('difference with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(difference(4, 4), 0, 'make sure 4 - 4 = 0');
    assert.equal(difference(12, 3), 9, 'make sure 12 - 3 = 9');
    assert.equal(difference(12, 0), 12, 'make sure x - zero is x');
 })

//// TESTS FOR PRODUCT
QUnit.module('Tests for product');
QUnit.test('product with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(product(4, 4), 16, 'make sure 4 * 4 = 16');
    assert.equal(product(12, 3), 36, 'make sure 12 * 3 = 36');
    assert.equal(product(12, 0), 0, 'make sure anything * zero is zero');
 })
 
//// TESTS FOR QUOTIENT
QUnit.module('Tests for quotient');
 QUnit.test('quotient with two positive numbers', assert => {
    // this is where we write our test 
    assert.equal(quotient(4, 4), 1, 'make sure 4/4 = 1');
    assert.equal(quotient(12, 3), 4, 'make sure 12/3 = 4');
    assert.equal(quotient(12, 0), Infinity, 'make sure dividing by zero is "not a number"');
 })
 