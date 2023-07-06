import axios from "axios";
import handler from "./reset-password";

jest.mock("axios");

describe("reset-password handler", () => {
  it("should reset password successfully", async () => {
    const req = {
      method: "POST",
      body: {
        otp: "abc123",
        newPassword: "newPassword123",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 200,
      data: {
        message: "Password successfully updated",
      },
    };

    axios.post.mockResolvedValueOnce(expectedResponse);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalledWith(
      "https://mang-eak-production.up.railway.app/v1/api/reset-password-otp",
      {
        otp: "abc123",
        newPassword: "newPassword123",
      }
    );
    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith(expectedResponse.data);
  });

  it("should handle error", async () => {
    const req = {
      method: "POST",
      body: {
        otp: "abc123",
        newPassword: "newPassword123",
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
          message: "An error occurred. Please try again later",
        },
      },
    };

    axios.post.mockRejectedValueOnce(errorResponse);

    await handler(req, res);

    expect(axios.post).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(errorResponse.response.status);
    expect(res.json).toHaveBeenCalledWith(errorResponse.response.data);
  });

  it("should return error for invalid method", async () => {
    const req = {
      method: "GET",
      body: {},
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const expectedResponse = {
      status: 405,
      message: "Method not allowed",
    };

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(expectedResponse.status);
    expect(res.json).toHaveBeenCalledWith({ message: expectedResponse.message });
  });
});
