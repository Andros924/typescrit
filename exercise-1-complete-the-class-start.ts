interface Currency {
  name: string;
  code: string;
  symbol: string;
  describe(): string;
}

class CurrencyImpl implements Currency {
  constructor(
    public name: string,
    public code: string,
    public symbol: string
  ) {}

  describe(): string {
    return `The ${this.name} currency has the code ${this.code} and uses the symbol ${this.symbol}.`;
  }
}

const currencyNaira = new CurrencyImpl("Naira", "NGN", "₦");
currencyNaira.describe();
