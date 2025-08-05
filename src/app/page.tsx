import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { DisplayCard } from "@/components/DisplayCard";

interface CodeProps extends PropsWithChildren {
  className?: string;
}

function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        "bg-gray-100 px-2 py-1 rounded text-sm font-mono",
        className
      )}
    >
      {children}
    </code>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      <div className="max-w-4xl mx-auto p-4">
        <div className="border border-gray-200 rounded-lg px-6 py-8 mt-10 bg-white shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Take Home Assignment 😀</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Objective</h2>
            <p className="text-gray-700 mb-4">
              Create a reusable <Code>DisplayCard</Code> component that
              demonstrates your TypeScript, React, and design skills.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  1
                </span>
                <span>
                  Build a <Code>DisplayCard</Code> component with three props:
                  <Code>title</Code> (string), <Code>description</Code>{" "}
                  (string), and <Code>imageUrl</Code> (string).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  2
                </span>
                <span>
                  Style the component using Tailwind CSS. The design is entirely
                  up to you—showcase your aesthetic sense.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  3
                </span>
                <span>
                  Ensure the component is fully responsive and looks great on
                  both desktop and mobile viewports.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  4
                </span>
                <span>
                  Implement two visual variants: <Code>default</Code> and{" "}
                  <Code>featured</Code>. The <Code>featured</Code> variant
                  should be visually distinct (larger, different colors, etc.).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  5
                </span>
                <span>
                  Create a demo section on this page showing both variants with
                  sample content.
                </span>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Technical Expectations
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-green-500">
              <li>Properly typed TypeScript interfaces for all props</li>
              <li>Clean, readable component structure</li>
              <li>Proper image handling (alt text, loading states)</li>
              <li>Consistent code formatting and naming conventions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Evaluation Criteria</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Code Quality (50%)
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>TypeScript implementation</li>
                  <li>Component clarity & composition</li>
                  <li>Code organization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Design & UX (50%)
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Visual design quality</li>
                  <li>Responsive behavior</li>
                  <li>Variant differentiation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">💡 Bonus Points</h3>
            <p className="text-blue-800 text-sm">
              Add hover effects, smooth transitions, or accessibility features
              like keyboard navigation.
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600">
              <strong>Time Estimate:</strong> 45-60 minutes •
              <strong>Deliverable:</strong> Working component with demo examples
              below
            </p>
          </div>
        </div>
      </div>

      {/* Demo Section Placeholder */}
        <div className="border border-gray-200 rounded-lg px-6 py-8 mt-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">DisplayCard demo</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Variant</h3>
            <div className="bg-white p-4 border border-gray-300 rounded border-dashed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <DisplayCard
                title="Zero-G Racing"
                description="Experience the ultimate thrill of high-speed racing in zero gravity environments. Navigate through asteroid fields and space stations in this heart-pounding competition."
                imageUrl="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop"
              />
              <DisplayCard
                title="Plasma Ball League"
                description="Master the art of plasma manipulation in this fast-paced team sport. Control energy orbs through magnetic fields to score goals in zero gravity arenas."
                imageUrl="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=300&fit=crop"
              />
              <DisplayCard
                title="Orbital Combat Arena"
                description="Engage in tactical combat sports using advanced exosuits and energy weapons. Battle opponents in rotating space stations with shifting gravity zones."
                imageUrl="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?w=500&h=300&fit=crop"
              />
              <DisplayCard
                title="Nebula Surfing"
                description="Ride the cosmic waves of stellar winds through colorful nebulae. This extreme sport combines surfing techniques with advanced propulsion technology."
                imageUrl="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&h=300&fit=crop"
              />
              <DisplayCard
                title="Moon Base Olympics"
                description="Compete in traditional Olympic events adapted for lunar gravity. High jump records are shattered in this prestigious interplanetary sporting competition."
                imageUrl="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&h=300&fit=crop"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Featured Variant</h3>
            <div className="bg-white p-4 border border-gray-300 rounded border-dashed grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-8 ml-4">
              <DisplayCard
                title="Black Hole Diving Championship"
                description="The ultimate test of courage and precision. Navigate gravitational anomalies and time dilation effects as you dive toward the event horizon. Only the most elite pilots with quantum-resistant exosuits qualify for this legendary competition."
                imageUrl="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=400&fit=crop"
                featured={true}
              />
              <DisplayCard
                title="Supernova Shockwave Surfing"
                description="Ride the explosive energy waves of dying stars across multiple light-years. This death-defying sport requires mastery of exotic matter shields and temporal navigation. Reserved for the galaxy's most fearless adrenaline junkies."
                imageUrl="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=400&fit=crop"
                featured={true}
              />
              <DisplayCard
                title="Quantum Entanglement Relay Race"
                description="Compete across parallel dimensions simultaneously in this mind-bending team sport. Master quantum tunneling techniques and dimensional rifts to outmaneuver opponents existing in multiple realities at once."
                imageUrl="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=500&h=400&fit=crop"
                featured={true}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
