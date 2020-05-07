const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];
  function resolve(value) {
    if (value instanceof myPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = RESOLVED;
        that.value = value;
        that.resolvedCallbacks.map(cb => cb(that.value));
      }
    }, 0);
  }

  function reject(value) {
    setTimeout(() => {
      if (that.state == PENDING) {
        that.state = REJECTED;
        that.value = value;
        that.rejectedCallbacks.map(cb => cb(that.value));
      }
    }, 0);
  }

  function resolutionProcedure(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Error'));
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };

  if (that.state === PENDING) {
    // that.resolvedCallbacks.push(onFulfilled);
    // that.rejectedCallbacks.push(onRejected);
    return (promise2 = new myPromise((resolve, reject) => {
      that.resolvedCallbacks.push(() => {
        try {
          const x = onFulfilled(that.vule);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r)
        }
      })

      that.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(that.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch {
          reject(r);
        }
      })
    }))
  }

  if (that.state === RESOLVED) {
    onFulfilled(that.value);
  }

  if (that.state === REJECTED) {
    onRejected(that.value);
  }
}




