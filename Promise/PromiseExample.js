// ======== 1. Creating a Promise ========
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // change to false to test rejection
    if (success) {
      resolve('Promise resolved successfully!');
    } else {
      reject('Promise rejected with error!');
    }
  }, 1000);
});

// ======== 2. Consuming Promise with then/catch ========
myPromise
  .then(result => {
    console.log('Then:', result);
    return 'Passing data to next then';
  })
  .then(data => {
    console.log('Second then:', data);
  })
  .catch(error => {
    console.error('Catch:', error);
  })
  .finally(() => {
    console.log('Finally: runs regardless of success or failure');
  });

// ======== 3. Promise.resolve and Promise.reject ========
const resolvedPromise = Promise.resolve('Immediately resolved');
const rejectedPromise = Promise.reject('Immediately rejected');

resolvedPromise.then(console.log);
rejectedPromise.catch(console.error);

// ======== 4. Promise chaining example ========
function asyncAdd(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x + y), 500);
  });
}

asyncAdd(5, 10)
  .then(sum => {
    console.log('Sum:', sum);
    return asyncAdd(sum, 20);
  })
  .then(newSum => {
    console.log('New Sum:', newSum);
  });

// ======== 5. Promise.all: wait for multiple promises ========
const p1 = Promise.resolve(3);
const p2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
const p3 = 7;

Promise.all([p1, p2, p3])
  .then(values => {
    console.log('Promise.all values:', values); // [3, 42, 7]
  })
  .catch(err => {
    console.error('Promise.all error:', err);
  });

// ======== 6. Promise.race: first settled promise ========
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));

Promise.race([slow, fast])
  .then(value => {
    console.log('Promise.race winner:', value); // Fast
  });

// ======== 7. Promise.allSettled: wait for all settled ========
const pSuccess = Promise.resolve('Success');
const pFail = Promise.reject('Failed');

Promise.allSettled([pSuccess, pFail])
  .then(results => {
    results.forEach((result, i) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${i} fulfilled with`, result.value);
      } else {
        console.log(`Promise ${i} rejected with`, result.reason);
      }
    });
  });

// ======== 8. Promise.any: first fulfilled promise (ignore rejections) ========
const pReject1 = Promise.reject('Reject 1');
const pReject2 = Promise.reject('Reject 2');
const pResolve = Promise.resolve('First fulfilled');

Promise.any([pReject1, pReject2, pResolve])
  .then(value => {
    console.log('Promise.any fulfilled with:', value);
  })
  .catch(err => {
    // All rejected case
    console.error('Promise.any rejected:', err);
  });

// ======== 9. Converting callback style function to Promise (promisify) ========
function asyncTaskCallback(success, callback) {
  setTimeout(() => {
    if (success) {
      callback(null, 'Callback success!');
    } else {
      callback('Callback error!');
    }
  }, 500);
}

function promisifyAsyncTask(success) {
  return new Promise((resolve, reject) => {
    asyncTaskCallback(success, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

promisifyAsyncTask(true).then(console.log).catch(console.error);
promisifyAsyncTask(false).then(console.log).catch(console.error);

// ======== 10. Async/Await with Promises ========
async function asyncFunction() {
  try {
    const result = await promisifyAsyncTask(true);
    console.log('Async/Await result:', result);
    const failResult = await promisifyAsyncTask(false); // will throw
    console.log('This will not run:', failResult);
  } catch (error) {
    console.error('Async/Await caught error:', error);
  } finally {
    console.log('Async/Await finally block');
  }
}

asyncFunction();
