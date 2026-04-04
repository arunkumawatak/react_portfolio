export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [

  {
    id: "building-production-apps",
    title: "Building 8 Production Flutter Apps: What Actually Matters (and What Doesn't)",
    date: "2026-04-01",
    description: "Lessons from shipping real apps — where time goes, what clients actually care about, and mistakes I won’t repeat again.",
    tags: ["Flutter", "Production", "Experience"],
    content: `After working on 15+ projects and shipping 8 production apps, I realized something — most Flutter advice online is completely disconnected from real-world development.

## What Actually Matters

### 1. Shipping > Perfection
Clients don’t care if your architecture is perfect. They care if the app works and is live.

### 2. Handling Edge Cases
Real apps fail in edge cases — payment failures, GPS errors, network drops. Handling these matters more than UI polish.

### 3. Business Logic > UI
UI gets attention, but business logic is what keeps the app usable. GST calculations in DawaBajar and geofencing in Nway HRMS mattered more than animations.

### 4. Performance & Stability
A slightly ugly app that never crashes beats a beautiful app that fails under load.

## Mistakes I Made

- Over-engineering early
- Ignoring real device testing
- Trusting APIs without fallback logic

## Final Thought

Production apps are not about using the latest tech — they’re about solving real problems reliably.

That’s the difference between a demo developer and a product engineer.`,
  },
  {
    id: "flutter-clean-architecture",
    title: "How a badly structured Flutter app became impossible to scale — and how applying Clean Architecture fixed performance, testing, and maintainability issues.",
    date: "2026-03-15",
    description: "How clean architecture helps me ship maintainable, scalable Flutter apps for clients across different industries.",
    tags: ["Flutter", "Architecture", "Best Practices"],
    content: `When I first started building Flutter apps, I wrote everything in a single file. It worked — until it didn't. As projects grew, I needed a structure that could scale without becoming a nightmare to maintain.

  ## The Problem with Flat Structure

  Most beginners dump everything into one folder. Widgets, business logic, API calls — all mixed together. This works for a todo app, but when you're building a production B2B marketplace like DawaBajar or a dual-app legal platform like ConsultKiya, you need separation.

  ## My Go-To Architecture

  I follow a modified clean architecture approach:

  **Presentation Layer** — Widgets, screens, state management (Provider/GetX/BLoC depending on project complexity).

  **Domain Layer** — Use cases, entities, repository interfaces. This is the heart of the app — pure Dart, no framework dependencies.

  **Data Layer** — Repository implementations, API clients, local storage. This is where Firebase, REST APIs, and payment gateways live.

  ## Why This Matters in Production

  When ConsultKiya needed to switch from one video call SDK to another, the change was isolated to the data layer. The UI and business logic didn't need a single line changed. That's the power of proper architecture.

  ## Key Takeaways

  1. **Separate concerns early** — it's much harder to refactor later
  2. **Keep business logic framework-agnostic** — your domain shouldn't know about Flutter
  3. **Use dependency injection** — makes testing and swapping implementations trivial
  4. **Write repository interfaces first** — they define your contract before implementation

  Clean architecture isn't overhead — it's insurance. Every production app I've shipped has benefited from this approach.`,
  },
  {
    id: "payment-gateway-integration",
    title: "Payment Gateway Integration in Flutter: Real Bugs, Failures & Fixes (Cashfree/Razorpay)", date: "2026-02-28",
    description: "What actually breaks during payment integration — failed transactions, webhook delays, and how I handled them in production apps.", tags: ["Flutter", "Payments", "Production"],
    content: `Payment integration is where most Flutter tutorials fall short. They show you the happy path — user clicks pay, payment succeeds, done. Production is nothing like that.

  ## The Reality of Payment Integration

  After integrating Cashfree in DawaBajar and Razorpay in multiple other apps, here's what I've learned:

  ### 1. Always Handle Edge Cases

  What happens when the user kills the app mid-payment? What about network drops during the callback? These aren't edge cases — they happen daily in production.

  I always implement a server-side webhook verification alongside client-side callbacks. The client callback gives instant UX feedback, but the webhook is the source of truth.

  ### 2. Test with Real Money (Small Amounts)

  Sandbox environments don't catch everything. I always do a few real transactions (₹1-10) before going live. You'd be surprised how many issues only appear with real payment processing.

  ### 3. Handle Refunds Gracefully

  Your app WILL have failed deliveries, wrong orders, or disputes. Build the refund flow from day one — not as an afterthought.

  ## My Payment Integration Checklist

  - Server-side order creation (never trust client-generated order IDs)
  - Webhook verification for payment status
  - Retry mechanism for failed callbacks
  - Clear loading states and error messages
  - Transaction history accessible to users
  - Admin dashboard for payment monitoring

  ## Platform-Specific Gotchas

  **Android**: UPI deep linking can behave differently across payment apps. Test with Google Pay, PhonePe, and Paytm separately.

  **iOS**: Apple's in-app purchase rules don't apply to physical goods and services — but make sure you understand the guidelines.

  Payment integration isn't glamorous, but getting it right is the difference between a demo and a business.`,
  },
  {
    id: "geofencing-attendance",
    title: "Building a Geofencing Attendance System: GPS Accuracy, Fake Location & Real Challenges",
    date: "2026-01-10",
    description: "The real challenges behind GPS accuracy, fake location detection, and handling 500+ daily attendance logs without failure.",
    tags: ["Flutter", "GPS", "Enterprise"],
    content: `When Nway HRMS needed geofenced attendance, the requirement seemed simple: employees punch in when they're at the office. The reality was far more complex.

  ## The Challenge

  GPS accuracy on mobile devices is typically 3-15 meters in urban areas, but can be 50+ meters indoors or in dense areas. When your geofence radius is 100 meters, a 50-meter error is significant.

  ## My Solution

  ### Multi-Signal Verification

  Instead of relying solely on GPS, I combined multiple signals:

  1. **GPS coordinates** — primary location signal
  2. **Network-based location** — faster, works better indoors
  3. **Selfie verification** — adds a human verification layer
  4. **Timestamp validation** — server-side time verification to prevent spoofing

  ### Smart Geofencing

  I implemented adaptive geofence radii based on location type:
  - **Office buildings**: 150m radius (accounts for GPS drift indoors)
  - **Construction sites**: 300m radius (larger work areas)
  - **Client locations**: 200m radius (flexible for different setups)

  ### Anti-Spoofing Measures

  Mock location detection is essential for an attendance system:
  - Check for mock location providers on Android
  - Verify location consistency (sudden jumps = suspicious)
  - Cross-reference with network location
  - Server-side anomaly detection for impossible travel speeds

  ## Battery Optimization

  Continuous GPS tracking kills batteries. I used a smart polling approach:
  - High-accuracy mode only during punch-in/out
  - Background monitoring at reduced frequency
  - Significant location change triggers for automatic suggestions

  ## Results

  The system now handles 500+ daily punches across multiple organizations with less than 2% location-related issues. The selfie verification acts as a reliable fallback when GPS is unreliable.

  Building for enterprise means building for the worst case, not the happy path.`,
  },
  {
    id: "state-management-flutter",
    title: "Provider vs Riverpod vs Bloc: What I Actually Use in Production Apps", date: "2025-12-20",
    description: "A practical guide to choosing between Provider, GetX, and BLoC based on real project needs.",
    tags: ["Flutter", "State Management", "Guide"],
    content: `One of the most debated topics in Flutter development is state management. After shipping 15+ production apps using different approaches, here's my practical take.

  ## Provider — The Reliable Default

  I use Provider for most small to medium projects. It's simple, well-documented, and the Flutter team recommends it. ConsultKiya's user app started with Provider, and it handled the complexity just fine.

  **Best for**: Apps with straightforward state flows, CRUD operations, simple forms.

  ## GetX — Speed of Development

  When I need to ship fast and the app has moderate complexity, GetX is my go-to. It gives you state management, routing, and dependency injection in one package. DawaBajar was built with GetX, and the development speed was noticeably faster.

  **Best for**: Rapid prototyping, apps with many screens, when you want an all-in-one solution.

  **Caveat**: GetX can become messy if you don't establish conventions early. I always create a clear folder structure and naming convention before writing the first controller.

  ## BLoC — Enterprise Grade

  For complex apps with heavy business logic, BLoC shines. Nway HRMS uses BLoC because the approval workflows, geofencing logic, and multi-role permissions demanded clear separation of events and states.

  **Best for**: Enterprise apps, complex business logic, apps requiring extensive testing, teams with multiple developers.

  ## My Decision Framework

  1. **Solo project, ship fast** → Provider or GetX
  2. **Complex business logic** → BLoC
  3. **Team project** → BLoC (better enforced patterns)
  4. **Client project with maintenance** → Provider (most maintainable by others)

  ## The Real Answer

  The best state management solution is the one your team understands and uses consistently. I've shipped successful apps with all three. The architecture around state management matters more than the library itself.

  Don't spend weeks debating Provider vs BLoC. Pick one, establish patterns, and ship.`,
  },



];

export const getLatestPosts = (count: number = 3) =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);

export const getBlogById = (id: string) => blogPosts.find((p) => p.id === id);
