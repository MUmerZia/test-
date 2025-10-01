# React Native Authentication App with Redux Persist

A simple React Native app that demonstrates persistent authentication state using Redux Toolkit and AsyncStorage. Users can log in with any credentials, and their authentication state persists even after the app is completely closed and reopened.

## Features

- **Persistent Authentication**: Login state survives app restarts using Redux Persist with AsyncStorage
- **Redux State Management**: Uses Redux Toolkit for clean, modern state management
- **Mock Authentication**: Simple validation (any non-empty credentials work)
- **Modern UI**: Clean, responsive design with proper loading states
- **Navigation**: Automatic screen switching between Login and Home screens based on auth state

## Tech Stack

- React Native 0.78.0
- Redux Toolkit (@reduxjs/toolkit)
- Redux Persist
- AsyncStorage (@react-native-async-storage/async-storage)
- Simple conditional rendering for navigation
- TypeScript

## Project Structure

```
src/
├── components/
│   ├── AppNavigator.tsx    # Navigation logic
│   └── LoadingScreen.tsx   # Loading component
├── screens/
│   ├── LoginScreen.tsx     # Login form
│   └── HomeScreen.tsx      # Welcome screen
├── slices/
│   └── authSlice.ts        # Redux auth slice
└── store/
    └── store.ts            # Redux store configuration
```

## Setup Instructions

### Prerequisites

- Node.js (>=18)
- React Native development environment
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install iOS dependencies (iOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Start Metro Bundler
```bash
npm start
```

## How to Use

1. **Login Screen**: Enter any email and password (both fields must be non-empty)
2. **Home Screen**: After successful login, you'll see a welcome message with your name
3. **Logout**: Tap the logout button to return to the login screen
4. **Persistence Test**: 
   - Login successfully
   - Close the app completely (swipe up and swipe away on iOS, or use back button on Android)
   - Reopen the app - you should go directly to the Home screen without re-entering credentials

## Key Implementation Details

### Redux Store Configuration
- Uses Redux Toolkit for simplified Redux setup
- Redux Persist configured to only persist the `auth` slice
- AsyncStorage as the storage engine for persistence

### Authentication Flow
1. User enters credentials on Login screen
2. Mock validation (any non-empty values work)
3. On success, user data is stored in Redux state
4. Redux Persist automatically saves state to AsyncStorage
5. App navigates to Home screen
6. On app restart, Redux Persist rehydrates the state from AsyncStorage

### State Management
- `isAuthenticated`: Boolean flag for auth status
- `user`: User object with id, email, and name
- `isLoading`: Loading state for async operations

## Testing Persistence

To verify that authentication persists:

1. Login with any credentials
2. Navigate to Home screen
3. **Completely close the app** (not just minimize)
4. Reopen the app
5. You should go directly to the Home screen without seeing the Login screen

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Try clearing cache with `npx react-native start --reset-cache`
2. **iOS build issues**: Clean and rebuild with `cd ios && xcodebuild clean && cd ..`
3. **Android build issues**: Clean with `cd android && ./gradlew clean && cd ..`

### Dependencies

If you encounter dependency issues, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Notes

- The app uses mock authentication - no real backend required
- All user data is stored locally using AsyncStorage
- The app automatically handles navigation based on authentication state
- Loading states are properly managed during async operations

## License

This project is for demonstration purposes.