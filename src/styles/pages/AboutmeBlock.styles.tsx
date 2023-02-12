import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 50vh;
`

export const AboutText = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 450px;
`


export const Card = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 450px;
    border-radius: 6px;
    bottom: 300px;
    margin: 0 auto;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4F4F4F;
    width: 450px;
    height: 137px;
    justify-content: center;
    position: relative;
    left: 75px;
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
