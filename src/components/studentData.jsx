import { createContext, useState } from "react";

export const ContextData = createContext();

const arrObj = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: '1' },
    { name: 'Doe', age: 23, course: 'MERN', batch: 'November', id: '2' },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: '3' },
    { name: 'Dave', age: 20, course: 'MERN', batch: 'September', id: '4' },
    { name: 'Chris', age: 21, course: 'MERN', batch: 'October', id: '5' },
    { name: 'James', age: 20, course: 'MERN', batch: 'November', id: '6' },
    { name: 'Ryan', age: 24, course: 'MERN', batch: 'October', id: '7' },
];

export const StudentData = (props) => {
    const [obj, setObj] = useState(arrObj);

    return(
        <ContextData.Provider value={[obj, setObj]} >
            {props.children}
        </ContextData.Provider>
    )
}