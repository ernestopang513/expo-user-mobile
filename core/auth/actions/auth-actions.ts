import { platformApi } from "../api/platformApi";
import { AuthResponse, User } from "../interface/user.interface";



const returnUserToken = (data: AuthResponse) => {
    const {id, username, roles} = data.user;

    const user:User = {
        id,
        username,
        roles
    }

    return {
        user,
        token: data.token
    }
}



export const authLogin = async(username: string, password: string) => {

    try {
        const {data} = await platformApi.post<AuthResponse>('/login', {
            username,
            password
        });

        return returnUserToken(data)
    } catch (error) {
        throw error;
    }

}

export const authCheckStatus = async () => {
    try {
        const {data} = await platformApi.get<AuthResponse>('/check-status')
    } catch (error) {
        throw error
    }
}