import nodemailer from 'nodemailer';
import { PASS } from '../config.js';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: 'jimalaros25@gmail.com',
      pass: PASS, 
    },
    tls: {
        rejectUnauthorized: false
    }
});