import loadingGif from '../../img/loading3.gif';

import * as C from './style';

export const Loading = () => {
    return (
        <C.Container>
            <img src={loadingGif}/>
        </C.Container>
    )
}