import {Outlet} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dashboard from "../dashboard";
import './style.scss'

const Layout = ()=>{
    return(
            <>
                <Dashboard/>
                <div className="container">
                    <div className='header-container'>
                        <header>
                            <div className="profile">
                                <span></span>
                                <span>حسن فرجی</span>
                            </div>
                        </header>
                    </div>
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </>   
        )
}


export  {Layout}


