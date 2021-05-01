import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any


    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        console.log(e)
        setName(e.target.value); // need to fix

    };




    const addUser = () => {
        if (name !== '') {
        addUserCallback(name)
        alert(` ${name} , hello` )
        setName('')
            setError('')
    } else {
            setError('ni delay uasya tak EEEEEE EJ')
        }};

    const totalUsers = users.length; // need to fix

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
