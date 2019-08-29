function produceDrivingRange(blockRange) {
  return function(start, end) {
    let dist = Math.abs(parseInt(start) - parseInt(end));
    
    if (dist < blockRange) {
      return `within range by ${blockRange - dist}`;
    } else {
      return `${dist - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return tipPercent * fare;
  }
}

function createDriver() {
  let driverId = 0;
  
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}