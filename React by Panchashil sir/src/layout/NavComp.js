import React from 'react';
import { Link } from 'react-router-dom';

const NavComp = () => {
    return (
        <div>
            {/* <h2>this is NavComp</h2> */}
            <Link to='list' className='btn btn-primary btn-sm'>List</Link>{' '}
            <Link to='usestate' className='btn btn-primary btn-sm'>useState</Link>{' '}
            <Link to='useeffect' className='btn btn-primary btn-sm'>useEffect</Link>{' '}
            <Link to='productdash' className='btn btn-primary btn-sm'>Product</Link>{' '}
        </div>
    )
}

export default NavComp
