import axios from 'axios';
import handler from './logout';

jest.mock('axios');

describe('logout handler', () => {
  it('should logout successfully', async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 200,
      data: {
        message: 'Logout berhasil',
      },
    };

    axios.delete.mockResolvedValueOnce(expectedResponse);

    await handler(req, res);

    expect(axios.delete).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/logout'
    );
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith(expectedResponse.data);
  });

  it('should handle error', async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorResponse = {
      response: {
        status: 500,
        data: {
          message: 'Terjadi kesalahan saat melakukan logout',
        },
      },
    };

    axios.delete.mockRejectedValueOnce(errorResponse);

    await handler(req, res);

    expect(axios.delete).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(errorResponse.response.status);
    expect(res.json).toHaveBeenCalledWith(errorResponse.response.data);
  });
});
