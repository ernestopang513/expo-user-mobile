import { getInvoiceById } from "@/core/invoices/actions/get-invoice-by-id";
import { payInvoice } from "@/core/invoices/actions/pay-invoice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



export const useInvoice = (invoiceId: string, contractId: string) => {

    const queryClient = useQueryClient();

    const invoiceQuery = useQuery({
        queryKey: ['invoice', invoiceId],
        queryFn: () => getInvoiceById(invoiceId),
        select: (data) => ({
            ...data,
            issuedAt: new Date(data.issuedAt).toLocaleDateString()
        })

    })

    const invoiceMutation = useMutation({
        mutationFn: () => payInvoice(invoiceId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['invoice', invoiceId]
            });
            queryClient.invalidateQueries({
                queryKey: ['invoices', contractId]
            })
        }
    })

  return {
    invoiceQuery,
    invoiceMutation
  }
}