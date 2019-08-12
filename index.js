function produceDrivingRange(blockRange) {
    return function (startBlock, endBlock){
        let start = parseInt(startBlock)
        let end = parseInt(endBlock)

        const num = Math.abs(end - start)
        if (num <= blockRange){
            return `within range by ${blockRange - num}`
        } else {
             return `${num - blockRange} blocks out of range`
        }   
       
    }
}

function produceTipCalculator(fare) {
    return function (percent) {
        return fare * percent
    }
}

function createDriver() {
    let driverId = 0
    return class Driver {
        constructor(name){
            this.name = name
            this.id = ++driverId
        }
    }
    

    
}