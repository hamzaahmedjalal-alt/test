import 'package:flutter/material.dart';

class BidsListScreen extends StatelessWidget {
  const BidsListScreen({super.key});

  static const _bids = [
    _Bid(
      craftsmanName: 'Marcus Chen',
      rating: 4.9,
      price: '\$1,250',
      timeline: '2 weeks',
      message: 'I specialize in solid oak furniture and can match your specs.',
    ),
    _Bid(
      craftsmanName: 'Elena Rodriguez',
      rating: 4.7,
      price: '\$1,100',
      timeline: '10 days',
      message: 'Happy to share photos of similar bookshelf projects.',
    ),
    _Bid(
      craftsmanName: 'James Okonkwo',
      rating: 4.8,
      price: '\$1,400',
      timeline: '3 weeks',
      message: 'Includes delivery and installation within 30 miles.',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bids'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushReplacementNamed(context, '/home'),
        ),
      ),
      body: ListView.separated(
        padding: const EdgeInsets.all(16),
        itemCount: _bids.length,
        separatorBuilder: (_, __) => const SizedBox(height: 12),
        itemBuilder: (context, index) {
          final bid = _bids[index];
          return Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      CircleAvatar(
                        child: Text(bid.craftsmanName[0]),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              bid.craftsmanName,
                              style: Theme.of(context).textTheme.titleMedium,
                            ),
                            Text('★ ${bid.rating}'),
                          ],
                        ),
                      ),
                      Text(
                        bid.price,
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(bid.message),
                  const SizedBox(height: 8),
                  Text(
                    'Estimated timeline: ${bid.timeline}',
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      TextButton(
                        onPressed: () => Navigator.pushNamed(
                          context,
                          '/profile',
                          arguments: bid.craftsmanName,
                        ),
                        child: const Text('View profile'),
                      ),
                      const Spacer(),
                      OutlinedButton(
                        onPressed: () => Navigator.pushNamed(
                          context,
                          '/chat_locked',
                        ),
                        child: const Text('Message'),
                      ),
                      const SizedBox(width: 8),
                      FilledButton(
                        onPressed: () {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text('Accepted bid from ${bid.craftsmanName}'),
                            ),
                          );
                        },
                        child: const Text('Accept'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

class _Bid {
  const _Bid({
    required this.craftsmanName,
    required this.rating,
    required this.price,
    required this.timeline,
    required this.message,
  });

  final String craftsmanName;
  final double rating;
  final String price;
  final String timeline;
  final String message;
}
