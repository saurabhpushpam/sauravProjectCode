// ======== 1. Basic try...catch ========
try {
  // Code that might throw an error
  console.log('Before error');
  throw new Error('Something went wrong!');
  console.log('This will NOT run');
} catch (err) {
  console.log('Caught an error:', err.message); // Something went wrong!
}

// ======== 2. try...catch...finally ========
try {
  console.log('Inside try');
  // throw new Error('Oops!');  // Uncomment to test error
} catch (err) {
  console.log('Caught:', err.message);
} finally {
  console.log('Finally always runs');
}

// ======== 3. Throwing errors ========
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero!');
  }
  return a / b;
}

try {
  console.log('10 / 2 =', divide(10, 2)); // 5
  console.log('10 / 0 =', divide(10, 0)); // throws
} catch (err) {
  console.log('Error:', err.message);
}

// ======== 4. Custom Error Classes ========
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError'; // Customize error name
  }
}

function validateName(name) {
  if (!name || name.length < 3) {
    throw new ValidationError('Name must be at least 3 characters long');
  }
  return true;
}

try {
  validateName('Al');  // Too short
} catch (err) {
  if (err instanceof ValidationError) {
    console.log('Validation error:', err.message);
  } else {
    console.log('Other error:', err.message);
  }
}

// ======== 5. Error object properties ========
try {
  throw new Error('Sample error');
} catch (err) {
  console.log('Error name:', err.name);      // Error
  console.log('Error message:', err.message);// Sample error
  console.log('Stack trace:', err.stack);    // stack trace info
}

// ======== 6. Re-throwing errors ========
function processData(data) {
  try {
    if (!data) {
      throw new Error('No data provided');
    }
    // Process data here...
  } catch (err) {
    console.log('Caught inside processData:', err.message);
    throw err;  // re-throw to outer catch
  }
}

try {
  processData(null);
} catch (err) {
  console.log('Caught outside:', err.message);
}

// ======== 7. Asynchronous error handling with async/await ========
async function asyncTask(shouldFail) {
  if (shouldFail) {
    throw new Error('Async failure!');
  }
  return 'Async success!';
}

(async () => {
  try {
    const result = await asyncTask(false);
    console.log(result); // Async success!
    await asyncTask(true); // Will throw
  } catch (err) {
    console.log('Caught async error:', err.message);
  } finally {
    console.log('Async finally runs');
  }
})();

