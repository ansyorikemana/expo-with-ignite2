// @flow

import React from 'react'
import { View } from 'react-native'
import ExamplesRegistry from '../../../App/Services/ExamplesRegistry'
import { FontAwesome } from '@expo/vector-icons'


// Example
ExamplesRegistry.addPluginExample('Vector Icons', () =>
  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Icon FontAwesome='rocket' size={40} color='white' />
    <Icon FontAwesome='send' size={40} color='white' />
    <Icon FontAwesome='star' size={40} color='white' />
    <Icon FontAwesome='trophy' size={40} color='white' />
    <Icon FontAwesome='warning' size={40} color='white' />
  </View>
)
