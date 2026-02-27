// import BackgroundFX from "./components/BackgroundFX/BackgroundFX";
import HomePage from "./pages/HomePage/HomePage";
import {useEffect} from "react";


export default function App() {
    useEffect(() => {
        document.title = "ElbrouxiWeb | Web Design Morocco, Web Design Italia";
    }, []);

    return (
        <>
            {/*<BackgroundFX />*/}
            <HomePage />
        </>
    );
}