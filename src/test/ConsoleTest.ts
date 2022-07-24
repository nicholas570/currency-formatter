import { CurrencyFormatter } from '../core';

const formatter = new CurrencyFormatter();
const t = formatter.format(34);

console.log(t);
