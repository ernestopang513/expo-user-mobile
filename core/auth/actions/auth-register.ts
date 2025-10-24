import { platformApi } from "@/core/api/platformApi";
import { log } from "@/helpers/loggers/logger";



export const authRegister = async(username: string, email:string, fullName: string, password: string) => {

    try {
        const {data} = await platformApi.post('/api/users/register', {
            username,
            email,
            full_name: fullName,
            password
        })
        return data;
    } catch (error) {
        log('Register error ', error);
        throw error;
    }


}