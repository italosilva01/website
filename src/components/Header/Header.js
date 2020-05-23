import React, { useState,useEffect } from 'react';
import * as S from './S-Header' //Style of header  
import './style.css';

function Header(){
   const [bool, setBool] = useState(true);
   
   const [sticky,setSticky]= useState('');

   const handleScroll=()=>{
        const navbar = document.querySelector('header');
        let sticky = navbar.offsetTop;

        if(window.pageYOffset >= sticky){
            console.log('abaixo')
            setSticky('sticky');
        }else{
            console.log('emCIma')
            setSticky('');

        }
            
    }

   const toogleMenuMobile=()=>{

        let menuMobile = document.querySelector('#menuMobile');
        bool? menuMobile.style.left='0%':menuMobile.style.left='-100%';
        setBool(!bool);
    };

    useEffect(()=>{
        window.onscroll =handleScroll
   });



    return(
        <div>
            <S.Header className={sticky}>
                <div>
                    <input type='checkbox' id='checkbox-burger' onClick={()=>toogleMenuMobile()} ></input>
                    <label htmlFor="checkbox-burger">
                        <span></span>
                        <span></span>
                        <span></span>

                    </label>
                        
                </div>

                <div className="logo">
                   <h1>Italo</h1>
                </div>

                <div>
                    <S.MenuDesktop>
                        <ul>
                            <li><a href="#">início</a></li>
                            <li><a href="#">Portifólio</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </S.MenuDesktop>
                </div>
                
            
            </S.Header>
            
            <S.MenuMobile id='menuMobile'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Membros</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Publicações</a></li>
                    <li><a href="#">Colabore!</a></li>
                    <li><a href="#">Contato</a></li>

                </ul>
            </S.MenuMobile>
        </div>
    )
 }


export default Header;