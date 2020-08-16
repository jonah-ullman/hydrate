module.exports = {
  computeWater: (age, weight, activity) => {
    let activityToInt
    switch (activity) {
      case 'low':
        activityToInt = 0
        break
      case 'medium':
        activityToInt = 1
        break
      case 'high':
        activityToInt = 2
        break
      default:
        activityToInt = 0
        break
    }
    return ((weight / 2.2) * age) / 28.3 + activityToInt * 12
  },
}
