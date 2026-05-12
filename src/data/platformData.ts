import type { Locale } from './siteData';

export type PlatformLecturePage = {
  id: number;
  zhTitle: string;
  zhSummary: string;
  zhFull: string[];
  enTitle?: string;
  enSummary?: string;
  enFull?: string[];
};

type PlatformSessionRecord = {
  id: number;
  title: string;
  excerpt: string;
  focus: string;
};

type PlatformContent = {
  htmlLang: string;
  title: string;
  subtitle: string;
  description: string;
  heroKicker: string;
  sourceLabel: string;
  sourceUrl: string;
  languageToggleLabel: string;
  languages: Record<Locale, string>;
  teachingsEyebrow: string;
  teachingsHeading: string;
  featuredTeachings: Array<{ title: string; body: string }>;
  ritualEyebrow: string;
  ritualHeading: string;
  ritualSteps: string[];
  sessionsListLabel: string;
  sessionDetailEyebrow: string;
  sessions: PlatformSessionRecord[];
};

export const platformAvailableLectureIds = [1, 2, 3] as const;
export const platformEnglishLectureIds = [1, 2, 3] as const;

const zhHighlights: Record<number, Pick<PlatformSessionRecord, 'title' | 'excerpt' | 'focus'>> = {
  1: {
    title: '六祖壇經講說之一：行由、見性與佛性無南北',
    excerpt: '第一講從補錄因緣與六祖身份說起，說明禪宗法脈、惠能求法的行由，以及「佛性本無南北」的核心精神。講記把《壇經》開端放回修行現場：不只是知道祖師故事，而是要從故事中看見自心本具清淨佛性。',
    focus: '行由與見性'
  },
  2: {
    title: '六祖壇經講說之二：般若、彼岸與不在口念',
    excerpt: '第二講承接般若與波羅蜜的義理，提醒讀者不要把音譯、名相或口頭空談誤認為修行本身。真正的般若要在心行上相應，從迷轉悟，從此岸到彼岸。',
    focus: '般若實修'
  },
  3: {
    title: '六祖壇經講說之三：師徒因緣、讚毀與調伏自心',
    excerpt: '第三講從師徒相處談起，說明受讚歎、被嫌責都要回到自心反省。講記把壇經法義落在日常修行：不因外境稱譏動搖，而以謙下、覺照與改過承接教法。',
    focus: '調伏自心'
  }
};

const enHighlights: Record<number, Pick<PlatformSessionRecord, 'title' | 'excerpt' | 'focus'>> = {
  1: {
    title: 'Platform Sutra Lecture 1: Biography, Seeing the Nature, and Buddha-Nature Beyond South and North',
    excerpt: 'The first lecture opens with the circumstances of re-recording the series, introduces the Sixth Patriarch and the Chan lineage, and frames Huineng’s story as a direct teaching on seeing one’s own originally pure nature.',
    focus: 'Biography and seeing the nature'
  },
  2: {
    title: 'Platform Sutra Lecture 2: Prajna, Paramita, and Practice Beyond Recitation',
    excerpt: 'The second lecture turns to prajna and paramita, warning that sounds, names, and verbal fluency are not yet cultivation. True prajna must become lived practice: turning from delusion to awakening and from this shore to the other shore.',
    focus: 'Prajna in practice'
  },
  3: {
    title: 'Platform Sutra Lecture 3: Teacher-Student Conditions, Praise, Blame, and Subduing the Mind',
    excerpt: 'The third lecture uses teacher-student relations to show how praise and criticism should both become occasions for self-reflection. The point is not to be moved by approval or rejection, but to receive the Dharma through humility and correction.',
    focus: 'Subduing the mind'
  }
};

