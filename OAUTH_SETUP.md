# Whoop OAuth Setup Guide

This project integrates with Whoop's OAuth2 API for user authentication.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Whoop OAuth Configuration
WHOOP_CLIENT_ID=your_whoop_client_id_here
WHOOP_CLIENT_SECRET=your_whoop_client_secret_here
WHOOP_REDIRECT_URI=http://localhost:3000/api/auth/callback

# API Configuration
API_BASE=http://localhost:3001/api
```

## Whoop Developer Setup

1. Go to [Whoop Developer Portal](https://developer.whoop.com/)
2. Create a new application
3. Set the redirect URI to: `http://localhost:3000/api/auth/callback`
4. Copy your Client ID and Client Secret to the `.env` file

## Available Scopes

The OAuth implementation requests the following scopes:
- `read:recovery` - Access to recovery data
- `read:workouts` - Access to workout data  
- `read:profile` - Access to user profile data

## API Endpoints

- `GET /api/auth/whoop` - Initiates OAuth flow
- `GET /api/auth/callback` - OAuth callback handler
- `POST /api/auth/logout` - Logout endpoint

## Pages

- `/login` - Login page with Whoop OAuth button
- `/dashboard` - User dashboard (requires authentication)

## Usage

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000/login`
3. Click "Sign in with Whoop"
4. Complete the OAuth flow
5. You'll be redirected to the dashboard

## Session Management

User sessions are managed by `nuxt-auth-utils` and include:
- User ID from Whoop
- Email address
- Full name
- Whoop access token
- Whoop refresh token

The access token can be used to make authenticated requests to the Whoop API. 