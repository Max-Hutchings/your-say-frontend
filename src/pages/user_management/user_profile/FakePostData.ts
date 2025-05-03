import {IPost} from "../../../shared_components/posts/IPost.tsx";


export const fakePostData: IPost[] = [
    {
        title: "Building a Real-Time Collaborative Editor",
        description: `
Over the last several months, I embarked on an ambitious project to build a real-time collaborative editor that allows multiple users to work on the same document simultaneously without conflicts or lag. The core of the system uses React on the frontend for rendering and state management, WebSocket for low-latency broadcasting of user changes, and a Node.js/Express backend to orchestrate sessions, authenticate users, and persist document deltas. To resolve concurrent edits, I implemented an operational transformation (OT) algorithm that transforms incoming operations against each other, ensuring all users converge on a single consistent document state even if they edit out of order.

I broke down the editor UI into modular React components: a toolbar for formatting controls, a contentEditable region for text input, and a comments sidebar for inline discussions. Styling leverages Tailwind CSS for a utility-first approach, which dramatically sped up UI iterations while keeping the CSS bundle size small. On the server side, I chose MongoDB for its flexible JSON schema to store document revisions, user metadata, and session logs. Redis serves as an in-memory cache for active session state and to throttle message broadcasts during peak usage.

For containerization and orchestration, Docker images are built via multi-stage Dockerfiles to keep image sizes minimal, and Kubernetes manages horizontal scaling of both frontend and backend services, automatically routing traffic and restarting failing pods. Continuous integration pipelines (GitHub Actions) run linting, type checks, unit tests with Jest, and end-to-end tests using Cypress on every PR, gating merges until coverage thresholds are met. Error tracking and performance metrics are collected through Sentry and Grafana, giving real-time alerts on runtime exceptions and slow request patterns.

This project taught me valuable lessons about distributed system design, real-time data synchronization, performance optimization, and the importance of a thoughtful UX when building collaboration tools. In future iterations, I plan to add offline support via service workers and explore CRDTs as an alternative to OT for more robust conflict resolution.
    `.trim(),
        question: "What strategies have you used for conflict resolution in collaborative applications?",
        votesFor: 20,
        votesAgainst: 30
    },
    {
        title: "Optimizing Image Rendering in React Apps",
        description: `
Optimizing image rendering in modern React applications can make a huge difference in both performance and perceived user experience. In one recent project, I needed to display dozens of high-resolution photographs on a gallery page—each image up to 4K resolution—without causing janky scrolling or excessive bandwidth usage. To tackle this, I implemented a combination of lazy loading, responsive image sizing, and client-side caching strategies.

First, I used the native loading="lazy" attribute on <img> tags for basic lazy loading, deferring offscreen images until they near the viewport. Then, with the help of a small utility, I generated multiple image variants (e.g., 320px, 640px, 1024px widths) at build time using a Node.js script that wrapped Sharp. In my React components, I used the srcSet and sizes attributes so the browser could choose the most appropriate variant based on the device’s screen size and pixel density.

To avoid unnecessary re-downloads, I configured HTTP caching headers on the image assets—setting a long max-age for immutable files and cache-busting filenames on each new deploy. On the client side, I leveraged a lightweight in-memory LRU cache for image elements to maintain decoding buffers for recently viewed photos, which sped up revisits to already-viewed sections of the gallery.

For animated GIFs and videos embedded in the feed, I dynamically swapped them out for static placeholders until the user interacted (hover or click), at which point the actual media was loaded. I also profiled paint and layout events in Chrome DevTools, identifying that repaint costs were high because of oversized container elements; resizing containers and reducing CSS complexity (fewer shadows, transforms) cut rendering time in half.

Finally, I wrapped the gallery in a React.memo-wrapped component hierarchy and used useCallback hooks strategically to prevent unnecessary re-renders when scrolling. The result was a buttery-smooth gallery experience even on mid-range mobile devices.
    `.trim(),
        question: "Which image optimization techniques have you found most effective in large galleries?",
        votesFor: 30,
        votesAgainst: 80
    },
    // New fake post #3
    {
        title: "Implementing Role-Based Access Control in Node.js",
        description: `
Implementing a robust Role-Based Access Control (RBAC) system in a Node.js application requires a clear model of roles, permissions, resources, and user assignments. In my latest project, we began by defining a JSON schema that listed every resource in our domain—such as documents, user profiles, and administrative logs—and the actions allowed on each resource. Next, we built a middleware layer in Express that intercepts requests, extracts the user’s JWT token, verifies its signature, and looks up the user’s roles and permissions from a centralized Redis cache. The cache update cycle is driven by events emitted when an administrator changes a user’s roles, ensuring near-real-time consistency without hitting the database on every request.

We abstracted policy definitions into YAML files loaded at server startup, so adding new roles or modifying permissions only requires updating configuration rather than code changes. To handle hierarchical roles—where a manager inherits permissions from a team member—we implemented a graph traversal algorithm at load time to compute effective permissions. On the frontend, we provided fine-grained controls by passing permission flags through React context, enabling components to hide or disable UI elements based on the current user’s capabilities. Tailwind CSS utility classes were conditionally applied to button elements to reflect active or disabled states.

Testing proved critical: we wrote unit tests for the policy loader, integration tests for the middleware, and end-to-end tests with Cypress to simulate users with different roles interacting with the system. To monitor unauthorized access attempts, we integrated Sentry and custom Grafana dashboards that track 401 and 403 errors per endpoint. Metrics help us identify endpoints that may need more granular policies or clearer user messaging.

This RBAC implementation balances security, flexibility, and performance. In future iterations, I plan to explore attribute-based access control (ABAC) for dynamic policy expressions and to add an admin UI for non-technical staff to manage roles and permissions securely.
    `.trim(),
        question: "How do you approach designing RBAC systems for scalability and maintainability?",
        votesFor: 700,
        votesAgainst: 20
    },
    // New fake post #4
    {
        title: "Migrating a Legacy Codebase to TypeScript",
        description: `
Migrating a large legacy JavaScript codebase to TypeScript can be daunting, but the benefits in maintainability and developer productivity make it worthwhile. Our migration process started by incrementally adopting TypeScript—first enabling allowJs and checking only a few directories. We converted utility modules and shared libraries one at a time, adding explicit type annotations and leveraging TypeScript’s inference where possible. To prevent type drift, we configured strict mode settings like noImplicitAny, strictNullChecks, and noUncheckedIndexedAccess, catching potential runtime errors at compile time.

During migration, we encountered third-party libraries without type definitions. We solved this by writing minimal declaration (.d.ts) stubs for the APIs we used, and for more complex modules, we published community-maintained types or contributed to DefinitelyTyped. We also introduced ESLint with @typescript-eslint/parser and plugin to enforce both style and type-aware linting rules. The CI pipeline was updated to run tsc --noEmit alongside linting and test suites, blocking merges that introduce type errors.

On the frontend with React, we refactored class components to functional components with typed props and hooks. Custom hooks were defined with proper generic type parameters, ensuring that state and dispatch actions are strongly typed. We added React.FC annotations sparingly, preferring explicit prop interfaces for clarity. To smooth the developer experience, we configured VSCode settings to recognize the project’s tsconfig.json and webpack alias resolutions.

By the end, over 80% of the codebase was in .ts/.tsx files, with significantly fewer runtime exceptions in production. The migration unlocked better autocompletion, safer refactors, and clearer documentation via types. Looking forward, we’re exploring leveraging mapped types and conditional types to generate API client interfaces automatically from OpenAPI specs.
    `.trim(),
        question: "What strategies have you use to tackle type migrations incrementally?",
        votesFor: 900,
        votesAgainst: 10
    },
    // New fake post #5
    {
        title: "Leveraging Serverless Functions for Scalable APIs",
        description: `
Serverless architectures offer a flexible way to build APIs without managing server infrastructure, and I recently migrated a monolithic REST API to AWS Lambda functions. We split our API endpoints into discrete Lambda functions deployed via the Serverless Framework. Each function handles a single HTTP route—CRUD operations for user profiles, file uploads, and analytics events. This decomposition enables independent scaling, as high-traffic endpoints spin up more function instances automatically without affecting other routes.

To optimize cold-start performance, we kept package dependencies minimal and bundled code with Webpack, excluding devDependencies. We also chose Node.js 14.x for its faster startup. For shared utilities—like authentication middleware and database connectors—we published a private NPM package and imported it into each function, ensuring consistency and reducing code duplication. We connected to a managed Aurora Serverless MySQL cluster with the serverless-mysql library, which pools connections transparently between invocations.

Monitoring and observability relied on CloudWatch Logs and X-Ray tracing, allowing us to identify bottlenecks and optimize function durations. We implemented structured logging with JSON payloads, enabling metric filters to trigger alarms on error rates or latency spikes. IAM roles were scoped to the minimum permissions required per function following the principle of least privilege. Environment variables were stored securely in AWS Secrets Manager and injected at runtime by the Serverless Framework.

To handle large file processing, we offloaded work to SQS queues and a separate set of Lambda functions triggered by queue messages, decoupling inbound requests from heavy computation. This event-driven design improved API responsiveness and enabled retries without blocking the client. Overall, transitioning to serverless reduced operational overhead, improved scalability, and lowered our monthly infrastructure cost.
    `.trim(),
        question: "What pitfalls have you encountered when moving to serverless and how did you overcome them?",
        votesFor: 10,
        votesAgainst: 2000
    },
    // New fake post #6
    {
        title: "Building Offline-First Progressive Web Apps",
        description: `
Progressive Web Apps (PWAs) that work offline can significantly boost user engagement, and I recently developed an offline-first PWA for a field survey application. The app uses a Service Worker to cache static assets—HTML, CSS, JavaScript bundles—and API responses for form definitions. We implemented a Cache-First strategy for static resources using Workbox, and a Network-First strategy with fallback-to-cache for dynamic data endpoints, ensuring the latest data when online but seamless operation when offline.

Survey responses are stored locally in IndexedDB via the idb library, allowing users to collect data without connectivity. We created a synchronization queue that watches for new or updated entries in IndexedDB and batches them into POST requests when network connectivity returns. To prevent data conflicts, each survey submission includes a client-generated UUID and a last-modified timestamp; the backend merges changes idempotently.

On the UI side, we provided visual indicators of connectivity status and sync progress using a React context provider. The application also gracefully handles quota errors for local storage by prompting users to export pending responses as JSON files for later import. For mobile devices, we configured a Web App Manifest with appropriate icons and theme colors, enabling “Add to Home Screen” prompts and full-screen display.

Performance profiling in Lighthouse revealed that caching strategies cut subsequent load times by over 60%, and offline reliability tests passed even after clearing browser cache. By combining service workers, indexedDB, and thoughtful UX design, the PWA offers a native-like experience across unstable networks, ideal for field operations where connectivity is intermittent.
    `.trim(),
        question: "How do you manage data synchronization and conflict resolution in offline-first apps?",
        votesFor: 70000,
        votesAgainst: 1000
    },
    // New fake post #7
    {
        title: "Designing GraphQL Schemas for Complex Data Models",
        description: `
GraphQL’s flexibility makes it ideal for exposing complex data models to clients, and in a recent project I designed a schema for an e-commerce platform with products, categories, user reviews, and order history. We started by mapping our SQL database tables to GraphQL types—Product, Category, Review, User, and Order—using Apollo Server with TypeScript. We defined interfaces and unions to handle different product variants (digital vs. physical), allowing clients to query fields specific to each variant type without overfetching.

To avoid N+1 query problems, we integrated DataLoader for batched and cached database access. Each resolver uses DataLoader to group similar requests within a single request cycle, reducing redundant queries by up to 80%. We also implemented connection types and Relay-style pagination with cursors, giving clients fine-grained control over page size and navigation direction.

Authentication and authorization logic is enforced at the resolver level using directive transformers. For example, @auth(requires: ROLE_ADMIN) prevents non-admin users from accessing sensitive mutations. Custom scalar types—like DateTime and JSON—ensure proper serialization of timestamps and arbitrary metadata. We wrote extensive schema validations using GraphQL’s built-in validation rules and added custom rules to enforce input constraints on product SKUs and order amounts.

For documentation and testing, we generated a live GraphQL Playground endpoint and leveraged GraphQL Code Generator to produce TypeScript types for all queries and mutations, ensuring end-to-end type safety. Mocked schemas and snapshot tests with Jest validate the schema structure and catch unintended changes early in CI.  

This approach resulted in a highly performant, self-documenting API that adapts easily to evolving business requirements while minimizing boilerplate on both the server and client.
    `.trim(),
        question: "What techniques do you use to prevent N+1 queries in GraphQL resolvers?",
        votesFor: 785,
        votesAgainst: 7508879,
    }
];