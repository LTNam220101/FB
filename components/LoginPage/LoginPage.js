import {Formik} from 'formik';
import * as yup from 'yup';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {LogBox} from 'react-native';
import {COLOR} from '../../styles/colors';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 265) / 527);
const imageWidth = dimensions.width;

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const LoginPage = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assets/login.jpeg')}
        style={styles.img}
      />
      <View style={styles.bottom}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            console.log(values);
            route.params.setIsSignIn(true);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View>
              <TextInput
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Số điện thoại hoặc email"
                placeholderTextColor={COLOR.white2}
                style={styles.input}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={{fontSize: 10, color: COLOR.red}}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                placeholderTextColor={COLOR.white2}
                style={styles.input}
              />
              {errors.password && (
                <Text style={{fontSize: 10, color: COLOR.red}}>
                  {errors.password}
                </Text>
              )}
              <View style={styles.button}>
                <Button
                  onPress={handleSubmit}
                  color={COLOR.blue}
                  title="Đăng nhập"
                  disabled={!isValid}
                />
              </View>
            </View>
          )}
        </Formik>
        <Text style={styles.forget}>Quên mật khẩu?</Text>
        <View style={styles.orContainer}>
          <View style={styles.blank} />
          <Text style={styles.or}>Hoặc</Text>
          <View style={styles.blank} />
        </View>
        <View style={styles.signup}>
          <Button
            onPress={() => navigation.navigate('Signup')}
            color={COLOR.green}
            title="Tạo tài khoản Facebook mới"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLOR.darkBackground,
  },
  img: {
    height: imageHeight,
    width: imageWidth,
  },
  bottom: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  input: {
    color: COLOR.white2,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: COLOR.white2,
    borderBottomWidth: 1,
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
  },
  forget: {
    color: COLOR.blue,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 45,
  },
  orContainer: {
    marginBottom: 45,
    flexDirection: 'row',
  },
  or: {
    color: COLOR.white2,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  blank: {
    position: 'relative',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.white2,
    top: -8,
  },
  signup: {
    paddingRight: 30,
    paddingLeft: 30,
  },
});

export default LoginPage;
