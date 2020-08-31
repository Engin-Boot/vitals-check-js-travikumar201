const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate){
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
    return (checkBpm(bpm) && checkSpo2(spo2) && checkRespRate(respRate));
}

// var doctor = new ReportGenerator();
// var nurse = new ReportGenerator();


expect(vitalsAreOk(100,95,70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;
expect(vitalsAreOk(170, 95, 70)).to.be.false;
expect(vitalsAreOk(80, 80, 70)).to.be.false;
expect(vitalsAreOk(80, 95, 25)).to.be.false;
expect(vitalsAreOk(80, 95, 100)).to.be.false;
// checks for corner cases
expect(vitalsAreOk(70, 95, 70)).to.be.true;
expect(vitalsAreOk(150, 95, 70)).to.be.true;
expect(vitalsAreOk(83,90,70)).to.be.true;
expect(vitalsAreOk(92, 100, 30)).to.be.true;
expect(vitalsAreOk(92, 100, 95)).to.be.true;

console.log('checker is done');
