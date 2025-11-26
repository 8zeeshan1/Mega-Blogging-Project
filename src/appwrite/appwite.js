import {Client, Account, ID} from "appwrite"
import conf from '../conf/conf'

export class AuthService{
    clinet = new Client();
    account;

    constructor(){
        this.clinet
            .setEndpoint(conf.ENDPOINT)
            .setProject(conf.PROJECT_ID)
        this.account = new Account(this.clinet)
    }

    async createUser({email, password, name}){
        try{
        const userAccount = await this.account.create(ID.unique(), email, password, name)
        if(userAccount){
            return //the the login page
        } else 
            return userAccount
        }catch(error){
            console.log("Error in the createUser ->", error )
        }
    }

    
}