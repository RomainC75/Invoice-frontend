import { UserInterface } from "./invoice";
import { InvoiceInterface } from "./invoice";

export interface AuthSliceInterface{
    token:string | null,
    user:UserInterface | null,
    isAuthenticated:boolean,
}

export interface InvoiceSliceInterface{
    invoices: null | InvoiceInterface,
    secret:number,
    val:number
}
