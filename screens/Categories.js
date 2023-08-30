import { Text, View , ScrollView, SectionList} from 'react-native';
import React, {Component} from 'react';
import COLORS from '../constants/colors';

const Data = [
  {
   title: 'Catagories',
   data: ['Entertaiment', 'Business' , 'Politics' ,'Health', 'Technology',
     'Sport']

  } 
   ] 

const Categories =() => {

  return (
    <ScrollView horizontal={true}>
      {
       <SectionList
         sections={Data}
         keyExtractor={(item,index)=> item + index}
         renderItem={({item}) => (
           <View 
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
             }}>
          <Text>{item}</Text>
        </View>
        )
        } />
      } 
     

    </ScrollView>
  );
}
;

export default Categories;