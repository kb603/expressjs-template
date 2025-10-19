import { Request, Response } from "express";

export const docsController = (req: Request, res: Response) => {
  res.json({
    message: "System API v1.0.0",
    endpoints: {
      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        verifyEmail: "POST /api/auth/verify-email",
        resendOTP: "POST /api/auth/resend-otp",
        forgotPassword: "POST /api/auth/forgot-password",
        resetPassword: "POST /api/auth/reset-password",
      },
      users: {
        profile: "GET /api/users/profile",
        updateProfile: "PUT /api/users/profile",
        uploadImage: "POST /api/users/profile/image",
      },

      services: {
        list: "GET /api/services",
        create: "POST /api/services",
        update: "PUT /api/services/:id",
        delete: "DELETE /api/services/:id",
      },
      orders: {
        create: "POST /api/orders",
        list: "GET /api/orders",
        details: "GET /api/orders/:id",
        updateStatus: "PATCH /api/orders/:id/status",
      },
      payments: {
        initiate: "POST /api/payments/initiate",
        verify: "POST /api/payments/verify",
      },
      admin: {
        dashboard: "GET /api/admin/dashboard",
        users: "GET /api/admin/users",
        orders: "GET /api/admin/orders",
        analytics: "GET /api/admin/analytics",
      },
    },
  });
};
