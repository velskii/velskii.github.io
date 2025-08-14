
function sumUsingForEach(arr: number[]) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

function sumUsingReduce(arr: number[]) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function sumUsingForOf(arr: number[]) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function sumUsingForLoop(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }
    return sum;
}

const largeArray = Array.from({length: 1000000}, (_, i) => Math.floor(Math.random() * 1000));

Deno.bench({
    name: "sumUsingForEach",
    fn() {
        sumUsingForEach(largeArray);
    }
});

Deno.bench({
    name: "sumUsingReduce",
    fn() {
        sumUsingReduce(largeArray);
    }
});

Deno.bench({
    name: "sumUsingForOf",
    fn() {
        sumUsingForOf(largeArray);
    }
});

Deno.bench({
    name: "sumUsingForLoop, traditional for loop",
    baseline: true,
    fn() {
        sumUsingForLoop(largeArray);    
    }
});