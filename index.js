function createDriver() {
    let DriverId = 0;
    return class {
      constructor(name, total) {
        this.name = name;
        this.total = total;
        this.id = ++DriverId;
      }
    };
  }

  function produceDrivingRange(blockRange) {
      return function(start, end) {
          let trip = (parseInt(end, 10) - parseInt(start, 10));
          if (trip <= blockRange ) {
            return `within range by ${Math.abs(trip - blockRange)}`
          } else {
            return `${Math.abs(trip - blockRange)} blocks out of range`
          }
      }
  }

  function produceTipCalculator(total) {
    return function(tip) {
        return total * tip;
    }
  }