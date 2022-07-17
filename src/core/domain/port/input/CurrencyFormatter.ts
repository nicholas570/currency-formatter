import {
  InternationalCurrencyFormatterAdapter,
  InternationalCurrencyFormatterAdapterType
} from '../../adapter/InternationalCurrencyFormatterAdapter';
import { Locale } from '../../entities/locale';
import { ICurrencyFormatter, ICurrencyFormatterOptions } from './ICurrencyFormatter';

export class CurrencyFormatter implements ICurrencyFormatter {
  private _formatter: InternationalCurrencyFormatterAdapterType;

  /**
   * @param {locale} locale the locale
   * @returns {ICurrencyFormatterOptions} the display options
   */
  constructor(locale?: Locale, options?: ICurrencyFormatterOptions) {
    this._formatter = new InternationalCurrencyFormatterAdapter(locale, options).getFormatter();
  }

  /**
   * @param {number | bigint} value the value to format
   * @returns {string} the formatted value according to the locale and the currency
   */
  public format(value: number | bigint): string {
    return this._formatter.format(value);
  }
}
