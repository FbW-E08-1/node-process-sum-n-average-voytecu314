const args = process.argv.slice(2);

const func1 = () => {
     const sum = args.slice(1).reduce((acc, cur) => parseInt(acc) + parseInt(cur));
     return sum;
}

const func2 = () => {
    const sum = args.slice(1).reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    const average = sum/(args.length - 1);
    return average;
}

const func3 = () => {
    const numbers = (args.slice(1)).map(item=>parseInt(item))
    numbers.sort((a,b)=>a-b);
    console.log(numbers);
    const lnght = numbers.length;
    if(lnght%2!==0) return numbers[Math.floor(lnght/2)];
    else return (numbers[lnght/2]+numbers[(lnght/2)-1])/2; 
}



switch (args[0]) {

    case 'sum': console.log(func1());
    break;

    case 'avg': console.log(func2());
    break;

    case 'med': console.log(func3());
    break;

    default: console.log("I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)");
        break;
}
