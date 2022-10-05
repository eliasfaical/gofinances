import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.colors.primary};
  padding-bottom: 20px;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  padding: 25px;
  flex: 1;
  justify-content: space-between;
  width: 100%;
`;

export const Fields = styled.View``;

export const TransactionType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
