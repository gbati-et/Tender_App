import React ,{ useState}from 'react';
import {View, Text, Touchable, TouchableOpacity,ScrollView,Image} from 'react-native';
import Background from './Background';
import Btn from '../components/Buttons';
import Field from './Field';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Checkbox from "expo-checkbox";
//import {  } from 'react-native-gesture-handler';

const Signup2 = props => {
    const [isChecked, setIsChecked] = useState(false);
    const [filePath, setFilePath] = useState({});

    const ImagePicker =() =>{

      let options = {
        StorageOptions:{
          path:"Image",
        },
      };
      launchImageLibrary(options, response=>{
        console.log (response);

         });
    };

    {/*const chooseFile = () => {
      let options = {
        title: 'Select Image',
        customButtons: [
          {
            name: 'customOptionKey',
            title: 'Choose Photo from Custom Option'
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log(
            'User tapped custom button: ',
            response.customButton
          );
          alert(response.customButton);
        } else {
          let source = response;
          // You can also display the image using data:
          // let source = {
          //   uri: 'data:image/jpeg;base64,' + response.data
          // };
          setFilePath(source);
        }
      });
    };*/}
  return (
    
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            top:20,
            color: '#080D3D',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            top:10,
            color: '#080D3D',
            fontSize: 19,
           // fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Create a Company account
        </Text>
        <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            alignItems: 'center',
        
          }}>
            
           
          <Field placeholder="Company Name" />
          <Field placeholder="Location" />
          <Field
            placeholder="Description"
            
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          
          <View /*style={styles.container}*/>
        {/*<Image 
          source={{ uri: filePath.path}} 
          style={{width: 100, height: 100}} />*/}
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
         // style={styles.imageStyle}
        />
        <Image
          source={{uri: filePath.uri}}
         // style={styles.imageStyle}
        />
        <Text /*style={styles.textStyle}*/>
          {filePath.uri}
        </Text>
        {/*
          <Button
            title="Choose File"
            onPress={chooseFile} />
        */}
        <TouchableOpacity
         onPress = {()=>{
          ImagePicker ();
         }}>
          <Text /*style={styles.textStyle}*/>
            Choose Image
          </Text>
        </TouchableOpacity>
      </View>
            <View style={{paddingTop:20}}>
            <Btn
            
          
            textColor="white"
            bgColor={'#080D3D'}
            btnLabel="Next"
            Press={() => {
            
              props.navigation.navigate('Signup3');
            }}
            />
            </View>
            <View
            style={{
                top:20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#080D3D', fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          
          
          
        </View>
            

        </ScrollView>
      </View>
    </Background>
 
  );
};

export default Signup2;