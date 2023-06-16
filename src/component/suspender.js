export default function suspender(promise, reducer) {
  let status = "pending";
  let result = {
    initialValue: null,
    lastUpdated: null
  }
  let outCome = promise.then(
    (r) => {
      status = "success";
      result.lastUpdated = {...r}
      result.initialValue = {...r}
    },
    (e) => {
      status = "error";
      result = e
    }
  );

  return {
    read(notModified = false) {
      if (status === "pending") {
        throw outCome;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        if(notModified){
          return result.initialValue
        }
        return result.lastUpdated
      }
    },
    write(value) {
      if (reducer) {
        result.lastUpdated = reducer(result.lastUpdated, value)
      } else {
        result.lastUpdated = value
      }
    }
  }
}