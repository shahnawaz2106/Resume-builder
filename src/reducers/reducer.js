const initialState={
    name:'',
    email:'',
    address:'',
    city:'',
    country:'',
    phone:''

}
const ChangeName=(state=initialState,action)=>{
    if(action.type==='form'){
        // console.log(action.payload);
        return  action.payload
    }
    else{
        return state;
    }
}
export default ChangeName; 
































































// name:action.payload.name,
            // email:action.payload.email,
            // address:action.payload.address,
            // city:action.payload.city,
            // country:action.payload.country,
            // phone:action.payload.phone