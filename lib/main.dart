import 'package:flutter/material.dart';
import 'package:resume/resume.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Iryna Smalko',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: "RobotoMoto",
      ),
      home: const Resume(),
    );
  }
}
