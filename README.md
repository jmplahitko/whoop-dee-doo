# Whoop Dee Doo

A personal analytics dashboard for your Whoop data, built with Nuxt.js, Express.js, and MongoDB Atlas.

## Features

- Track and analyze your workouts over time
- Visualize your recovery and strain data
- Monitor your sleep patterns
- Track your HRV trends

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Whoop API access

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/whoop-dee-doo.git
cd whoop-dee-doo
```

2. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3001
```

4. Create a `.env` file in the frontend directory:
```env
API_BASE=http://localhost:3001/api
```

5. Start the development servers:
```bash
# From the root directory
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Project Structure

```
whoop-dee-doo/
├── frontend/           # Nuxt.js frontend application
│   ├── pages/         # Frontend pages
│   ├── components/    # Vue components
│   └── nuxt.config.ts # Nuxt configuration
├── backend/           # Express.js backend application
│   ├── src/          # Backend source code
│   └── package.json  # Backend dependencies
└── package.json      # Root package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 