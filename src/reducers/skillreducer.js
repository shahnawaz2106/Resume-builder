const initialState=["java","py"];

const ChangeSkills=(state=initialState,action)=>{
    // console.log(action.payload);
    if(action.type==='skillform'){
        return action.payload;
    }
    else{
        return state;
    }
}
export default ChangeSkills;