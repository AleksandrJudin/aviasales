import React, { useEffect } from 'react';

import { ReactComponent as Logo } from '../brand/logo.svg';

import TicketsFilter from '../components/TicketsFilter';
import TicketsTabs from '../components/TicketsTabs';
import { fetchingTickets } from '../slices/tickets';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import style from './SearchTicketsContainer.module.sass';

const SearchTicketsContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingTickets());
  }, [dispatch]);

  return (
    <section className={style.tickets}>
      <div className={style.container}>
        <div className={style.logo}>
          <a href='/'>
            <Logo />
          </a>
        </div>
        <main className={style.main}>
          <TicketsFilter />
          <TicketsTabs />
        </main>
      </div>
    </section>
  );
};

export default SearchTicketsContainer;
