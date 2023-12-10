import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '.';
import { ICONS } from '../../constants/icon';
import DropDownPicker from 'react-native-dropdown-picker';
import { PROFILE_UPDATE } from '../../constants/route_name';
import SnackbarShow from '../../utils/SnackbarShow';
import { PLEASE_ENTER_ADDRESS, PLEASE_ENTER_FIRST_NAME, PLEASE_ENTER_LAST_NAME, PLEASE_SELECT_PROFILE_PIC, PLEASE_SELECT_YB } from '../../utils/SnackBarLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Register = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('')

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { "label": "1990", "value": 1990 },
    { "label": "1991", "value": 1991 },
    { "label": "1852", "value": 1852 },
    { "label": "2049", "value": 2049 },
    { "label": "2050", "value": 2050 }
  ]);
  const [imagePath, setImagePath] = useState('');


  useFocusEffect(
    React.useCallback(() => {
      getProfilePhoto()
    }, []),
  );

  async function getProfilePhoto() {
    const profile_photo = await AsyncStorage.getItem('profile_photo');
    setProfilePhoto(profile_photo)

  }

  async function saveDetail() {
    if (profilePhoto === '') {
      SnackbarShow(PLEASE_SELECT_PROFILE_PIC)
      return;
    }
    if (firstName === '') {
      SnackbarShow(PLEASE_ENTER_FIRST_NAME)
      return;
    }
    if (lastName === '') {
      SnackbarShow(PLEASE_ENTER_LAST_NAME)
      return;
    }
    if (value === null) {
      SnackbarShow(PLEASE_SELECT_YB)
      return;
    }



    await AsyncStorage.setItem('firstName', firstName);
    await AsyncStorage.setItem('lastName', lastName);
    await AsyncStorage.setItem('yearOfBirth', value.toString()).then(() => {
      SnackbarShow('Data Save Successfully')
    });

  }


  return (
    <View style={styles.container}>

      <View style={styles.viewChild}>
        <Text style={styles.txtKey}>
          Let's get to know you
        </Text>
        <Text style={styles.txtValue}>
          Let us get to know you a bit better so you can get the best out of us
        </Text>
        <View style={styles.viewProfileImg}>
          <Image source={profilePhoto ? { uri: profilePhoto } : ICONS.male1} style={styles.profileImg} />

          <TouchableOpacity onPress={() => navigation.navigate(PROFILE_UPDATE)}>
            <View style={styles.viewEditPhoto}>
              <Image
                source={ICONS.camera}
                style={styles.imgCamera}
              />
              <Text style={styles.txtEdit}>Edit Photo</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewTextInput}>
          <Text style={styles.txtKeyInput}>First Name</Text>
          <TextInput
            style={styles.txtInput}
            value={firstName}
            onChangeText={v => setFirstName(v)}

          />

          <Text style={styles.txtKeyInput}>Last Name</Text>
          <TextInput
            style={styles.txtInput}
            value={lastName}
            onChangeText={v => setLastName(v)}

          />

          <Text style={styles.txtKeyInput}>Year of Birth</Text>

          <DropDownPicker
            style={{ borderColor: 'lightgray', marginTop: 10 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            listMode="MODAL"
          />
        </View>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.touchBtn} onPress={() => saveDetail()}>
          <Text style={styles.txtBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
