import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComp from '../layout/NavComp';

const MainDashboardComp = () => {
    return (
        <div className='container mt-3'>
            {/* <h2>this is MainDashboardComp</h2> */}
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                     <NavComp/>
                </div>
                <div className='card-body border-primary'>
                     <Outlet/>
                </div>
                <div className='card-footer border-primary'>
                    <p className='text-primary'>This App Is Design and Developed By:<strong>Panchashil Wankhede</strong></p>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardComp
