import { Currency, DEFAULT_CURRENCY } from '../domain/currency/currency';
import { DEFAULT_LOCALE, Locale } from '../domain/locale/locale';

export type CurrencyFormatterType = Intl.NumberFormat;
export class CurrencyFormatterBuilder {
  private CURRENCY_STYLE = 'currency';

  private getCurrency(currency?: Currency): Currency {
    return currency ?? DEFAULT_CURRENCY;
  }

  build(locale?: Locale, currency?: Currency): CurrencyFormatterType {
    return new Intl.NumberFormat(locale ?? DEFAULT_LOCALE, {
      style: this.CURRENCY_STYLE,
      currency: this.getCurrency(currency)
    });
  }
}
