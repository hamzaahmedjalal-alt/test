# Indraive Crafts

A Flutter marketplace app connecting customers with skilled craftsmen. Customers post project requests, review bids, and accept a craftsman to unlock messaging.

## Features

- Splash screen with branded entry
- Customer home with active requests
- Create new project requests
- Browse and accept craftsman bids
- View craftsman profiles
- Locked chat until a bid is accepted

## Getting started

### Prerequisites

- [Flutter SDK](https://docs.flutter.dev/get-started/install) (3.2+)
- A [Firebase](https://console.firebase.google.com/) project

### Install dependencies

```bash
flutter pub get
```

### Configure Firebase

1. Create a Firebase project in the Firebase Console.
2. Install the FlutterFire CLI:

   ```bash
   dart pub global activate flutterfire_cli
   ```

3. Generate platform config and overwrite `lib/firebase_options.dart`:

   ```bash
   flutterfire configure
   ```

4. Add `google-services.json` (Android) and `GoogleService-Info.plist` (iOS) via the CLI or Firebase Console.

### Run the app

```bash
flutter run
```

## Project structure

```
lib/
  main.dart                 # App entry, routing, Firebase init
  firebase_options.dart     # Generated Firebase platform options
  screens/
    splash_screen.dart
    customer_home_screen.dart
    create_request_screen.dart
    bids_list_screen.dart
    craftsman_profile_screen.dart
    chat_locked_screen.dart
```

## Routes

| Route          | Screen                 |
|----------------|------------------------|
| `/`            | Splash                 |
| `/home`        | Customer home          |
| `/create`      | Create request         |
| `/bids`        | Bids list              |
| `/profile`     | Craftsman profile      |
| `/chat_locked` | Locked chat explainer  |
