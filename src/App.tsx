import { useEffect, useMemo, useState } from 'react';
import { localizedContent, type Locale } from './data/siteData';
import { availableLectureIds, lecturePageLocales, lecturePages } from './data/lecturePages';
import { sutraPageContent, sutraSections } from './data/sutraText';
import './styles.css';

type Route =
  | { view: 'home' }
  | { view: 'lecture'; lectureId: number }
  | { view: 'sutra' };

const localeOrder: Locale[] = ['zh-Hant', 'en'];

function parseRoute(hash: string): Route {
  const cleaned = hash.replace(/^#/, '').replace(/\/$/, '');
  const match = cleaned.match(/^\/lecture\/(\d{1,2})$/);

  if (cleaned === '/sutra') {
    return { view: 'sutra' };
  }

  if (!match) {
    return { view: 'home' };
  }

  return { view: 'lecture', lectureId: Number(match[1]) };
}

function formatLectureHash(lectureId: number) {
  return `#/lecture/${lectureId}`;
}

function formatSutraHash() {
  return '#/sutra';
}

function App() {
  const [locale, setLocale] = useState<Locale>('zh-Hant');
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  const content = localizedContent[locale];
  const lectureChrome = lecturePageLocales[locale];
  const sutraChrome = sutraPageContent[locale];
  const sutraSectionsForLocale = sutraSections.map((section) => ({
    id: section.id,
    title: locale === 'en' ? section.enTitle : section.zhTitle,
    paragraphs: locale === 'en' ? section.enParagraphs : section.zhParagraphs,
  }));
  const lecture = route.view === 'lecture' ? lecturePages[route.lectureId] : undefined;
  const lectureIsAvailable = Boolean(lecture && availableLectureIds.includes(lecture.id as (typeof availableLectureIds)[number]));
  const lectureHasEnglish = Boolean(lecture?.enTitle && lecture?.enSummary && lecture?.enFull?.length);
  const lectureTitle = lecture ? (locale === 'en' && lectureHasEnglish ? lecture.enTitle! : lecture.zhTitle) : lectureChrome.unavailableTitle;
  const lectureSummary = lecture ? (locale === 'en' && lectureHasEnglish ? lecture.enSummary! : lecture.zhSummary) : lectureChrome.unavailableBody;
  const lectureParagraphs = lecture ? (locale === 'en' && lectureHasEnglish ? lecture.enFull! : lecture.zhFull) : [];

  const sessionCards = useMemo(
    () =>
      content.sessions.map((session) => {
        const page = lecturePages[session.id];
        const isAvailable = availableLectureIds.includes(session.id as (typeof availableLectureIds)[number]);
        const cardTitle =
          locale === 'zh-Hant' && page?.zhTitle
            ? page.zhTitle
            : locale === 'en' && page?.enTitle
              ? page.enTitle
              : session.title;

        return {
          ...session,
          cardTitle,
          cardText:
            locale === 'zh-Hant' && page
              ? page.zhSummary
              : locale === 'en' && page?.enSummary
                ? page.enSummary
                : session.excerpt,
          isAvailable
        };
      }),
    [content.sessions, locale]
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = route.view === 'lecture' ? (locale === 'en' && lectureHasEnglish ? 'en' : 'zh-Hant') : content.htmlLang;

    if (route.view === 'lecture') {
      const pageTitle = lecture ? `${lectureTitle} · 金剛經講記` : `講次整理中 · 金剛經講記`;
      document.title = pageTitle;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute(
          'content',
          lecture
            ? lectureSummary
            : locale === 'en'
              ? 'All twenty-seven lecture pages are now open for reading.'
              : '目前二十七講全文頁面皆已開放閱讀。'
        );
      }
      return;
    }

    if (route.view === 'sutra') {
      document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hant';
      document.title = `${sutraChrome.pageTitle} · 金剛經講記`;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', sutraChrome.pageDescription);
      }
      return;
    }

    document.title = content.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', content.description);
    }
  }, [content, lecture, lectureHasEnglish, lectureSummary, lectureTitle, locale, route.view, sutraChrome.pageDescription, sutraChrome.pageTitle]);

  const goHome = () => {
    window.location.hash = '';
  };

  const renderHome = () => (
    <>
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

        <h1 className={locale === 'zh-Hant' ? 'hero__title hero__title--han' : 'hero__title hero__title--latin'}>
          {content.title}
        </h1>
        <p className="hero__subtitle">{content.subtitle}</p>
        <p className="hero__description">{content.description}</p>

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

        <section className="scroll-panel section-card section-card--sutra">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{sutraChrome.homeEyebrow}</span>
            <h2>{sutraChrome.homeHeading}</h2>
            <p className="section-heading__description">{sutraChrome.homeDescription}</p>
          </div>
          <div className="sutra-home__content">
            <div className="sutra-home__preview">
              {sutraSections.slice(0, 2).map((section) => (
                <article key={section.id} className="sutra-home__preview-card">
                  <h3>{locale === 'en' ? section.enTitle : section.zhTitle}</h3>
                  <p>{locale === 'en' ? section.enParagraphs[0] : section.zhParagraphs[0]}</p>
                </article>
              ))}
            </div>
            <div className="sutra-home__actions">
              <a className="detail-link" href={formatSutraHash()}>
                {sutraChrome.ctaLabel}
              </a>
              <a className="hero__source sutra-home__source" href={sutraChrome.sourceUrl} target="_blank" rel="noreferrer">
                {sutraChrome.sourceLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="scroll-panel section-card section-card--sessions">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{lectureChrome.archiveKicker}</span>
            <h2>{lectureChrome.archiveHeading}</h2>
            <p className="section-heading__description">{lectureChrome.archiveDescription}</p>
          </div>

          <div className="lecture-grid" role="list" aria-label={content.sessionsListLabel}>
            {sessionCards.map((session) => (
              <article key={session.id} className="lecture-card" role="listitem">
                <div className="lecture-card__header">
                  <div>
                    <p className="lecture-card__eyebrow">{content.sessionDetailEyebrow}</p>
                    <h3 className="lecture-card__title">{session.cardTitle}</h3>
                  </div>
                  {session.isAvailable ? (
                    <a
                      className="lecture-card__link lecture-card__link--header"
                      href={formatLectureHash(session.id)}
                      aria-label={`${lectureChrome.readFullText} ${session.cardTitle}`}
                    >
                      {lectureChrome.readFullText}
                    </a>
                  ) : (
                    <span className="lecture-card__status">{lectureChrome.pendingLabel}</span>
                  )}
                </div>

                <p className="lecture-card__summary">{session.cardText}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );

  const renderSutra = () => (
    <main className="content-grid content-grid--detail">
      <section className="scroll-panel detail-hero">
        <div className="hero__toolbar hero__toolbar--detail">
          <p className="hero__kicker">{sutraChrome.pageEyebrow}</p>
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

        <p className="detail-note">{sutraChrome.sourceLabel}</p>
        <h1 className={locale === 'en' ? 'hero__title hero__title--latin' : 'hero__title hero__title--han'}>{sutraChrome.pageTitle}</h1>
        <p className="hero__description">{sutraChrome.pageDescription}</p>

        <div className="detail-actions">
          <button type="button" className="detail-link detail-link--button" onClick={goHome}>
            {lectureChrome.backToIndex}
          </button>
          <a className="detail-link" href={sutraChrome.sourceUrl} target="_blank" rel="noreferrer">
            {sutraChrome.sourceLabel}
          </a>
        </div>
      </section>

      <article className="scroll-panel section-card lecture-detail sutra-detail">
        <div className="section-heading">
          <span className="section-heading__eyebrow">{sutraChrome.introTitle}</span>
          <h2>{sutraChrome.pageTitle}</h2>
        </div>
        <div className="lecture-detail__body sutra-detail__body">
          {sutraChrome.introParagraphs.map((paragraph, index) => (
            <p key={`sutra-intro-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>

      <article className="scroll-panel section-card lecture-detail sutra-detail">
        <div className="lecture-detail__body sutra-sections">
          {sutraSectionsForLocale.map((section) => (
            <section key={section.id} className="sutra-section">
              <div className="section-heading section-heading--compact">
                <span className="section-heading__eyebrow">{locale === 'en' ? `Section ${section.id}` : `第 ${String(section.id).padStart(2, '0')} 段`}</span>
                <h2>{section.title}</h2>
              </div>
              <div className="lecture-detail__body sutra-detail__body">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`sutra-${section.id}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );

  const renderLecture = () => (
    <main className="content-grid content-grid--detail">
      <section className="scroll-panel detail-hero">
        <div className="hero__toolbar hero__toolbar--detail">
          <p className="hero__kicker">{lectureChrome.readingLabel}</p>
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

        <p className="detail-note">{lecture ? (locale === 'en' && lectureHasEnglish ? lectureChrome.chromeNoteReady : lectureChrome.chromeNote) : lectureChrome.chromeNote}</p>
        <h1 className={locale === 'en' && lectureHasEnglish ? 'hero__title hero__title--latin' : 'hero__title hero__title--han'}>{lectureTitle}</h1>
        <p className="hero__description">{lectureSummary}</p>

        <div className="detail-actions">
          <button type="button" className="detail-link detail-link--button" onClick={goHome}>
            {lectureChrome.backToIndex}
          </button>
          <span className="detail-source">{lectureChrome.sourceLabel}</span>
        </div>
      </section>

      {lectureIsAvailable && lecture ? (
        <article className="scroll-panel section-card lecture-detail">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{locale === 'en' && lectureHasEnglish ? lectureChrome.fullTextReadyEnglish : lectureChrome.fullTextReady}</span>
            <h2>{lectureTitle}</h2>
          </div>
          <div className="lecture-detail__body">
            {lectureParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ) : (
        <section className="scroll-panel section-card lecture-unavailable">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{lectureChrome.pendingLabel}</span>
            <h2>{lectureChrome.unavailableTitle}</h2>
          </div>
          <p>{lectureChrome.unavailableBody}</p>
          <button type="button" className="detail-link detail-link--button" onClick={goHome}>
            {lectureChrome.unavailableAction}
          </button>
        </section>
      )}
    </main>
  );

  return (
    <div className="app-shell">
      <div className="ink-overlay" aria-hidden="true" />
      {route.view === 'lecture' ? renderLecture() : route.view === 'sutra' ? renderSutra() : renderHome()}
    </div>
  );
}

export default App;
