function valueOriginDestination(origin: number, destination: number) {
  if (
    (origin === 11 && destination === 16) ||
    (origin === 18 && destination === 11)
  ) {
    return 1.9
  } else if (origin === 16 && destination === 11) {
    return 2.9
  } else if (origin === 11 && destination === 17) {
    return 1.7
  } else if (origin === 17 && destination === 11) {
    return 2.7
  } else if (origin === 11 && destination === 18) {
    return 0.9
  }
}

function calculateNormalPlan(
  minutes: number,
  origin: number,
  destination: number
) {
  return minutes * valueOriginDestination(origin, destination)
}

function calculateFaleMaisPlan(
  minutes: number,
  plan: number,
  origin: number,
  destination: number
) {
  if (minutes <= plan) {
    return 0.0
  } else {
    let exceedingMinutes = minutes - plan
    let originDestinationFee = valueOriginDestination(origin, destination)
    let percentValue = (originDestinationFee * 10) / 100
    let exceedingFee = originDestinationFee + percentValue

    return exceedingMinutes * exceedingFee
  }
}

export { calculateFaleMaisPlan, calculateNormalPlan }
