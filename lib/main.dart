import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'firebase_options.dart';
import 'screens/bids_list_screen.dart';
import 'screens/chat_locked_screen.dart';
import 'screens/craftsman_profile_screen.dart';
import 'screens/create_request_screen.dart';
import 'screens/customer_home_screen.dart';
import 'screens/splash_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,
    );
  } catch (e) {
    debugPrint('Firebase init skipped (preview mode): $e');
  }
  runApp(MyApp(initialRoute: _resolveInitialRoute()));
}

String _resolveInitialRoute() {
  if (!kIsWeb) return '/';
  final fragment = Uri.base.fragment;
  if (fragment.isEmpty) return '/';
  return fragment.startsWith('/') ? fragment : '/$fragment';
}

class MyApp extends StatelessWidget {
  const MyApp({super.key, this.initialRoute = '/'});

  final String initialRoute;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Indraive Crafts',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF2E5C4A),
          brightness: Brightness.light,
        ),
        useMaterial3: true,
        appBarTheme: const AppBarTheme(
          centerTitle: true,
          elevation: 0,
        ),
      ),
      initialRoute: initialRoute,
      routes: {
        '/': (ctx) => const SplashScreen(),
        '/home': (ctx) => const CustomerHomeScreen(),
        '/create': (ctx) => const CreateRequestScreen(),
        '/bids': (ctx) => const BidsListScreen(),
        '/profile': (ctx) => const CraftsmanProfileScreen(),
        '/chat_locked': (ctx) => const ChatLockedScreen(),
      },
    );
  }
}
