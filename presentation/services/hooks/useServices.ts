import { createContractByUseServiceId } from '@/core/contracts/create-contract-by-use-service-id';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getServices } from '../../../core/services/actions/get-services';



export const useServices = (userId: string, serviceId: string) => {

    const queryClient = useQueryClient();
    
    const servicesQuery = useQuery({
        queryKey: ['services'],
        queryFn: () => getServices()
    });

    const servicesMutate = useMutation({
        mutationFn: () => createContractByUseServiceId(userId, serviceId),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['contracts', userId]})
        }
    })

    return {
        servicesQuery,
        servicesMutate,
    }

}