import React from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Madoka, Jiro} from 'react-native-textinput-effects'
import { Button } from 'react-native-elements'
import { Container, Header, Item, Input, Icon, Text, Content} from 'native-base'
class Contactus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Container>
        <Content>

          <View style={styles.cen}>
            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/32207749_10204687882073435_1576086593419083776_n.jpg?_nc_cat=0&oh=bdede7d612bfa26c151908dc6ff63aa1&oe=5B9A74BB'}}
              style={styles.img} />
            <Button
              title='Contact us'
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 150,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20

              }}
            />

            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3'}}
              style={styles.img} />
            <Button
              title='Contact us'
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 150,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20

              }}
            />

            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18527753_10154354095631852_7605981024395115852_n.jpg?_nc_cat=0&oh=99bda792ec1a737846eda8ad22c31edc&oe=5B8DF2C3'}}
              style={styles.img} />
            <Button
              title='Contact us'
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 150,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20

              }}
            />

            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/27067119_10155568249638369_452583962590222091_n.jpg?_nc_cat=0&oh=d77b2bbfb5860f16dcf448fb1cb3dd7e&oe=5B8023B5'}}
              style={styles.img} />
            <Button
              title='Contact us'
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 150,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20
              }}
            />
            <Text>{'\n'}📍Amman , Jordan</Text>
            <Text> 📱Phone: +00 787888888</Text>
            <Text>✉️Email: mail@mail.com</Text>

          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {

    width: 150,
    height: 150
  },
  cen: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})

module.exports = Contactus
