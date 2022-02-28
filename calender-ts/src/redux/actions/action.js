

export const setNewPlan = (data) => {
    console.log(data, "data");
    return {
        type: "ADD_PLAN",
        payload: data,
    }
}
export const searchPlan = (searchData) => {
    return {
        type: "SEARCH_PLAN",
        payload: searchData,
    }
}
export const editPlan = (data) => {
    console.log(data, "data");
    return {
        type: "EDIT_PLAN",
        payload: data,
    }
}

export const deletePlan = (id) => {
    return {
        type: "DELETE_PLAN",
        payload: id,
    }
}



// export const removeRoot = (data) => {
//     return async (dispatch) => {
//         //let new_items = data.filter(item => action.id !== item.id)
//         try {
//             dispatch({
//                 type: "Root",
//                 payload: new_items
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     }
// } 
