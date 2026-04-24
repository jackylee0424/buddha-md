import { useEffect, useMemo, useState } from 'react';
import { archiveStats, localizedContent, type Locale } from './data/siteData';
import './styles.css';

const localeOrder: Locale[] = ['zh-Hant', 'en'];
const numberFormatters: Record<Locale, Intl.NumberFormat> = {
  'zh-Hant': new Intl.NumberFormat('zh-Hant-TW'),
  en: new Intl.NumberFormat('en-US')
};

function App() {
  const [locale, setLocale] = useState<Locale>('zh-Hant');
  const [selectedSessionId, setSelectedSessionId] = useState<number>(1);

  const content = localizedContent[locale];
  const activeSession = useMemo(
    () => content.sessions.find((session) => session.id === selectedSessionId) ?? content.sessions[0],
    [content.sessions, selectedSessionId]
  );
  const formatter = numberFormatters[locale];

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.title = content.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', content.description);
    }
  }, [content]);

  return (
    <div className="app-shell">
      <div className="ink-overlay" aria-hidden="true" />
      <header className="hero scroll-panel">
        <div className="hero__toolbar">
          <p className="hero__kicker">{content.heroKicker}</p>
          <div className="language-toggle" role="group" aria-label={content.languageToggleLabel}>
            {localeOrder.map((nextLocale) => (
              <button
                key={nextLocale}
                type="button"
                className={nextLocale === locale ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
                aria-pressed={nextLocale === locale}
                onClick={() => setLocale(nextLocale)}
              >
                {content.languages[nextLocale]}
              </button>
            ))}
          </div>
        </div>

        <h1>{content.title}</h1>
        <p className="hero__subtitle">{content.subtitle}</p>
        <p className="hero__description">{content.description}</p>

        <div className="hero__meta">
          <div>
            <span>{content.statsLabels.sessions}</span>
            <strong>
              {archiveStats.sessions} {content.statsUnits.sessions}
            </strong>
          </div>
          <div>
            <span>{content.statsLabels.paragraphs}</span>
            <strong>{formatter.format(archiveStats.totalParagraphs)}</strong>
          </div>
          <div>
            <span>{content.statsLabels.chars}</span>
            <strong>{formatter.format(archiveStats.totalChars)}</strong>
          </div>
        </div>

        <a className="hero__source" href={content.sourceUrl} target="_blank" rel="noreferrer">
          {content.sourceLabel}
        </a>
      </header>

      <main className="content-grid">
        <section className="scroll-panel section-card">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{content.teachingsEyebrow}</span>
            <h2>{content.teachingsHeading}</h2>
          </div>
          <div className="teaching-grid">
            {content.featuredTeachings.map((teaching) => (
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
            <span className="section-heading__eyebrow">{content.ritualEyebrow}</span>
            <h2>{content.ritualHeading}</h2>
          </div>
          <ol className="ritual-list">
            {content.ritualSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="scroll-panel section-card section-card--sessions">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{content.sessionsEyebrow}</span>
            <h2>{content.sessionsHeading}</h2>
          </div>

          <div className="sessions-layout">
            <div className="session-selector" role="list" aria-label={content.sessionsListLabel}>
              {content.sessions.map((session) => (
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
                <p className="session-detail__eyebrow">{content.sessionDetailEyebrow}</p>
                <h3>{activeSession.title}</h3>
              </div>
              <p className="session-detail__excerpt">{activeSession.excerpt}</p>
              <dl className="session-detail__meta">
                <div>
                  <dt>{content.sessionMetaLabels.paragraphCount}</dt>
                  <dd>{formatter.format(activeSession.paragraphCount)}</dd>
                </div>
                <div>
                  <dt>{content.sessionMetaLabels.charCount}</dt>
                  <dd>{formatter.format(activeSession.charCount)}</dd>
                </div>
                <div>
                  <dt>{content.sessionMetaLabels.focus}</dt>
                  <dd>{activeSession.focus}</dd>
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
