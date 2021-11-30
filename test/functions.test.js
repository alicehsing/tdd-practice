// IMPORT MODULES under test here:
import { addExclamationPoints } from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoint should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints ('puppy');

    const expected2 = 'guppy!!!';

    const actual2 = addExclamationPoints ('guppy');

    const expected3 = 'dopey!!!';

    const actual3 = addExclamationPoints ('dopey');

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

