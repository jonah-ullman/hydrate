const {expect} = require('chai')
const utils = require('./utils')

describe('Water calculation utility function', () => {
  it('Returns the correct value given valid input', () => {
    expect(utils.computeWater(150, 30)).to.be.equal(112.5)
    expect(utils.computeWater(210, 0)).to.be.equal(140.70000000000002)
  })
})
