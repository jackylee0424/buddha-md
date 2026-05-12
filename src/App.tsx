import { useEffect, useMemo, useState } from 'react';
import { libraryLocales } from './data/libraryData';
import { localizedContent, type Locale } from './data/siteData';
import { availableLectureIds, lecturePageLocales, lecturePages } from './data/lecturePages';
import { sutraPageContent, sutraSections } from './data/sutraText';
import {
  platformAvailableLectureIds,
  platformLecturePageLocales,
  platformLecturePages,
  platformLocalizedContent
} from './data/platformData';
import { loadPlatformTranscript } from './data/platformTranscripts';
import { platformSutraPageContent, platformSutraSections } from './data/platformSutraText';
import './styles.css';

type Route =
  | { view: 'home' }
  | { view: 'diamond' }
  | { view: 'diamondLecture'; lectureId: number }
  | { view: 'diamondSutra' }
  | { view: 'platform' }
  | { view: 'platformLecture'; lectureId: number }
  | { view: 'platformSutra' };

const localeOrder: Locale[] = ['zh-Hant', 'en'];

function parseRoute(hash: string): Route {
  const cleaned = hash.replace(/^#/, '').replace(/\/$/, '');

  if (cleaned === '/diamond') return { view: 'diamond' };
  if (cleaned === '/platform') return { view: 'platform' };
  if (cleaned === '/sutra' || cleaned === '/diamond/sutra') return { view: 'diamondSutra' };
  if (cleaned === '/platform/sutra') return { view: 'platformSutra' };

  const legacyLectureMatch = cleaned.match(/^\/lecture\/(\d{1,3})$/);
  if (legacyLectureMatch) return { view: 'diamondLecture', lectureId: Number(legacyLectureMatch[1]) };

  const diamondLectureMatch = cleaned.match(/^\/diamond\/lecture\/(\d{1,3})$/);
  if (diamondLectureMatch) return { view: 'diamondLecture', lectureId: Number(diamondLectureMatch[1]) };

  const platformLectureMatch = cleaned.match(/^\/platform\/lecture\/(\d{1,3})$/);
  if (platformLectureMatch) return { view: 'platformLecture', lectureId: Number(platformLectureMatch[1]) };

  return { view: 'home' };
}

function formatDiamondLectureHash(lectureId: number) {
  return `#/diamond/lecture/${lectureId}`;
}

function formatPlatformLectureHash(lectureId: number) {
  return `#/platform/lecture/${lectureId}`;
}

function App() {
  const [locale, setLocale] = useState<Locale>('zh-Hant');
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));
  const [platformTranscriptState, setPlatformTranscriptState] = useState<{ id: number; paragraphs: string[] } | null>(null);

  const libraryContent = libraryLocales[locale];
  const diamondContent = localizedContent[locale];
  const diamondLectureChrome = lecturePageLocales[locale];
  const diamondSutraChrome = sutraPageContent[locale];
  const platformContent = platformLocalizedContent[locale];
  const platformLectureChrome = platformLecturePageLocales[locale];
  const platformSutraChrome = platformSutraPageContent[locale];

  const diamondSutraSectionsForLocale = sutraSections.map((section) => ({
    id: section.id,
    title: locale === 'en' ? section.enTitle : section.zhTitle,
    paragraphs: locale === 'en' ? section.enParagraphs : section.zhParagraphs,
  }));

  const platformSutraSectionsForLocale = platformSutraSections.map((section) => ({
    id: section.id,
    title: locale === 'en' ? section.enTitle : section.zhTitle,
    paragraphs: locale === 'en' ? section.enParagraphs : section.zhParagraphs,
  }));

  const diamondLecture = route.view === 'diamondLecture' ? lecturePages[route.lectureId] : undefined;
  const diamondLectureIsAvailable = Boolean(
    diamondLecture && availableLectureIds.includes(diamondLecture.id as (typeof availableLectureIds)[number])
  );
  const diamondLectureHasEnglish = Boolean(diamondLecture?.enTitle && diamondLecture?.enSummary && diamondLecture?.enFull?.length);
  const diamondLectureTitle = diamondLecture
    ? locale === 'en' && diamondLectureHasEnglish
      ? diamondLecture.enTitle!
      : diamondLecture.zhTitle
    : diamondLectureChrome.unavailableTitle;
  const diamondLectureSummary = diamondLecture
    ? locale === 'en' && diamondLectureHasEnglish
      ? diamondLecture.enSummary!
      : diamondLecture.zhSummary
    : diamondLectureChrome.unavailableBody;
  const diamondLectureParagraphs = diamondLecture
    ? locale === 'en' && diamondLectureHasEnglish
      ? diamondLecture.enFull!
      : diamondLecture.zhFull
    : [];

  const platformLecture = route.view === 'platformLecture' ? platformLecturePages[route.lectureId] : undefined;
  const platformLectureIsAvailable = Boolean(
    platformLecture && platformAvailableLectureIds.includes(platformLecture.id as (typeof platformAvailableLectureIds)[number])
  );
  const platformLectureHasEnglish = Boolean(platformLecture?.enTitle && platformLecture?.enSummary && platformLecture?.enFull?.length);
  const platformLectureTitle = platformLecture
    ? locale === 'en' && platformLectureHasEnglish
      ? platformLecture.enTitle!
      : platformLecture.zhTitle
    : platformLectureChrome.unavailableTitle;
  const platformLectureSummary = platformLecture
    ? locale === 'en' && platformLectureHasEnglish
      ? platformLecture.enSummary!
      : platformLecture.zhSummary
    : platformLectureChrome.unavailableBody;
  const platformLectureParagraphs = platformLecture
    ? locale === 'en' && platformLectureHasEnglish
      ? platformLecture.enFull!
      : platformTranscriptState?.id === platformLecture.id
        ? platformTranscriptState.paragraphs
        : platformLecture.zhFull ?? []
    : [];

  const diamondSessionCards = useMemo(
    () =>
      diamondContent.sessions.map((session) => {
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
    [diamondContent.sessions, locale]
  );

  const platformSessionCards = useMemo(
    () =>
      platformContent.sessions.map((session) => {
        const page = platformLecturePages[session.id];
        const isAvailable = platformAvailableLectureIds.includes(session.id as (typeof platformAvailableLectureIds)[number]);
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
    [platformContent.sessions, locale]
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route.view !== 'platformLecture' || !platformLecture || !platformLectureIsAvailable) {
      setPlatformTranscriptState(null);
      return;
    }

    if (locale === 'en' && platformLectureHasEnglish) {
      return;
    }

    let isCancelled = false;
    const lectureId = platformLecture.id;
    setPlatformTranscriptState((current) => (current?.id === lectureId ? current : null));

    loadPlatformTranscript(lectureId).then((paragraphs) => {
      if (!isCancelled) {
        setPlatformTranscriptState({ id: lectureId, paragraphs });
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [locale, platformLecture, platformLectureHasEnglish, platformLectureIsAvailable, route.view]);

  useEffect(() => {
    const descriptionTag = document.querySelector('meta[name="description"]');

    if (route.view === 'diamondLecture') {
      document.documentElement.lang = locale === 'en' && diamondLectureHasEnglish ? 'en' : 'zh-Hant';
      document.title = diamondLecture ? `${diamondLectureTitle} · 金剛經講記` : `講次整理中 · 金剛經講記`;
      descriptionTag?.setAttribute('content', diamondLecture ? diamondLectureSummary : diamondLectureChrome.unavailableBody);
      return;
    }

    if (route.view === 'platformLecture') {
      document.documentElement.lang = locale === 'en' && platformLectureHasEnglish ? 'en' : 'zh-Hant';
      document.title = platformLecture ? `${platformLectureTitle} · 六祖壇經講記` : `講次整理中 · 六祖壇經講記`;
      descriptionTag?.setAttribute('content', platformLecture ? platformLectureSummary : platformLectureChrome.unavailableBody);
      return;
    }

    if (route.view === 'diamondSutra') {
      document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hant';
      document.title = `${diamondSutraChrome.pageTitle} · 金剛經講記`;
      descriptionTag?.setAttribute('content', diamondSutraChrome.pageDescription);
      return;
    }

    if (route.view === 'platformSutra') {
      document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hant';
      document.title = `${platformSutraChrome.pageTitle} · 六祖壇經講記`;
      descriptionTag?.setAttribute('content', platformSutraChrome.pageDescription);
      return;
    }

    if (route.view === 'diamond') {
      document.documentElement.lang = diamondContent.htmlLang;
      document.title = diamondContent.title;
      descriptionTag?.setAttribute('content', diamondContent.description);
      return;
    }

    if (route.view === 'platform') {
      document.documentElement.lang = platformContent.htmlLang;
      document.title = platformContent.title;
      descriptionTag?.setAttribute('content', platformContent.description);
      return;
    }

    document.documentElement.lang = libraryContent.htmlLang;
    document.title = libraryContent.title;
    descriptionTag?.setAttribute('content', libraryContent.description);
  }, [
    diamondContent,
    diamondLecture,
    diamondLectureChrome.unavailableBody,
    diamondLectureHasEnglish,
    diamondLectureSummary,
    diamondLectureTitle,
    diamondSutraChrome,
    libraryContent,
    locale,
    platformContent,
    platformLecture,
    platformLectureChrome.unavailableBody,
    platformLectureHasEnglish,
    platformLectureSummary,
    platformLectureTitle,
    platformSutraChrome,
    route.view
  ]);

  const goHome = () => {
    window.location.hash = '';
  };

  const goDiamond = () => {
    window.location.hash = '/diamond';
  };

  const goPlatform = () => {
    window.location.hash = '/platform';
  };

  const renderLanguageToggle = (ariaLabel: string, labels: Record<Locale, string>) => (
    <div className="language-toggle" role="group" aria-label={ariaLabel}>
      {localeOrder.map((nextLocale) => (
        <button
          key={nextLocale}
          type="button"
          className={nextLocale === locale ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
          aria-pressed={nextLocale === locale}
          onClick={() => setLocale(nextLocale)}
        >
          {labels[nextLocale]}
        </button>
      ))}
    </div>
  );

  const renderLanding = () => (
    <>
      <header className="hero scroll-panel">
        <div className="hero__toolbar">
          <p className="hero__kicker">{libraryContent.heroKicker}</p>
          {renderLanguageToggle(libraryContent.languageToggleLabel, libraryContent.languages)}
        </div>
        <h1 className={locale === 'zh-Hant' ? 'hero__title hero__title--han' : 'hero__title hero__title--latin'}>{libraryContent.title}</h1>
        <p className="hero__subtitle">{libraryContent.subtitle}</p>
        <p className="hero__description">{libraryContent.description}</p>
      </header>

      <main className="content-grid">
        <section className="scroll-panel section-card">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{libraryContent.entriesHeading}</span>
            <h2>{libraryContent.entriesHeading}</h2>
            <p className="section-heading__description">{libraryContent.entriesDescription}</p>
          </div>
          <div className="book-grid">
            {libraryContent.books.map((book) => (
              <article key={book.key} className="book-card">
                <div className="teaching-card__seal" aria-hidden="true">卷</div>
                <p className="book-card__kicker">{book.subtitle}</p>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <div className="book-card__actions">
                  <a className="detail-link" href={book.href}>{book.ctaLabel}</a>
                  <a className="hero__source sutra-home__source" href={book.sourceUrl} target="_blank" rel="noreferrer">{book.sourceLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-panel section-card section-card--ritual">
          <div className="section-heading">
            <span className="section-heading__eyebrow">TODO</span>
            <h2>{libraryContent.progressHeading}</h2>
          </div>
          <ol className="ritual-list progress-list">
            {libraryContent.progressItems.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>
      </main>
    </>
  );

  const renderDiamondBook = () => (
    <>
      <header className="hero scroll-panel">
        <div className="hero__toolbar">
          <p className="hero__kicker">{diamondContent.heroKicker}</p>
          {renderLanguageToggle(diamondContent.languageToggleLabel, diamondContent.languages)}
        </div>
        <h1 className={locale === 'zh-Hant' ? 'hero__title hero__title--han' : 'hero__title hero__title--latin'}>{diamondContent.title}</h1>
        <p className="hero__subtitle">{diamondContent.subtitle}</p>
        <p className="hero__description">{diamondContent.description}</p>
        <div className="detail-actions detail-actions--hero">
          <button type="button" className="detail-link detail-link--button" onClick={goHome}>{locale === 'en' ? 'Back to library' : '返回典藏首頁'}</button>
        </div>
      </header>

      <main className="content-grid">
        <section className="scroll-panel section-card">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{diamondContent.teachingsEyebrow}</span>
            <h2>{diamondContent.teachingsHeading}</h2>
          </div>
          <div className="teaching-grid">
            {diamondContent.featuredTeachings.map((teaching) => (
              <article key={teaching.title} className="teaching-card">
                <div className="teaching-card__seal" aria-hidden="true">☸</div>
                <h3>{teaching.title}</h3>
                <p>{teaching.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-panel section-card section-card--ritual">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{diamondContent.ritualEyebrow}</span>
            <h2>{diamondContent.ritualHeading}</h2>
                      <a className="hero__source" href={diamondContent.sourceUrl} target="_blank" rel="noreferrer">{diamondContent.sourceLabel}</a>

          </div>
          <ol className="ritual-list">{diamondContent.ritualSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        {renderSutraHome({
          chrome: diamondSutraChrome,
          sections: sutraSections.slice(0, 2).map((section) => ({
            id: section.id,
            title: locale === 'en' ? section.enTitle : section.zhTitle,
            paragraph: locale === 'en' ? section.enParagraphs[0] : section.zhParagraphs[0]
          })),
          href: '#/diamond/sutra'
        })}

        {renderLectureArchive({
          chrome: diamondLectureChrome,
          sessionsListLabel: diamondContent.sessionsListLabel,
          sessionDetailEyebrow: diamondContent.sessionDetailEyebrow,
          cards: diamondSessionCards,
          formatHash: formatDiamondLectureHash
        })}
      </main>
    </>
  );

  const renderPlatformBook = () => (
    <>
      <header className="hero scroll-panel">
        <div className="hero__toolbar">
          <p className="hero__kicker">{platformContent.heroKicker}</p>
          {renderLanguageToggle(platformContent.languageToggleLabel, platformContent.languages)}
        </div>
        <h1 className={locale === 'zh-Hant' ? 'hero__title hero__title--han' : 'hero__title hero__title--latin'}>{platformContent.title}</h1>
        <p className="hero__subtitle">{platformContent.subtitle}</p>
        <p className="hero__description">{platformContent.description}</p>
        <div className="detail-actions detail-actions--hero">
          <button type="button" className="detail-link detail-link--button" onClick={goHome}>{locale === 'en' ? 'Back to library' : '返回典藏首頁'}</button>
        </div>
      </header>

      <main className="content-grid">
        <section className="scroll-panel section-card">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{platformContent.teachingsEyebrow}</span>
            <h2>{platformContent.teachingsHeading}</h2>
          </div>
          <div className="teaching-grid">
            {platformContent.featuredTeachings.map((teaching) => (
              <article key={teaching.title} className="teaching-card">
                <div className="teaching-card__seal" aria-hidden="true">禪</div>
                <h3>{teaching.title}</h3>
                <p>{teaching.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-panel section-card section-card--ritual">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{platformContent.ritualEyebrow}</span>
            <h2>{platformContent.ritualHeading}</h2>
                      <a className="hero__source" href={platformContent.sourceUrl} target="_blank" rel="noreferrer">{platformContent.sourceLabel}</a>

          </div>
          <ol className="ritual-list">{platformContent.ritualSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        {renderSutraHome({
          chrome: platformSutraChrome,
          sections: platformSutraSections.slice(0, 2).map((section) => ({
            id: section.id,
            title: locale === 'en' ? section.enTitle : section.zhTitle,
            paragraph: locale === 'en' ? section.enParagraphs[0] : section.zhParagraphs[0]
          })),
          href: '#/platform/sutra'
        })}

        <section className="scroll-panel section-card section-card--ritual">
          <div className="section-heading">
            <span className="section-heading__eyebrow">TODO</span>
            <h2>{locale === 'en' ? 'Platform Sutra rollout progress' : '六祖壇經整理進度'}</h2>
            <p className="section-heading__description">
              {locale === 'en'
                ? 'A visible checklist keeps the source-text refactor and transcript rollout auditable as later lecture batches are edited.'
                : '此清單讓原典、英譯與逐講整理進度清楚可查，後續可逐批更新。'}
            </p>
          </div>
          <ol className="ritual-list progress-list">
            {(locale === 'en'
              ? ['Playlist source wired', 'Traditional Chinese source-text route created', 'English source-text route created', 'Lectures 001–103 Traditional Chinese transcripts live', 'Preview cards now carry short summaries']
              : ['講記 playlist 已接入', '繁體中文原典頁已建立', '英文譯文閱讀模式已建立', '第 001–103 講繁體中文逐字稿已上線', '預覽卡已加入短摘要']).map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        {renderLectureArchive({
          chrome: platformLectureChrome,
          sessionsListLabel: platformContent.sessionsListLabel,
          sessionDetailEyebrow: platformContent.sessionDetailEyebrow,
          cards: platformSessionCards,
          formatHash: formatPlatformLectureHash
        })}
      </main>
    </>
  );

  const renderSutraHome = ({
    chrome,
    sections,
    href
  }: {
    chrome: typeof diamondSutraChrome;
    sections: Array<{ id: number; title: string; paragraph: string }>;
    href: string;
  }) => (
    <section className="scroll-panel section-card section-card--sutra">
      <div className="section-heading">
        <span className="section-heading__eyebrow">{chrome.homeEyebrow}</span>
        <h2>{chrome.homeHeading}</h2>
        <p className="section-heading__description">{chrome.homeDescription}</p>
      </div>
      <div className="sutra-home__content">
        <div className="sutra-home__preview">
          {sections.map((section) => (
            <article key={section.id} className="sutra-home__preview-card">
              <h3>{section.title}</h3>
              <p>{section.paragraph}</p>
            </article>
          ))}
        </div>
        <div className="sutra-home__actions">
          <a className="detail-link" href={href}>{chrome.ctaLabel}</a>
          <a className="hero__source sutra-home__source" href={chrome.sourceUrl} target="_blank" rel="noreferrer">{chrome.sourceLabel}</a>
        </div>
      </div>
    </section>
  );

  const renderLectureArchive = ({
    chrome,
    sessionsListLabel,
    sessionDetailEyebrow,
    cards,
    formatHash
  }: {
    chrome: typeof diamondLectureChrome;
    sessionsListLabel: string;
    sessionDetailEyebrow: string;
    cards: Array<{ id: number; cardTitle: string; cardText: string; isAvailable: boolean }>;
    formatHash: (lectureId: number) => string;
  }) => (
    <section className="scroll-panel section-card section-card--sessions">
      <div className="section-heading">
        <span className="section-heading__eyebrow">{chrome.archiveKicker}</span>
        <h2>{chrome.archiveHeading}</h2>
        <p className="section-heading__description">{chrome.archiveDescription}</p>
      </div>
      <div className="lecture-grid" role="list" aria-label={sessionsListLabel}>
        {cards.map((session) => (
          <article key={session.id} className="lecture-card" role="listitem">
            <div className="lecture-card__header">
              <div>
                <p className="lecture-card__eyebrow">{sessionDetailEyebrow}</p>
                <h3 className="lecture-card__title">{session.cardTitle}</h3>
              </div>
              {session.isAvailable ? (
                <a className="lecture-card__link lecture-card__link--header" href={formatHash(session.id)} aria-label={`${chrome.readFullText} ${session.cardTitle}`}>
                  {chrome.readFullText}
                </a>
              ) : (
                <span className="lecture-card__status">{chrome.pendingLabel}</span>
              )}
            </div>
            <p className="lecture-card__summary">{session.cardText}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const renderTextPage = ({
    chrome,
    sections,
    backToIndex,
    onBack
  }: {
    chrome: typeof diamondSutraChrome;
    sections: Array<{ id: number; title: string; paragraphs: string[] }>;
    backToIndex: string;
    onBack: () => void;
  }) => (
    <main className="content-grid content-grid--detail">
      <section className="scroll-panel detail-hero">
        <div className="hero__toolbar hero__toolbar--detail">
          <p className="hero__kicker">{chrome.pageEyebrow}</p>
          {renderLanguageToggle(libraryContent.languageToggleLabel, libraryContent.languages)}
        </div>
        <p className="detail-note">{chrome.sourceLabel}</p>
        <h1 className={locale === 'en' ? 'hero__title hero__title--latin' : 'hero__title hero__title--han'}>{chrome.pageTitle}</h1>
        <p className="hero__description">{chrome.pageDescription}</p>
        <div className="detail-actions">
          <button type="button" className="detail-link detail-link--button" onClick={onBack}>{backToIndex}</button>
          <a className="detail-link" href={chrome.sourceUrl} target="_blank" rel="noreferrer">{chrome.sourceLabel}</a>
        </div>
      </section>

      <article className="scroll-panel section-card lecture-detail sutra-detail">
        <div className="section-heading">
          <span className="section-heading__eyebrow">{chrome.introTitle}</span>
          <h2>{chrome.pageTitle}</h2>
        </div>
        <div className="lecture-detail__body sutra-detail__body">
          {chrome.introParagraphs.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}
        </div>
      </article>

      <article className="scroll-panel section-card lecture-detail sutra-detail">
        <div className="lecture-detail__body sutra-sections">
          {sections.map((section) => (
            <section key={section.id} className="sutra-section">
              <div className="section-heading section-heading--compact">
                <span className="section-heading__eyebrow">{locale === 'en' ? `Section ${section.id}` : `第 ${String(section.id).padStart(2, '0')} 段`}</span>
                <h2>{section.title}</h2>
              </div>
              <div className="lecture-detail__body sutra-detail__body">
                {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`section-${section.id}-${paragraphIndex}`}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );

  const renderLecturePage = ({
    lecture,
    lectureIsAvailable,
    lectureHasEnglish,
    lectureTitle,
    lectureSummary,
    lectureParagraphs,
    chrome,
    onBack
  }: {
    lecture: typeof diamondLecture | typeof platformLecture;
    lectureIsAvailable: boolean;
    lectureHasEnglish: boolean;
    lectureTitle: string;
    lectureSummary: string;
    lectureParagraphs: string[];
    chrome: typeof diamondLectureChrome;
    onBack: () => void;
  }) => (
    <main className="content-grid content-grid--detail">
      <section className="scroll-panel detail-hero">
        <div className="hero__toolbar hero__toolbar--detail">
          <p className="hero__kicker">{chrome.readingLabel}</p>
          {renderLanguageToggle(libraryContent.languageToggleLabel, libraryContent.languages)}
        </div>
        <p className="detail-note">{lecture ? (locale === 'en' && lectureHasEnglish ? chrome.chromeNoteReady : chrome.chromeNote) : chrome.chromeNote}</p>
        <h1 className={locale === 'en' && lectureHasEnglish ? 'hero__title hero__title--latin' : 'hero__title hero__title--han'}>{lectureTitle}</h1>
        <p className="hero__description">{lectureSummary}</p>
        <div className="detail-actions">
          <button type="button" className="detail-link detail-link--button" onClick={onBack}>{chrome.backToIndex}</button>
          <span className="detail-source">{chrome.sourceLabel}</span>
        </div>
      </section>

      {lectureIsAvailable && lecture ? (
        <article className="scroll-panel section-card lecture-detail">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{locale === 'en' && lectureHasEnglish ? chrome.fullTextReadyEnglish : chrome.fullTextReady}</span>
            <h2>{lectureTitle}</h2>
          </div>
          <div className="lecture-detail__body">
            {lectureParagraphs.length > 0
              ? lectureParagraphs.map((paragraph, index) => <p key={`lecture-paragraph-${index}`}>{paragraph}</p>)
              : <p>{locale === 'en' ? 'Loading Traditional Chinese transcript…' : '逐字稿載入中…'}</p>}
          </div>
        </article>
      ) : (
        <section className="scroll-panel section-card lecture-unavailable">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{chrome.pendingLabel}</span>
            <h2>{chrome.unavailableTitle}</h2>
          </div>
          <p>{chrome.unavailableBody}</p>
          <button type="button" className="detail-link detail-link--button" onClick={onBack}>{chrome.unavailableAction}</button>
        </section>
      )}
    </main>
  );

  return (
    <div className="app-shell">
      <div className="ink-overlay" aria-hidden="true" />
      {route.view === 'diamond'
        ? renderDiamondBook()
        : route.view === 'diamondLecture'
          ? renderLecturePage({
              lecture: diamondLecture,
              lectureIsAvailable: diamondLectureIsAvailable,
              lectureHasEnglish: diamondLectureHasEnglish,
              lectureTitle: diamondLectureTitle,
              lectureSummary: diamondLectureSummary,
              lectureParagraphs: diamondLectureParagraphs,
              chrome: diamondLectureChrome,
              onBack: goDiamond
            })
          : route.view === 'diamondSutra'
            ? renderTextPage({ chrome: diamondSutraChrome, sections: diamondSutraSectionsForLocale, backToIndex: diamondLectureChrome.backToIndex, onBack: goDiamond })
            : route.view === 'platform'
              ? renderPlatformBook()
              : route.view === 'platformLecture'
                ? renderLecturePage({
                    lecture: platformLecture,
                    lectureIsAvailable: platformLectureIsAvailable,
                    lectureHasEnglish: platformLectureHasEnglish,
                    lectureTitle: platformLectureTitle,
                    lectureSummary: platformLectureSummary,
                    lectureParagraphs: platformLectureParagraphs,
                    chrome: platformLectureChrome,
                    onBack: goPlatform
                  })
                : route.view === 'platformSutra'
                  ? renderTextPage({ chrome: platformSutraChrome, sections: platformSutraSectionsForLocale, backToIndex: platformLectureChrome.backToIndex, onBack: goPlatform })
                  : renderLanding()}
    </div>
  );
}

export default App;
