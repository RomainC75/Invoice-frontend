export interface InvoiceInterface{
    id:number,
    user_id:number,
    createdAt:string,
    paymentDue:string,
    description:string,
    clientName:string,
    clientEmail:string,
    status:string,
    items:ItemInterface[],
    clientAddress:AddressInterface,
    senderAddress:AddressInterface,
}

export interface ItemInterface{
    id:number,
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
    id:number,
    name:string,
    street:string,
    city:string,
    postCode:string,
    country:string,
    invoices?:InvoiceInterface[]
}