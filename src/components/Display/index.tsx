import {User} from '../../interfaces/UserInterfaces'

interface DisplayProps {
    user:User
}

const Display = ({user}:DisplayProps) =>{
    return(
        <>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <h3>{user?.img}</h3>
        </>
    )
}

export default Display