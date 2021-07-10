import {applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {createStore} from "redux";
import {createLogger} from "redux-logger";
import photosReduser from "./photos";
import modalPhotoCommentsReduser from "./modal";
import modalPhotoCommentsUploadReduser from "./comments";



const logger = createLogger({
    diff: true,
    collapsed: true
})
const rootReduser = combineReducers({
        photos: photosReduser,
        modal: modalPhotoCommentsReduser,
        // upload: modalPhotoCommentsUploadReduser
})

export const store = createStore(rootReduser, applyMiddleware(thunk, logger))