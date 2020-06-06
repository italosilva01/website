import React from 'react';

import * as S from './S-Start';

 const Start=() => {
    function typeWriter(element){
        const textArray = element.innerHTML.split('');
        console.log(textArray);
       
    };

    return(
        <S.Start>
            <div>
                <div id="apresentacao">
                    <h2><span>Francisco</span> Italo </h2>
                    <h6>DESENVOLVEDOR DE SITES</h6>
                    <h6>Freelancer</h6>
                    <h6>Fullstack em construção</h6>
                    <h6>Programador Javascript</h6>
                    
                </div>
            </div>
              
        </S.Start>
    );
}
export default Start;