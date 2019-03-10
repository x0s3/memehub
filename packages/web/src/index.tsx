import { ComponentType } from 'react';
import { AppRegistry } from 'react-native';

import Root from 'components/src/components';

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('memehub', () => AppComponent);
  AppRegistry.runApplication('memehub', {
    rootTag: document.querySelector('#root'),
  });
}

render(Root);
