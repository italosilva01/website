import styled from 'styled-components';

export const Header = styled.header`
   position:relative;
    top:0%;
    left:0;
    margin-top:-2%;
    width:100vw;
    height:65px;
    display:flex;
    justify-content:start;
    align-items:center;
    z-index:11;
    overflow: hidden;
    background-color: rgba(0,0,0.5); 
    color:white;
    font-family: 'Oswald', sans-serif;

    /*--------------------------------
            TAGs
    --------------------------------*/
    h1{
        margin-right:10%;
        span{
            color:#00b8e4;
        }

    }

    div:nth-child(2){
         
        img{
            width:143px;
            height:50px;
        }
    }

    div:nth-child(3){
            display:none;
           
    }

    div:nth-child(4){
            display:none;
           
    }
    
    label{
        cursor: pointer;
        position:relative;
        display:block;
        height:29px;
        width:50px;
        left:50%;

        span{
            position: absolute;
            display:block;
            height:4px;
            width:80%;
            border-radius:30px;
            background-color:#77bfbd;
            transition: 0.25s ease-in-out;
        }
        
        span:nth-child(1){
            top:0;
        }

        span:nth-child(2){
            top:10px;
        }

        span:nth-child(3){
            top:20px;
            padding-block:0px;
        }
    }

    /*--------------------------------
            ID's
    --------------------------------*/   
    #checkbox-burger{
        position:absolute;
        opacity:0;

        :checked + label span:nth-child(1){
            transform: rotate(-45deg);
            top:8px;
        }

        :checked + label span:nth-child(2){
            opacity:0;
            
        }

        :checked + label span:nth-child(3){
            transform: rotate(45deg);
            top:8px;
        }
        
    }

    /*--------------------------------
            Classes
    --------------------------------*/
    .logo{
        margin-left:20%;

    }

    @media (min-width:1025px) {
       position: relative;
       top:0;
       margin-top:0%;
       padding-top:1%;
       font-size:1.2rem;
       width:99vw;
       justify-content:space-around;
        
        div{
            :nth-child(1){
                display:none;
            }
            
            :nth-child(2){

            }
            :nth-child(3){
                display:block;
            }
            :nth-child(4){
                display:block;
                margin-left:20%;
            }
        }

        .logo{
         margin-left:0;
         margin-right:0;

        }
        
    }

`;

export const MenuMobile = styled.nav`
    position:fixed;
    left:-100%;
    top:0;
    width:100%;
    height:100vh;
    background-color: white;    
    transition:0.20s ease-in-out;
    z-index:10;
    color:white;

    ul{
        padding:0%;
        list-style:none;
        margin-top:20%;
        height:100%;

        li{
            position:relative;
            padding-left: 0%;
            margin-bottom:5%;
            
        }

        a{
        display:block;
        padding:10px 12px;
        padding-left:30px;
        text-decoration:none;
        color:black;
        outline:none;
    }
    }
    @media (min-width:1024px) {
        display:none;
    }
`;

export const MenuDesktop= styled.nav`

    ul{
        margin:0;
        padding:0;

        li{
        display: inline-block;
        margin-left:60px;

        :nth-child(1){
            margin-left:40px;
        }

        a{
            color:white;
            text-decoration:none;
            display:block;
            transition: 0.25s ease-in-out;

            :hover{
                color:#00b8e4;
            }
        }
    }
    } 
`;
