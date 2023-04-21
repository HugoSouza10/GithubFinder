//Context, reducer, provider, hook
import { createContext, useState, ReactNode, useContext, useReducer } from "react";

//Types

type State = {
    loading:boolean;
    nameSearch: string; 
}

type Data = {
    avatar_url:string,
    bio: string,
    followers: number,
    following: number,
    location: string,
    name: string,
    id:number,
}


type Action = {
    type:UserGitAction;
    payload: any;
}

type ApiService = {
    get: () => Promise<void>;
}

type ContextType = {
    data: Data;
    state: State;
    ApiService:ApiService;
    dispatch: (action:Action) => void
}

type UseGitProviderProps = {
    children: ReactNode;
}

//context
const UseGitContext = createContext<ContextType | undefined >(undefined);


//DADOS INITICIAIS REQUISIÇÃO
const initialResponse: Data = {
    avatar_url:'',
    bio: '',
    followers: 0,
    following: 0,
    location: '',
    name: '',
    id: 0,
}

//Dados ininiciais do state

const initialData: State = {
    loading: false,
    nameSearch: '',
}


//Reducer

export enum UserGitAction {
    setNameSearch,
    setLoading,
}



const useGitReducer = (state:State, action:Action) => {
    switch(action.type) {

        case UserGitAction.setNameSearch:
            return {...state, nameSearch: action.payload}; 
            
        case UserGitAction.setLoading:
            return {...state, loading: action.payload}; 

        default:
            return state;
    }
}


//Provider

export const UseGitProvider  = ({children}:UseGitProviderProps) => {
        const [state, dispatch ] = useReducer(useGitReducer, initialData);
        const [data, setData] = useState<Data>(initialResponse);

        const updateLoadding = (loadding:boolean) => {
            dispatch({
                type: UserGitAction.setLoading,
                payload: loadding
            });
        }

        const API_BASE = 'https://api.github.com';

        const ApiService = {
            get: async () => {
              try {
                updateLoadding(true);
                const response = await fetch(`${API_BASE}/users/${state.nameSearch}`);
          
                if (!response.ok) {
                  throw new Error('Erro ao buscar usuário');
                }
          
                const data = await response.json();
                setData(data);
              } catch (error) {
                console.error(error);
                alert('Erro ao buscar usuário');
              } finally {
                updateLoadding(false);
              }
            }
          }
         

          console.log(data)
        
        const value = {state, dispatch, data, ApiService};

        return (
            <UseGitContext.Provider value={value}>
                {children}
            </UseGitContext.Provider>
        )
}



//Context Hook

export const useGitContext = () => {
    const context = useContext(UseGitContext);

    if(context === undefined) {
        throw new Error('useGit precisa ser usado dentro do useGitProvider');
    }

    return context;
}