import styled from 'styled-components'

export const Container = styled.div`
    background: white;

    width: 50%;
    height: 90px;

    margin: 0 auto;

    border-radius: 0 0 10px 10px;
    box-shadow: 0px 0px 44px -15px #000000;

    display: flex;
    position: relative;
`

export const SubMenu = styled.div`
    position: absolute;


    width: 30%;
    height: 40px;

    margin: 0 auto;

    border: .2px solid #c2c2c2;
    background: white;

    border-radius: 10px;
    box-shadow: 0px 0px 44px -15px #000000;

    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    min-width: ${props => props.qtd * 80}px;
    display: flex;
    
    overflow: hidden;

    `
    
    export const OptionSubMenu = styled.div`
    width: 50%;
    height: 100%;
    
    cursor: pointer;
    
    border-radius: 10px;

    color: ${props => props.active ? "#ff5722" : "gray"};
    
    display: flex;
    align-items: center;
    justify-content: center;

    
`

export const Transition = styled.div`
    width: calc(50% - 5px);
    height: calc(100% - 10px);

    cursor: pointer;

    border-radius: 10px;
    position: absolute;
    background: #ffdca9;

    border-radius: 10px;

    animation: transform 1s;
    transition: transform .5s ease;
    transform: translateX(${props => props.index * 100}%);

    margin: 5px;

    z-index: -1;    
`