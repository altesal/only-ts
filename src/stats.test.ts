import { sum } from "./stats";

const result = sum([1,2,3]);
const expected = 6;

if(result === expected){
    console.log("✅ Test passed");
} else {
    throw new Error(`❌ Test failed: expected ${expected}, got ${result}`);
}