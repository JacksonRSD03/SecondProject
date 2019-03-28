
import React,{Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const AppNavigator = createStackNavigator({
   Tela1:{
     screen:Tela1
   },
   Tela2:{
     screen:Tela2
   }
});


export default  createAppContainer(AppNavigator);
