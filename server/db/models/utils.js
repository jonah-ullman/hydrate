module.exports = {
  computeWater: (weight, activity) => {
    return weight * 0.67 + (activity / 30) * 12
  },
}
