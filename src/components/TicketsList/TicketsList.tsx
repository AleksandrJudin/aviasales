import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';

import TicketsListItem from '../TicketsListItem/';
import Preloader from '../Preloader';

import style from './TicketsList.module.sass';
import { IRootState, ITicket } from '../../types/interface';

const TicketsList: React.FC<ITicket> = ({ tickets }): JSX.Element => {
  const { loading, error } = useSelector((state: IRootState) => state.tickets);
  const createTicketsList = tickets.map(({ price, carrier, segments }, i) => {
    if (i < 25) {
      return (
        <TicketsListItem
          price={price}
          carrier={carrier}
          segments={segments}
          key={uniqueid('ticket_')}
        />
      );
    }
    return null;
  });

  const createList = (
    <ul className={style['tickets-list']}>{createTicketsList}</ul>
  );

  const content = loading && !error ? <Preloader /> : createList;

  return !error ? content : <Alert message='Ошибка сервера' type='error' />;
};

export default TicketsList;
