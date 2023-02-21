import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    @media (max-width: 1600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        
    }
`

export const AboutText = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: pre-line;
    border: 1px solid white;
    @media (max-width: 1600px) {
        position: absolute;
        top: 0;
    }
`


export const Card = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    border-radius: 6px;
    @media (max-width: 1600px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    top: 20rem;
    @media (max-width: 1600px) {
        position: absolute;
        bottom: -50rem;
        right: 0;
        justify-content: center;
        align-items: center;
    }
    `

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 24px;
    margin-left: 100px;
`

export const AnimatedGradientText = styled.h1`
    color: #00C2FF;
    background-image: linear-gradient(93.11deg, #00C2FF 15.03%, #FF75F4 83.95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', 'Roboto';
    font-feature-settings: 'kern';
    font-size: 49px;
    font-weight: 700;
    overflow-wrap: break-word;
    text-align: left;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
`