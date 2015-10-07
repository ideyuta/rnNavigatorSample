import React from 'react-native';
import {Navigator} from 'react-native';
import Scene from './components/Scene';


export default class rnNavigatorSample extends React.Component {

  /**
   * Scene をレンダリング
   *
   * @param {Object} route route
   * @param {Object} nav navigator
   * @return {ReactElement}
   */
  renderScene(route, nav) {
    return (
      <Scene
        nav={nav}
        route={route}
      />
    );
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }
}
