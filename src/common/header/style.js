import styled from 'styled-components';
import logoPic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 20px;
    width: 174px;
    display: block;
    height: 58px;
    background-image: url(${ logoPic });
    background-size: cover;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333；
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ff0b18;
    }
`
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    font-size: 12px;
    width: 160px;
    height:38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 260px
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
   float: left;
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
            background-color: #969696;
            color: #fff;
        }
   }
`