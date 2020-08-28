const expect = require('chai').expect;

function checkBpm(bpm){
    if(bpm < 70 || bpm > 150){
        return false;
    }
    return true;
}

function checkSpo2(spo2){
    if(spo2 < 90){
        return false;
    }
    return true;
}

function checkRespRate(respRate){
    if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}
function vitalsAreOk(bpm, spo2, respRate) {
    return (checkBpm(bpm) && checkSpo2(spo2) && checkRespRate(respRate)); 
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;
expect(vitalsAreOk(170, 95, 70)).to.be.false;
expect(vitalsAreOk(80, 80, 70)).to.be.false;
expect(vitalsAreOk(80, 95, 25)).to.be.false;
expect(vitalsAreOk(80, 95, 100)).to.be.false;

console.log('checker is done');
