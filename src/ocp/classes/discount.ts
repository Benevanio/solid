export abstract class Discount {
    constructor(protected readonly discount: number) {}

    calculateDiscount(amount: number): number {
        return amount - amount * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    constructor() {
        super(0.5);
        console.log('Desconto de 50% aplicado');
    }
}

export class TenPercentDiscount extends Discount {
    constructor() {
        super(0.1);
    }
}

export class NoDiscount extends Discount {
    constructor() {
        super(0); // Sem desconto
    }
}