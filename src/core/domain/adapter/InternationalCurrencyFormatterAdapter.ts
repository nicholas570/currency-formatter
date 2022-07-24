import { DEFAULT_CURRENCY } from '../entities/currency';
import { DEFAULT_LOCALE } from '../entities/locale';

export type InternationalCurrencyFormatterAdapterType = Intl.NumberFormat;

export interface InternationalCurrencyFormatterAdapterOptions {
  currency?: string;
}

export class InternationalCurrencyFormatterAdapter {
  private CURRENCY_STYLE = 'currency';
  private DEFAULT_LOCALE = DEFAULT_LOCALE;
  private DEFAULT_CURRENCY = DEFAULT_CURRENCY;
  private InternationalCurrencyFormatter: Intl.NumberFormat;

  constructor(locale?: string, options?: InternationalCurrencyFormatterAdapterOptions) {
    this.InternationalCurrencyFormatter = this.buildFormatter(locale, options);
  }

  private getLocale(locale?: string) {
    return locale ?? this.DEFAULT_LOCALE;
  }

  private getCurrency(currency?: string) {
    return currency ?? this.DEFAULT_CURRENCY;
  }

  /**
   * @param {string} locale the local
   * @param {string} currency the currency
   * @returns {Intl.NumberFormat} the entry point to Intl API
   */
  private buildFormatter(locale?: string, options?: InternationalCurrencyFormatterAdapterOptions) {
    return new Intl.NumberFormat(this.getLocale(locale), {
      style: this.CURRENCY_STYLE,
      currency: this.getCurrency(options?.currency)
    });
  }

  /**
   * @returns {Intl.NumberFormat} the external formatter API
   */
  public getFormatter(): Intl.NumberFormat {
    return this.InternationalCurrencyFormatter;
  }
}
