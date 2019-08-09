import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component{
  render() {
    return <div>SongList</div>;
  }
}

//react library is returning a function and
//we are passing SongList to that function
//2nd () invokes the function i.e. returned
export default connect()(SongList);
