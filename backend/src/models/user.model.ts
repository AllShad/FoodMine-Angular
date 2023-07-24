import { Schema, Model, model } from "mongoose";

export interface User{
    id:string;
    email:String;
    name:string;
    address:string;
    token:string;
    isAdmin:boolean;
}

export const UserSchema = new Schema<User>(
    {
        email:{type:String, required:true, unique:true},
        name:{type:String, required:true},
        address:{type:String, required: true},
        token:{type:String, required:true},
        isAdmin:{type:Boolean, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
) 

export const UserModel = model<User>('user', UserSchema);