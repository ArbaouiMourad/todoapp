
export const actionAdd=payload=>{
    return{
        type:"ADD_ITEM", payload
    }
}


export const actionDelete=payload=>{
    return{
        type:"DELETE_ITEM", payload
    }
}

export const actionComplete=payload=>{
    return{
        type:"COMPLETE_ITEM" ,payload
    }
}
export const actionEdit = payload=>{
    return{
        type:"EDIT_ITEM" ,payload
    }
}