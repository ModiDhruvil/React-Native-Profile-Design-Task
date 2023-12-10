import Snackbar from 'react-native-snackbar';
import { COLORS } from '../constants';

const SnackbarShow = async message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: COLORS.walkaway_grey,
  });
};

export default SnackbarShow;
