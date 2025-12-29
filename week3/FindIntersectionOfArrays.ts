const firstArray: number[] = [-1, 2, 3, 4, 5, 6, 2, 7, 8, 0];
const secondArray: number[] = [1, 2, 1, 3, 4, 5, 6, 7, 8, 9, -1];

function findIntersection(firstArray : number[], secondArray : number[]): number[]{
    const resultArray = [];

    for(let i=0; i < firstArray.length; i++){

        for(let j=0; j< secondArray.length; j++){

                if(firstArray[i] === secondArray[j] && !resultArray.includes(firstArray[i])){
                    resultArray.push(firstArray[i]);
                    break;
                }
        }
    }

    return resultArray;
}

console.log("Intersection of two given array is : "+findIntersection(firstArray, secondArray));