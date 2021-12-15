import jsonwebtoken from "jsonwebtoken";
import User, { ISimpleUser, IUser } from "../models/Users";
import Repository from "./Repository";
export default class UserRepository extends Repository<IUser> {
    constructor(){
        super(User);
    }
    public async login(credentials: any): Promise<{token: string, user: ISimpleUser}>{
        const user = await User.findOne(credentials).exec();
        if(user){
            var token: string = jsonwebtoken.sign(
                JSON.parse(JSON.stringify(user)),
                "clave de cifrado"
            );
            return {
                token: token,
                user: {
                    ...JSON.parse(JSON.stringify(user)),
                    password: undefined,
                }
            };
        }
        else
            return Promise.reject(new Error("El usuario no existe"));
    }
}