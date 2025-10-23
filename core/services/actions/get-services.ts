import { platformApi } from "@/core/api/platformApi";
import { log } from "@/helpers/loggers/logger";
import { ServiceResponse } from "../interfaces/service";


export const getServices = async(): Promise<ServiceResponse[]> => {
    try {
        const {data} = await platformApi.get<ServiceResponse[]>('/api/services?active=true');
        return data;
    } catch (error) {
        log("Get services", error);
        throw error
    }
}