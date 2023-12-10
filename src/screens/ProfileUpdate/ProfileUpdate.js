import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  PermissionsAndroid,
  Dimensions
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '.';
import { BottomSheet } from 'react-native-btr';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { checkMultiple, PERMISSIONS } from 'react-native-permissions';
import { ICONS } from '../../constants/icon';
import { COLORS } from '../../constants';
import SnackbarShow from '../../utils/SnackbarShow';
import { PLEASE_SELECT_PROFILE_PIC } from '../../utils/SnackBarLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';

var optionsCapture = {
  mediaType: 'photo',
  includeBase64: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.5,
};

const ProfileUpdate = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState('1');
  const [profilePhoto, setProfilePhoto] = useState('')
  const [visible, setVisible] = useState(false);

  const [permissions, setPermissions] = useState(false);


  useEffect(() => {
    getProfilePhoto()
  }, [])

  async function getProfilePhoto() {
    const profile_photo = await AsyncStorage.getItem('profile_photo');
    setProfilePhoto(profile_photo)
  }


  function toggle() {
    setVisible(visible => !visible);
  }

  const openDialog = type => {
    if (type === 0) {
      launchCamera(optionsCapture, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          setProfilePhoto(res.assets[0].uri);
          setVisible(false);
        }
      });
    }
    if (type === 1) {
      launchImageLibrary(optionsCapture, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          console.log(res.assets);
          setProfilePhoto(res.assets[0].uri);
          setVisible(false);
        }
      });
    }
  };

  const checkPermission = () => {
    checkMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ],
    ).then(statuses => {
      console.log(statuses);
      if (
        statuses[PERMISSIONS.IOS.CAMERA] === 'granted' &&
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'granted'
      ) {
        setPermissions(true);
      }

      if (
        statuses[PERMISSIONS.IOS.CAMERA] === 'denied' ||
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'unavailable' ||
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'denied'
      ) {
        // requestPermissionIOSCamera();
        setPermissions(true);
      }

      if (Platform.Version >= 33) {
        setPermissions(true);
      } else {
        if (
          statuses[PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'granted'
        ) {
          setPermissions(true);
        }
      }

      if (statuses[PERMISSIONS.ANDROID.CAMERA] === 'denied') {
        setPermissions(false);
        requestCameraPermission();
      }

      if (statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'denied') {
        setPermissions(false);
        requestStoragePermission();
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App neeed Camera Permission',
          message:
            'App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPermissions(true);
      } else {
        console.log('Camera permission denied');
        setPermissions(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App need Storage Permission',
          message:
            'App needs access to your Storage ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPermissions(true);
      } else {
        console.log('Camera permission denied');
        setPermissions(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const images = [
    {
      id: '1',
      Name: 'girl1',
      Image: ICONS.girl1,
    },
    {
      id: '2',
      Name: 'girl2',
      Image: ICONS.girl2,
    },
    {
      id: '3',
      Name: 'girl3',
      Image: ICONS.girl3,
    },
    {
      id: '4',
      Name: 'girl4',
      Image: ICONS.girl4,
    },
    {
      id: '5',
      Name: 'girl5',
      Image: ICONS.girl5,
    },
    {
      id: '6',
      Name: 'girl6',
      Image: ICONS.girl6,
    },
    {
      id: '7',
      Image: ICONS.male1,
    },
    {
      id: '8',
      Image: ICONS.male2,
    },
    {
      id: '9',
      Image: ICONS.male3,
    },
    {
      id: '10',
      Image: ICONS.male4,
    },
    {
      id: '11',
      Image: ICONS.male5,
    },
    {
      id: '12',
      Image: ICONS.male6
    },
    {
      id: '13',
      Image: ICONS.male6,
    },
    {
      id: '14',
      Image: ICONS.male7,
    },
    {
      id: '15',
      Image: ICONS.male8,
    },
  ];

  // async function setAvatar(name) {
  //   await AsyncStorage.setItem('profile_photo', name).then(() => {
  //     navigation.goBack()
  //   });
  // }

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 20, justifyContent: 'center' }}>
      {/* <TouchableOpacity onPress={() => setAvatar(item.Name)}> */}
      <Image
        source={item.Image}
        style={{ resizeMode: 'contain', height: 70, width: Dimensions.get('window').width / 5, margin: 3 }}
      />
      {/* </TouchableOpacity> */}
    </View>
  );

  async function saveProfilePhoto() {
    if (profilePhoto === '') {
      SnackbarShow(PLEASE_SELECT_PROFILE_PIC)
      return;
    }
    await AsyncStorage.setItem('profile_photo', profilePhoto).then(() => {
      navigation.goBack()
    });

  }

  async function removePhoto() {
    setVisible(false)
    setProfilePhoto('')
    await AsyncStorage.removeItem('profile_photo');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewChild}>
        <View >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ICONS.close}
              style={styles.closeImg}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25, marginStart: 5 }}>

          <Text style={styles.txtKey}>
            Choose Profile photo
          </Text>
          <Text style={styles.txtValue}>
            Choose a profile photo from your library or select an avatar to
            add to your profile
          </Text>

          <View style={styles.selectPhotoView}>
            <View style={{ flex: 0.5 }}>
              <TouchableOpacity
                style={[styles.photoView, { backgroundColor: isVisible === '1' ? COLORS.btnBG : 'transparent' }]}
                onPress={() => setIsVisible("1")}>
                <Text style={[styles.photoTxt, { color: isVisible === "1" ? 'white' : 'black' }]}>Choose photo</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }}>
              <TouchableOpacity
                style={[styles.avatarView, { backgroundColor: isVisible === '2' ? COLORS.btnBG : 'transparent' }]}
                onPress={() => setIsVisible("2")}>
                <Text style={[styles.avatarTxt, { color: isVisible === "2" ? 'white' : 'black' }]}>Avatar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {isVisible === '1' ? (
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 18,
                }}>
                {profilePhoto ?
                  <Image style={styles.profileImgView} source={{ uri: profilePhoto }} />
                  :
                  <View style={styles.profileImgView}>

                  </View>
                }
                <View>
                  <TouchableOpacity
                    style={styles.editCameraBtn}
                    onPress={() => setVisible(true)}>
                    <Image
                      source={ICONS.camera}
                      style={{ resizeMode: 'contain', height: 20, width: 20 }}
                    />
                    <Text style={{ color: 'black' }}>Edit Photo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={{ justifyContent: 'center', marginStart: 12 }}>
              <FlatList
                data={images}
                numColumns={4}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.touchBtn} onPress={() => saveProfilePhoto()}>
            <Text style={styles.txtBtn}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}>
        <View style={styles.viewBSUpload}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={{ color: 'black', fontSize: 15, margin: 15 }}>
              Upload your photo
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                margin: 15,
              }}
              onPress={() => (permissions ? openDialog(1) : checkPermission())}>
              <Image
                source={ICONS.view_photo}
                style={{ resizeMode: 'center', height: 20, width: 20 }}
              />
              <Text style={{ color: 'black', marginStart: 10 }}>
                View Photo Library
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                width: '100%',
                opacity: 0.2

              }}></View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                margin: 15,
                top: 10,
              }}
              onPress={() => (permissions ? openDialog(0) : checkPermission())}>
              <Image
                source={ICONS.camera}
                style={{ resizeMode: 'center', height: 20, width: 20 }}
              />
              <Text style={{ color: 'black', marginStart: 10 }}>
                Take a photo
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                width: '100%',
                marginTop: 15,
                opacity: 0.2
              }}></View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                margin: 15,
              }}
              onPress={() => removePhoto()}>
              <Image
                source={ICONS.delete_item}
                style={{ resizeMode: 'center', height: 20, width: 20 }}
              />
              <Text style={{ color: 'black', marginStart: 10 }}>
                Remove photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ProfileUpdate;
