import 'package:flutter/material.dart';

class CustomerHomeScreen extends StatelessWidget {
  const CustomerHomeScreen({super.key});

  static const _activeRequests = [
    _RequestSummary(
      title: 'Custom oak bookshelf',
      category: 'Woodworking',
      bidCount: 3,
      status: 'Open for bids',
    ),
    _RequestSummary(
      title: 'Kitchen cabinet repair',
      category: 'Carpentry',
      bidCount: 1,
      status: 'Reviewing bids',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Requests'),
        actions: [
          IconButton(
            icon: const Icon(Icons.person_outline),
            onPressed: () => Navigator.pushNamed(context, '/profile'),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Card(
            child: ListTile(
              leading: CircleAvatar(
                backgroundColor: Theme.of(context).colorScheme.primaryContainer,
                child: Icon(
                  Icons.add,
                  color: Theme.of(context).colorScheme.onPrimaryContainer,
                ),
              ),
              title: const Text('Post a new request'),
              subtitle: const Text('Describe your project and receive bids'),
              trailing: const Icon(Icons.chevron_right),
              onTap: () => Navigator.pushNamed(context, '/create'),
            ),
          ),
          const SizedBox(height: 24),
          Text(
            'Active requests',
            style: Theme.of(context).textTheme.titleMedium,
          ),
          const SizedBox(height: 12),
          ..._activeRequests.map(
            (request) => Card(
              margin: const EdgeInsets.only(bottom: 12),
              child: ListTile(
                title: Text(request.title),
                subtitle: Text(
                  '${request.category} · ${request.bidCount} bid${request.bidCount == 1 ? '' : 's'}',
                ),
                trailing: Chip(label: Text(request.status)),
                onTap: () => Navigator.pushNamed(context, '/bids'),
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => Navigator.pushNamed(context, '/create'),
        icon: const Icon(Icons.edit_note),
        label: const Text('New request'),
      ),
    );
  }
}

class _RequestSummary {
  const _RequestSummary({
    required this.title,
    required this.category,
    required this.bidCount,
    required this.status,
  });

  final String title;
  final String category;
  final int bidCount;
  final String status;
}
