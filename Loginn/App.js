import * as React from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
//USAR PREFERENCIALMENTE FontAwesome ao invés de Icon de import { Icon } from 'react-native-elements'
//PORQUE nos emuladores expo Android e Web não mostra o ícone da fonte, mostra um regângulo
//AMBAS requerem a dependência '@expo/vector-icons'
//https://icons.expo.fyi/
//https://docs.expo.io/guides/icons/
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordSecured, setPasswordSecured] = React.useState(true);

  function onLogin() {
    Alert.alert('Credenciais', `E-mail: ${email} \nSenha: ${password}`);
  }

  function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.textLogo}>
         Conectar 
      </Text>


      <View style={styles.inputView}>
        <Icon color="orange" name="user" type="font-awesome" size={24} />
        {/*preferível <FontAwesome name="user" size={24} color="black" /> */}
        <TextInput
          style={styles.input}
          placeholder={'E-mail'}
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>


       {!isEmailValid(email) && email.length > 0 && (
          <Text style={styles.errorText}>E-mail inválido!</Text>
        )}


      <View style={styles.inputView}>

        <Icon color="orange" name="lock" type="font-awesome" size={24} />
        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={passwordSecured}
          placeholder={'Senha'}
          textContentType="password"
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity
          style={styles.touchableIcon}
          onPress={() => setPasswordSecured(!passwordSecured)}>
          {passwordSecured ? (
            <FontAwesome  color="orange" name="eye" type="font-awesome" size={20} />
          ) : (
            <FontAwesome color="orange" name="eye-slash" type="font-awesome" size={20} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.buttomView}>
        <Button title={'Login'} onPress={onLogin} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  inputView: {
    marginTop: 20,
    width: '90%',
    height: 50,
    backgroundColor: 'silver',
    borderRadius: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
  },
  buttomView: {
    marginTop: 20,
  },
  touchableIcon: {
    padding: 4,
  },
  errorText: {
    marginTop: 10,
    color: 'black',
    fontWeight:"bold",
  },
  textLogo: {
    fontWeight:"bold",
    fontSize:45,
    color:"orange",
    marginBottom:20,
    elevation: 5,
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
});
