import 'package:flutter/material.dart';

class CraftsmanProfileScreen extends StatelessWidget {
  const CraftsmanProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final craftsmanName =
        ModalRoute.of(context)?.settings.arguments as String? ?? 'Marcus Chen';

    return Scaffold(
      appBar: AppBar(title: const Text('Craftsman profile')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Center(
            child: Column(
              children: [
                CircleAvatar(
                  radius: 48,
                  child: Text(
                    craftsmanName[0],
                    style: const TextStyle(fontSize: 36),
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  craftsmanName,
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
                const Text('★ 4.9 · 47 completed projects'),
              ],
            ),
          ),
          const SizedBox(height: 32),
          Text('Specialties', style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            children: const [
              Chip(label: Text('Woodworking')),
              Chip(label: Text('Custom furniture')),
              Chip(label: Text('Restoration')),
            ],
          ),
          const SizedBox(height: 24),
          Text('About', style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          const Text(
            'Master woodworker with 15 years of experience building custom '
            'furniture for homes and businesses. Based in Portland, OR.',
          ),
          const SizedBox(height: 24),
          Text('Portfolio', style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          SizedBox(
            height: 120,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: 4,
              separatorBuilder: (_, __) => const SizedBox(width: 8),
              itemBuilder: (context, index) {
                return Container(
                  width: 120,
                  decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.surfaceContainerHighest,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Icon(
                    Icons.image_outlined,
                    color: Theme.of(context).colorScheme.onSurfaceVariant,
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
