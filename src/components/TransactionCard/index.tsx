import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Catergory,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Catergory>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Catergory>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
