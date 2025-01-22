'use client'

import Router from "next/router";

export default function SignIn(){

    const Admin = true;
    const router = useRouter();

    function AuthUser(){
        if(Admin == true){
            Router.push('/userLandingPage'); 
        }
        else{
            console.log('there was a problem')
        }
    }


    return(
       <button onClick={()=>AuthUser()}>Sign In</button>
        
    ) 
}