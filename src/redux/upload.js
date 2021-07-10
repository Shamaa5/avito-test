const initialState = {
    items: {},
    loading: false,


}

const modalPhotoCommentsUploadReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'comments/upload/start':
            return {

            }
        case 'comments/upload/success':
            return {

            }
        default:
            return state
    }

}

export default modalPhotoCommentsUploadReduser