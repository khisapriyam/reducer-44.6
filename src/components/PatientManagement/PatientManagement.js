import React, { useReducer, useRef } from 'react';
import { patientState, patientReducer } from '../../reducers/PatientReducer';

const PatientManagement = () => {
    //part-2
    const nameRef = useRef();//2.1 useRef ta button or input er khetre use hoi
    const [ state, dispatch] = useReducer(patientReducer, patientState);//1.2
    const handleSubmit = event => {//2.4 event taake niye asbo karon aita hoecche form. form taake jodi keo reload maare ba enter maare taile aita page taake reload korar chesta korbe
        event.preventDefault();//2.5 reload k prevent kortesi protohm dhakkai. aita very common
        //2.7 dispatch korbo action soho plus kisu data dite hobe j kaar naam ta seita
        dispatch({type: 'ADD_PATIENT',// 2.8dispatch korle type must and amra dispatch er moddhe akadhik property pathacchi
        name: nameRef.current.value, 
        id : state.patients.length + 1
    })//2.9 ai data ta dispatch kore pathale PatientReducer.js a patientReducer function a chole jacche

        //console.log(nameRef.current.value)//2.6 reference er moddhe current naame akta jinis thake and sei value ta amra read kortesi
        nameRef.current.value = ''; //2.13 jokhon kisu type kore enter dibo tokhon aager lekkha ta chole jaabe
    }
    return (
        <div>
            <h1>this is patient management: {state.patients.length}</h1>{/**1.3 */}
            <form onSubmit={handleSubmit}>{/**2.3 */}
                <input ref = {nameRef}></input> {/**2.2 nameref ta set kortesi*/}
            </form>
            {/* 2.14amra iccha korle state er moddhe j patients gulo ase ta loop through korte pari */}
            {
                state.patients.map(pt => <li 
                    key={pt.id}
                    onClick ={() => dispatch({type:'REMOVE_PATIENT', id : pt.id})}
                    >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;
