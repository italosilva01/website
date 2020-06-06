import React from 'react';

import Header from '../../components/Header/Header';
import Start from '../../components/Start/Start';
import * as S from './S-Home';
export default function Home(){

    return(
        <S.Home>
            <Header/>
            <Start/>
        </S.Home>


    );
}