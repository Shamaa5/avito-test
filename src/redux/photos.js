const initialState = {
    items: [],
    loading: false
}

const photosReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'photos/load/start':
            return {
                ...state,
                loading: true,
            }
        case 'photos/load/success':
            return {
                ...state,
                loading: false,
                items: actions.payload
            }
        default:
            return state
    }
}

export default photosReduser