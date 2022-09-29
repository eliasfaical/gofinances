import React from 'react';
import {HighlightCard} from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {name: 'Vendas', icon: 'dollar-sign'},
      date: '12/09/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgeria Pizzy',
      amount: 'R$ 35,00',
      category: {name: 'Alimentação', icon: 'coffee'},
      date: '12/09/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel AP',
      amount: 'R$ 1.200,00',
      category: {name: 'Casa', icon: 'shopping-bag'},
      date: '12/09/2022',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/1591282?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Elias</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.000,90"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 3.500,00"
          lastTransaction="Última saída dia 3 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 19.000,90"
          lastTransaction="01 a 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
