import { API_URL, platformApi } from "@/core/api/platformApi";
import { ContractResponse } from "../interfaces/contracts.interface";


export const getContractsByUserId  = async(id: string): Promise<ContractResponse[]> => {

    try {
        const {data} = await platformApi.get<ContractResponse[]>(`${API_URL}/api/contracts/user/${id}`)
        return data;
    } catch (error) {
        throw error
    }

}