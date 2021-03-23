import React, {useState} from "react";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>(""); // need to fix any
    const [error, setError] = useState<any>(""); // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(""); // need to fix
    };
    const addUser = () => {
        addUserCallback(users)
        // need to fix
    };

    const totalUsers = 0; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
