import axios from 'axios';
import handler from './login';

jest.mock('axios');

describe('login handler', () => {
  it('should login successfully', async () => {
    const req = {
      method: 'POST',
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 200,
      data: {
        message: 'Login successful',
        accessToken: 'xyz123',
      },
    };

    axios.post.mockResolvedValueOnce(expectedResponse);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/login',
      {
        email: 'test@example.com',
        password: 'password123',
      }
    );
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith(expectedResponse.data);
  });

  it('should handle error', async () => {
    const req = {
      method: 'POST',
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorResponse = {
      response: {
        status: 500,
        data: {
          message: 'Internal Server Error',
        },
      },
    };

    axios.post.mockRejectedValueOnce(errorResponse);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(errorResponse.response.status);
    expect(res.json).toHaveBeenCalledWith(errorResponse.response.data);
  });

  it('should return error for invalid method', async () => {
    const req = {
      method: 'GET',
      body: {},
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 405,
      message: 'Method Not Allowed',
    };

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });
});