function buildSessions(locale: Locale): PlatformSessionRecord[] {
  const highlights = locale === 'en' ? enHighlights : zhHighlights;
  return Array.from({ length: 103 }, (_, index) => {
    const id = index + 1;
    if (highlights[id]) {
      return { id, ...highlights[id] };
    }

    const padded = String(id).padStart(3, '0');
    return locale === 'en'
      ? {
          id,
          title: `Platform Sutra Lecture ${padded}`,
          excerpt: 'Transcript source is present in the tangjin archive and awaits the next editorial pass into a polished lecture note page.',
          focus: 'Pending transcript polish'
        }
      : {
          id,
          title: `第 ${padded} 講`,
          excerpt: '已收錄 tangjin 逐字稿來源，等待下一批整理為可閱讀的講記全文頁。',
          focus: '待整理講記'
        };
  });
}

export const platformLocalizedContent: Record<Locale, PlatformContent> = {
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    title: '六祖壇經講記',
    subtitle: '一百零三講六祖壇經課程藏錄',
    description: '依「唐巾」逐字稿來源建立《六祖壇經》書頁，連結講記 playlist、繁體中文原典與英文譯文閱讀頁，先上線前三講全文。',
    heroKicker: '禪宗 · 見性 · 般若',
    sourceLabel: '李瑞烈老師《六祖壇經》講記',
    sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
    languageToggleLabel: '語文切換',
    languages: { 'zh-Hant': '繁體中文', en: 'English' },
    teachingsEyebrow: '壇經三門',
    teachingsHeading: '以見性為修行中軸',
    featuredTeachings: [
      { title: '菩提自性，本來清淨', body: '《壇經》開宗明義指向自心本具清淨佛性，讀經不是外求知識，而是回到本心照見。' },
      { title: '口念心行，方是般若', body: '般若不是口頭名相；若口念而心不行，仍如說食不飽，不能真正到彼岸。' },
      { title: '無念、無相、無住', body: '後續講記將以《壇經》核心三綱為線索，整理頓悟法門在日常修行中的落點。' }
    ],
    ritualEyebrow: '閱讀次第',
    ritualHeading: '先原典、後講記、再回自心',
    ritualSteps: [
      '先讀《壇經》原文：掌握行由、般若、疑問、定慧等十品脈絡。',
      '再讀逐講整理：從唐巾講記中看見老師如何把古典法義轉成日常提醒。',
      '最後回到自心：以讚毀、名相、煩惱與執著作為見性修行的現場。'
    ],
    sessionsListLabel: '六祖壇經講次列表',
    sessionDetailEyebrow: '壇經講記',
    sessions: buildSessions('zh-Hant')
  },
  en: {
    htmlLang: 'en',
    title: 'Platform Sutra Lecture Archive',
    subtitle: 'A 103-lecture archive centered on the Platform Sutra',
    description: 'Builds a dedicated Platform Sutra book page from the Tangjin transcript source, with playlist links, Chinese source text, English reading mode, and the first three lecture pages live.',
    heroKicker: 'Chan · Seeing Nature · Prajna',
    sourceLabel: 'Li Ruilie Platform Sutra lecture playlist',
    sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
    languageToggleLabel: 'Language switcher',
    languages: { 'zh-Hant': '繁體中文', en: 'English' },
    teachingsEyebrow: 'Three Platform Sutra gates',
    teachingsHeading: 'Seeing the nature as the center of practice',
    featuredTeachings: [
      { title: 'The bodhi self-nature is originally pure', body: 'The Platform Sutra begins by pointing directly to the originally pure nature of one’s own mind; reading is a return inward, not a hunt for external information.' },
      { title: 'Prajna must be practiced, not merely recited', body: 'Prajna is not a verbal label. If the mouth recites while the mind does not practice, it is like talking about food without becoming full.' },
      { title: 'No-thought, no-mark, non-abiding', body: 'The next lecture batches can use these core Platform Sutra principles as the organizing thread for daily-life cultivation.' }
    ],
    ritualEyebrow: 'Reading sequence',
    ritualHeading: 'Source text, lecture notes, then the mind itself',
    ritualSteps: [
      'Read the Platform Sutra source text first to orient around biography, prajna, questions, concentration and wisdom, and the ten-part structure.',
      'Then read the lecture notes to see how the teaching turns classical doctrine into daily guidance.',
      'Finally return to the mind itself, using praise, blame, names, affliction, and attachment as the field of practice.'
    ],
    sessionsListLabel: 'Platform Sutra lecture list',
    sessionDetailEyebrow: 'Platform lecture note',
    sessions: buildSessions('en')
  }
};

