import 'package:flutter/material.dart';
import 'dart:math';

import 'package:flutter/rendering.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  final ScrollController _scrollController = ScrollController();
  final Random _random = Random();

  // Random values
  late double _dailyMeanLimit;
  late double _houseConsumption;
  late double _amountSaved;
  late double _waterPurity;

  // Water quality metrics
  late double _pH;
  late double _hardness;
  late double _solids;
  late double _chloramines;
  late double _sulfate;
  late double _conductivity;
  late double _organicCarbon;
  late double _trihalomethanes;
  late double _turbidity;

  @override
  void initState() {
    super.initState();
    _generateRandomValues();
    _scrollController.addListener(_onScroll);
  }

  void _generateRandomValues() {
    _dailyMeanLimit = _random.nextDouble() * 100;
    _houseConsumption = _random.nextDouble() * 100;
    _amountSaved = _random.nextDouble() * 100;
    _waterPurity = _random.nextDouble() * 100;

    // Water quality metrics
    _pH = 6.5 + _random.nextDouble() * 1.5; // pH typically between 6.5 and 8.0
    _hardness = _random.nextDouble() * 500;
    _solids = _random.nextDouble() * 1000;
    _chloramines = _random.nextDouble() * 5;
    _sulfate = _random.nextDouble() * 250;
    _conductivity = _random.nextDouble() * 500;
    _organicCarbon = _random.nextDouble() * 20;
    _trihalomethanes = _random.nextDouble() * 100;
    _turbidity = _random.nextDouble() * 5;
  }

  void _onScroll() {
    if (_scrollController.position.userScrollDirection !=
        ScrollDirection.idle) {
      setState(() {
        _generateRandomValues();
      });
    }
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Water Usage Management'),
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.lightBlueAccent, Colors.blueAccent],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Daily Mean Limit',
                    hintText: _dailyMeanLimit.toStringAsFixed(2),
                  ),
                ),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'House Consumption',
                    hintText: _houseConsumption.toStringAsFixed(2),
                  ),
                ),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Amount Saved',
                    hintText: _amountSaved.toStringAsFixed(2),
                  ),
                ),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Water Purity',
                    hintText: _waterPurity.toStringAsFixed(2),
                  ),
                ),
                const SizedBox(height: 20),
                const Text(
                  'Water Quality Metrics',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                Text('pH: ${_pH.toStringAsFixed(2)}'),
                Text('Hardness: ${_hardness.toStringAsFixed(2)}'),
                Text('Solids: ${_solids.toStringAsFixed(2)}'),
                Text('Chloramines: ${_chloramines.toStringAsFixed(2)}'),
                Text('Sulfate: ${_sulfate.toStringAsFixed(2)}'),
                Text('Conductivity: ${_conductivity.toStringAsFixed(2)}'),
                Text('Organic Carbon: ${_organicCarbon.toStringAsFixed(2)}'),
                Text('Trihalomethanes: ${_trihalomethanes.toStringAsFixed(2)}'),
                Text('Turbidity: ${_turbidity.toStringAsFixed(2)}'),
                const SizedBox(height: 20),
                const Text(
                  'Contact Details',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                const Text('Phone: 123-456-7890'),
                const Text('Email: contact@waterapp.com'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
