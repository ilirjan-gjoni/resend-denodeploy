# Resend-DenoDeploy

This project is a Deno application built using the [Hono](https://hono.dev/) framework. It is designed to send emails using the [Resend](https://resend.com/) email service.

## Features
- Lightweight and fast web framework with Hono.
- Integration with Resend for email delivery.

## Prerequisites
- [Deno](https://deno.land/) installed on your system.
- A Resend account and API key.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ilirjan-gjoni/resend-denodeploy.git
   ```

2. Navigate to the project directory:
   ```bash
   cd resend-denodeploy
   ```

3. Create a `.env` file and add your Resend API key:
   ```env
   RESEND_API_KEY=your_api_key_here
   ```

4. Run the application:
   ```bash
   deno run --allow-net --allow-env main.ts
   ```

## License
This project is licensed under the MIT License.
