function produceDrivingRange(blockRange) {
    return function withinRange(block1, block2) {
      let blocks = parseInt(block2) - parseInt(block1)

      let inRange = blocks <= blockRange 

      return (inRange ? `within range by ${blockRange - blocks}` : `${blocks - blockRange} blocks out of range`)
    }
}
  
function produceTipCalculator(fare) {
    return function calculateTip(percent) { return fare * percent}
}
  
function createDriver() {
    let driverId = 0
  
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}
