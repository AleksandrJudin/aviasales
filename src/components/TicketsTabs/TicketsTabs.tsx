import React from 'react';
import { Tabs as TabsComponent } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import TicketsList from '../TicketsList';
import { transfersSort, sortByPrices, sortByDuration } from '../../utils';
import { sortByCheapset, sortByFastest } from '../../slices/filters';
import NotFoundFlight from '../NotFoundFlight/NotFoundFlight';
import { IRootState, ITicketListItem } from '../../types/interface';
import './TicketsTabs.sass';

export default () => {
  const { TabPane } = TabsComponent;
  const dispatch = useDispatch();

  const { data }: any = useSelector((state: IRootState) => state.tickets);
  console.log(data);
  const {
    isAll,
    isNotTransfer,
    isOneTransfer,
    isTwoTransfer,
    isThreeTransfer,
    cheapset,
    fastest,
  } = useSelector((state: IRootState) => state.filters);

  const changeFilters = <T extends ITicketListItem>(item: T[]): T[] => {
    if (isAll) return item;
    if (isNotTransfer) return transfersSort(item, 0);
    if (isOneTransfer) return transfersSort(item, 1);
    if (isTwoTransfer) return transfersSort(item, 2);
    if (isThreeTransfer) return transfersSort(item, 3);
    return item;
  };

  const changeTabsSort = <T extends ITicketListItem>(item: T[]) => {
    if (cheapset) return sortByPrices(item);
    if (fastest) return sortByDuration(item);
    return item;
  };

  const isNotCheckedContent =
    !isAll &&
    !isOneTransfer &&
    !isTwoTransfer &&
    !isThreeTransfer &&
    !isNotTransfer;

  const filtersData = changeFilters(data);
  const visibleData = changeTabsSort(filtersData);

  const content = isNotCheckedContent ? (
    <NotFoundFlight />
  ) : (
    <TicketsList tickets={visibleData} />
  );

  const handleChangeTabs = (key: string) => {
    switch (key) {
      case 'cheapset':
        return dispatch(sortByCheapset());
      case 'fastest':
        return dispatch(sortByFastest());
      default:
        return null;
    }
  };

  return (
    <div className='tabs'>
      <TabsComponent
        defaultActiveKey='1'
        onChange={(key) => handleChangeTabs(key)}
      >
        <TabPane tab='Самый дешёвый' key='cheapset'>
          {content}
        </TabPane>
        <TabPane tab='Самый быстрый' key='fastest'>
          {content}
        </TabPane>
      </TabsComponent>
    </div>
  );
};
