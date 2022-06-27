class CustomLodash {

  // Arrays ------------------

  chunk(array, size = 1) {
    const newArray = [];
    const arrayLenth = Math.ceil(array.length / size);

    for (let i = 0; i < arrayLenth; i += 1) {
      newArray[i] = [];

      for (let j = 0; j < size; j += 1) {
        if (!!!array[j + i * size]) break;
        newArray[i][j] = array[j + i * size];
      }
    }

    return newArray;
  }

  compact(array) {
    const n = [];
    for (let i = 0, j = 0; i < array.length; i += 1) {
      if (!!!array[i]) { j += 1; continue; }
      j > 0 ? n[i - j] = array[i] : n[i] = array[i];
    }

    return n;
  }

  drop(array, n = 1) {
    if (n < 1) return array;

    const newArray = [];

    for (let i = 0; i <= n; i += 1) {
      if (!!!array[n + i]) break;
      
      newArray[i] = array[n + i];
    }

    return newArray;
  }

  dropWhile(array, predicate = _.identity) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
      if (!predicate(array[i], i, array)) {
        if (i < 1) return array;
  
        for (let j = 0; j <= i; j += 1) {
          if (!!!array[i + j]) break;
          
          newArray[j] = array[i + j];
        }
        break;
      }
    }
  
    return newArray;
  }

  take(array, n = 1) {
    const newArray = [];
    for (let i = 0; i < n; i += 1) {
      if (i > array.length) break;
      newArray[i] = array[i];
    }

    return newArray;
  }

  filter(collection, predicate = _.identity) {
    const newArray = [];
    let index = 0;
    for (const i in collection) {
      predicate(collection[i], i, collection) ? newArray[index++] = collection[i] : 0;
    }
  
    return newArray;
  }

  find(collection, predicate = _.identity, fromIndex = 0) {
    for (let i = fromIndex; i < collection.length; i += 1) {
      return predicate(collection[i], i, collection) && collection[i];
    }
  
    return undefined;
  }

  includes() {

  }

  map(collection, iteratee = _.identity) {
    const newArray = [];
    let index = 0;
    for (const i in collection) {
      newArray[index++] = iteratee(collection[i], i, collection);
    }
  
    return newArray;
  }

  zip(...array) {
    const newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
      newArray[i] = [];
      for (let j = 0; j < array.length; j += 1) {
        if (array[j][i] !== undefined) {
          newArray[i][j] = array[j][i];
        }
      }
    }

    return newArray;
  }

  // Objects ------------------

  merge(object, ...sources) {
    for (const i in sources){
      for (const k in sources[i]){
        object[k]
        ? typeof object[k] === "object"
          ? this.merge(object[k], sources[i][k])
          : object[k] = sources[i][k]
        : object[k] = sources[i][k];
      }
    }
  
    return object;
  }

  omit(object, paths) {
    const newObject = {...object};
    const arr = typeof paths === "string" ? [...paths] : paths;
    for(let i = 0; i < arr.length; i += 1) {
      delete newObject[arr[i]]
    }
  
    return newObject;
  }

  omitBy(object, predicate = _.identity) {
    const newObject = {};
    for (const k in object){
      !predicate(object[k], k) ? newObject[k] = object[k] : 0;
    }
  
    return newObject;
  }

  pick(object, paths) {
    const newObject = {...object};
    const arr = typeof paths === "string" ? [...paths] : paths;
  
    for(const key in object) {
      arr.indexOf(key) === -1 ? delete newObject[key] : '';
    }
  
    return newObject;
  }

  pickBy(object, predicate = _.identity) {
    const newObject = {};
    for (const k in object){
      predicate(object[k], k) ? newObject[k] = object[k] : 0;
    }
  
    return newObject;
  }

  toPairs(object) {
    return (object instanceof Map || object instanceof Set) ?
      [...object.entries()] :
      Object.entries(object);
  }

  // additional methods  ------------------
  identity(value) {
    return value;
  }
}

const _ = new CustomLodash;

module.exports = {
  chunk: _.chunk,
  compact: _.compact,
  drop: _.drop,
  dropWhile: _.dropWhile,
  take: _.take,
  filter: _.filter,
  find: _.find,
  includes: _.includes,
  map: _.map,
  zip: _.zip,
  merge: _.merge,
  omit: _.omit,
  omitBy: _.omitBy,
  pick: _.pick,
  pickBy: _.pickBy,
  toPairs: _.toPairs,
};