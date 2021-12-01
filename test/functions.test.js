// IMPORT MODULES under test here:
import { 
    addExclamationPoints, 
    multiplyBySeven, 
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber } from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoint should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';
    const actual1 = addExclamationPoints ('puppy');

    expect.equal(actual1, expected1, 'puppy!!!');

    const expected2 = 'guppy!!!';
    const actual2 = addExclamationPoints ('guppy');

    expect.equal(actual2, expected2, 'guppy!!!');

    const expected3 = 'dopey!!!';
    const actual3 = addExclamationPoints ('dopey');
    expect.equal(actual3, expected3, 'dopey!!!');
    
});

test('multiplyBySeven should return a number by taking in a number and multiply it by seven', (expect) => {
    const expected1 = 21;
    const actual1 = multiplyBySeven (3);

    expect.equal(actual1, expected1, 'the return should be 21');

    const expected2 = 70;
    const actual2 = multiplyBySeven (10);

    expect.equal(actual2, expected2, 'the return should be 70');

    const expected3 = -21;
    const actual3 = multiplyBySeven (-3);

    expect.equal(actual3, expected3, 'the return should be -21');
});

test('multiplyBy12ThenHalve should return a number by taking in a number, multiply it by 12 then divide it by 2', (expect) => {
    const expected1 = 18;
    const actual1 = multiplyBy12ThenHalve (3);

    expect.equal(actual1, expected1, 'the return should be 18');

    const expected2 = 60;
    const actual2 = multiplyBy12ThenHalve (10);

    expect.equal(actual2, expected2, 'the return should be 60');

    const expected3 = -30;
    const actual3 = multiplyBy12ThenHalve (-5);

    expect.equal(actual3, expected3, 'the return should be -30');
});


test('divideThenMultiply should return a number by taking in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 16;
    const actual1 = divideThenMultiply(8, 2, 4);

    expect.equal(actual1, expected1, 'the return should be 16');

    const expected2 = 12;
    const actual2 = divideThenMultiply(10, 5, 6);

    expect.equal(actual2, expected2, 'the return should be 12');

    const expected3 = 5;
    const actual3 = divideThenMultiply(5, 2, 2);

    expect.equal(actual3, expected3, 'the return should be 5');

});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected1 = [5, 7, 3];
    const actual1 = returnAsAnArray (5, 7, 3);

    expect.deepEqual(actual1, expected1, 'the return should be an array [5, 7, 3]');

    const expected2 = [7, 17, 34];
    const actual2 = returnAsAnArray (7, 17, 34);

    expect.deepEqual(actual2, expected2, 'the return should be an array [7, 17, 34]');

    const expected3 = [-3, 0, 500];
    const actual3 = returnAsAnArray (-3, 0, 500);

    expect.deepEqual(actual3, expected3, 'the return should be an array [-3, 0, 500]');
});

test('returnAsAString should take in three numbers and return those numbers as a string', (expect) => {
    const expected1 = '573';
    const actual1 = returnAsAString (5, 7, 3);

    expect.deepEqual(actual1, expected1, 'the return should be a string consisted of 3 number inputs mashed together');

    const expected2 = '927';
    const actual2 = returnAsAString (9, 2, 7);

    expect.deepEqual(actual2, expected2, 'the return should be a string consisted of 3 number inputs mashed together');

    const expected3 = '-10750';
    const actual3 = returnAsAString (-10, 7, 50);

    expect.deepEqual(actual3, expected3, 'the return should be a string consisted of 3 number inputs mashed together');
});

test('makeLuckyGreeting should take in two numbers and return a greeting announcing the sum of those numbers is the lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 3.';
    const actual1 = makeLuckyGreeting (2, 1);

    expect.deepEqual(actual1, expected1, 'the return should be a greeting `Hello! Your lucky number for the day is 3.`');

    const expected2 = 'Hello! Your lucky number for the day is 198.';
    const actual2 = makeLuckyGreeting (8, 190);

    expect.deepEqual(actual2, expected2, 'the return should be a greeting `Hello! Your lucky number for the day is 198.`');

    const expected3 = 'Hello! Your lucky number for the day is -59.';
    const actual3 = makeLuckyGreeting (-56, -3);

    expect.deepEqual(actual3, expected3, 'the return should be a greeting `Hello! Your lucky number for the day is -59.`');
});

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected1 = 'dog';
    const actual1 = getSecondItem(['cat', 'dog', 'bird', 'snake', 'turtle']);

    expect.deepEqual(actual1, expected1, 'dog');

    const expected2 = 'banana';
    const actual2 = getSecondItem(['pear', 'banana', 'apple', 'orange']);

    expect.deepEqual(actual2, expected2, 'banana');

    const expected3 = 'jack';
    const actual3 = getSecondItem(['tom', 'jack', 'henry', 'paul']);

    expect.deepEqual(actual3, expected3, 'jack');
});

test('getLastItem should take an array and return the last item in the array', (expect) => {
    const expected1 = 'turtle';
    const actual1 = getLastItem(['cat', 'dog', 'bird', 'snake', 'turtle']);

    expect.deepEqual(actual1, expected1, 'turtle');

    const expected2 = 'orange';
    const actual2 = getLastItem(['pear', 'banana', 'apple', 'orange']);

    expect.deepEqual(actual2, expected2, 'orange');

    const expected3 = 'paul';
    const actual3 = getLastItem(['tom', 'jack', 'henry', 'paul']);

    expect.deepEqual(actual3, expected3, 'paul');
});

test('getRandomNumber should make a random number between 0 and 5', (expect) => {

    const actual1 = getRandomNumber();
    const expected1 = actual1 === 0 || actual1 === 1 || actual1 === 2 || actual1 === 3 || actual1 === 4 || actual1 === 5 ;

    expect.equal(true, expected1, 'the return value should be a random number between 0 and 5');
    
    const actual2 = getRandomNumber();
    const expected2 = 'number';

    expect.equal(typeof actual2, expected2, 'the type of the return should be a number');
});


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

