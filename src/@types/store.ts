import { AuthSliceInterface, InvoiceSliceInterface } from "./slice";

export interface StoresInterface{
    auth:AuthSliceInterface,
    invoices: InvoiceSliceInterface
}