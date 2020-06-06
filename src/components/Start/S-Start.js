import styled from 'styled-components';

import backgroundImage from '../../assets/office-865091_1920.jpg';

export const Start = styled.section`
    width:100%;
    height:700px;
    margin-right:0;
    margin-left:0;
    background-image:url(${backgroundImage});
    background-repeat:no-repeat;
    background-size:100%;

    >div{
        height:500px;
        background-color:rgba(0,0,0,0.5);
        display:grid;
        align-content:center;
        #apresentacao{
            width:inherit;
            height:100%;
            color:white;
            text-align:left;
            padding-left:20%;
            font-size:1.5rem;
            
            span{
                color: #00b8e4;
            }

            h2{
                margin-bottom:0;
            }

            h6{
                margin:1%;
                letter-spacing:0.1rem;
            }

        }
    }
`;