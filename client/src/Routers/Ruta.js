import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App/App"
import Analisis from "../Admin/Analisis"

export function Ruta(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/admin" element={<Analisis></Analisis>}></Route>
            </Routes>
        </BrowserRouter>
    )
}