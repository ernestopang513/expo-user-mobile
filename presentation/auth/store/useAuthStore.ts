import { User } from "@/core/auth/interface/user.interface";
import { SecureStorageAdapter } from "@/helpers/adapter/secure-storage.adapter";
import { create } from "zustand";

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';


export interface AuthState {
    status: AuthStatus;
    user?: User;
    token?: string;
    loginStore: (user: User, token: string) => void;
    logout: () => Promise<void>;
    checkStatus: (user:User, token:string)=> Promise<void>;
    changeStatus: (user?: User, token?:string) => Promise<void>
}

export const UseAuthStore = create<AuthState>()((set,get) => ({

    status: "checking",
    user: undefined,
    token: undefined,

    changeStatus: async( user?:User,token?: string ) => {
        if(!token || !user) {
            await SecureStorageAdapter.deleteItem('token')
            set({status: "unauthenticated", user: undefined, token: undefined})
            return
        }

        set({status: 'authenticated', user, token});
        await SecureStorageAdapter.setItem('token', token);
        

    },

    loginStore: async(user, token) => {
        console.log('antes de login zustan');
        await get().changeStatus(user, token);
        console.log('despues de login zustan');
    },

    checkStatus: async(user: User, token: string) => {

            await get().changeStatus(user,token)

    },

    logout: async()=>{
        await get().changeStatus();
    }
}))