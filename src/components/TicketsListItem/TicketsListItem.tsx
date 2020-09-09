import React from 'react';
import uniqueid from 'lodash.uniqueid';

import {
  handleTravelTime,
  timeFromToTravel,
  handleFormatPrice,
} from '../../utils';

import style from './TicketsListItem.module.sass';
import { ITicketListItem } from '../../types/interface';

const TicketsListItem: React.FC<ITicketListItem> = ({
  price,
  carrier,
  segments,
}) => {
  const handleStopsContent = <T extends string>(stops: T[]): JSX.Element => {
    if (stops.length === 1) {
      return (
        <li>
          <span>1 пересадка</span>
          <span>{stops.join(', ')}</span>
        </li>
      );
    }
    if (stops.length > 1) {
      return (
        <li>
          <span>{`${stops.length} пересадки`}</span>
          <span>{stops.join(', ')}</span>
        </li>
      );
    }
    return (
      <li>
        <span className={style['no-stops']}>Нет пересадок</span>
      </li>
    );
  };

  const createInfoData = segments.map(
    ({ origin, destination, date, stops, duration }) => {
      return (
        <li key={uniqueid('info_')}>
          <ul className={style['info-list']}>
            <li>
              <span>{`${origin} - ${destination}`}</span>
              <span>{timeFromToTravel(date, duration)}</span>
            </li>
            <li>
              <span>В пути</span>
              <span>{handleTravelTime(duration)}</span>
            </li>
            {handleStopsContent(stops)}
          </ul>
        </li>
      );
    }
  );
  return (
    <li className={style['ticket-list-item']}>
      <div className={style.top}>
        <div className={style.price}>
          <span>{handleFormatPrice(price)}</span>
        </div>

        <div className={style.logo}>
          <img
            src={`http://pics.avs.io/99/36/${carrier}.png`}
            alt={`${carrier}-logo`}
          />
        </div>
      </div>
      <ul>{createInfoData}</ul>
    </li>
  );
};

export default TicketsListItem;
