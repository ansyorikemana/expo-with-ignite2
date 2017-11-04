// @flow

import React from 'react'
import { View } from 'react-native'
import ExamplesRegistry from '../../../App/Services/ExamplesRegistry'
import { FontAwesome } from '@expo/vector-icons'


// Example
ExamplesRegistry.addPluginExample('Vector Icons', () =>
  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <FontAwesome name='rocket' size={40} color='white' />
    <FontAwesome name='send' size={40} color='white' />
    <FontAwesome name='star' size={40} color='white' />
    <FontAwesome name='trophy' size={40} color='white' />
    <FontAwesome name='warning' size={40} color='white' />
  </View>
)
