import { log } from "@/helpers/loggers/logger";
import { platformApi } from "../api/platformApi";
import { ContractResponse } from "./interfaces/contracts.interface";



export const createContractByUseServiceId = async(userId: string, serviceId: string):Promise<ContractResponse> => {

    try {
        const {data} = await platformApi.post<ContractResponse>(`/api/contracts`, {
            userId,
            serviceId,
        });
        return data;
    } catch (error) {
        log('Create contract', error);
        throw error;
    }
}