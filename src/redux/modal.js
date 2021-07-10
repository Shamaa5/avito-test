const initialState = {
    items: {},
    loading: false
}

const modalPhotoCommentsReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'modal/load/start':
            return {
                ...state,
                loading: true,
            }
        case 'modal/load/success':
            return {
                ...state,
                loading: false,
                items: actions.payload
            }
        default:
            return state
    }
}

export default modalPhotoCommentsReduser