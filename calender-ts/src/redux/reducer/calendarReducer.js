
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
            state.Plan[action.payload.id] = {
                ...state.Plan[action.payload.id],
                ...action.payload
            }
            debugger;
            return {
                ...state
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
