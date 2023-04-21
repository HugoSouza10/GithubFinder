import {KeyboardEvent } from 'react';
import * as C from './style';
import { Loading } from '../Loading';
import { CardInfo } from '../CardInfo';
import {useGitContext, UserGitAction } from '../../contexts/ContextUseGIt';


export const CardSearch = () => {
    const { state, dispatch, data, ApiService } = useGitContext();

    const requestData = () => {
        if(state.nameSearch.length > 3) {
            ApiService.get();

        } else {
            alert('Opa, por favor digite alguma coisa!');
        }
    }


    const userSearchHandlers = {
        handdleNameSearch: (e:React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: UserGitAction.setNameSearch,
                payload: e.target.value
            });
        },

        enviarButton: (event:React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            requestData();
        },

        enviarEnter: (event:KeyboardEvent) => {
            if(event.key === 'Enter') {
                requestData();
            }
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
                            onChange={userSearchHandlers.handdleNameSearch}
                            value={state.nameSearch}
                            disabled={state.loading}
                            onKeyDown={userSearchHandlers.enviarEnter} 
                            type="text"
                            placeholder='Digite um usuário' 
                            autoFocus
                         />
                        <button onClick={userSearchHandlers.enviarButton} type="submit">Enviar <span className="material-icons">send</span></button>
                   </C.SearchArea>
                </C.ContainerSearch>
                {state.loading &&
                    <Loading/>
                }

                {data.id &&
                    <CardInfo/>
                }
               
            </C.AreaSearch>
        </C.Container>
    )

   
}

//https://felixgerschau.com/react-typescript-onkeydown-event-type/