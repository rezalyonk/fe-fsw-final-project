import axios from 'axios';
import handler from './handler';

jest.mock('axios');

describe('handler', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      method: 'POST',
      body: {
        username: 'testuser',
        password: 'testpassword',
        nama_lengkap: 'Test User',
        alamat: 'Test Address',
        email: 'test@example.com',
        nomor_telepon: '1234567890'
      }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return success message when registration is successful', async () => {
    const responseData = {
      data: {
        success: true
      }
    };
    axios.post.mockResolvedValue(responseData);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/register',
      {
        username: 'testuser',
        password: 'testpassword',
        nama_lengkap: 'Test User',
        alamat: 'Test Address',
        email: 'test@example.com',
        nomor_telepon: '1234567890'
      }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Pendaftaran berhasil' });
  });

  it('should return error message when registration fails', async () => {
    const responseData = {
      data: {
        success: false
      }
    };
    axios.post.mockResolvedValue(responseData);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/register',
      {
        username: 'testuser',
        password: 'testpassword',
        nama_lengkap: 'Test User',
        alamat: 'Test Address',
        email: 'test@example.com',
        nomor_telepon: '1234567890'
      }
    );
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Pendaftaran gagal' });
  });

  it('should return error message when an internal server error occurs', async () => {
    axios.post.mockRejectedValue(new Error('Internal Server Error'));

    await handler(req, res);

    expect(axios.post).toHaveBeenCalledWith(
      'https://mang-eak-production.up.railway.app/v1/api/register',
      {
        username: 'testuser',
        password: 'testpassword',
        nama_lengkap: 'Test User',
        alamat: 'Test Address',
        email: 'test@example.com',
        nomor_telepon: '1234567890'
      }
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Terjadi kesalahan pada server' });
  });

  it('should return error message when the request method is not POST', async () => {
    req.method = 'GET';

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ message: 'Metode yang diperbolehkan hanya POST' });
  });
});
