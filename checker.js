const expect = require('chai').expect;
function ReportGenerator(){
    this.checkBpm = function(bpm){
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
    
    this.checkSpo2 = function(spo2){
        if(spo2 < 90){
            console.log(`Spo2 is ` + spo2 + `, which is less than 90`);
            return false;
        }
        return true;
    }
    
    this.checkRespRate = function(respRate){
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
    this.vitalsAreOk = function(bpm, spo2, respRate) {
        return (this.checkBpm(bpm) && this.checkSpo2(spo2) && this.checkRespRate(respRate)); 
    }
}

var doctor = new ReportGenerator();
var nurse = new ReportGenerator();


expect(doctor.vitalsAreOk(100,95,70)).to.be.true;
expect(doctor.vitalsAreOk(50, 95, 70)).to.be.false;
expect(doctor.vitalsAreOk(170, 95, 70)).to.be.false;
expect(nurse.vitalsAreOk(80, 80, 70)).to.be.false;
expect(nurse.vitalsAreOk(80, 95, 25)).to.be.false;
expect(nurse.vitalsAreOk(80, 95, 100)).to.be.false;

console.log('checker is done');
