import { ICustomer } from "./interfaces/customer.ts";

export class IndividualCustomer implements ICustomer{
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = '';
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getIdentification(): string {
        return this.cpf;
    }

    
}
export class EnterpriseCustomer implements ICustomer{
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;

    constructor(firstName: string, lastName: string, cnpj: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = '';
        this.cnpj = cnpj;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getIdentification(): string {
        return this.cnpj;
    }
    getCNPJ(): string {
        return this.cnpj;
    }
  
}