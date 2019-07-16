import styled from 'styled-components';
// import { url } from 'inspector';
// 如果要用css添加图片，比如：background: url('./logo.png');，这种传统的写法就不行了。需要另一种写法：
// import logoPic from '../../statics/logo.png'

// 推荐一种比较好的写法
// background: url(${ (props) => props.imgUrl })


export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    min-width: 1200px;
    border-bottom: 1px solid #383838;
`
export const Logo = styled.div`
    float: left;
    width: 174px;
    height: 58px;
    margin: 0 20px 0 30px;
    // background-size: cover;
    line-height: 58px;
    font-size: 26px;
    color: #fff;
    .logoIcon {
        font-size: 36px;
        color: #ead05c;
        margin-right: 20px;
        vertical-align: top;
    }
`
export const Nav = styled.div`
    float: left;
    width: calc(100% - 224px);
    height: 100%;
    margin: 0 auto;
    padding-right: 100px;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0px 26px;
    font-size: 15px;
    font-weight: 700;
    color: #333；
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #fff;
        cursor: pointer;
        opacity: 0.8;
        transition: all .2s ease-in;
        text-shadow: 0px 0px 0px;
        &:hover {
            color: #fff;
            opacity: 1;
            text-shadow: 0px 0px 12px;
        }
    }
    &.active {
        color: #ff0b18;
    }
`
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    font-size: 12px;
    width: 80px;
    height:38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eeeeee14;
    color: #fff;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 260px
        padding: 0 30px 0 20px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
   }
    // 讲真我觉得这样写是有点多此一举，只不过看着教程而已
    //    .slide-enter-active {
    //         width: 260px;
    //    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    //    .slide-exit-active {
    //         width: 160px;
    //     }

`
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    line-height: 38px;
    padding: 0 20px;
    border-radius: 19px;
    // cursor: pointer;
    &.pay {
        border: 1px solid #fbca03;
        color: #ff0b18;
    }
    &.complain {
        border: 1px solid #fbca03;        
        background-color: #fbca03;
        color: #ff0b18;
    }
`
export const SearchWrapper = styled.div`
   float: right;
   position: relative;
   .iconfont {
       position: absolute;
       right: 5px;
       bottom: 5px;
       width: 30px;
       height: 30px;
       line-height: 30px;
       border-radius: 15px;
       text-align: center;
       color: #999;
       &.focused {
            background-color: #2d5961;
            color: #fff;
            cursor: pointer;
        }
   }
`