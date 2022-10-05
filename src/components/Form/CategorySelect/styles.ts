import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};
`;
