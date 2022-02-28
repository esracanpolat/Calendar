
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
            let index = state.Plan.findIndex(todo => todo.id === action.payload.id);
            return {
                ...state,
                Plan: [
                    ...state.Plan.slice(0, index),
                    action.payload,
                    ...state.Plan.slice(index + 1)
                ]
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
