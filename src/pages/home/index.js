import React, { PureComponent } from 'react';
import { loadHomeDataAsync } from './store/actionCreators';
import { connect } from 'react-redux';

const mapState = (state) => {
    return {
      home: state.home.home
    }
}
  
const mapDispatch = (dispatch) => {
    return {
      loadCategories () {
        dispatch(loadHomeDataAsync(dispatch))
      }
    }
}

class Home extends PureComponent {
  componentDidMount(){
    this.props.loadCategories()
  }
  render() {
    console.log(this.props.home)
    return (
      <div>
        <div>登陆页面</div>
        <input type="text" placeholder="请输入用户名"/>
        <input type="passward" placeholder="请输入密码"/>
        <button>Button</button>
     </div>
    );
  }
}

export default connect(mapState,mapDispatch)(Home);