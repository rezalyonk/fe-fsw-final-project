import axios from 'axios';
import handler from './histori';

jest.mock('axios');

describe('histori handler', () => {
  it('should fetch history successfully', async () => {
    const req = {
      headers: {
        authorization: 'Bearer xyz123',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 200,
      data: [
        {
          id: 1,
          order: 'Order 1',
        },
        {
          id: 2,
          order: 'Order 2',
        },
      ],
    };

    axios.get.mockResolvedValueOnce(expectedResponse);

    await handler(req, res);

    expect(axios.get).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/history-order',
      {
        headers: {
          Authorization: 'Bearer xyz123',
        },
      }
    );
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith(expectedResponse.data);
  });

  it('should handle error', async () => {
    const req = {
      headers: {},
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorResponse = {
      response: {
        status: 500,
        data: {
          message: 'Terjadi kesalahan server',
        },
      },
    };

    axios.get.mockRejectedValueOnce(errorResponse);

    await handler(req, res);

    expect(axios.get).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(errorResponse.response.status);
    expect(res.json).toHaveBeenCalledWith(errorResponse.response.data);
  });
});
