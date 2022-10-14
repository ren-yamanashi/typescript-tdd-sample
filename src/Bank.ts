import { Money } from "./Money";
import { Sum } from "./Sum";
import { Expression } from "./Expression";
import { Pair } from "./Pair";

// 受け取った式(Expression)を、指定された通貨(to)に変換して返す
export class Bank {
  private rates = new Map<number, number>();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
  // FromをToに変換する
  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }
  rate(from: string, to: string): number {
    if(from === to) return 1
    const rate = this.rates.get(new Pair(from, to).hashCode());
    if (!rate) return 0;
    return rate;
  }
}
