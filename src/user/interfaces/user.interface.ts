import { Document } from 'mongoose';

export interface User extends Document {
    readonly id: string;
    readonly username: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly password: string;
}
