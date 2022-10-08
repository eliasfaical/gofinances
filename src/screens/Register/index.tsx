import React, {useState} from 'react';
import {Modal} from 'react-native';

import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Form/Button';
import {TransactionButtonType} from '../../components/Form/TransactionButtonType';
import {CategorySelectButton} from '../../components/Form/CategorySelectButton';
import {CategorySelect} from '../CategorySelect';

import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionType,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button title="Cadastrar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
