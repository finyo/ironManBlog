import styled from 'styled-components';

export const Container = styled.div`
    width: 1300px;
    overflow: hidden;
    margin: 0 auto;
    .Weather {
        width: 100%;
        float: left;
    }
`

export const TextSection = styled.div`
    box-sizing: border-box;
    height: 500px;
    font-size: 36px;
    color: #fff;
    line-height: 1.5;
    float: left;
    &.toLeft {
        width: 400px;
        margin-bottom: 36px;
        padding: 175px 0 0 60px;
    }
    &.toRight {
        width: 300px;
        text-align: left;
        margin-left: 100px;
    }
    .text-gradient {  
        display: inline-block;
        color: #F04864;
        font-size: 50px;
        font-family: '微软雅黑';
        background-image: -webkit-gradient(linear, 10 0, 0 bottom, from(rgba(240,72,100, 1)), to(rgba(247,155,170, 0.8)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .text-gradient2 {  
        display: inline-block;
        color: #F04864;
        font-size: 50px;
        font-family: '微软雅黑';
        background-image: -webkit-gradient(linear, 10 0, 0 bottom, from(rgba(240,72,100, 1)), to(rgba(250,204,20, 0.6)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .sweet-word {
        font-size: 14px;
        text-indent: 0em;
        margin-top: 40px;
        color: #c6c0af;
    }
`
export const ChartsSection = styled.div`
    &.toLeft {
        width: 700px;
        float: left;
    }
    &.toRight {
        width: 900px;
        float: right;
        margin-bottom: 36px;
    }
`
export const WeatherSection = styled.div`
    width: 100%;
    color: #fff;
    padding: 12px 0;
    border-bottom: 1px solid #565327;
`