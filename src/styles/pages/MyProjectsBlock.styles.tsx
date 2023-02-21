import { Button } from '@/components/UIComponents'
import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

export const AnimatedGradientText = styled.p`
    color: #00c2ff;
    background-image: linear-gradient(93.11deg, #00c2ff 15.03%, #ff75f4 83.95%);
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

export const BottomLeftCircles = styled.button`
    width: 28.3px;
    height: 28.3px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    cursor: pointer;
    background-color: #00c2ff;
`
export const BottomMidCircles = styled.div`
    width: 28.3px;
    height: 28.3px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    cursor: pointer;
`

export const BottomRightCircles = styled.div`
    width: 28.3px;
    height: 28.3px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    cursor: pointer;
`
export const ButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    ${BottomLeftCircles}:hover,${BottomMidCircles}:hover,${BottomRightCircles}:hover {
        background: linear-gradient(
            92.61deg,
            rgba(0, 194, 255, 0.85) 7.28%,
            rgba(255, 117, 244, 0.799) 91.4%
        );
    }
`
