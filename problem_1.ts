{

const sumArray = (numbers: number[]): number => {
    const sum = numbers.reduce((acc : number, current : number) : number => acc + current, 0);
    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));

}

