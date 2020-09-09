import { ITicketListItem } from './../types/interface';

export const sortByPrices = <T extends ITicketListItem>(arr: T[]) =>
  arr.slice().sort((a, b) => a.price - b.price);

export const sortByDuration = <T extends ITicketListItem>(arr: T[]) =>
  arr.slice().sort((a, b) => a.segments[0].duration - b.segments[0].duration);

export const handleTravelTime = <T extends number>(duration: T): string => {
  const hour = Math.floor(duration / 60);
  const min = duration - hour * 60;

  return `${hour && hour}ч ${min}м`;
};

export const addZero = <T extends number>(n: T) => (n < 10 ? `0${n}` : n);

export const timeFromToTravel = <T extends string, M extends number>(
  current: T,
  duration: M
): string => {
  const time = current.substring(11, 16);

  const hour = Math.floor(duration / 60);
  const min = duration - hour * 60;
  const hs = parseInt(time.split(':')[0]);
  const ms = parseInt(time.split(':')[1]);
  const he = (hs + hour + Math.floor((min + ms) / 60)) % 24;
  const me = (min + ms) % 60;
  return `${time} - ${addZero(he)}:${addZero(me)}`;
};

export const handleFormatPrice = <T extends number>(n: T): string => {
  return `${String(n).substring(0, 2)} ${String(n).substring(2, 5)} P`;
};

export const transfersSort = <T extends ITicketListItem>(
  arr: T[],
  transfer: number = 0
) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].segments.length; j++) {
      if (arr[i].segments[j].stops.length === transfer) {
        result[i] = arr[i];
      }
    }
  }
  return result;
};
