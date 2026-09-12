export interface Env {
  RAZORPAY_KEY_ID: string;
  RAZORPAY_KEY_SECRET: string;
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/api/create-order') {
      try {
        const body: any = await request.json();
        let amount = body.amount;
        if (body.coupon && body.coupon.toUpperCase() === 'MENTORIA10') {
          amount = Math.floor(amount * 0.9);
        }

        const razorpayUrl = 'https://api.razorpay.com/v1/orders';
        const orderPayload = {
          amount: amount * 100, // paise
          currency: 'INR',
          receipt: 'rcpt_' + Math.random().toString(36).substring(7),
        };

        const response = await fetch(razorpayUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`)
          },
          body: JSON.stringify(orderPayload)
        });

        if (!response.ok) {
          const error = await response.text();
          return new Response(JSON.stringify({ error: 'Failed to create order', details: error }), { status: 500, headers: { 'Content-Type': 'application/json', ...headers } });
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json', ...headers } });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json', ...headers } });
      }
    }

    if (request.method === 'POST' && url.pathname === '/api/contact') {
      try {
        const body: any = await request.json();
        const mcResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: 'zeeniali786@gmail.com', name: 'Zeenat' }]
            }],
            from: { email: 'no-reply@arwaada.com', name: 'Arwaada Contact' },
            subject: 'New Contact Form Submission',
            content: [{
              type: 'text/plain',
              value: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
            }]
          })
        });
        
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json', ...headers } });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json', ...headers } });
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json', ...headers } });
  }
};
