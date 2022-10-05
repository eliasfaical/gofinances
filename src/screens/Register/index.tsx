import React, {useState} from 'react';
import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Form/Button';
import {TransactionButtonType} from '../../components/Form/TransactionButtonType';
import {CategorySelect} from '../../components/Form/CategorySelect';

import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionType,
} from './styles';

export default function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />

          <TransactionType>
            <TransactionButtonType
              title="Income"
              type="up"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionButtonType
              title="Outcome"
              type="down"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionType>

          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Cadastrar" />
      </Form>
    </Container>
  );
}
