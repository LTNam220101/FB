import {Formik} from 'formik';
import * as yup from 'yup';
import React, {
  Button,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import {COLOR} from '../../styles/colors';
import {RadioButton} from 'react-native-paper';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authRegister} from './actions';
import {AUTH_REGISTER_CLEAR} from './reducers';
import DeviceInfo from 'react-native-device-info';

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
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
      'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    )
    .required('Password is required'),
  name: yup.string().required('Name is required'),
  gender: yup.string(),
  birthday: yup.string(),
});

const SignupPage = ({navigation}) => {
  const dispatch = useDispatch();
  const RegisterResult = useSelector(state => state.registerResult);
  const [modalVisible, setModalVisible] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (RegisterResult) {
      if (RegisterResult.success) {
        ToastAndroid.show(
          'Tin nhắn xác nhận đã được gửi về mail của bạn. Vui lòng xác nhận tài khoản và đăng nhập',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Login');
      } else {
        setErr('Có lỗi xảy ra, vui lòng thử lại');
      }
    }
    return () => dispatch({type: AUTH_REGISTER_CLEAR});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RegisterResult]);

  const handleRegister = async values => {
    DeviceInfo.getUniqueId().then(uniqueId => {
      dispatch(authRegister({...values, uuid: uniqueId}));
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assets/login.jpeg')}
        style={styles.img}
      />
      <View style={styles.bottom}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            birthday: getFormatedDate(new Date(), 'YYYY-MM-DD'),
            gender: '1',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={values => handleRegister(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
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
                placeholder="Email"
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
              <TextInput
                name="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Họ Tên"
                placeholderTextColor={COLOR.white2}
                style={styles.input}
              />
              {errors.name && (
                <Text style={{fontSize: 10, color: COLOR.red}}>
                  {errors.name}
                </Text>
              )}
              <RadioButton.Group
                onValueChange={handleChange('gender')}
                value={values.gender}>
                <View style={styles.radio}>
                  <Text style={styles.radioBtnText}>Giới tính</Text>
                  <View style={styles.radioBtn}>
                    <RadioButton
                      value="1"
                      uncheckedColor={COLOR.white2}
                      color={COLOR.active}
                    />
                    <Text style={styles.radioBtnText}>Nam</Text>
                  </View>
                  <View style={styles.radioBtn}>
                    <RadioButton
                      value="0"
                      uncheckedColor={COLOR.white2}
                      color={COLOR.active}
                    />
                    <Text style={styles.radioBtnText}>Nữ</Text>
                  </View>
                </View>
              </RadioButton.Group>
              {errors.gender && (
                <Text style={{fontSize: 10, color: COLOR.red}}>
                  {errors.gender}
                </Text>
              )}
              <TouchableHighlight onPress={() => setModalVisible(true)}>
                <Text
                  name="birthday"
                  placeholderTextColor={COLOR.white2}
                  style={styles.input}>
                  Ngày sinh: {values.birthday}
                </Text>
              </TouchableHighlight>
              {errors.birthday && (
                <Text style={{fontSize: 10, color: COLOR.red}}>
                  {errors.birthday}
                </Text>
              )}
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContent}>
                  <DatePicker
                    options={{
                      backgroundColor: COLOR.black,
                      textHeaderColor: COLOR.white,
                      textDefaultColor: COLOR.white2,
                      selectedTextColor: COLOR.white,
                      mainColor: COLOR.blue,
                      textSecondaryColor: COLOR.white,
                    }}
                    mode="calendar"
                    minuteInterval={30}
                    style={{borderRadius: 10}}
                    current={values.birthday}
                    onDateChange={date => {
                      setFieldValue('birthday', date.replaceAll('/', '-'));
                      setModalVisible(false);
                    }}
                  />
                </View>
              </Modal>
              <Text>{err ? err : ''}</Text>
              <View style={styles.button}>
                <Button
                  onPress={handleSubmit}
                  color={COLOR.green}
                  title="Đăng ký"
                  disabled={!isValid}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.orContainer}>
          <View style={styles.blank} />
          <Text style={styles.or}>Hoặc</Text>
          <View style={styles.blank} />
        </View>
        <View style={styles.signup}>
          <Button
            onPress={() => navigation.navigate('Login')}
            color={COLOR.blue}
            title="Đăng nhập"
          />
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 10,
    marginTop: 15,
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 50,
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
    borderBottomColor: COLOR.white2,
    borderBottomWidth: 1,
  },
  radioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBtnText: {
    color: COLOR.white2,
    fontSize: 18,
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignupPage;

//Họ, Tên, ngày sinh, giới tính, sdt, mk, email
