import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secundary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 20px 25px;
  padding-bottom: ${RFValue(40)}px;
  margin-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `};

  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `};

  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  margin-top: 35px;
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
