
//1
export const patientState ={
    patients: []
}
export const patientReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = { //2.10 new patient ta declare kortesi karon action er moddhe type charao id and name ase
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient];//2.11.state ta return hobe. aage jodi kono Patient thake taake amra tinta dot diye array te copy kore dibo tarpor notun j action er moddhe Patient asche taake rekhe dibo
            return { patients: allPatients};//2.12 akta thakle chinta kora lagbe na but akadhik thakle object akare pathabo
            break;
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(pt => pt.id !== action.id)//2.15
            const newState = {patients: remaining}//2.16
            return newState;
        default:
            return state
    }
}