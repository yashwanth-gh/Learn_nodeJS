// Sample Node.js code with intentional issues for debugging practice

const addNumbers = (a, b) => {
    // Intentional issue: Typo in variable name
    const result = a + b; 

    // Intentional issue: Unused variable
    // const unusedVariable = 'This variable is not used';

    return result;
};

const multiplyNumbers = (x, y) => {
    // Intentional issue: Incorrect multiplication
    return x * y + 1;
};

const main = () => {
    // Intentional issue: Missing argument
    const sum = addNumbers(10,11);

    // Intentional issue: Incorrect argument types
    const product = multiplyNumbers(5, 2);

    // Intentional issue: Unreachable code
    console.log('This line is never reached.');

    console.log('Sum:', sum);
    console.log('Product:', product);
};

// Call the main function
main();
