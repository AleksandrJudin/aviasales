export interface IRootState {
  tickets: {
    data: object[];
    loading: boolean;
    error: string;
  };
  filters: {
    cheapset: boolean;
    fastest: boolean;
    isAll: boolean;
    isNotTransfer: boolean;
    isOneTransfer: boolean;
    isTwoTransfer: boolean;
    isThreeTransfer: boolean;
  };
}

export interface IFilters {
  cheapset: boolean;
  fastest: boolean;
  isAll: boolean;
  isNotTransfer: boolean;
  isOneTransfer: boolean;
  isTwoTransfer: boolean;
  isThreeTransfer: boolean;
}

export interface ITicketsData {
  data: object[];
  loading: boolean;
  error: boolean;
}

export interface ITicketListItem {
  price: number;
  carrier: string;
  segments: Array<{
    origin: string;
    destination: string;
    date: string;
    duration: number;
    stops: string[];
  }>;
}

export interface ITicket {
  tickets: ITicketListItem[];
}
