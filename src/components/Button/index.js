import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { StyledButton } from './styles';
import { useTheme } from 'styled-components';

export default function Button(props) {
  const { t } = useTranslation('common');

  const { color, textColor, outlined, ...rest } = props;
  const { primaryColor, white } = useTheme();

  return (
    <StyledButton
      {...rest}
      outlined={!!outlined}
      color={color || primaryColor}
      textColor={textColor || white}
    />
  );
}
