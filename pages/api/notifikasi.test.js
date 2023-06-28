import axios from 'axios';
import handler from '../api/notifikasi';

jest.mock('axios');

describe('Notifikasi API', () => {
  test('should return data when API call is successful', async () => {
    const mockData = { notification: 'Some notification data' };
    axios.get.mockResolvedValue({ data: mockData });

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);

    expect(axios.get).toHaveBeenCalledWith('https://mang-eak-production.up.railway.app/v1/api/notification');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  test('should return error when API call fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await handler(req, res);

    expect(axios.get).toHaveBeenCalledWith('https://mang-eak-production.up.railway.app/v1/api/notification');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});
