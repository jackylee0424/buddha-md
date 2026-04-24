import { useMemo, useState } from 'react';
import { featuredTeachings, ritualSteps, sessions, siteMeta } from './data/siteData';
import './styles.css';

const numberFormatter = new Intl.NumberFormat('zh-Hant-TW');

function App() {
  const [selectedSessionId, setSelectedSessionId] = useState<number>(1);

  const activeSession = useMemo(
    () => sessions.find((session) => session.id === selectedSessionId) ?? sessions[0],
    [selectedSessionId]
  );

  return (
    <div className="app-shell">
      <div className="ink-overlay" aria-hidden="true" />
      <header className="hero scroll-panel">
        <p className="hero__kicker">般若 · 修行 · 彼岸</p>
        <h1>{siteMeta.title}</h1>
        <p className="hero__subtitle">{siteMeta.subtitle}</p>
        <p className="hero__description">{siteMeta.description}</p>

        <div className="hero__meta">
          <div>
            <span>藏錄</span>
            <strong>{siteMeta.stats.sessions} 講</strong>
          </div>
          <div>
            <span>段落</span>
            <strong>{numberFormatter.format(siteMeta.stats.totalParagraphs)}</strong>
          </div>
          <div>
            <span>字數</span>
            <strong>{numberFormatter.format(siteMeta.stats.totalChars)}</strong>
          </div>
        </div>

        <a className="hero__source" href={siteMeta.sourceUrl} target="_blank" rel="noreferrer">
          {siteMeta.sourceLabel}
        </a>
      </header>

      <main className="content-grid">
        <section className="scroll-panel section-card">
          <div className="section-heading">
            <span className="section-heading__eyebrow">法義三門</span>
            <h2>古意經藏之綱領</h2>
          </div>
          <div className="teaching-grid">
            {featuredTeachings.map((teaching) => (
              <article key={teaching.title} className="teaching-card">
                <div className="teaching-card__seal" aria-hidden="true">
                  ☸
                </div>
                <h3>{teaching.title}</h3>
                <p>{teaching.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-panel section-card section-card--ritual">
          <div className="section-heading">
            <span className="section-heading__eyebrow">閱藏次第</span>
            <h2>觀照與實修</h2>
          </div>
          <ol className="ritual-list">
            {ritualSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="scroll-panel section-card section-card--sessions">
          <div className="section-heading">
            <span className="section-heading__eyebrow">廿七講總覽</span>
            <h2>逐講選讀</h2>
          </div>

          <div className="sessions-layout">
            <div className="session-selector" role="list" aria-label="講次列表">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  type="button"
                  className={session.id === activeSession.id ? 'session-chip session-chip--active' : 'session-chip'}
                  onClick={() => setSelectedSessionId(session.id)}
                >
                  {session.title}
                </button>
              ))}
            </div>

            <article className="session-detail">
              <div className="session-detail__header">
                <p className="session-detail__eyebrow">卷軸摘錄</p>
                <h3>{activeSession.title}</h3>
              </div>
              <p className="session-detail__excerpt">{activeSession.excerpt}</p>
              <dl className="session-detail__meta">
                <div>
                  <dt>段落數</dt>
                  <dd>{numberFormatter.format(activeSession.paragraphCount)}</dd>
                </div>
                <div>
                  <dt>字數</dt>
                  <dd>{numberFormatter.format(activeSession.charCount)}</dd>
                </div>
                <div>
                  <dt>旨趣</dt>
                  <dd>以經解心，以行證義</dd>
                </div>
              </dl>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
