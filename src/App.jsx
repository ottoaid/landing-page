import React, { useRef, useState } from "react";
import "./styles.css";

const WORKFLOWS = {
  maintenance: [
    [
      "Tenant submits a request",
      "“The kitchen faucet in Unit 204 is leaking.”",
    ],
    [
      "AI organizes the details",
      "Identify the unit, category, and suggested priority.",
    ],
    [
      "Your rules route the work",
      "Assign the right team; flag exceptions for review.",
    ],
    [
      "Everyone gets a clear update",
      "Track progress and send approved status messages.",
    ],
  ],
  leasing: [
    [
      "A prospective tenant reaches out",
      "Capture an inquiry about an available property.",
    ],
    [
      "Organize their preferences",
      "Extract move-in date, property, and questions.",
    ],
    [
      "Route to your leasing team",
      "Create a follow-up task for the assigned agent.",
    ],
    ["Prepare a helpful response", "Draft next steps for your team to review."],
  ],
  updates: [
    ["The request status changes", "Your team marks a repair as scheduled."],
    [
      "Prepare the right message",
      "Draft an update with the relevant next step.",
    ],
    ["Review when needed", "Flag sensitive details for human approval."],
    [
      "Keep the conversation current",
      "Record the update alongside the request.",
    ],
  ],
};

function Header({ onOpenDemo }) {
  return (
    <nav aria-label="Main navigation">
      <a className="logo" href="#">
        <h2>OttoAid</h2>
        <span style={{ color: "#7e9a68" }}>.</span>
      </a>
      <div className="links">
        <a href="#features">Features</a>
        <a href="#workflow">How it works</a>
        <a href="#faq">FAQs</a>
      </div>
      <button className="btn" onClick={onOpenDemo}>
        Book a demo <span>↗</span>
      </button>
    </nav>
  );
}

function Hero({ onOpenDemo }) {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">
          <span className="dot"></span> A calmer way to manage properties
        </div>
        <h1>
          Less busywork.
          <br />
          Better <span>properties.</span>
        </h1>
        <p>
          Turn maintenance requests, tenant messages, and everyday admin into
          automated workflows. More time for your properties. Less time chasing
          updates.
        </p>
        <div className="actions">
          <button className="btn" onClick={onOpenDemo}>
            Book a free demo <span>↗</span>
          </button>
          <a className="btn outline" href="#workflow">
            See how it works <span>↓</span>
          </a>
        </div>
        <div className="small">
          Built for property managers. Designed around your day.
        </div>
      </div>
      <div className="visual">
        <div className="app">
          <div className="appbar">
            <span>≋   Your property workspace</span>
            <span className="demo">ILLUSTRATIVE DEMO</span>
          </div>
          <div className="appbody">
            <div className="sidebar">
              <div className="active">▦   Overview</div>
              <div>⌂   Properties</div>
              <div>☷   Requests</div>
              <div>↔   Workflows</div>
              <div>◷   Reports</div>
            </div>
            <div className="main">
              <h3>A little more under control.</h3>
              <div className="sub">Your portfolio at a glance</div>
              <div className="stats">
                <div className="stat">
                  <label>Properties</label>
                  <strong>24</strong>
                </div>
                <div className="stat">
                  <label>Open requests</label>
                  <strong>12</strong>
                </div>
                <div className="stat">
                  <label>Resolved this week</label>
                  <strong>38</strong>
                </div>
              </div>
              <div className="tablehead">
                <span>Recent maintenance requests</span>
                <span style={{ color: "#7e9271" }}>View all →</span>
              </div>
              <div className="row">
                <span className="icon">⌁</span>
                <div>
                  Kitchen faucet leak<small>Oakwood · Unit 204</small>
                </div>
                <span className="pill">Assigned</span>
              </div>
              <div className="row">
                <span className="icon">☀</span>
                <div>
                  AC not cooling<small>Parkside · Unit 112</small>
                </div>
                <span className="pill amber">In progress</span>
              </div>
              <div className="row">
                <span className="icon">⌑</span>
                <div>
                  Front door lock repair<small>Harbor View · Unit 308</small>
                </div>
                <span className="pill">Resolved</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toast">
          <span className="check">✓</span>
          <div>
            Request routed. Tenant updated.
            <small>One less thing on your to-do list.</small>
          </div>
          <span style={{ marginLeft: "auto" }}>✧</span>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="sectiontop">
        <div>
          <div className="eyebrow">Less friction. More flow.</div>
          <h2>
            Your everyday tasks.
            <br />
            Working together.
          </h2>
        </div>
        <p>
          A connected approach to the work between a tenant’s first message and
          your team’s final follow-up.
        </p>
      </div>
      <div className="cards">
        <article className="card">
          <div className="featureicon">⌁</div>
          <h3>Maintenance, without the chase</h3>
          <p>
            Organize incoming requests, identify the property and unit, and
            route work to the right person—with approval for sensitive
            decisions.
          </p>
        </article>
        <article className="card">
          <div className="featureicon">↔</div>
          <h3>Updates that keep moving</h3>
          <p>
            Build timely acknowledgments and status updates into your workflow,
            so tenants and vendors know what happens next.
          </p>
        </article>
        <article className="card">
          <div className="featureicon">▦</div>
          <h3>A clearer view of your portfolio</h3>
          <p>
            Bring requests, owners, and next steps into one view. Spot stalled
            work before it becomes another unanswered message.
          </p>
        </article>
      </div>
    </section>
  );
}

