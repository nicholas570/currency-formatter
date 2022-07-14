import { Currency } from '../domain/currency/currency';
import { Locale } from '../domain/locale/locale';
import { CurrencyFormatterBuilder, CurrencyFormatterType } from './CurrencyFormatterBuilder';
import { ICurrencyFormatter } from './ICurrencyFormatter';

export class CurrencyFormatter implements ICurrencyFormatter {
  private _currencyFormatter: CurrencyFormatterType;

  constructor(locale?: Locale, currency?: Currency) {
    this._currencyFormatter = new CurrencyFormatterBuilder().build(locale, currency);
  }

  public format(value: number | bigint): string {
    return this._currencyFormatter.format(value);
  }
}
