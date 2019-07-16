
import * as React from 'react';
import  GoodCharts  from './components/goodCharts'
import  BadCharts  from './components/badCharts'
import { connect } from 'react-redux';
import { TextSection, ChartsSection, Container, WeatherSection } from './components/style'
// import axios from 'axios'


const Home = (props) => {
    const { list } = props
    return (
        <Container>
            <TextSection className='toLeft'>
                美妙甜 “<span className='text-gradient'>事</span>”
                <p className='sweet-word'>因你而存在，真心实意把你爱。春天花盛开，冬天雪皑皑，一年四季心不改。没你日子卡带，想你心潮澎湃，风风雨雨拆不开。情人节，一世情，到发白</p>
            </TextSection>
            <ChartsSection className='toRight'>
                <GoodCharts />
            </ChartsSection>
            <ChartsSection className='toLeft'>
                <BadCharts/>
            </ChartsSection>
            <TextSection className='toRight'>
                酸酸柠 “<span className='text-gradient2'>闷</span>”
                <p className='sweet-word'>如果我的坚强任性不小心伤害了你，你能不能温柔提醒，我虽然心太急，更害怕错过你。</p>
            </TextSection>
            <div className='Weather'>
                { list.map((item) => (<WeatherSection key={item.get('id')} >{ item.get('name')}</WeatherSection>)) }
            </div>
        </Container>
    )
}

const mapState = (state) => {
    return {
       list: state.home.get('dataList')
    }
}


export default connect(mapState, null)(Home);