import { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as C from './style';
import { Loading } from '../Loading';
import { gitFetch } from '../../api/index';
import { CardInfo } from '../CardInfo';
import { Props } from '../../types';
import {useGitContext, UserGitAction } from '../../contexts/ContextUseGIt';


export const CardSearch = () => {
    const { state, dispatch } = useGitContext();
    const [loading, setLoading] = useState<boolean>(false);
    const [userGit, setuserGit] = useState<Props>();


    const handdleNameSearch = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: UserGitAction.setNameSearch,
            payload: e.target.value
        });

        console.log(state.nameSearch)

       
    }


    const solicitarDados = async () => {
        if(state.nameSearch.length > 3) {
            dispatch({ type: UserGitAction.setLoading,payload: true});
            setuserGit(await gitFetch(state.nameSearch));
            dispatch({ type: UserGitAction.setLoading,payload: false});
            console.log(userGit);
        } else {
            alert('Opa, por favor digite alguma coisa!');
        }

        console.log(state.loading)
    }


    const enviarButton  = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        solicitarDados();
    }


    const enviarEnter  = (event:KeyboardEvent) => {
        if(event.key === 'Enter') {
            solicitarDados();
        }
    }


    return(
        <C.Container>
            <C.AreaSearch>
                <h1>GitHub Finder</h1>
                <C.ContainerSearch>
                    <h2>Busque por um usuário:</h2>
                    <p>Conheça seus melhores repositórios</p>
                   <C.SearchArea>
                        <input 
                            value={state.nameSearch}
                            onChange={handdleNameSearch}
                            disabled={loading}
                            onKeyDown={enviarEnter} 
                            type="text"
                            placeholder='Digite um usuário' 
                            autoFocus
                         />
                        <button onClick={enviarButton} type="submit">Enviar <span className="material-icons">send</span></button>
                   </C.SearchArea>
                </C.ContainerSearch>
                {state.loading &&
                    <Loading/>
                }

                {userGit?.id &&
                    <CardInfo userGit={userGit}/>
                }
               
            </C.AreaSearch>
        </C.Container>
    )

   
}

//https://felixgerschau.com/react-typescript-onkeydown-event-type/