export const platformLecturePageLocales: Record<Locale, {
  archiveKicker: string;
  archiveHeading: string;
  archiveDescription: string;
  readFullText: string;
  pendingLabel: string;
  readingLabel: string;
  chromeNote: string;
  chromeNoteReady: string;
  backToIndex: string;
  sourceLabel: string;
  fullTextReady: string;
  fullTextReadyEnglish: string;
  unavailableTitle: string;
  unavailableBody: string;
  unavailableAction: string;
}> = {
  'zh-Hant': {
    archiveKicker: '一百零三講總覽',
    archiveHeading: '六祖壇經逐講選讀',
    archiveDescription: '先上線前三講全文；其餘 tangjin transcript 已入庫，保留在 archive 中作後續批次整理清單。',
    readFullText: '閱讀',
    pendingLabel: '待整理',
    readingLabel: '六祖壇經講記閱讀',
    chromeNote: '目前前三講全文已開放，其餘講次將依 transcript 批次整理。',
    chromeNoteReady: '本講已整理為繁體中文與英文講記頁。',
    backToIndex: '返回六祖壇經總覽',
    sourceLabel: '來源：transcripts_tangjin 與六祖壇經講記 playlist',
    fullTextReady: '講記全文',
    fullTextReadyEnglish: 'Full English lecture page',
    unavailableTitle: '本講整理中',
    unavailableBody: '此講逐字稿已在 tangjin archive 中，尚未整理成可閱讀的講記頁。',
    unavailableAction: '返回六祖壇經總覽'
  },
  en: {
    archiveKicker: '103-lecture index',
    archiveHeading: 'Platform Sutra lecture notes',
    archiveDescription: 'The first three lecture pages are live. The remaining Tangjin transcripts stay visible as a batch-editing roadmap.',
    readFullText: 'Read',
    pendingLabel: 'Pending',
    readingLabel: 'Platform Sutra lecture reading',
    chromeNote: 'The first three lectures are live; later lectures will be polished from transcripts in batches.',
    chromeNoteReady: 'This lecture is available as a full Chinese and English page.',
    backToIndex: 'Back to Platform Sutra index',
    sourceLabel: 'Source: transcripts_tangjin and the Platform Sutra lecture playlist',
    fullTextReady: 'Chinese lecture page',
    fullTextReadyEnglish: 'Full English lecture page',
    unavailableTitle: 'Lecture page in progress',
    unavailableBody: 'The transcript is present in the Tangjin archive but has not yet been edited into a readable lecture page.',
    unavailableAction: 'Back to Platform Sutra index'
  }
};

