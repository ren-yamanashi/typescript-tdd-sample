import { Money } from "../Money";
/**
 * Money
 */
export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
