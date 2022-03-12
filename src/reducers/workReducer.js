const initialState={
    title:'',
    company:'',
    city:'',
    country:'',
    startDateMonth:'',
    startDateYear:'',
    endDateMonth:'',
    endDateYear:'',
}

const ChangeWork=(state=initialState,action)=>{
    if(action.type==='workform'){
        return action.payload
    }
    else{
        return state;
    }
}
export default ChangeWork;





































































// return {
//     ...state,
//     title:action.payload.title,
//     company:action.payload.company,
//     city:action.payload.city,
//     country:action.payload.country,
//     startDateMonth:action.payload.startDateMonth,
//     startDateYear:action.payload.startDateYear,
//     endDateMonth:action.payload.endDateMonth,
//     endDateYear:action.payload.endDateYear
// }