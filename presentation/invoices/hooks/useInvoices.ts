import { getInvoicesByContractId } from "@/core/invoices/actions/get-invoices-by-contract-id";
import { useQuery } from "@tanstack/react-query";



export const useInvoices = (contractId: string) => {

    const invoicesQuery = useQuery({
        queryKey: ['invoices', contractId],
        queryFn: () => getInvoicesByContractId(contractId),
        select: (data) => {

            const invoices = data.map((invoice)=> ({
                ...invoice,
                issuedAt: new Date(invoice.issuedAt).toLocaleDateString()
            }))

            return invoices;
             
        }
    })

    return {
        invoicesQuery
    }
}