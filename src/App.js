import { BrowserRouter, Routes, Route } from "react-router-dom"

//component
import { Layout } from "./component/layout"
import { Authentication } from "./component/authentication"
import { NotificationContainer } from "./component/notification"

//pages 
import Home from './pages/home'
import Upload from './pages/multiMedia/upload'
import Library from './pages/multiMedia/library'
import Login from "./pages/login"
import UsersTable from "./pages/users/library"
import AddUser from "./pages/users/addUser"
import AddProduct from './pages/product/addProduct'
import ProductTable from "./pages/product/library"

import './global/normalize.scss'
import './global/style.scss'



const App = () => {

    return (
        <>
            <NotificationContainer />
            <BrowserRouter>
                <Routes>
                    <Route element={<Authentication />}>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="multiMedia">
                                <Route path="library/*" element={<Library />} />
                                <Route path="upload" element={<Upload />} />
                            </Route>
                            <Route path="users">
                                <Route path="library/*" element={<UsersTable />} />
                                <Route path="add" element={<AddUser />} />
                            </Route>
                            <Route path="products">
                                <Route path="add" element={<AddProduct />} />
                                <Route path="library/*" element={<ProductTable />} />
                            </Route>
                        </Route>
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App