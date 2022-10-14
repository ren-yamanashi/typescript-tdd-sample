import { Bank } from "./Bank";
import { Money } from "./Money";

export interface Expression {
  times(multiplier: number): Expression;
  puls(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}
