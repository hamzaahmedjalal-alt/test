import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:indraive_crafts/screens/splash_screen.dart';

void main() {
  testWidgets('Splash screen shows app title', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: SplashScreen()),
    );

    expect(find.text('Indraive Crafts'), findsOneWidget);
  });
}
