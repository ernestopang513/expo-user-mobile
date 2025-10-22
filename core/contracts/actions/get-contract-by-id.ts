import { platformApi } from "@/core/api/platformApi";
import { ContractResponse } from "../interfaces/contracts.interface";



export const getContractById = async(contractId: String):Promise<ContractResponse> =>  {

    try {
        const {data} = await platformApi.get<ContractResponse>(`/api/contracts/${contractId}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}