import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  // actions...
  allFiltersActive,
  oneTransferActive,
  twoTransferActive,
  threeTransfersActive,
  notTransfersActive,
} from '../../slices/filters';
import { IFilters, IRootState } from '../../types/interface';

import style from './Filter.module.sass';

const TicketsFilter: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    isAll,
    isNotTransfer,
    isOneTransfer,
    isTwoTransfer,
    isThreeTransfer,
  } = useSelector((state: IRootState): IFilters => state.filters);

  return (
    <form className={style.filter}>
      <fieldset>
        <legend>Количество пересадок</legend>
        <div className={style.checkbox}>
          <input
            className={style['custom-checkbox']}
            type='checkbox'
            id='all'
            name='all'
            checked={isAll}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              dispatch(allFiltersActive(target.checked))
            }
          />
          <label htmlFor='all'>Все</label>

          <input
            className={style['custom-checkbox']}
            type='checkbox'
            id='no-transfer'
            name='no-transfer'
            checked={isNotTransfer}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              dispatch(notTransfersActive(target.checked))
            }
          />
          <label htmlFor='no-transfer'>Без пересадок</label>

          <input
            className={style['custom-checkbox']}
            type='checkbox'
            id='one-transfer'
            name='one-transfer'
            checked={isOneTransfer}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              dispatch(oneTransferActive(target.checked))
            }
          />
          <label htmlFor='one-transfer'>1 пересадка</label>

          <input
            className={style['custom-checkbox']}
            type='checkbox'
            id='two-transfer'
            name='two-transfer'
            checked={isTwoTransfer}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              dispatch(twoTransferActive(target.checked))
            }
          />
          <label htmlFor='two-transfer'>2 пересадки</label>

          <input
            className={style['custom-checkbox']}
            type='checkbox'
            id='three-transfer'
            name='three-transfer'
            checked={isThreeTransfer}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              dispatch(threeTransfersActive(target.checked))
            }
          />
          <label htmlFor='three-transfer'>3 пересадки</label>
        </div>
      </fieldset>
    </form>
  );
};

export default TicketsFilter;
