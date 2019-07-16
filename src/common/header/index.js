import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href="/">
                <i className='iconfont logoIcon'>&#59341;</i>
                愉 檬
            </Logo>
            <Nav>
                <SearchWrapper>
                    <CSSTransition
                        in={ props.focused }    
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch  
                            className={ props.focused ? 'focused' : '' }
                            onFocus= { props.handleInputFocuesd }
                            onBlur= { props.handleInputBlur }
                            >
                        </NavSearch>
                    </CSSTransition>
                    <i className={ props.focused ? 'focused iconfont' : 'iconfont' }>&#xe63d;</i>
                </SearchWrapper>
                <NavItem className='right'> 关于 </NavItem>
                <NavItem className='right'> 日常 </NavItem>
                <NavItem className='right'> 首页 </NavItem>
                {/* <NavItem className='right'> 
                    <i className="iconfont">&#xe636;</i>
                </NavItem> */}
            </Nav>
            {/* <Addition>
                <Button className='complain'>
                    投诉 <i className="iconfont">&#xe63e;</i>  
                </Button>
                <Button className='pay'>缴费</Button>
            </Addition> */}
        </HeaderWrapper> 
    )
}

const mapStateToProps = (state) => {
    return {
       focused: state.header.get('focused') 
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocuesd() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
