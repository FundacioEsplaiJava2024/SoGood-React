import { useParams } from "react-router-dom";

function EnterpriseMode(){

    const { profile } = useParams()

    return(
        <h1>
            Enterprise {profile}
        </h1>
    )
}
export default EnterpriseMode;