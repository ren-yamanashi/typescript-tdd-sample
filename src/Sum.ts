import { Money } from "./Money";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public times(multiplier:number):Expression {
    return new Sum(this.augend.times(multiplier),this.addend.times(multiplier))
  }
  public puls(addend: Expression): Expression {
    return new Sum(this, addend);
  }
  public reduce(bank: Bank, to: string) {
    const amount: number =
      this.augend.reduce(bank, to).getAmount() +
      this.addend.reduce(bank, to).getAmount();
    return new Money(amount, to);
  }
}
