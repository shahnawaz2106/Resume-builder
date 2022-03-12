const initialState={
    school:'',
    degree:'',
    city:'',
    country:'',
    month:'',
    year:''
    
}

const ChangeEducation=(state=initialState,action)=>{
    if(action.type==='edform'){
        // console.log(action.payload)
        return action.payload
    }
    else{
        return state;
    }
}
export default ChangeEducation;





























































// return {
//     ...state,
//     school:action.payload.school,
//     degree:action.payload.degree,
//     city:action.payload.city,
//     country:action.payload.country,
//     month:action.payload.month,
//     year:action.payload.year
    
// }