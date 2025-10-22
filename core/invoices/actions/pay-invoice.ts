import { platformApi } from "@/core/api/platformApi";
import { InvoiceResponse } from "../interfaces/invoice";



export const payInvoice = async(invoiceId: string):Promise<InvoiceResponse> => {

    try {
        const {data} = await platformApi.patch<InvoiceResponse>(`/api/invoices/${invoiceId}/pay`)
        return data;
    } catch (error) {
        throw error;
    }

}