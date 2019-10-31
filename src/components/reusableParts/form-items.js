import styled from 'styled-components';

export const FormItems = styled.div`
    li{
        padding-bottom: 42px;
        white-space: nowrap;
    }
    
    .inline{
        display: flex;
        justify-content: center;
    }
    
    .regular-input{
        margin-left: 1%;
        min-width: 20px;
        margin-bottom: 10px;
        outline: none;
        
        width: 100%;
        height: 48px;
        border-radius: 2px;
        border-width: 0px;
        border: 1.5px solid ${props => props.theme.primary.darkGray};
        padding-left: 12px;  
         &:hover {
            border: 1.5px solid ${props => props.theme.primary.gray};
        }
    }
    
    .hidden-input {
        display: none;
    }
    .btn-container{
        margin-top: 25px;
        text-align: center;
    }
    .submit-btn{
        text-transform: uppercase;
        font-size: 16px;
        background: #e7f0fa;;
        height: 48px;
        width: 25%;
        border: none;
        border-radius: 2px;
        color: #1337F1;
        &:hover {
            color: #1337F1;
            background: #d8e6f6;
        }
    }
   
`;


export const Button = styled.div`
     
        text-transform: uppercase;
        font-size: 16px;
        background: ${props => props.bg}
        height: 48px;
        width: 25%;
        min-width: 20px;
        border: none;
        border-radius: 2px;
        color:  ${props => props.color }
        &:hover {
            color:  ${props => props.colorOnHover}
            background: ${props => props.bg}
        }
    
`;

