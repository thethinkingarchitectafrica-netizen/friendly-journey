import Script from "next/script";
import AnimatedContent from "./AnimatedContent";
import Grainient from "./Grainient";
import TallyAutoOpen from "./TallyAutoOpen";

const benefits = [
  {
    title: "Live sessions",
    text: "Conversations with practising architects on the questions that matter: the path to licensure, running a practice, working across borders. Each session leaves room for your questions.",
  },
  {
    title: "Recordings and resources",
    text: "What is said in a session should not disappear when the call ends. We turn each one into guides, checklists and recordings you can come back to.",
  },
  {
    title: "A community that talks",
    text: "A space to ask questions, compare notes and learn from people a few steps ahead of you or a few steps behind.",
  },
];

const questions = [
  {
    question: "What is The Thinking Architect?",
    answer:
      "A community for people in architecture at every stage. We run live sessions with practising architects, publish resources from each session, and give members a place to talk to each other.",
  },
  {
    question: "Is TTA connected to ARCON or NIA?",
    answer:
      "No. TTA is an independent community. We are not affiliated with, endorsed by, or acting on behalf of ARCON, NIA or JBAE. When we share information about registration, it is for awareness, and we always point you to the official source to confirm it.",
  },
  {
    question: "What will you do with my email?",
    answer:
      "We use it to send you resources and tell you about sessions. You can unsubscribe at any time.",
  },
  {
    question: "Can I speak at a session or suggest a topic?",
    answer: (
      <>
        Yes. Write to us at{" "}
        <a href="mailto:hello@thethinkingarchitects.com.ng">
          hello@thethinkingarchitects.com.ng
        </a>
        .
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <header className="shell topbar">
        <a className="wordmark" href="#top" aria-label="The Thinking Architect home">
          The Thinking Architect
        </a>
        <a className="join-link" href="#join">Join</a>
      </header>
      <main id="top">
        <section className="hero">
          <Grainient
            colors={["#120f17", "#2a0f0a", "#9a3412", "#f97316", "#fed7aa"]}
            angle={55}
            flow={0.8}
            silk={0.35}
            grainAmount={0.08}
          />
          <div className="shell hero-layout">
            <div className="hero-content">
              <span className="hero-kicker">For the people shaping what comes next</span>
              <h1>The Thinking Architect</h1>
              <p>A community for people in architecture at every stage.</p>
              <p className="hero-support">Built around one idea: nobody should have to figure this profession out alone.</p>
              <a className="button" href="#join">Join the community <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="shell narrow">
            <span className="eyebrow">The gap after design school</span>
            <h2>Why we exist</h2>
            <div className="section-copy">
              <p>Most of us spend five years or more learning how to design. Very few of us are taught clearly what comes after.</p>
              <p>How registration works. What counts as experience. What the professional exam involves, and when to start preparing for it. Many people find out late, sometimes after the decisions that mattered most have already been made.</p>
              <p>That is not a failure of students. The gap is in how information reaches them, and in how much of it is passed on informally, to the people who happen to be near the right conversation.</p>
              <p>The Thinking Architect exists to close that gap. We bring practising architects, educators and students into the same room, and we make what is said there available to everyone who needs it.</p>
            </div>
          </div>
        </section>

        <section className="section" id="what-we-do">
          <div className="shell">
            <div className="narrow section-heading">
              <span className="eyebrow">Learn together</span>
              <h2>What we do</h2>
            </div>
            <AnimatedContent distance={100} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.08} threshold={0.1}>
              <div className="benefits">
                {benefits.map((benefit, index) => (
                  <article className="benefit" key={benefit.title}>
                    <span className="number">0{index + 1}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="section audience-section" id="who">
          <div className="shell overview-grid">
            <div>
              <span className="eyebrow">There is room for you here</span>
              <h2>Who it is for</h2>
              <ul className="audience-list">
                <li>Architecture students, wondering what comes after school</li>
                <li>Graduates and early-career architects, working out the route to registration</li>
                <li>Registered architects, who remember how hard it was to find answers and want to pass them on</li>
              </ul>
              <p className="audience-close">If you are in architecture at any stage, you belong here.</p>
            </div>
            <div className="how-card">
              <span className="eyebrow">A simple first step</span>
              <h2>How it works</h2>
              <ol className="steps-list">
                <li><strong>Join.</strong> Fill in the short form below.</li>
                <li><strong>Get the welcome resources.</strong> We send them to your email.</li>
                <li><strong>Take part.</strong> Come to sessions, ask your questions, and read what others have asked.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section join-section" id="join">
          <div className="shell narrow">
            <div className="join-copy">
              <span className="eyebrow">Come join us</span>
              <h2>Join the community</h2>
              <p className="section-copy">A few details, then you’re in. Get the welcome resources and an invite to the conversation.</p>
              <button className="button join-button" type="button" data-tally-open="9q8l55" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">
                Open the signup form <span aria-hidden="true">↗</span>
              </button>
              <p className="form-note">We’ll only use your details for community resources and updates.</p>
            </div>
            <div className="join-aside" aria-hidden="true">
              <span className="aside-mark">TTA</span>
              <p>Make room for the questions you didn’t know to ask.</p>
              <span className="aside-line" />
              <span className="aside-note">STUDENT · GRADUATE · PRACTITIONER</span>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="questions">
          <div className="shell narrow">
            <span className="eyebrow">Good to know</span>
            <h2>Questions</h2>
            <div className="faq-list">
              {questions.map(({ question, answer }) => (
                <details className="faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="shell narrow">
            <h2>Nobody should have to figure this out alone.</h2>
            <button className="button" type="button" data-tally-open="9q8l55" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Join the community <span aria-hidden="true">↗</span></button>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div>
            <p className="footer-name">The Thinking Architect</p>
            <p className="disclaimer">
              The Thinking Architect is an independent community and is not affiliated with ARCON, NIA or JBAE.
            </p>
            <p className="privacy">
              Privacy: we collect your name, email and stage so we can send you resources and plan sessions. To ask us to delete your data, write to{" "}
              <a href="mailto:hello@thethinkingarchitects.com.ng">hello@thethinkingarchitects.com.ng</a>.
            </p>
            <p className="copyright">© 2026 The Thinking Architect</p>
          </div>
          <nav className="footer-links" aria-label="Contact and social links">
            <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
            <a href="https://x.com/" aria-label="X">X</a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">LinkedIn</a>
            <a href="mailto:hello@thethinkingarchitects.com.ng">Contact</a>
          </nav>
        </div>
      </footer>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <TallyAutoOpen />
    </>
  );
}
