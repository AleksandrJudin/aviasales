export class TicketsServices {
  static baseURL: string = 'https://front-test.beta.aviasales.ru/';

  static async fetching<T>(qs: T): Promise<{}> {
    const res: Response = await fetch(`${this.baseURL}${qs}`);
    if (!res.ok) {
      throw new Error(`Fetching error ${res.status}`);
    }
    return res.json();
  }

  static async getTickets(): Promise<any> {
    const { searchId }: any = await this.fetching('search');
    return this.fetching(`tickets?searchId=${searchId}`);
  }
}
