import { Currency } from '../../entities/currency';

export interface ICurrencyFormatterOptions {
  currency?: Currency;
}

export interface ICurrencyFormatter {
  format(value: number | bigint): string;
}
