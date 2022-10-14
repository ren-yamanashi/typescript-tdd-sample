export const FizzBuzz = (N:number) => {
    for(let i=1;i<=N;i++){
        if (N % 3 === 0 && N % 5 === 0) return "FizzBuzz";
        if (N % 3 === 0) return "Fizz";
        if (N % 5 === 0) return "Buzz";
    }
}