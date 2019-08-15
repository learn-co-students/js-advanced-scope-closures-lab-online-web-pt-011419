function produceDrivingRange(num1) {
    return function blockRange(num1range, num2range) {
        const r1 = Number(num1range.slice(0, -2));
        const r2 = Number(num2range.slice(0, -2));

        if (r2 - r1 < num1){
            return `within range by ${r2-r1}`
        } else {
            return `${Math.abs(num1-(r2-r1))} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function percentTip(fare){
        return fare * percent
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId
        }
    }
}