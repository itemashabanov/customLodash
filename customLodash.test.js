const customLodash = require('./customLodash.js');

// chunk
test('chunk: Creates an array of elements split into groups the length of size. If array can\'t be split evenly, the final chunk will be the remaining elements.', () => {
  expect(customLodash.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(customLodash.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
});

// compact
test('compact: Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
  expect(customLodash.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});

// drop
test('drop: Creates a slice of array with n elements dropped from the beginning.', () => {
  expect(customLodash.drop([1, 2, 3])).toEqual([2, 3]);
  expect(customLodash.drop([1, 2, 3], 2)).toEqual([3]);
  expect(customLodash.drop([1, 2, 3], 5)).toEqual([]);
  expect(customLodash.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});

// dropWhile
test('dropWhile: Creates a slice of array with n elements dropped from the beginning.', () => {
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(customLodash.dropWhile(users, function(o) { return !o.active; })).toEqual([{ 'user': 'pebbles', 'active': true }]);
});

// take
test('take: Creates a slice of array with n elements taken from the beginning.', () => {
  expect(customLodash.take([1, 2, 3])).toEqual([1]);
  expect(customLodash.take([1, 2, 3], 2)).toEqual([1, 2]);
  expect(customLodash.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  expect(customLodash.take([1, 2, 3], 0)).toEqual([]);
});

// filter
test('filter: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  expect(customLodash.filter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
});

// find
test('find: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(customLodash.find(users, function(o) { return o.age < 40; })).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
});

// map
test('map: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  function square(n) {
    return n * n;
  }
  expect(customLodash.map([4, 8], square)).toEqual([16, 64]);
  expect(customLodash.map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
});

// zip
test('zip: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  expect(customLodash.zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

// merge
test('merge: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
   
  var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };
  expect(customLodash.merge(object, other)).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});

// omit
test('omit: The opposite of _.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.', () => {
  expect(customLodash.omit({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toEqual({ 'b': '2' });
});

// omitBy
test('omitBy: The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn\'t return truthy for. The predicate is invoked with two arguments: (value, key).', () => {
  expect(customLodash.omitBy({ 'a': 1, 'b': '2', 'c': 3 })).toEqual({});
});

// pick
test('pick: Creates an object composed of the picked object properties.', () => {
  expect(customLodash.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
});

// pickBy
test('pickBy: Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).', () => {
  expect(customLodash.pickBy({ 'a': 1, 'b': '2', 'c': 3 })).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
});

// toPairs
test('toPairs: Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.', () => {
  function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;
  expect(customLodash.toPairs({ 'a': 1, 'b': '2', 'c': 3 })).toEqual([ [ 'a', 1 ], [ 'b', '2' ], [ 'c', 3 ] ]);
  expect(customLodash.toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]);
});