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
      <div>home</div>
    );
  }
}

export default connect(mapState,mapDispatch)(Home);