function Workflow() {
  const [activeFlow, setActiveFlow] = useState("maintenance");
  return (
    <section className="workflow" id="workflow">
      <div>
        <div className="eyebrow">From inbox to action</div>
        <h2>
          A request comes in.
          <br />
          Your workflow takes over.
        </h2>
        <p>
          Explore a sample workflow. Automate the routine steps and keep your
          team involved where judgment matters.
        </p>
        <div className="tabs" role="group" aria-label="Sample workflows">
          <button
            className={activeFlow === "maintenance" ? "tab active" : "tab"}
            aria-pressed={activeFlow === "maintenance"}
            onClick={() => setActiveFlow("maintenance")}
          >
            Maintenance
          </button>
          <button
            className={activeFlow === "leasing" ? "tab active" : "tab"}
            aria-pressed={activeFlow === "leasing"}
            onClick={() => setActiveFlow("leasing")}
          >
            Leasing inquiries
          </button>
          <button
            className={activeFlow === "updates" ? "tab active" : "tab"}
            aria-pressed={activeFlow === "updates"}
            onClick={() => setActiveFlow("updates")}
          >
            Tenant updates
          </button>
        </div>
        <span className="small">
          Example workflow · Configurable around your team
        </span>
      </div>
      <div className="steps" aria-live="polite">
        {WORKFLOWS[activeFlow].map(([title, description], index) => (
          <div className="step" key={title}>
            <span className="num">{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <small>{description}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ onOpenDemo }) {
  return (
    <section className="section" id="faq">
      <div className="faq">
        <h2>A few things you might ask.</h2>
        <details>
          <summary>Who is OttoAid designed for?</summary>
          <p>
            This concept is designed for small and mid-sized property management
            teams that want to reduce repetitive administrative work and keep
            maintenance and communication organized.
          </p>
        </details>
        <details>
          <summary>Does AI make every decision?</summary>
          <p>
            The proposed workflow uses AI to assist with classification and
            draft updates. Your team sets routing rules and reviews urgent,
            sensitive, or uncertain requests. Emergency handling should follow
            your existing procedures.
          </p>
        </details>
        <details>
          <summary>Can it work with our existing software?</summary>
          <p>
            A real implementation starts by reviewing your tools and their
            available APIs. Integration options depend on your provider’s
            permissions and technical capabilities.
          </p>
        </details>
        <details>
          <summary>Is this a live software product?</summary>
          <p>
            This is a sample landing page and interactive product concept. The
            dashboard uses illustrative data; no external systems are connected.
          </p>
        </details>
      </div>
      <div className="cta">
        <h2>Make room for the work that matters.</h2>
        <p>
          Start with one repetitive workflow. Imagine a better way to run it.
        </p>
        <button className="btn light" onClick={onOpenDemo}>
          Book a free automation assessment <span>↗</span>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a className="logo" href="#">
        OttoAid.
      </a>
      <span>© 2026 OttoAid · Sample product concept</span>
      <a href="#workflow">Explore the workflow ↑</a>
    </footer>
  );
}

const DEMO_API_URL = import.meta.env.VITE_DEMO_API_URL;

function AssessmentDialog({ dialogRef }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    unitsManaged: "",
    message: "",
    website: "",
  });

  const close = () => {
    if (status !== "submitting") dialogRef.current?.close();
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    if (!DEMO_API_URL) {
      setError("Demo requests aren't configured yet. Please try again later.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      const response = await fetch(DEMO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          units: form.unitsManaged,
          message: form.message.trim(),
          website: form.website,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        unitsManaged: "",
        message: "",
        website: "",
      });
    } catch (err) {
      console.error("Demo request error:", err);
      setError("We couldn't send your request. Please try again.");
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="assessment-title"
      onClose={() => {
        if (status !== "submitting") {
          setStatus("idle");
          setError("");
        }
      }}
      onCancel={(event) => {
        if (status === "submitting") event.preventDefault();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          close();
        }
      }}
    >
      <button
        className="close"
        type="button"
        aria-label="Close dialog"
        onClick={close}
        disabled={status === "submitting"}
      >
        ×
      </button>

      {status === "success" ? (
        <div className="assessment-success" role="status">
          <div className="assessment-success-icon" aria-hidden="true">✓</div>
          <h2 id="assessment-title">Thanks for reaching out.</h2>
          <p>
            Your request has been received. We'll be in touch to discuss your
            team's workflows and next steps.
          </p>
          <button type="button" className="btn" onClick={close}>
            Done ↗
          </button>
        </div>
      ) : (
        <>
          <div className="eyebrow">A better workflow starts here</div>
          <h2 id="assessment-title">Let’s find your first automation.</h2>
          <p>
            Tell us a little about your property management team. We'll reach
            out to arrange a free demo and discuss what you want to automate.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="field">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="Alex Morgan"
                value={form.name}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>

            <label className="field">
              Work email
              <input
                name="email"
                autoComplete="email"
                type="email"
                required
                maxLength={254}
                placeholder="alex@company.com"
                value={form.email}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>

            <label className="field">
              Company
              <input
                name="company"
                autoComplete="organization"
                required
                maxLength={150}
                placeholder="Your property management company"
                value={form.company}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>

            <label className="field">
              Units managed
              <select
                name="unitsManaged"
                required
                value={form.unitsManaged}
                onChange={handleChange}
                disabled={status === "submitting"}
              >
                <option value="">Select portfolio size</option>
                <option value="under-100">Under 100</option>
                <option value="100-500">100–500</option>
                <option value="500-2000">500–2,000</option>
                <option value="2000-plus">2,000+</option>
              </select>
            </label>

            <label className="field">
              What would you like to automate?
              <textarea
                name="message"
                rows={3}
                required
                maxLength={2000}
                placeholder="Maintenance requests, tenant updates, vendor coordination..."
                value={form.message}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>

            {/* Honeypot: hidden from legitimate users */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="demo-website">Website</label>
              <input
                id="demo-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </div>

            {error && (
              <p className="assessment-error" role="alert">
                {error}
              </p>
            )}

            <button
              className="btn assessment-submit"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending request…"
                : "Request a free demo ↗"}
            </button>
          </form>
        </>
      )}
    </dialog>
  );
}

export default function App() {
  const dialogRef = useRef(null);
  const onOpenDemo = () => dialogRef.current?.showModal();

  return (
    <>
      <div className="wrap">
        <Header onOpenDemo={onOpenDemo} />
        <main>
          <Hero onOpenDemo={onOpenDemo} />
          <div className="benefits">
            <span>Keep your team in sync</span>
            <span>Make every request visible</span>
            <span>Give tenants clearer updates</span>
            <span>Keep people in control</span>
          </div>
          <Features />
          <Workflow />
          <FAQSection onOpenDemo={onOpenDemo} />
        </main>
        <Footer />
      </div>
      <AssessmentDialog dialogRef={dialogRef} />
    </>
  );
}
