import { Sum } from "./Sum";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Money implements Expression {
  protected amount: number;
  protected cur: string;

  constructor(amount: number, cur: string) {
    this.amount = amount;
    this.cur = cur;
  }

  public times(multiplier: number):Expression {
    return new Money(this.amount * multiplier, this.cur);
  }
  public puls(addend: Expression): Expression {
    return new Sum(this, addend);
  }
  public reduce(bank:Bank ,to: string): Money {
    const rate: number = bank.rate(this.currency(),to)
    return new Money(this.amount / rate, to);
  }
  public currency() {
    return this.cur;
  }
  public equals(object: any): boolean {
    const money = object as Money;
    return this.amount === money.amount && this.currency() === money.currency();
  }

  public getAmount() {
    return this.amount;
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
