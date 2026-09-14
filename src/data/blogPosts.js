export const blogPosts = [
  {
    id: "printbloom-ecommerce-case-study",
    date: "Sep 12, 2026",
    title: "Case Study: PrintBloom 🌸",
    description: "How I built a highly scalable e-commerce platform handling heavy image processing with Next.js 15, Supabase, and Razorpay.",
    image: "/assets/printbloom.png",
    content: `
**Role:** Full-Stack Developer  
**Platform:** Web Application (E-commerce)  
**Live URL:** [printbloom.in](https://printbloom.in/)

### Project Overview
PrintBloom is a modern, highly personalized gifting e-commerce platform. Unlike standard online stores, PrintBloom allows customers to build custom physical products (like multi-page magazines, polaroids, and photo frames) by uploading large batches of photos, adding AI-generated captions, and managing everything through a seamless checkout process.

The goal was to build a highly scalable, visually stunning, and interactive platform that handled heavy image processing on the frontend while maintaining absolute security and speed on the backend.

### Tech Stack
*   **Frontend:** Next.js 15 (App Router), React 18 (RSC), Tailwind CSS, Framer Motion.
*   **Backend & Database:** Supabase, PostgreSQL, Supabase Auth & RLS.
*   **Integrations & Infrastructure:** Razorpay (Payments), Cloudinary (Image Processing), Vercel (Edge functions, CI/CD).

### Core Features & Implementation Details

#### 1. Intelligent Product Customization Engine
**The Challenge:** Customers needed to upload 30-40 high-resolution images for a single "Custom Magazine" order without crashing the browser or slowing down the site.
**The Solution:**
*   Implemented a chunked upload mechanism directly from the client to Cloudinary using unsigned presets. This bypassed my backend entirely, saving immense server bandwidth.
*   Built a drag-and-drop UI where users can visually arrange their uploaded photos.
*   Integrated an AI "Magic Caption" Generator that allows users to automatically generate aesthetic captions for their photos before printing.

#### 2. Gamified Wallet, Referral & Loyalty System
**The Challenge:** The client wanted a self-sustaining marketing engine where users are rewarded for bringing in new customers.
**The Solution:**
*   Engineered a centralized wallet system using PostgreSQL triggers and RPCs (Remote Procedure Calls) in Supabase.
*   Automated loyalty system grants 20 points per successful order.
*   Every user gets a unique referral link. When a new user signs up via this link and completes an order > ₹250, a Supabase trigger automatically credits 40 points to the referrer's wallet.
*   Built server-side validation to allow users to burn wallet points seamlessly at the Razorpay checkout stage to reduce their cart total.

#### 3. Secure E-commerce Pipeline
**The Challenge:** Handling payments securely and preventing cart tampering.
**The Solution:**
*   Implemented a strict Server-Side Pricing Model. The frontend only sends the Product ID and Quantities. The Next.js backend recalculates the total from the secure PostgreSQL database to prevent malicious client-side price manipulation.
*   Built a secure webhook endpoint to listen to Razorpay payment confirmations before officially marking the order as Processing in the database.

#### 4. Custom Admin Dashboard & Access Control
**The Challenge:** The client needed a way to manage the store without writing code or accessing the raw database.
**The Solution:**
*   Built a protected \`/admin\` route group in Next.js.
*   Used Next.js Middleware to intercept requests. It checks the active Supabase session against a secure environment variable (\`ADMIN_EMAILS\`). If a standard user attempts to access the dashboard, they are instantly redirected, ensuring 100% security.
*   The dashboard allows the client to perform CRUD operations on products, update order statuses, generate Promo Codes with usage limits, and view revenue analytics.

### Impact & Results
Delivered a complete, end-to-end proprietary e-commerce solution that functions as smoothly as top-tier retail platforms. The architecture is highly scalable, requires zero server maintenance from the client, and features a bespoke aesthetic design perfectly tailored to the gifting niche.
    `
  },
  {
    id: "integrating-ai-fullstack",
    date: "Aug 14, 2026",
    title: "Integrating AI into Full-Stack Apps: A Practical Guide",
    description: "How I built DevLens AI and automated technical interview evaluations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    content: `
Artificial Intelligence is no longer just a buzzword for researchers; it's a practical tool for Full-Stack developers. While building **DevLens AI**, I wanted to move beyond simple chat interfaces and build a tool that actually evaluates human performance.

### The Challenge
The goal was to create an AI Interview Simulator. The user would speak or type an answer, and the system needed to evaluate it for technical accuracy, clarity, and completeness, then generate a dynamic skill-gap roadmap.

### The Architecture
I used **React** for the frontend to handle real-time state and speech-to-text inputs. On the backend, I integrated the OpenAI API. The tricky part wasn't calling the API, but *prompt engineering*—structuring the hidden system prompts so that the AI acted strictly as a senior technical interviewer and returned structured JSON data instead of conversational text.

### Key Takeaways
1. **Always enforce JSON outputs:** If your backend needs to process AI responses (like updating a user's score in a PostgreSQL database), force the LLM to reply in a strict JSON format.
2. **Streaming is essential:** Waiting 10 seconds for an AI evaluation ruins the UX. Use streaming responses to show the evaluation being typed out in real-time.

Building AI features is less about algorithms and more about designing seamless, latency-free user experiences.
    `
  },
  {
    id: "scalable-spring-boot",
    date: "Jul 22, 2026",
    title: "Building Scalable Systems with Spring Boot & PostgreSQL",
    description: "Lessons learned from architecting the Jankalyan civic tech platform.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    content: `
When you build a civic tech platform meant to handle complaints and public data, scalability isn't an afterthought—it's a requirement. Here is how I architected the backend for **Jankalyan** using Spring Boot and PostgreSQL.

### Database Modeling
A solid backend starts with a solid schema. I designed a 6-table relational schema in PostgreSQL. By using proper foreign keys and indexing the most frequently queried columns (like \`status\` and \`user_id\` in the Complaints table), we ensured that queries remained fast even as the database grew.

### Security First
We implemented **JWT (JSON Web Tokens)** for stateless authentication. This allowed our React frontend to authenticate securely without the server needing to store session state, which is crucial for horizontally scaling the backend.

### RESTful Best Practices
We built 18 distinct REST endpoints. The key to maintaining this was:
- **Separation of Concerns:** Controllers only handled HTTP requests, Services handled business logic, and Repositories handled data access.
- **Global Exception Handling:** We used \`@ControllerAdvice\` in Spring Boot to catch exceptions and return standardized error JSON objects, making frontend debugging a breeze.

Spring Boot remains one of the most robust frameworks for enterprise-grade applications.
    `
  },
  {
    id: "architecting-bookmyvendor",
    date: "Aug 02, 2026",
    title: "Architecting a Marketplace: The BookMyVendor Playbook",
    description: "Why I chose a Modular Monolith over Microservices for a production-grade marketplace.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    content: `
**Live URL:** [bookmyvendor-nu.vercel.app](https://bookmyvendor-nu.vercel.app/)

When building **BookMyVendor**, a comprehensive vendor booking marketplace, the immediate temptation was to use Microservices. However, for a small team launching an MVP, complexity must be earned, not assumed.

### The Modular Monolith Approach
Instead of distributed systems overhead, I built a single deployable **Spring Boot** application with strict internal boundaries (Package-by-domain). Features like \`booking\`, \`payment\`, and \`vendor\` are strictly isolated. This gives us 90% of microservices' maintainability benefits without the operational nightmare of distributed tracing and network failures.

### The Tech Stack
- **Backend:** Spring Boot (Java) for robust transaction management.
- **Database:** PostgreSQL for strict relational integrity.
- **Frontend:** React + React Query for elegant, cached client-side state.
- **Infrastructure:** Redis for caching and pub/sub notifications. Razorpay for secure escrow-style payouts.

### Key Engineering Rules
1. **Never expose JPA Entities:** Always map to DTOs before returning data to the client.
2. **Security First:** JWT auth, BCrypt hashing, and strict Bean Validation on every request.
3. **Audit Everything:** State-changing operations (like payments and bookings) write to append-only audit tables. You cannot fix what you cannot trace.

A well-architected monolith will always outperform a poorly orchestrated microservice fleet.
    `
  },
  {
    id: "farmchain-agritech-vision",
    date: "Sep 05, 2026",
    title: "FarmChain: Empowering Farmers with AI and Data Transparency",
    description: "My vision for an AgriTech platform that combines Machine Learning with market transparency.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    content: `
**Live URL:** [farmchain-snowy.vercel.app](https://farmchain-snowy.vercel.app/)

Technology should solve real-world problems. **FarmChain** is an AgriTech concept I am developing to bridge the information gap for farmers, ensuring they get the right advice and the right price.

### Core Concept
The platform allows a farmer to simply input their land dimensions and soil type. The system then calculates exactly which crop to plant, how much water it needs, and the precise fertilizer schedule. 

### Where AI & Machine Learning Fit In
- **Personalized Recommendations:** Instead of building a rigid rule-based system, I plan to use **RAG (Retrieval-Augmented Generation)** with LLMs to dynamically generate farming schedules based on official agricultural data and real-time weather APIs.
- **Price Forecasting:** Using Time-Series ML models (like ARIMA) trained on historical Mandi (market) data to predict future crop prices. This allows farmers to decide *when* to sell to maximize profit.

### The Goal: Transparency
Farmers are often exploited because they lack access to real-time market rates. By aggregating government pricing and large buyer rates, FarmChain aims to create absolute transparency in the supply chain.

Building for the agriculture sector requires moving beyond flashy UI and focusing on high-accuracy, highly-accessible data engineering.
    `
  },
  {
    id: "foodies-app-design",
    date: "Oct 10, 2026",
    title: "Foodies: A Modern Food Delivery Experience",
    description: "Designing and developing a seamless, interactive food delivery platform.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    content: `
**Live URL:** [foodies-gafz.vercel.app](https://foodies-gafz.vercel.app/)

Foodies is a beautifully designed, highly interactive platform aimed at revolutionizing how users discover and order their favorite meals. 

### Project Overview
The goal was to create an appetizing and fluid user interface that makes ordering food not just a task, but an experience. I focused heavily on visual hierarchy, high-quality imagery, and smooth micro-interactions that guide the user from browsing to checkout effortlessly.

### Tech Stack
*   **Frontend:** React, Tailwind CSS, Framer Motion for fluid page transitions.
*   **Performance:** Optimized image loading and lazy-loaded components to ensure lightning-fast response times even on mobile networks.

### Design Philosophy
When it comes to food, visuals are everything. The UI uses generous whitespace, bold typography, and a warm color palette to make the food photography pop. Every button click and hover state was carefully crafted to feel tactile and responsive.
    `
  }
];
