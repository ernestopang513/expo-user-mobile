export interface AuthResponse {
    user:  User;
    token: string;
}

export interface User {
    id:       number;
    username: string;
    roles:    Role[];
}

export interface Role {
    authority: string;
}
