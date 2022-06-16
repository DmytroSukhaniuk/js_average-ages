'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const men = people.filter(person => century
    ? Math.ceil(person.died / 100) === century && person.sex === 'm'
    : person.sex === 'm'
  );

  const averageAges = men.reduce(
    (sum, age) => sum + (age.died - age.born), 0) / men.length;

  return averageAges;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find someone who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const feMale = people.filter(woman => woman.sex === 'f');

  const ageOfFem = feMale.reduce(
    (sum, age) => sum + (age.died - age.born), 0) / feMale.length;

  return ageOfFem;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for sons and their mothers.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const children = people.filter(child => onlyWithSon
    ? people.some(
      mom => child.mother === mom.name) && child.sex === 'm'
    : people.some(mom => child.mother === mom.name)
  );

  const averageAgeDifference = children.reduce(
    (sum, child) => sum + (child.born - people.find(
      mom => child.mother === mom.name).born), 0) / children.length;

  return averageAgeDifference;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
