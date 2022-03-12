const initialState={
        color:'1',
        fontSize:'1',
        fontFamily:'1',
        template:'1',
}

const ChangeFinal=(state=initialState,action)=>{
    if(action.type==='finalform'){
        return action.payload
    }
    else{
        return state;
    }
}
export default ChangeFinal;