import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const headerRightButton = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10}>
      <MaterialCommunityIcons name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

headerRightButton.propTypes = {
  tintColor: PropTypes.string,
};

export default headerRightButton;
