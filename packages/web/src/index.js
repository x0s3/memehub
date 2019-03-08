import { AppRegistry } from 'react-native';

import App from 'components/src/App';

AppRegistry.registerComponent('memehub', () => App);

AppRegistry.runApplication('memehub', {
  rootTag: document.getElementById('root'),
});
