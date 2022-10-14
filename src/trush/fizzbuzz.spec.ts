import { FizzBuzz } from "./fizzbuzz";

describe("FizzBuzz",() => {
    test("渡された数が3で割り切れる時、Fizzを返す",() => {
        expect(FizzBuzz(3)).toEqual("Fizz")
    })
    test("渡された数が5で割り切れる時、Buzzを返す",() => {
        expect(FizzBuzz(5)).toEqual("Buzz")
    })
    test("渡された数が3と5の両方で割り切れる時、FizzBuzzを返す", () => {
      expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });
});
