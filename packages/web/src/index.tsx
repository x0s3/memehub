import { ComponentType } from 'react';
import { AppRegistry } from 'react-native';

import App from 'components/src/components/App';

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('memehub', () => AppComponent);
  AppRegistry.runApplication('memehub', {
    rootTag: document.querySelector('#root'),
  });
}

render(App);
