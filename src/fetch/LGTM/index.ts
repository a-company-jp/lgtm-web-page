import { Lgtm } from '../../types/lgtm';
import getApiClient from '../client';

const client = getApiClient();

const list = async (activePage: number): Promise<Lgtm[]> => {
    return await client.get('/api/v1/lgtms?page=' + activePage).then((resp) => {
      if (resp.error) {
        throw new Error(resp.error);
      }
      return resp.data;
    });
};

const post = async (data?: Blob): Promise<{ imageUrl: string }> => {
    if (!data) {
      throw new Error('data is not set');
    }
    return await client
      .post('/api/v1/lgtms', data, { 'Content-Type': 'application/octet-stream' })
      .then((resp) => {
        if (resp.error) {
          throw new Error(resp.error);
        }

        return resp.data;
      });
}

export  { list, post };
