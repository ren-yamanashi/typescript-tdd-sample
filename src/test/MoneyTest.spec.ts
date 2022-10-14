// MoneyTest.spec.ts
import { Bank } from "../Bank";
import { Money } from "../Money";
import { Sum } from "../Sum";
import { Expression } from "../Expression";

describe("MoneyTest", () => {
  test("times()", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });
  test("equals() ", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  });
  test("currency()", () => {
    expect(Money.dollar(1).currency()).toEqual("USD");
    expect(Money.franc(1).currency()).toEqual("CHF");
  });
  test("simpleAddition", () => {
    const bank = new Bank();
    const five: Money = Money.dollar(5);
    const sum: Expression = five.puls(five);
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
  });
  test("pulsReturnsSum", () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.puls(five);
    const sum: Sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });
  test("reduceSum", () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });
  test("testReduceMoney", () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
  });
  test("reduceMoneyDifferentCurrency", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  });
  test("identityRate", () => {
    expect(new Bank().rate("USD", "USD")).toEqual(1);
  });
  test("$5 + 10CHF = $10", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result: Money = bank.reduce(fiveBucks.puls(tenFranc), "USD");
    expect(result).toEqual(Money.dollar(10));
  });
  test("Sum.puls", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum: Expression = new Sum(fiveBucks, tenFranc).puls(fiveBucks);
    const result: Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(15));
  });
  test("Expression.times", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum:Expression = new Sum(fiveBucks, tenFranc).times(2);
    const result: Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(20));
  });
});
