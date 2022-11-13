export type status = "draft"|"pending"|"paid"
export type paymentTerms = 1|7|14|30

export interface InvoiceInterface{
    id:number,
    user_id:number,
    createdAt:string,
    paymentDue:string,
    paymentTerms:paymentTerms,
    description:string,
    clientName:string,
    clientEmail:string,
    status:status,
    items:ItemInterface[],
    clientAddress:AddressInterface,
    senderAddress:AddressInterface,
}

export interface InvoiceToUpdateInterface{
    id?:number,
    user_id?:number,
    createdAt?:string,
    paymentDue:string,
    paymentTerms:paymentTerms,
    description:string,
    clientName:string,
    clientEmail:string,
    status:status,
    items:ItemInterface[],
    clientAddress:AddressInterface,
    senderAddress:AddressInterface,
}


export interface ItemInterface{
    id?:number,
    name:string,
    price:number,
    quantity:number,
    invoice_id?:number
}

export interface UserInterface{
    id:number,
    email:string,
    username?:string,
    avatar_url?:string,
    invoices?:InvoiceInterface[]
}

export interface AddressInterface{
    id?:number,
    name:string,
    street:string,
    city:string,
    postCode:string,
    country:string,
    invoices?:InvoiceInterface[]
}

