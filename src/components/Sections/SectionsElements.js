import styled from 'styled-components'

export const JumboTitle = styled.h2 `
    color: #fff;
    font-size: 50px;
    font-weight: 900;
    
    @media screen and (max-width: 768px)
    {
        text-align: center !important;
        
        font-size: 40px;
    }
`

export const MDBP = styled.p `
    color: #fff;
    font-size: 25px;

    @media screen and (max-width: 768px)
    {
        text-align: center !important;
        font-size: 15px;
        padding-right: 0px;
    }
`