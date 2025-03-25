import { v } from "convex/values";

const { mutation } = require("./_generated/server");

export const CreateUser=mutation({
    args:{name:v.string(),email:v.string()},
    handler:async(ctx,args)=>{
        // if user already exist

        const userData=await ctx.db.query('users').filter(q=>q.eq(q.field('email'),args.email)).collect();


        //if not Then add new user
            if(userData?.length==0){
                const data={
                    name:args.name,
                    email:args.email,
                    credit:5000,
                    
                    
                }
                const result=await ctx.db.insert('users', {
                    ...data
                });
                console.log(result);
                return data;
            }
            return userData[0];
    }
})