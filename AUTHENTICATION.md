# Authentication System

This document explains how the authentication system works for the QAlert admin dashboard.

## Overview

The admin dashboard routes are protected by an authentication system that checks for a bearer token stored in localStorage. If no valid token is found, users are redirected to the admin login page.

## Protected Routes

The following routes require authentication:

- `/admin/dashboard/` (main dashboard)
- `/admin/dashboard/queue`
- `/admin/dashboard/notifications`
- `/admin/dashboard/users`
- `/admin/dashboard/settings`

## How It Works

### 1. Authentication Guard (`AuthGuard` component)

- Located at `app/components/AuthGuard.jsx`
- Checks for `adminToken` in localStorage
- Shows loading spinner while checking authentication
- Redirects to `/admin/` if no token is found
- Renders protected content if token exists

### 2. Login Process

- Users access `/admin/` to log in
- Form submission generates a simple token and stores it in localStorage
- After successful login, users are redirected to `/admin/dashboard`

### 3. Logout Process

- Logout button in the dashboard sidebar clears the token from localStorage
- Users are redirected back to `/admin/` login page

## Token Storage

- **Key**: `adminToken`
- **Location**: localStorage
- **Format**: `admin_token_${timestamp}_${randomString}`

## Implementation Details

### AuthGuard Component

```jsx
// Checks localStorage for adminToken
const token = localStorage.getItem("adminToken");

if (!token) {
  router.push("/admin/");
  return;
}
```

### Login Form

```jsx
// Generates and stores token on successful login
const token = `admin_token_${Date.now()}_${Math.random()
  .toString(36)
  .substr(2, 9)}`;
localStorage.setItem("adminToken", token);
router.push("/admin/dashboard");
```

### Logout Function

```jsx
// Removes token and redirects
localStorage.removeItem("adminToken");
router.push("/admin/");
```

## Testing the Authentication Flow

1. **Test Unauthenticated Access**:

   - Clear localStorage or open incognito mode
   - Navigate to any protected route (e.g., `/admin/dashboard/queue`)
   - Should be redirected to `/admin/`

2. **Test Login**:

   - Go to `/admin/`
   - Enter any email and password
   - Click "Sign in to Admin"
   - Should be redirected to `/admin/dashboard`

3. **Test Logout**:

   - While logged in, click the logout button in the sidebar
   - Should be redirected to `/admin/`

4. **Test Protected Routes**:
   - While logged in, navigate to any dashboard sub-route
   - Should have access to all routes

## Security Notes

- This is a basic implementation for demonstration purposes
- In production, you should:
  - Validate tokens against a backend API
  - Use secure HTTP-only cookies instead of localStorage
  - Implement proper token expiration
  - Add CSRF protection
  - Use HTTPS for all communications
