import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colors } from '@/globalStyles/colors';
import { fontFamily } from '@/globalStyles/fontFamily';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  routerImage: {
    position: 'absolute',
    top: hp('12%'),
    right: wp('1%'),
    width: wp('100%'),
    height: undefined,
    aspectRatio: 1,
  },
  boxInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: wp('5%'),
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'flex-start',
  },
  boxInfoTitle: {
    marginTop: hp('2%'),
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    textAlign: 'left',
    fontSize: wp('8%'),
  },
  subTitle: {
    fontFamily: fontFamily.regularLight,
    color: colors.white,
    textAlign: 'left',
    marginTop: hp('1%'),
    fontSize: wp('4%'),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: wp('10%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    // alignSelf: 'flex-start',
    marginTop: hp('2%'),
    width: wp('65%'),
  },
  buttonText: {
    fontFamily: fontFamily.medium,
    color: colors.black,
    textAlign: 'center',
    marginRight: wp('2%'),
    paddingHorizontal: wp('5%'),
    fontSize: wp('6%'),
  },
  buttonArrow: {
    width: 50,
    height: 50,
    backgroundColor: colors.black,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
