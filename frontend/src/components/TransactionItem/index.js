import * as Icons from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useTransactionContext } from '../../context/globalState';
import { useAuthContext } from '../../context/authState';
import {
  StyledTransactionItem,
  StyledTransactionCategory,
  StyledTransactionInfo,
  StyledTransactionButtons,
  StyledItemText,
} from './styled';

const { Pencil, Trash } = Icons;

const TransactionItem = ({item, setItemsToEdit}) => {
  const { amount, type, category, date, title, _id } = item;
  const { deleteTransaction, categoryIcons } = useTransactionContext();
  const { user } = useAuthContext();
  const theme = useTheme();

  const sign = type === 'Income' ? '+' : '-';
  const color = type === 'Income' ? theme.incomeColor : theme.expenseColor;

  const IconComponent = Icons[categoryIcons[category]];

  const deleteHandler = async (id) => {
    const response = await fetch('/api/transactions/' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      deleteTransaction(id);
    }
  };

  return (
    <StyledTransactionItem color={color}>
      <StyledTransactionCategory>
        <IconComponent color={color} size={28} weight="duotone" />
        <StyledItemText color={color}>{category}</StyledItemText>
      </StyledTransactionCategory>
      <StyledTransactionInfo>
        <StyledItemText>{new Date(date).toISOString().split('T')[0]}</StyledItemText>
        <StyledItemText>{title}</StyledItemText>
        <StyledItemText color={color}>{sign}${amount}</StyledItemText>
      </StyledTransactionInfo>
      <StyledTransactionButtons>
        <Pencil
          color={color}
          onClick={() => setItemsToEdit(prevIds => [...prevIds, _id])}
          size={28}
          weight="duotone"
        />
        <Trash
          color={color}
          onClick={() => deleteHandler(_id)}
          size={28}
          weight="duotone"
        />
      </StyledTransactionButtons>
    </StyledTransactionItem>
  );
};

export default TransactionItem;
