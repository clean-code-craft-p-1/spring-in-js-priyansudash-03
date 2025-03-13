
export function computeStatistics(numbers){
    
    // implement the computation of statistics here
    if(numbers.length === 0){
        return {
            average: NaN,
            min: NaN,
            max: NaN
        };
    }
    numbers.sort();
    var average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return {
        average: average,
        min: numbers[0],
        max: numbers[numbers.length-1]
    };
}
