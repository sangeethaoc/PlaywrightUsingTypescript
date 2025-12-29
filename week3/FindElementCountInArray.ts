const numArray: number[] = [2,4,5,2,1,2]; 
const check: number = 2;
//if const k = 2, then output >> 3 


function findOccurrenceOfGivenNumber(numArray : number[], check : number){
    let count: number = 0;
    
    for(let i=0; i< numArray.length; i++){
        if(numArray[i] === check){
            count++;
        }
    }
    console.log(`Number of occurrance of ${check} is : ${count}`);
}

findOccurrenceOfGivenNumber(numArray, check);

