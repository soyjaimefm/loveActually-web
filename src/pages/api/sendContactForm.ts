// export const prerender = false; //This will not work without this line

import type { APIRoute } from "astro";
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const message = data.get("message");

  // Validate the data - making sure values are not empty
  // if (!name || !email || !message) {

  //   return new Response(
  //     JSON.stringify({
  //       message: `Fill out all fields.`,
  //     }),
  //     {
  //       status: 404,
  //       statusText: "Did not provide the right data",
  //     }
  //   );
  // }

  // Sending information to Resend
  const sendResendToAdmin = await resend.emails.send({
    from: 'support@resend.dev',
    to: 'loveactually.bodas@gmail.com',
    subject: `Sumbission from ${name}`,
    html: `${name} se ha puesto en contacto con Love Actually a través del formulario de contacto. Sus datos son los siguientes:<br>
    Nombre: ${name}<br>
    Email: ${email}<br>
    Teléfono: ${phone}<br>
    Ha dejado este mensaje:<br>
    ${message}
    `,
  });

  const sendResendToCustomer = await resend.emails.send({
    from: 'support@resend.dev',
    to: `${email}`,
    subject: `Gracias por ponerte en contacto con Love Actually`,
    html: `Gracias por contactar con Love Actually.
    Atenderemos tu solicitud lo antes posible.
    Un saludo`,
  });

  // If the message was sent successfully, return a 200 response
  if (sendResendToAdmin.data && sendResendToCustomer.data) {
    return new Response(
      JSON.stringify({
        message: `Message successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );

    // If there was an error sending the message, return a 500 response
  } else {
    return new Response(
      JSON.stringify({
        message: `Message failed to send: `,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: `,
      }
    );
  }
};