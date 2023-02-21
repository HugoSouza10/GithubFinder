import { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as C from './style';
import { Loading } from '../Loading';
import { gitFetch } from '../../api/index';
import { CardInfo } from '../CardInfo';


export const CardSearch = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [disableInput, SetdisableInput] = useState<boolean>(false);
    const [nameSearch, SetnameSearch] = useState<string>('');
    const [userGit, SetuserGit] = useState<any>('');


    const handdleNameSearch = (e:ChangeEvent<HTMLInputElement>) => {
        SetnameSearch(e.target.value);
        console.log(nameSearch);
    }


    const solicitarDados = async () => {
        if(nameSearch.length > 3) {
            setLoading(true);
            SetdisableInput(true);
            SetuserGit(await gitFetch(nameSearch));
            setLoading(false);
            SetdisableInput(false);
            console.log(userGit);
        } else {
            alert('Opa, por favor digite alguma coisa!');
        }
    }


    const enviarEnter  = async (e:KeyboardEvent) => {
        if(e.key === 'Enter') {
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
                            onChange={handdleNameSearch}
                            disabled={disableInput} 
                            onKeyDown={enviarEnter} 
                            type="text" placeholder='Digite um usuário' autoFocus
                         />
                        <button onClick={solicitarDados} type="submit">Enviar <span className="material-icons">send</span></button>
                   </C.SearchArea>
                </C.ContainerSearch>
                {loading &&
                    <Loading/>
                }

                {userGit.id &&
                    <CardInfo userGit={userGit}/>
                }
               
            </C.AreaSearch>
        </C.Container>
    )

   
}

//https://felixgerschau.com/react-typescript-onkeydown-event-type/