import { getContractsByUserId } from '@/core/contracts/actions/get-contracts-by-user-id';
import { useQuery } from '@tanstack/react-query';


export const useContracts = (userId: string) => {

    const contractsQuery = useQuery({
        queryKey: ['contracts', userId],
        queryFn: () => getContractsByUserId(userId),
        select: (data) => {
          const contracts = data.map(contract => ({
            ...contract,
            startDate: new Date(contract.startDate).toLocaleDateString(),
            endDate: new Date(contract.endDate).toLocaleDateString(),
          }))
          return contracts;
        }
    });

  return {
    contractsQuery
  }
}