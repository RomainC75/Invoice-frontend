import { UserInterface } from "./invoice";
import { InvoiceInterface } from "./invoice";

export interface AuthSliceInterface{
    token:string | null,
    user:UserInterface | null,
    isAuthenticated:boolean,
    theme:boolean,
    loading: boolean,
    error: string | null,
    errorMessage: string | null, 
    isLoaded: boolean
}

export interface InvoiceSliceInterface{
    invoices: null | InvoiceInterface[],
    secret:number,
    val:number,
    invoice: null | InvoiceInterface
    loading: boolean,
    error: string | null,
    filterByStatus:Array<"draft"|"pending"|"paid">
}
