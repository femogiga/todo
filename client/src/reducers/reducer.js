export const reducer = (state,action)=>{
    switch(action.type){
        case 'INPUT-TEXT':
            return{
               ...state,
               [action.field]:action.payload
            }



        default:
            return state
    }
}
