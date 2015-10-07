import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import NavButton from './NavButton';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ccc',
    paddingTop: 30,
    flex: 1
  }
});


export default class Scene extends React.Component {

  static propTypes = {
    nav: React.PropTypes.object.isequired,
    route: React.PropTypes.object.isequired
  }

  /**
   * ページの削除
   */
  onPressPopBtn = () => {
    if (this.props.route.index > 0) {
      this.props.nav.pop();
    }
  }

  /**
   * ページの追加
   */
  onPressPushBtn = () => {
    const nextIndex = this.props.route.index + 1;
    this.props.nav.push({
      name: `Scene ${nextIndex}`,
      index: nextIndex
    });
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <View
        name={this.props.route.name}
        style={styles.view}
      >
        <Text>{this.props.route.name}</Text>
        <NavButton
          label="push"
          onPress={this.onPressPushBtn}
        />
        <NavButton
          label="pop"
          onPress={this.onPressPopBtn}
        />
      </View>
    );
  }
}
