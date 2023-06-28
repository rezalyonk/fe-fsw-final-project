import axios from "axios";
import handler from "./ubah-profil";

jest.mock("axios");

describe("ubah-profil handler", () => {
  it("should update user profile successfully", async () => {
    const req = {
      method: "PUT",
      body: {
        username: "newusername",
        nama_lengkap: "New Full Name",
        alamat: "New Address",
        nomor_telepon: "1234567890",
      },
      cookies: {
        accessToken: "sample-access-token",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 200,
      message: "Update data successfully",
    };

    axios.put.mockResolvedValueOnce({ status: 200 });

    await handler(req, res);

    expect(axios.put).toHaveBeenCalledWith(
      "https://mang-eak-production.up.railway.app/v1/api/editusers",
      {
        username: "newusername",
        nama_lengkap: "New Full Name",
        alamat: "New Address",
        nomor_telepon: "1234567890",
      },
      {
        headers: {
          Authorization: "Bearer sample-access-token",
        },
      }
    );
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });

  it("should return error when accessToken is missing", async () => {
    const req = {
      method: "PUT",
      body: {
        username: "newusername",
        nama_lengkap: "New Full Name",
        alamat: "New Address",
        nomor_telepon: "1234567890",
      },
      cookies: {},
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 401,
      message: "Login terlebih dahulu",
    };

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });

  it("should handle server error", async () => {
    const req = {
      method: "PUT",
      body: {
        username: "newusername",
        nama_lengkap: "New Full Name",
        alamat: "New Address",
        nomor_telepon: "1234567890",
      },
      cookies: {
        accessToken: "sample-access-token",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 500,
      message: "Terjadi kesalahan saat memperbarui profil",
    };

    axios.put.mockRejectedValueOnce(new Error("Sample error"));

    await handler(req, res);

    expect(axios.put).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });

  it("should return error for invalid method", async () => {
    const req = {
      method: "GET",
      body: {},
      cookies: {},
    };

    const res = {
      setHeader: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 405,
      message: `Metode ${req.method} tidak diizinkan`,
    };

    await handler(req, res);

    expect(res.setHeader).toHaveBeenCalledWith("Allow", ["PUT"]);
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });
});
