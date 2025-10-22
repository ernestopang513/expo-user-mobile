import { platformApi } from "@/core/api/platformApi";
import { InvoiceResponse } from "../interfaces/invoice";


export const getInvoicesByContractId = async(contractId: string): Promise<InvoiceResponse[]> => {

    try {
        const {data} = await platformApi.get<InvoiceResponse[]>(`api/invoices/${contractId}/all?status=PENDING`);
        return data;        
    } catch (error) {
        console.log(error);
        throw error
    }
}