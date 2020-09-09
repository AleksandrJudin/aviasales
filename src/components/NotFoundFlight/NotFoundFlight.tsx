import React from 'react';
import style from './NotFoundFlight.module.sass';

export default (): JSX.Element => {
  return (
    <div className={style['no-filter-selected']}>
      <p>Рейсов, подходящих под заданные фильтры, не найдено.</p>
    </div>
  );
};
