const initialState='';

const ChangeSummary=(state=initialState,action)=>{
    if(action.type==='sumform'){
        return action.payload;
    }
    else{
        return state;
    }
}
export default ChangeSummary;