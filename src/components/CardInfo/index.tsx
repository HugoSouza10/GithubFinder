import * as C from './style';

type Props = {
    userGit:any
}

export const CardInfo = ({userGit}:Props) => {
    return (
        <C.Container>
            <C.Avatar userGit={userGit}/>
            <C.Name>{userGit.name}</C.Name>
            <p>{userGit.bio}</p>
            <C.ContainerLocation>

            {userGit.location != null &&
                <svg fill="#58c5c4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    width="20px" height="20px" viewBox="0 0 395.71 395.71"
                    >
                    <g>
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                        c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                        C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                        c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                    </g>
                </svg>
            }
              
               
            <span>{userGit.location}</span>
              
            </C.ContainerLocation>
            <C.ContainerFollowers>
                <C.Followers>
                    <span>Seguidores:</span>
                    <C.ButtonGreen>
                        {userGit.followers}
                    </C.ButtonGreen>
                </C.Followers>
                <C.Divisor/>
                <C.Following>
                    <span>Seguindo:</span>
                    <C.ButtonGreen>
                        {userGit.following}
                    </C.ButtonGreen>
                </C.Following>
            </C.ContainerFollowers>
        </C.Container>
    )
}