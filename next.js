// File: app/page.tsx import Navbar from '../components/Navbar'; import Hero from '../components/Hero'; import Features from '../components/Features'; import About from '../components/About'; import Contact from '../components/Contact'; import Footer from '../components/Footer';

export default function Home() { return (

); }

// File: app/globals.css @tailwind base; @tailwind components; @tailwind utilities;

body { font-family: 'Inter', sans-serif; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' opacity='0.05'%3E%3Ctext x='10' y='20' font-size='12' fill='%23333333'%3E%CF%80=3.14159%3C/text%3E%3Ctext x='10' y='40' font-size='12' fill='%23333333'%3Ee=2.71828%3C/text%3E%3Ctext x='10' y='60' font-size='12' fill='%23333333'%3E%CF%83=%E2%88%9A%E2%88%91(x-%CE%BC)%C2%B2%3C/text%3E%3Ctext x='10' y='80' font-size='12' fill='%23333333'%3E%CE%94=dy/dx%3C/text%3E%3C/svg%3E"); background-repeat: repeat; }

.smooth-scroll { scroll-behavior: smooth; }

.feature-card { transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative; overflow: hidden; }

.feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }

.feature-card:hover::after { content: '∫f(x)dx | ∑xₙ | ∃x∈ℝ'; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(79, 70, 229, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #4f46e5; opacity: 0.8; pointer-events: none; }

// File: components/Navbar.tsx export default function Navbar() { return (

# Genius AI

HomeFeaturesAboutContact

); }

// File: components/Hero.tsx export default function Hero() { return (

## Genius Artificial Intelligence: Your Thinking Partner

Unlock inspiration, solutions, and brilliant ideas with cutting-edge AI technology.

Explore Features

); }

// File: components/Features.tsx export default function Features() { const features = \[ { title: "Intelligent Analysis", description: "Genius Artificial Intelligence leverages advanced algorithms to analyze complex data, delivering precise and tailored solutions. From business planning to decision-making, gain deep insights customized to your needs.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`}, { title: "Creative Ideation", description: "Spark boundless inspiration for your projects. Genius Artificial Intelligence generates innovative ideas, from design concepts to marketing strategies, complete with visual and narrative suggestions to ignite your creativity.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`}, { title: "Instant Responses", description: "Powered by rapid processing technology, Genius Artificial Intelligence delivers answers in seconds. Ideal for urgent scenarios or when you need swift solutions without compromising quality.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`}, { title: "Team Collaboration", description: "Enable seamless team collaboration with real-time idea-sharing, annotation tools, and virtual whiteboards. Synchronize projects and boost productivity with effortless communication.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`}, { title: "Adaptive Learning", description: "Genius Artificial Intelligence learns from your patterns and preferences, refining recommendations based on usage. The more you engage, the more relevant and personalized the outputs become.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`}, { title: "Multi-Platform Integration", description: "Connect Genius Artificial Intelligence with tools like Slack, Notion, or Google Workspace. Import data, export results, and automate workflows for maximum efficiency.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`}, { title: "Real-Time Analytics", description: "Monitor the performance of your ideas with interactive dashboards. Visualize data through charts and heatmaps to instantly understand the impact of your solutions.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`}, { title: "AI Personalization", description: "Customize preferences, such as language style or topic focus, for a truly tailored experience. Genius Artificial Intelligence adapts outputs to align with your vision and goals.", icon: `<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .738.402 1.378 1 1.723V15a1 1 0 001 1h4a1 1 0 001-1v-2.277c.598-.345 1-.985 1-1.723 0-1.104-.896-2-2-2s-2 .896-2 2m-2 0h4m-4 0c0-1.104.896-2 2-2s2 .896 2 2m-2 0v4"></path></svg>`} \];

return (

## Key Features

{features.map((feature, index) =&gt; (

&lt;div className="text-indigo-600 mb-4" dangerouslySetInnerHTML={{ \__html: feature.icon }} /&gt;

### {feature.title}

{feature.description}

))}

); }

// File: components/About.tsx export default function About() { return (

## About Genius Artificial Intelligence

Genius Artificial Intelligence is an AI-powered assistant designed to enhance your thinking and creativity. Leveraging state-of-the-art technology, we provide solutions, inspiration, and insights for a wide range of needs.

We believe everyone has the potential to generate extraordinary ideas, and Genius Artificial Intelligence is here to make that a reality.

); }

// File: components/Contact.tsx export default function Contact() { return (

## Contact Us

Name

Email

Message

Send Message

); }

// File: components/Footer.tsx export default function Footer() { return (

© 2025 Genius Artificial Intelligence. All rights reserved.

GitHubTwitterLinkedIn

); }
