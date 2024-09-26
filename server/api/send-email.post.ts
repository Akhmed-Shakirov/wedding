import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'id.shakirov.akhmed@gmail.com',
            pass: 'qnjvhvcgvmoctnco'
        }
    });

    const mailOptions = {
        from: `id.shakirov.akhmed@gmail.com`,
        to: 'abyl.twelve@gmail.com',
        subject: `Новая заявка с по приглашению`,
        text: body.name,
        html: `
              <p>Имя: <b>${body.name}</b></p>
              <p>Присуствие: <b>${body.turnout}</b></p>
              <p>С кем: <b>${body.withs}</b></p>
              <p>Песня: <b>${body.muzik}</b></p>
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Письмо отправлено!' };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
});
