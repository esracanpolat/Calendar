
const initialState = {
    Plan: []
}
export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_PLAN":
            const deletePlan = state.Plan.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                Plan: deletePlan
            }
        case "SEARCH_PLAN":
            const searchData = state.Plan.filter((data) => data.type == action.payload.type && state.Plan.find((content) => content == action.payload.data));
            console.log(state.Plan.filter((data) => data.type == action.payload.type), "searchData");
            return {
                ...state,
                Plan: searchData
            }
        case "EDIT_PLAN":
            const indexU = state.Plan.find(todo => todo.id !== action.payload.id);
            console.log(indexU, "index u");
            debugger;
            return {
                ...state,
                Plan: [action.payload, ...state[indexU].Plan]
            }
        case "ADD_PLAN":
            return {
                ...state,
                Plan: [action.payload, ...state.Plan]
            }
        default:
            return state;
    }
};
