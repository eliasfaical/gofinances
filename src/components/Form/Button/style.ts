import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: 15px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.secundary};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.shape};
`;
