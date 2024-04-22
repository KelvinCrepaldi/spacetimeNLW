import {cookies} from "next/headers"
import * as jwt from 'jwt-decode'

interface User {
    sub: string, 
    name: string, 
    avatarUrl: string
}

export function getUser(): User {
    const token = cookies().get('token')?.value

    if(!token){
        throw new Error('Unauthenticated.')
    }

    const user: User = jwt.jwtDecode(token)

    return user
}