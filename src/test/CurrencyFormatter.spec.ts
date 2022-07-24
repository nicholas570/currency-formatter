import { CurrencyFormatter } from '../core';

describe('Currency formatter default local and currency', () => {
  it('should fallbacks to en-US and USD', () => {
    const formatter = new CurrencyFormatter();

    const formattedCurrency = formatter.format(32);

    expect(formattedCurrency).toEqual('$32.00');
  });
});
