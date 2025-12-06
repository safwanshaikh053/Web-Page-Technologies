import React from 'react';
import boy from '../shared/images/boy-animated.gif';
import myImages from '../shared/constant/constantData';

const MyImagesComp = () => {
    return (
        <div>
            <h2>This is MyImagesComp</h2>
            <img src={boy} alt='boy' height="200px" width="300px" />
            <hr/>
             <img src={myImages.dosa} alt='dosa' height="200px" width="300px" />
             <img src={myImages.jalebi} alt='dosa' height="200px" width="300px" />
             <img src={myImages.samosa1} alt='dosa' height="200px" width="300px" />
             
             <video controls>
                <source src={myImages.vdo} />
             </video>
        </div>
    )
}

export default MyImagesComp
