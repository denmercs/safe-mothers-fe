import styled from 'styled-components';

export const StyledPageView = styled.div` 
    font-size: 16px;
    background: white;
    max-width: 1500px;
    margin: 50px auto;
    border: 1.5px solid #EEEEEF;

        .edit-svg{
            color:white;
        }
    .back{
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            cursor: pointer;
            p{
                font-size: 1rem;
                text-transform: uppercase;       
            }
        }
    }

    .fields{
        text-align: left;
        margin-right: 10px;
    }

    .values{
        text-align: left;
        margin-right: 20px;
        color: #85a1c1;

        p{
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }

    .list-break-values{
        color: #85a1c1; 
    }

    .supply-values{
        text-align: center;
        color: #85a1c1;
    }


    .card{
        display: flex;
        
        flex-direction: column;

        @media (max-width: 1024px) {
            width: 100%;
            align-items: stretch;
        }
    }

    .card-content{
        display: flex;
        justify-content: space-around;
    }

    .card-title{
        font-weight: bold;
        text-align: center;
        text-decoration: underline;

        @media (max-width: 1024px) {
            text-decoration: none;
            background: #e7f0fa;
        }

    }
    
    .grid-top{
       
        display: grid;
        border-bottom: 1.5px solid #F9FBFC;
        margin-top: 15px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }
        
    }
    
    .grid-center{
        display: grid;
        margin-top: 15px;
        border-bottom: 1.5px solid #F9FBFC;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            border-bottom: none;
            display: block;
            width: 100%;
            text-align: center;
        }
        
    
    }
    .grid-bottom{
        display: grid;
        margin-top: 15px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0;
         
        @media (max-width: 1024px) {
            margin-left: 0px;
            display: block;
            width: 100%;
            text-align: center;
        }
       
    
    }
`;