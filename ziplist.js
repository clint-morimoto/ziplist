/**
 * Write a function called zipList that accepts two lists of equal length and returns the result of
 * alternately taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the
 * function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a
 * function called zipListTheSimpleWay that does the same thing using Underscore.
 * Created by Clint on 9/19/2016.
 */

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i += 1) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
