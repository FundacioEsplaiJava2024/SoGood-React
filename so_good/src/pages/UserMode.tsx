import { useParams } from 'react-router-dom';

function UserMode(){
    const { profile } = useParams();

    return(
        <h1>
            user {profile}
        </h1>
    )
}
export default UserMode;