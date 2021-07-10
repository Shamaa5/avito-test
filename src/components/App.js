import Header from "./Header";
import Photos from "./Photos";
import Footer from "./Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadPhotos} from "../redux/actions";
import {Route} from "react-router-dom"
import Modal from "./modal/Modal";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])
    return (
    <div className="App">
        <Header/>
        <Route path="/">
            <Photos/>
        </Route>
        <Route path="/:id?">
            <Modal/>
        </Route>
        <Footer/>
    </div>
  );
}

export default App;
