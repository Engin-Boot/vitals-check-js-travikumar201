const expect = require('chai').expect;

function checkBpm(bpm){
    if(bpm < 70){
        console.log(`Bpm is ` + bpm + `, which is less than 70`);
        return false;
    }
    else if(bpm > 150){
        console.log(`Bpm is ` + bpm + `, which is more than 150`);
        return false;
    }
    return true;
}

function checkSpo2(spo2){
    if(spo2 < 90){
        console.log(`Spo2 is ` + spo2 + `, which is less than 90`);
        return false;
    }
    return true;
}

function checkRespRate(respRate){
    if(respRate < 30) {
        console.log(`Respiration rate is ` + respRate + `, which is less than 30`);
        return false;
    }
    else if(respRate > 95){
        console.log(`Respiration rate is ` + respRate + `, which is more than 95`);
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
