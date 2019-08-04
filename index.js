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
  function produceDrivingRange(range) {
    return function (start, end) {
      let trip = (parseInt(end, 10) - parseInt(start, 10));
      if (trip <= range ) {
        return `within range by ${Math.abs(trip - range)}`
      } else {
        return `${Math.abs(trip - range)} blocks out of range`
      }

    }
  }
  function produceTipCalculator(total){
    return function(tipRate) {
      return total * tipRate;
    };
  }
