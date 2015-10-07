import React from 'react-native';
import {PixelRatio, StyleSheet, TouchableHighlight, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD'
  }
});


export default class NavButton extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isequired,
    onPress: React.PropTypes.func.isequired
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
        underlayColor="#B5B5B5"
      >
        <Text>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}
