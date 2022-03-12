const initialState={
    uid:'',
    email:'',
    name:''
}

const UserR=(state=initialState,action)=>{
    if(action.type==='userform'){
        return action.payload
    }
    else{
        return state;
    }
}
export default UserR;