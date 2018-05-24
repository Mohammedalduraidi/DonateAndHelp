import React from 'react';
import { StyleSheet, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Container, Header, Content, Button, Text ,Icon } from 'native-base';
import { Drawer } from 'native-base';

import Main from './Main'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        drawerType: 'overlay',
      openDrawerOffset:200,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
   }
 }

 render() {
     closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
       <Drawer
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        disabled={this.state.disabled}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.side}
        ref={(ref) => { this.drawer = ref; }}
        content={<Main navigator={this.navigator} />}
        styles={drawerStyles}
        onClose={() => {closeDrawer()}} >

      <Container>
        <Header >
        <Content>

          <Button onPress={() => {openDrawer()}}>
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'black'}}/>
          </Button>
        </Content>

        </Header>
      </Container>
      </Drawer>
      );

  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  container: {
    margin:10 , 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



module.exports = Home;