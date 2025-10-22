import { getContractById } from "@/core/contracts/actions/get-contract-by-id"
import { useQuery } from "@tanstack/react-query"


export const useContract = (contractId: string) => {

    const contractQuery = useQuery({
        queryKey: ['contract', contractId],
        queryFn: () => getContractById(contractId),
        select: (data) => ({
            ...data,
            startDate: new Date(data.startDate).toLocaleDateString(),
            endDate: new Date(data.endDate).toLocaleDateString(),
        })
    })

  return {
    contractQuery
  }
}