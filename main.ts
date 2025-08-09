// Import Hono
import "https://deno.land/std@0.224.0/dotenv/load.ts";

import  { Hono } from 'jsr:@hono/hono'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY' );

const app = new Hono();

app.post('/', async (c) => {
  const { to, subject, html } = await c.req.json();

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: 'resend <onboarding@resend.dev>',
      to,
      subject,
      html
    })
  });

  const data = await response.json();

  return c.json(data);
});

Deno.serve(app.fetch);
