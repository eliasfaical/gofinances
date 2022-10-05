import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  border-style: solid;
  border-width: ${({isActive}) => (isActive ? 0 : 1)};
  border-color: ${({theme}) => theme.colors.text};

  ${({isActive, type}) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({theme}) => theme.colors.success_light};
    `}

  ${({isActive, type}) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({theme}) => theme.colors.attention_light};
    `}
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(16)}px;
  margin-right: 15px;

  color: ${({theme, type}) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;