export const platformLecturePages: Record<number, PlatformLecturePage> = {
  1: {
    id: 1,
    zhTitle: zhHighlights[1].title,
    zhSummary: zhHighlights[1].excerpt,
    zhFull: [
      '第一講先交代《六祖壇經》講記重新補錄的因緣。講者說，早期錄影條件不足，有些課程沒有完整留下影像，後來因為需要錄影帶的人多，才重新補錄。這一開場也提醒讀者：今日能閱讀、整理這些講記，本身就是一次保存法義的工作。',
      '講者接著說明「六祖」所指的是禪宗第六祖惠能。若從印度禪宗傳承說起，釋迦牟尼佛將心法付囑摩訶迦葉，輾轉傳至菩提達摩；達摩來到中國，被尊為中國禪宗初祖。惠能繼承這條法脈，因此在中國禪宗中稱為六祖。',
      '這一講的重點不在細講惠能身世，而在先讓聽者明白《壇經》的宗旨：禪宗不是只講外在形式，而是直指本心、使人見性。講者借用《壇經》開端「菩提自性，本來清淨」的精神，提醒讀者不要只把祖師故事當成歷史，而要從中照見自己的佛性。',
      '惠能聞《金剛經》「應無所住而生其心」而開悟，這也把《金剛經》與《六祖壇經》連在一起。前者講無住般若，後者以惠能一生示現這種無住見性的道路。網站將兩部書並列為入口，也正是因為兩者在法義上互相照應。',
      '本講最後落在「佛性本無南北」的要義上。人有地域、語言、出身、知識程度的差別，但佛性不因南北而有高下。真正重要的不是外在身份，而是能否回到自心、見到本具清淨性。'
    ],
    enTitle: enHighlights[1].title,
    enSummary: enHighlights[1].excerpt,
    enFull: [
      'The first lecture begins by explaining why the Platform Sutra series was re-recorded. Earlier recording conditions were incomplete, and some talks were not fully preserved on video. Because many people later asked for recordings, the teacher returned to the material and recorded it again. This makes the lecture archive itself a work of preservation.',
      'The lecture then introduces “the Sixth Patriarch” as Huineng, the sixth patriarch of Chinese Chan. The Chan lineage is traced from the Buddha to Mahakasyapa, through the Indian patriarchs, to Bodhidharma, who came to China and became the first patriarch of Chinese Chan. Huineng inherits this lineage and is therefore called the Sixth Patriarch.',
      'The point of the opening is not to dwell on biography alone. It is to prepare the listener for the Platform Sutra’s central aim: Chan points directly to the mind and leads people to see their nature. The famous teaching that the bodhi self-nature is originally pure is not just doctrine; it is the lens through which the whole archive should be read.',
      'Huineng awakens on hearing the Diamond Sutra line, “Let the mind arise without abiding anywhere.” This links the Diamond Sutra and the Platform Sutra directly. One teaches non-abiding prajna; the other shows Huineng embodying that path of seeing the nature.',
      'The lecture finally emphasizes that Buddha-nature has no south or north. People differ in region, language, background, and education, but Buddha-nature is not higher or lower because of these differences. What matters is whether one returns to the mind and sees its originally pure nature.'
    ]
  },
  2: {
    id: 2,
    zhTitle: zhHighlights[2].title,
    zhSummary: zhHighlights[2].excerpt,
    zhFull: [
      '第二講承接《壇經》與《金剛經》相通的般若義理。講者先提醒，讀「般若」不可只在音聲上爭執。不同地域、不同語言會有不同讀音，若只執著哪個音才對，反而容易忘失真正要緊的是義理不可錯解。',
      '般若的重點是智慧，但不是世俗聰明。它是能照破迷妄、引人離開執著的妙智慧。若只會口中說空、說般若，心裡仍舊貪嗔癡具足，那就像《壇經》所說「說食不飽」，說得再多也不能解脫。',
      '「波羅蜜」即到彼岸。講者把彼岸理解為離開生滅執著、回到清淨本性的境界。這不是口頭上說到就到，也不是只靠背誦名相，而是要在日常起心動念中練習不住相、不被境界牽走。',
      '本講也提醒，學佛最怕把名相當成修行。名相可以幫助入門，但若不能落實為心行，就會變成新的執著。真正的般若必須心口相應，聽懂了就要照著做，不能只停在講說。',
      '因此，第二講為後續《壇經》講記定下方法：每一個術語都要回到實修，每一段經文都要問它如何轉化自己。能這樣讀，才不是研究《壇經》而已，而是以《壇經》照見自心。'
    ],
    enTitle: enHighlights[2].title,
    enSummary: enHighlights[2].excerpt,
    enFull: [
      'The second lecture continues the prajna teaching shared by the Platform Sutra and the Diamond Sutra. The teacher first warns that one should not become trapped in disputes about pronunciation. Different regions and languages pronounce terms differently; what matters is not attachment to sound, but avoiding misunderstanding of the meaning.',
      'Prajna means wisdom, but not ordinary cleverness. It is the wondrous wisdom that illuminates delusion and leads people away from attachment. If one only speaks of emptiness or prajna while the mind remains full of greed, anger, and delusion, then, as the Platform Sutra says, it is like talking about food without becoming full.',
      'Paramita means reaching the other shore. The teacher explains that the other shore is the state of leaving birth-and-death attachment and returning to the pure nature. This is not reached by words or terminology alone, but by practicing non-abiding in the actual movements of daily thought.',
      'The lecture also warns against mistaking Buddhist terms for cultivation itself. Terms can help one enter the gate, but if they do not become practice, they become another attachment. True prajna requires mouth and mind to correspond: once one understands, one must live accordingly.',
      'In this way the second lecture establishes a method for the rest of the Platform Sutra archive. Every term must return to practice, and every passage must ask how the mind is transformed. Read this way, the Platform Sutra is not merely studied; it becomes a mirror for one’s own mind.'
    ]
  },
  3: {
    id: 3,
    zhTitle: zhHighlights[3].title,
    zhSummary: zhHighlights[3].excerpt,
    zhFull: [
      '第三講從師徒因緣與受教態度談起。講者指出，作弟子的人，不論受到師父稱讚或嫌責，都不能只向外反應，而要先回頭問自己：這個稱讚是否真有其德？這個責備是否正好指出自己的毛病？',
      '若被稱讚就立刻生歡喜與驕慢，便容易把外在肯定當成修行成就。若被責備就生怨恨與退心，也表示自己的我相仍重。真正學道的人，應把讚歎與批評都當成照見自心的因緣。',
      '講者特別說，師父有時稱讚弟子，有時嫌責弟子，未必只是表面意思。有時是為了引導，有時是為了試煉，有時是看弟子是否能放下我執、承受調教。因此，學人不能只聽好話，也不能一遇逆耳語就逃避。',
      '這一講雖然還在《壇經》開端脈絡中，實際上已把禪宗修行的日常面向點出來：見性不是抽象口號，而是在每一次被觸動、被稱讚、被誤解、被責備時，看見自己的起心動念。',
      '因此，第三講可視為《六祖壇經》講記的受教法：以謙下承接教法，以反省消化外境，以改過代替辯解。能如此，讚毀都成為道場，師徒因緣也成為磨鍊般若的地方。'
    ],
    enTitle: enHighlights[3].title,
    enSummary: enHighlights[3].excerpt,
    enFull: [
      'The third lecture begins with the conditions between teacher and student and the attitude needed to receive instruction. Whether a student is praised or criticized by the teacher, the first response should not be outward reaction but inward reflection: is the praise truly deserved, and does the criticism reveal a real fault?',
      'If praise immediately produces delight and arrogance, one is mistaking external approval for accomplishment. If criticism produces resentment and retreat, the mark of self is still strong. A true student of the Way uses both praise and blame as conditions for seeing the mind.',
      'The teacher notes that a master’s praise or criticism may not be only what it appears to be. Sometimes it guides, sometimes it tests, and sometimes it reveals whether the student can release self-attachment and accept correction. One cannot only listen to pleasant words and flee whenever a word is hard to hear.',
      'Although the lecture still belongs to the opening context of the Platform Sutra, it already brings out the daily side of Chan practice. Seeing the nature is not an abstract slogan. It is tested whenever one is moved, praised, misunderstood, or corrected.',
      'Thus the third lecture teaches how to receive the Platform Sutra: with humility, self-examination, and correction rather than self-defense. In that way both praise and blame become a place of practice, and the teacher-student relationship becomes a field for refining prajna.'
    ]
  }
};
