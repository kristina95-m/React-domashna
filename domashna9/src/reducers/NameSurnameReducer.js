const initialState = {
    person: ""
}

const NameSurnameReducer = (state = initialState, action) => {

    switch (action.type) {

        case "NAME_SURNAME":
            return {
                ...state,
                person: action.payload
            }

        default: return state;

    }

}

export default NameSurnameReducer;