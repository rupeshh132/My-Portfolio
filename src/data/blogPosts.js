export const blogPosts = [
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
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef4bc1?auto=format&fit=crop&w=800&q=80",
    content: `
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
  }
];
