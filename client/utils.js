export const calculateWaterIncrements = (waterTotal) => {
  const fifth = Math.ceil(waterTotal / 5)
  return [waterTotal, fifth * 4, fifth * 3, fifth * 2, fifth]
}
