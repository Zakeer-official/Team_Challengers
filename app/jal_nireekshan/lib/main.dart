import 'package:flutter/material.dart';
import 'package:jal_nireekshan/pages/main_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Water Usage App',
      home: MainScreen(),
    );
  }
}
