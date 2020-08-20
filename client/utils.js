export const calculateWaterIncrements = (waterTotal) => {
  const fifth = Math.ceil(waterTotal / 5)
  return [fifth, fifth * 2, fifth * 3, fifth * 4, waterTotal]
}
