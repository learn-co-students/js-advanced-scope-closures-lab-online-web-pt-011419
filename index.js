function produceDrivingRange(blockRange) {
  return function rangeCalculator(block1, block2) {
    let block = parseInt(block2) - parseInt(block1);
    if (block <= blockRange) {
      return `within range by ${blockRange - block}`;
    } else {
      return `${block - blockRange} blocks out of range`;
    };
  };
}


function produceTipCalculator(fare) {
  return function calculateTip(percent) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
