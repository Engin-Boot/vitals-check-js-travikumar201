
function makeChecker(low, high){
    function isInRange(type, value){
        if(value < low){
            console.log(`${type} is ${value} which is lower than normal`);
            return false;
        }
        else if(value > high){
            console.log(`${type} is ${value} which is higher than normal`);
            return false;
        }
        return true; 
    }
    return isInRange;
}

module.exports = { makeChecker }