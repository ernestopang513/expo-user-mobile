import { useQuery } from '@tanstack/react-query';
import { getServices } from '../../../core/services/actions/get-services';



export const useServices = () => {
    
    const servicesQuery = useQuery({
        queryKey: ['services'],
        queryFn: () => getServices()
    });

    return {
        servicesQuery
    }

}