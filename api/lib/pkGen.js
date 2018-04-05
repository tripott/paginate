// const slugify = require('slugify')
// const { toLower } = require('ramda')
//
// module.exports = doc => {
//   console.log('DOCS: ', doc)
//   return `${toLower(doc.type)}_${slugify(doc.name, {
//     lower: true
//   })}`
// }

const { toLower, concat, trim, compose, replace } = require('ramda')

module.exports = (prefix, value) => {
  //prefix :  "cat_"
  //value: "Big Time owner_33"
  // returns: "cat_big_time_owner_333"

  return compose(concat(prefix), replace(/ /g, '_'), trim, toLower)(value)
}
