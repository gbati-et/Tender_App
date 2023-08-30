import React ,{ useState}from 'react';
import {View, Text, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import Background from './Background';
import Btn from '../components/Buttons';
import Field from './Field';


const  ResetPassword= props => {
    const [isChecked, setIsChecked] = useState(false);
  return (
   
<SafeAreaView style={{flex:1}}>
 <Background>     
    <ScrollView style={{flex:1}}>
            <View style={{alignItems: 'center', width: 460}}>
                        <Text
                    style={{
                        top:20,
                        color: '#080D3D',
                        fontSize: 64,
                        fontWeight: '500',
                        marginTop: 20,
                    }}>
                    Reset Password
                    </Text>
                    <Text
                    style={{
                        top:15,
                        color: '#080D3D',
                        fontSize: 19,
                    // fontWeight: 'bold',
                        marginBottom: 20,
                    }}>
                    
                    </Text>
                    <View 
                    style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 460,
                        borderTopLeftRadius: 130,
                        paddingTop: 50,
                        alignItems: 'center',
                    }}>
                    
                    <Field placeholder="New Password" keyboardType={'password'} />
                    <Field placeholder="Confirm Password" keyboardType={'numeric'} />
                </View>
                    
            
            <View style={{
                alignItems:'center',
                marginRight:40,
                marginTop:50
                }}> 
                <Btn

                    textColor="white"
                    bgColor={'#080D3D'}
                    btnLabel="Reset"
                    Press={() => {
                    //alert('Account created');
                    props.navigation.navigate("ResetPassword");
                    }}
                />
                </View>
        </View>
        </ScrollView>
 </Background>
</SafeAreaView>

  );
};

export default ResetPassword;