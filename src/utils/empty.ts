import { InvoiceInterface, ItemInterface } from "../@types/invoice";

export const empty_invoice:InvoiceInterface = {
  paymentDue: "2000-01-01",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "draft",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
};

export const empty_item:ItemInterface = {
    name: "",
    quantity: 0,
    price: 0,
}