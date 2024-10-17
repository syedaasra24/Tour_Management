
import { Children, createContext,useEffect, useReducer } from "react";

const initial_state = {
    user : null ,
    loading:false,
    error:null
};

export const AuthContext = createContext(initial_state)

const AuthReducer = (stste,action)=> {
    switch (action.type) {
        case "LOGIN_START" :
            return {
               user: null,
               loading: false ,
               error: null,
            };
            case 'LOGIN_SUCESS' :
                return{
                    user: action.playload,
                    loading:false,
                    error:null
                }

            case 'LOGIN_FAILURE' :
                    return{
                        user: null,
                        loading:false,
                        error:action.playload
                    }   
             
            case 'REGISTER_SUCCESS' :
                        return{
                            user: null,
                            loading:false,
                            error:null
                        }        

            case 'LOGOUT' :
                     return{
                         user: action.playload,
                         loading:false,
                         error:null
                            }            

            default  :
            return state
    }
};

export const AuthContextProvider = ({Children}) =>{
    
}