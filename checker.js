const expect = require('chai').expect;
const checkRange = require('./check-range');

function checkBpm(){
    let bpmIsInRange = checkRange.makeChecker(70, 150);
    expect(bpmIsInRange("BPM", 100)).to.be.true;
    expect(bpmIsInRange("BPM", 50)).to.be.false;
    expect(bpmIsInRange("BPM", 170)).to.be.false;
}

function checkSpo2(){
    let spo2IsInRange = checkRange.makeChecker(0, 90);
    expect(spo2IsInRange("SPO2", 70)).to.be.true;
    expect(spo2IsInRange("SPO2", -1)).to.be.false;
    expect(spo2IsInRange("SPO2", 100)).to.be.false;
}

function checkRespRate(){
    let respRateIsInRange = checkRange.makeChecker(30, 95);
    expect(respRateIsInRange("Respiration Rate", 45)).to.be.true;
    expect(respRateIsInRange("Respiration Rate", 23)).to.be.false;
    expect(respRateIsInRange("Respiration Rate", 98)).to.be.false;
}

checkBpm();
checkSpo2();
checkRespRate();
console.log('checker is done');
