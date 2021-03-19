import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (t :FilterType)=> void
    deleteAffairCallback: (t: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
/*
    const setAll = () => {
        props.setFilter('all')
    }; // need to fix
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('middle')
    };
    const setLow = () => {
        props.setFilter('low')
    };*/
    const changeFilter = (filter: FilterType) => props.setFilter(filter)

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>changeFilter('all')}>All</button>
            <button onClick={()=>changeFilter('high')}>High</button>
            <button onClick={()=>changeFilter('middle')}>Middle</button>
            <button onClick={()=>changeFilter('low')}>Low</button>
        </div>
    );
}

export default Affairs;
