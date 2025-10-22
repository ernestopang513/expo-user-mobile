import { platformApi } from '@/core/api/platformApi';
import { InvoiceResponse } from "../interfaces/invoice";



export const getInvoiceById = async(invoiceId: string): Promise<InvoiceResponse> => {

    try {
        const {data} = await platformApi.get<InvoiceResponse>(`/api/invoices/${invoiceId}`)
        return data;
    } catch (error) {
        throw error
    }

} 