export type Locale = 'zh-Hant' | 'en';

type FeaturedTeaching = {
  title: string;
  body: string;
};

type SessionRecord = {
  id: number;
  title: string;
  excerpt: string;
  paragraphCount: number;
  charCount: number;
  focus: string;
};

type LocaleContent = {
  htmlLang: string;
  title: string;
  subtitle: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
  statsLabels: {
    sessions: string;
    paragraphs: string;
    chars: string;
  };
  statsUnits: {
    sessions: string;
  };
  heroKicker: string;
  languageToggleLabel: string;
  languages: Record<Locale, string>;
  teachingsEyebrow: string;
  teachingsHeading: string;
  featuredTeachings: FeaturedTeaching[];
  ritualEyebrow: string;
  ritualHeading: string;
  ritualSteps: string[];
  sessionsEyebrow: string;
  sessionsHeading: string;
  sessionsListLabel: string;
  sessionDetailEyebrow: string;
  sessionMetaLabels: {
    paragraphCount: string;
    charCount: string;
    focus: string;
  };
  sessions: SessionRecord[];
};

export const archiveStats = {
  sessions: 27,
  totalChars: 364707,
  totalParagraphs: 2913
} as const;

export const localizedContent: Record<Locale, LocaleContent> = {
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    title: '金剛經講記',
    subtitle: '二十七講金剛經課程藏錄',
    description: '以古雅卷軸風格整理《金剛般若波羅蜜經》講記，從二十七講課程中擷取修行、般若與彼岸之義。',
    sourceLabel: '李瑞烈老師《金剛經》講記',
    sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
    statsLabels: {
      sessions: '藏錄',
      paragraphs: '段落',
      chars: '字數'
    },
    statsUnits: {
      sessions: '講'
    },
    heroKicker: '般若 · 修行 · 彼岸',
    languageToggleLabel: '語文切換',
    languages: {
      'zh-Hant': '繁體中文',
      en: 'English'
    },
    teachingsEyebrow: '法義三門',
    teachingsHeading: '古意經藏之綱領',
    featuredTeachings: [
      {
        title: '破人我山',
        body: '講記反覆指出煩惱之礙多由人我執而起；若能以覺悟之火鍛鍊，便能見金剛佛性。'
      },
      {
        title: '般若即妙智慧',
        body: '般若不止是名相上的知解，而是能照破愚癡、引人離生滅相的大智慧。'
      },
      {
        title: '不修即凡夫',
        body: '全站以修行為主線，強調誦持、理解、實踐合一，方能從此岸趨向彼岸。'
      }
    ],
    ritualEyebrow: '閱藏次第',
    ritualHeading: '觀照與實修',
    ritualSteps: [
      '先讀經義：從開篇摘錄進入當講主題。',
      '次觀自心：以人我、煩惱、智慧三層對照當下處境。',
      '後行其道：回到日常實踐，不止於研究與談論。'
    ],
    sessionsEyebrow: '廿七講總覽',
    sessionsHeading: '逐講選讀',
    sessionsListLabel: '講次列表',
    sessionDetailEyebrow: '卷軸摘錄',
    sessionMetaLabels: {
      paragraphCount: '段落數',
      charCount: '字數',
      focus: '旨趣'
    },
    sessions: [
      {
        id: 1,
        title: '第 01 講',
        excerpt:
          '在座同修。我們現在從這一期起。金剛般若波羅蜜經。簡單說是金剛經。是我們佛教最高的經典。瞭解金剛經的內容。照著金剛經的法去修。你就不用怕脫不出生死。但是在講這部經之前。要先瞭解這個金剛。因爲這個經是。 等於就是來包含這部經。首先針對這兩個字金剛。什麼叫做金剛。先來解釋這個金剛。在惠能六祖這樣對我們說。惠能六祖這一段說明。寶亦不知是山。何以故。腐無性故。取其寶周。得遇金師。整整山破。取礦業。遂成精金。隨意使用。得免廣告。四大身中。佛性亦面。…',
        paragraphCount: 133,
        charCount: 15476,
        focus: '以經解心，以行證義'
      },
      {
        id: 2,
        title: '第 02 講',
        excerpt:
          '人物出家。莫不具有一股好心。名利所染。遂復營宮室飾衣服。勤作家緣。必須離家遠之累。割摩勞之綱。是出家以後之出家也。出家以後之出家難也。建池大師。什麼叫做淨土宗。你若加入唸佛會。 唸佛會就是淨土宗。就是淨土宗的第八祖。若說到淨土宗。若不識蓮池大師。我們的祖先一樣。這位蓮池大師怎說。開始要出家的時候。有的較大有的較小。沒有一個說沒一段的好心。你開始要出家時候。一定有一段好心。清淨的心要出家。不過時間一久。出家時間一久。被這個因緣名利來所染。…',
        paragraphCount: 89,
        charCount: 12385,
        focus: '以經解心，以行證義'
      },
      {
        id: 3,
        title: '第 03 講',
        excerpt:
          '我們現在來翻開。說在這個時候。最老須菩提。在很多的人羣裏中間。他就從他的座位站起來。走到佛祖面前。右膝跪在地上。對沙本文。 有引呂純陽祖師說的。但是在呂純陽祖師。絕共有六個註解。我們已經說了五項。最後說這個中士。封於中土不是一般所說。對於中土不是一般所說。中華民國叫做中土。這個中土是指什麼。修具線一個說明。白煙以上屬上升田。其中心爲腦。自齶至咽屬中丹田。其中心爲脾。其以下屬下丹畫。其中心爲命門。爲地之精。丹本指丹砂。但作抽象的闡釋。則丹…',
        paragraphCount: 148,
        charCount: 13467,
        focus: '以經解心，以行證義'
      },
      {
        id: 4,
        title: '第 04 講',
        excerpt:
          '性自度名屬真度。性就是我們的本性。我們自己的本性要自己度。這個名字纔是真正的度。若別人跟我們度。自己度自己纔是真正的度。所以修真錄裡面才說。仙佛教化世人。非仙佛能度。故修行之人。修具錄這樣說。說仙佛在教化著世間人。自己的本性自己去度。不是說仙佛有辦法跟你度。所以你一個修行人在講道。心理想一個念頭。是我要跟他們度。已都沒辦法度了。這是修具錄說的。頓悟入道要門論。佛不能度。若佛能度眾生時。PX尺寸7。皆知眾生自度佛不能度。莫倚他佛力。頓悟入…',
        paragraphCount: 124,
        charCount: 17236,
        focus: '以經解心，以行證義'
      },
      {
        id: 5,
        title: '第 05 講',
        excerpt:
          '大家平安。現在這句話是要接上句。何以故就是說什麼原因。我們修這個菩薩行的人。要來不住相佈施。沒辦法去計算的。我們來看惠能六祖的說明。常行不住佈施。普敬一切眾生。其功德無有邊際。不可辯計。 他說我們時常……。來行這個不住的佈施。怎樣叫做不任相的佈施。就是沒回向的佈施。我們一般在做善事。若有迴向就落在後天。一個人若沒有迴向。才能叫做不佳相。這個不住相要怎麼做。所有的累生。',
        paragraphCount: 118,
        charCount: 13789,
        focus: '以經解心，以行證義'
      },
      {
        id: 6,
        title: '第 06 講',
        excerpt:
          '在座同修。如理實見分第五。釋迦佛祖這様說。說假使若所有任何形相。這都是空虛不實。假使你若有辦法識破諸相。都是空的道理。看到如來的法相。 我們有引惠能六祖的說明。來看呂純陽祖師的話。色身者有相。非佛之眞體。皆是虛妄假相。法身者無相。佛之眞法身。非身相中可見。若能見身相中無具佛。若能見身相中。是人則見如法身。故佛告須菩提曰。凡所有相皆是虛妄。若見諸相非相。',
        paragraphCount: 99,
        charCount: 13344,
        focus: '以經解心，以行證義'
      },
      {
        id: 7,
        title: '第 07 講',
        excerpt:
          '正信希有分第六。因爲我們無論執著什麼相。我心飛揚自呼吼。我相人相累生相毒者相。我相人相累生相夀者相。因爲這個緣故。我們就不應該執取在這個法。加一層。軟取在這個非法。 所以我……現在如來。我時常這樣說。你們這些修行人。我所說的種種法門。一個竹筏一樣。你還沒過河之前。還沒通過修河之前。要利用種種的竹筏。來渡道條河。一旦到了封岸以後。還有什麼周處啊。所以我今日累生。生死苦海那遇岸時。生死苦海那遺岸時。',
        paragraphCount: 124,
        charCount: 14371,
        focus: '以經解心，以行證義'
      },
      {
        id: 8,
        title: '第 08 講',
        excerpt:
          '大家平安。依法出生分第八。對決這個依法出生。依法者。而成正等正覺。未來累生。即亦可成佛。阿耨多羅三藐三菩提法。皆從此經出。 現在就算細來解釋。',
        paragraphCount: 116,
        charCount: 14272,
        focus: '以經解心，以行證義'
      },
      {
        id: 9,
        title: '第 09 講',
        excerpt:
          '惠能六祖遺段文。三界結縛蓋。往來從天上亦到人間生。名斯陀含果。故實無往來也。說這個斯陀含是什麼魔。因屬六祖是唐朝的人。因爲要來捨這個六道。天是指神和阿修羅。 這個業將我們縛住了。我們若有辦法把它解開。所以這個斯陀含一個名字。看是要到天上做一任的神。這個業已經修盡以後。就這樣就脫出生死了。這個大乘斯陀含。我們的心只有一個生減。',
        paragraphCount: 96,
        charCount: 14707,
        focus: '以經解心，以行證義'
      },
      {
        id: 10,
        title: '第 10 講',
        excerpt:
          '李瑞烈老師主講。我們要從標題開始說起。怎麼樣叫做莊嚴淨土。來看道濟禪師的說明。般若處處破執。惟恐凡夫貪著有爲法也。所爲莊嚴佛土者。目中所見色相莊嚴。實是說的非相法身。無形眞土。無色相可觀的法性莊嚴也。 現在道濟禪師。現在道濟禪師說般若。',
        paragraphCount: 92,
        charCount: 14773,
        focus: '以經解心，以行證義'
      },
      {
        id: 11,
        title: '第 11 講',
        excerpt:
          '李瑞烈老師主講。昌純陽祖師的理解。西方的鞋履淨土。便是莊嚴佛土。你要知道這個心清淨。就有那個翼坑巢。莫玩盤很痛苦住不慣。被諸欲所溺也。佛學辭典這樣說。 我們的鼻子聞到香味。第四就是味。我們的舌頭去嗜到五味。們的舌頭去嚐到五味。就是我們的身體。這五個境界。因爲這個五欲。你看到一個女孩很漂亮。到一間房子很漂亮。看到一個東西很有價值。你也會生欲心呀。巴沾到好喫的東西。因爲這個五境。所以才叫做欲。',
        paragraphCount: 92,
        charCount: 12854,
        focus: '以經解心，以行證義'
      },
      {
        id: 12,
        title: '第 12 講',
        excerpt:
          '李瑞烈老師主講。大家平安。尊重正教分第十二。不然我們對於這個標題。正教者。教授也。以音聲求我。是指心外求佛之道。不音聲求我者。則求自性佛之道也。所謂是人行正道。着人天阿修。 有兩個註解首先做說明。以學業傳。辭海說教授是什麼。就是我們要學道。他將這道傳授給你的人。道濟禪師這樣說。心外求佛即是邪道。你今天把這正路丟掉。你心的外面要去求佛祖。來看出如來的面目。來看出如米米米的面目。高摩羅什。心外求如來。皆是邪道。心邪感邪鬼。他曰必著邪道。永遠…',
        paragraphCount: 116,
        charCount: 14059,
        focus: '以經解心，以行證義'
      },
      {
        id: 13,
        title: '第 13 講',
        excerpt:
          '李瑞烈老師主講。在座同修。大家平安。我們下午暫時不用看課本。談到這個佛的三十二相。這個佛的三十二相。大多數都看這個外貌。這個外相。實在這個佛的三十二相。 我們上期呢。和呂純陽祖師兩人的解釋。這個三十二相是指什麼。指我們的五根要修六度。耳朵鼻子嘴巴身體。這個五根修六度。耳朵修六度。這個五根若修六度啊。五六剛好三十。',
        paragraphCount: 118,
        charCount: 14099,
        focus: '以經解心，以行證義'
      },
      {
        id: 14,
        title: '第 14 講',
        excerpt:
          '李瑞烈老師主講。那現在這個文的裡面。非相就是無相。這個非相首先做說明。不然我們現在看辭海。非貓無也。 現在說非等於就是無。所以非和無兩個意義一樣。我們來看涅槃經裡面說的。無相之相名爲實相。涅槃經說無相的相。這個名字叫做實相。佛學大辭典的說明。實者非虛妄之義。是指萬有本體之語。佛學大辭典說實相是什麼。',
        paragraphCount: 120,
        charCount: 13152,
        focus: '以經解心，以行證義'
      },
      {
        id: 15,
        title: '第 15 講',
        excerpt:
          '李瑞烈老師主講。如來因中初地時。爲忍辱仙人。被歌利王割截其身軀。歌利王是梵語。此雲無道極君也。說如來因中曾屬國王。求無上菩提修忍辱行。雨時天帝釋化作遊檀羅。乞王豬肉。即割施殊無暇格。 現在金剛經的集解這樣說。在過去世在修行的時候。這個忍辱仙人。讓這個歌利王砍他的身體。他的肉。在痛和生氣的心都沒有。感到會痛會生氣的心。若這樣就生出。歌利王是梵語。中國話叫做無道的極君。是另外一個解釋。釋迦佛祖在過去世的時候。所以才叫做歌利亞。為了要求了脫生…',
        paragraphCount: 97,
        charCount: 13046,
        focus: '以經解心，以行證義'
      },
      {
        id: 16,
        title: '第 16 講',
        excerpt:
          '李瑞烈老師主講。 我們現在來翻。釋迦佛祖進一步又說。說須菩提我今天所說的。就是實語真語如語。就是實語與語如語。不諱語不異語。不諱語。那度什度叫做眞語實語。如語不語不異語呢。那什麼叫做真語實語。那麼什麼叫做真話實話。五十三家集註裡面一句話。如如居士顏丙回。眞而非假謂之眞語。實而不虛謂之實語。如如不動謂之如語。於不諱語者。至於不諳語者。不異語者佛語不爲怪異。欲人生信心。五十三家集註裡面說。有一句話這樣說。嘰嘰嘰嘰。實實在在都不虛。他所說的話…',
        paragraphCount: 102,
        charCount: 11270,
        focus: '以經解心，以行證義'
      },
      {
        id: 17,
        title: '第 17 講',
        excerpt:
          '李瑞烈老師主講。大家平安。現在釋迦佛祖接下來說。如果你們有人啊有辦法來。來說這部金剛經的妙旨。我們佛全部知道這個人。得到無法用尺去量。無有邊際。沒辦法用口去講的功德。來說這部金剛經的人。佛的無上正等正覺法。根之人。持自心理。自悟無相理。開經解義。今諸眾生。以能行此行。雛離魔夢。即得阿耨多羅三藐三菩提。當知持經之人。能六祖這樣說。若是根基深的人。深深來瞭解佛祖的心意。他秉持自己的心經。 就是我們的妙智慧。生出利他的行爲。我們自己悟是自利。…',
        paragraphCount: 101,
        charCount: 12190,
        focus: '以經解心，以行證義'
      },
      {
        id: 18,
        title: '第 18 講',
        excerpt:
          '就是以大人騙小孩這樣。哄騙哄騙。來說了很多的道理。我四十年多來不曾說真實。我四十多年來不曾說真實。釋迦佛祖他說四十年。他不說真正的道理。若是叫你修沒人要啦。第一關就要斬十惡八邪。第一關就要新十惡八邪。就要捅三心四相。六度要圓滿。這樣纔有辦法了脫生死。有辦法去西方比較快啊。所以釋迦佛祖就沒辦法。有一個了義的道理。和一個不了義的道理。哄騙哄騙的道理。所以在大般涅槃經才說。依了義經。不依不了義經。快要死之前說的經。你不要依靠不了義的經。什麼叫…',
        paragraphCount: 107,
        charCount: 16803,
        focus: '以經解心，以行證義'
      },
      {
        id: 19,
        title: '第 19 講',
        excerpt:
          '李瑞烈老師主講。釋迦思親。三藐三菩提心者也。自性中蕩然空空。故曰實無有法。三藐三菩提心者也。有一個註解先做說明。空之赤空。目空一切。智度論四十六曰。空亦空。名空空。嘉祥仁王經疏二曰。空破五險。如服藥能破病。病破案。藥亦應出。即復是病。以空破諸煩惱病。以空格空。故名空空也。 現在佛學大辭典說這個空。叫做空空。適叫做空空。約四十六卷裡面一句話。說什麼叫做空空。一切的法全都是空。這個就是空。但是這個空又再空。這個名字叫做空空。第二卷裡面這樣說…',
        paragraphCount: 100,
        charCount: 13639,
        focus: '以經解心，以行證義'
      },
      {
        id: 20,
        title: '第 20 講',
        excerpt:
          '李瑞烈老師主講。在座同修。大家平安。這個涅槃經所說的四依。四依就是依法不依人。依智不依誠！說明這個依法不依人。下午來說明第二依。下午來說明第三依。 就是這個依義不依字。潘乃言說。若你言。徒增疑惑諍訟而已。景人宜法。思惟實義。列個公式嗎。來做一個詳細的解釋。',
        paragraphCount: 120,
        charCount: 15575,
        focus: '以經解心，以行證義'
      },
      {
        id: 21,
        title: '第 21 講',
        excerpt:
          '李瑞烈老師主講。 我們現在來翻。靜態本文。來看呂純陽祖師的理解。言佛土者。顧地菩隆以定慧莊嚴。心佛土本來薩履。可笑凡夫不知真佛土。自言得其功。願地菩薩若作如是言者。何謂如來說莊嚴佛土。若人心常清淨。故宮即非雍殿是名雍殿也。',
        paragraphCount: 89,
        charCount: 10890,
        focus: '以經解心，以行證義'
      },
      {
        id: 22,
        title: '第 22 講',
        excerpt:
          '李瑞烈老師主講。大家平安。有引證惠能六祖的解釋。 我們現在來看。我們現在在看。恆河有沙。一恆河之沙尚多，無數量。何況一粒沙屬一恆河乎。以諸恆河之沙數。只是唱過門。非彼佛世界也。是指佛之願土。而何故不言累生世界。顯示黑屏。首先做個說明。',
        paragraphCount: 108,
        charCount: 12243,
        focus: '以經解心，以行證義'
      },
      {
        id: 23,
        title: '第 23 講',
        excerpt:
          '李瑞烈老師主講。正法眼。又回清淨法眼。佛學大辭典說正法眼藏。外一個名字。叫做清淨法眼。教外別傳的這個心印。佛學常見詞彙這樣說。佛學常見詞。名正法眼。深廣而高德合藏。稱其教外別傳的心印。釋其教外別傳的心印。佛學常見詞彙這樣說。說佛祖的心眼。微底來看出這個正法。所以叫做正法眼。所以叫做藏。 正法眼藏是我們禪宗。他的教外別傳的心印。我們普通說什麼教什麼教。用這個教來教導眾生。他是用這個心領悟。不是用嘴巴講的。你周這個心去體悟。你有時聽起來會亂…',
        paragraphCount: 100,
        charCount: 12535,
        focus: '以經解心，以行證義'
      },
      {
        id: 24,
        title: '第 24 講',
        excerpt:
          '李瑞烈老師主講。有引惠能六祖的解釋。下午來看呂純陽祖師。三藐三菩提之法也。言上自諸佛下至蠢動含靈。無有高下者。謂色身雖有高下。佛性則無高下也。妄識分別。累生是下。故不能證菩提。菩薩了達一切平等。以白門相對。能修六度萬行也。阿耨多羅三藐三菩提也。自性本如如。心有所信。故佛言即非善法也。六度並行不悖。 呂純陽祖師道法說。金剛經說是法。指修無上正等正覺的法。阿耨多羅三藐三菩提。就是無上正等正覺這個法。',
        paragraphCount: 121,
        charCount: 12645,
        focus: '以經解心，以行證義'
      },
      {
        id: 25,
        title: '第 25 講',
        excerpt:
          '李瑞烈老師主講。大家平安。我們現在要講這個經之前。因爲有人在問我。老師你爲什麼說。註解這個金剛經最好。並不是佛教的人。 呂純陽祖師是道家的人。他不是佛教的人。這個高深的金剛經。這是一般人所不瞭解的。當今這些佛菩薩。或是這個仙。教外的人所尊重的。實在是沒有幾個。這個觀世音菩薩。雖然觀世音菩薩。',
        paragraphCount: 106,
        charCount: 13549,
        focus: '以經解心，以行證義'
      },
      {
        id: 26,
        title: '第 26 講',
        excerpt: '李瑞烈老師主講。大家平安。 對於這句話。',
        paragraphCount: 111,
        charCount: 13226,
        focus: '以經解心，以行證義'
      },
      {
        id: 27,
        title: '第 27 講',
        excerpt:
          '李瑞烈老師主講。 我們現在來翻。進一步又這樣說。正等正聲的心這樣來說。你應該要知道無相的道理。心以文而相心。應該要相信無相。而且來破這個有相的邪見。應該你要瞭解無相。來破這個有相的無明。若有這個法相的行為。我說的不是真正的法相。不生法相纔是真正的法相。來看惠能六祖解釋。口說無相法。即非法。說無相法。而能所心減。你要發出這個大道的心。一切的眾生都有佛性。心以兩文相山以以。',
        paragraphCount: 66,
        charCount: 9112,
        focus: '以經解心，以行證義'
      }
    ]
  },
  en: {
    htmlLang: 'en',
    title: 'Diamond Sutra Lecture Archive',
    subtitle: 'An annotated archive of 27 Diamond Sutra sessions',
    description:
      'A bilingual archive of Li Ruilie\'s Diamond Sutra lectures, presented in an antique scroll style with English summaries alongside the original Traditional Chinese material.',
    sourceLabel: 'Li Ruilie Diamond Sutra lecture playlist',
    sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
    statsLabels: {
      sessions: 'Archive',
      paragraphs: 'Paragraphs',
      chars: 'Characters'
    },
    statsUnits: {
      sessions: 'sessions'
    },
    heroKicker: 'Prajna · Practice · Crossing Over',
    languageToggleLabel: 'Language switcher',
    languages: {
      'zh-Hant': 'Traditional Chinese',
      en: 'English'
    },
    teachingsEyebrow: 'Three Core Themes',
    teachingsHeading: 'Guiding ideas in the lecture archive',
    featuredTeachings: [
      {
        title: 'Breaking self-attachment',
        body: 'Again and again, the lectures trace affliction back to attachment to self and others, urging practitioners to temper the mind until Buddha-nature shines through.'
      },
      {
        title: 'Prajna as living wisdom',
        body: 'Prajna is presented not as abstract doctrine but as the luminous insight that cuts through delusion, birth-and-death, and mistaken appearances.'
      },
      {
        title: 'Practice completes understanding',
        body: 'Recitation, interpretation, and daily conduct are treated as one path: without practice, scriptural knowledge never ripens into liberation.'
      }
    ],
    ritualEyebrow: 'How to Read',
    ritualHeading: 'Contemplation and application',
    ritualSteps: [
      'Read the featured passage first and note the central theme of that session.',
      'Reflect inwardly by comparing the teaching with attachment, affliction, and wisdom in present experience.',
      'Return to daily conduct so the sutra becomes lived practice rather than discussion alone.'
    ],
    sessionsEyebrow: 'All Twenty-Seven Sessions',
    sessionsHeading: 'Browse by lecture',
    sessionsListLabel: 'Session list',
    sessionDetailEyebrow: 'Session excerpt',
    sessionMetaLabels: {
      paragraphCount: 'Paragraphs',
      charCount: 'Characters',
      focus: 'Focus'
    },
    sessions: [
      {
        id: 1,
        title: 'Session 01',
        excerpt:
          'The opening lecture explains why the Diamond Sutra is regarded as a highest teaching, then lingers on the image of the vajra itself: something able to break delusion while revealing the indestructible Buddha-nature already present within the body and mind.',
        paragraphCount: 133,
        charCount: 15476,
        focus: 'Why the sutra matters'
      },
      {
        id: 2,
        title: 'Session 02',
        excerpt:
          'This session reflects on leaving home and preserving the original resolve to practice. The teacher warns that fame, comfort, and worldly entanglements can corrupt an initially pure aspiration unless renunciation is renewed inwardly after formal ordination.',
        paragraphCount: 89,
        charCount: 12385,
        focus: 'Protecting the first aspiration'
      },
      {
        id: 3,
        title: 'Session 03',
        excerpt:
          'Beginning from Subhuti rising before the Buddha, the lecture moves into layered commentary and symbolic explanations of inner cultivation. Textual exegesis is joined to a discussion of the “middle field” and the body as a site of practice.',
        paragraphCount: 148,
        charCount: 13467,
        focus: 'Subhuti and inner cultivation'
      },
      {
        id: 4,
        title: 'Session 04',
        excerpt:
          'Here the emphasis falls on self-liberation: one\'s own nature must cross itself over. Buddhas and immortals may teach, but no one can liberate another in their place; awakening requires personal realization and direct practice.',
        paragraphCount: 124,
        charCount: 17236,
        focus: 'Self-liberation through one’s own nature'
      },
      {
        id: 5,
        title: 'Session 05',
        excerpt:
          'The teacher explores non-abiding generosity, insisting that true giving is not calculated, possessive, or performed for future reward. Merit becomes immeasurable only when giving is freed from attachment to signs and self-conscious dedication.',
        paragraphCount: 118,
        charCount: 13789,
        focus: 'Signless giving'
      },
      {
        id: 6,
        title: 'Session 06',
        excerpt:
          'This lecture turns to seeing things as they are: every form is empty and unreliable, while the Dharma-body cannot be found in physical marks. To perceive the Tathagata rightly is to see through appearances rather than cling to them.',
        paragraphCount: 99,
        charCount: 13344,
        focus: 'Seeing beyond appearances'
      },
      {
        id: 7,
        title: 'Session 07',
        excerpt:
          'Using the image of the raft, the session explains that teachings are expedient means for crossing the river of suffering. One should neither cling to dharmas nor cling to what is “non-dharma,” because both attachments obstruct the farther shore.',
        paragraphCount: 124,
        charCount: 14371,
        focus: 'The Dharma as a raft'
      },
      {
        id: 8,
        title: 'Session 08',
        excerpt:
          'This section emphasizes that supreme awakening arises in accordance with Dharma, and that the Diamond Sutra is presented as a source from which Buddhas and awakening itself emerge. The lecture frames the text as a living matrix for Buddhahood.',
        paragraphCount: 116,
        charCount: 14272,
        focus: 'Awakening born from Dharma'
      },
      {
        id: 9,
        title: 'Session 09',
        excerpt:
          'Drawing on Huineng, the lecture discusses karmic bonds across the three realms and explains liberation from cyclical coming and going. The point is not travel between realms, but the gradual exhaustion of the forces that keep beings bound to rebirth.',
        paragraphCount: 96,
        charCount: 14707,
        focus: 'Untying karmic bondage'
      },
      {
        id: 10,
        title: 'Session 10',
        excerpt:
          'The question of “adorning the Buddha-land” is reinterpreted through prajna. A pure land is not ornamented by visible splendor alone, but by the signless Dharma-body and by wisdom that loosens attachment to conditioned forms.',
        paragraphCount: 92,
        charCount: 14773,
        focus: 'What truly adorns a pure land'
      },
      {
        id: 11,
        title: 'Session 11',
        excerpt:
          'Continuing the discussion of purity, this lecture examines how the five desires pull the mind outward through sights, sounds, smells, tastes, and tactile pleasures. A purified mind, not sensory indulgence, is what makes a Buddha-land possible.',
        paragraphCount: 92,
        charCount: 12854,
        focus: 'Purity amid the five desires'
      },
      {
        id: 12,
        title: 'Session 12',
        excerpt:
          'The “right teaching” is honored by turning away from the search for Buddha outside the mind. The lecture contrasts external seeking with the path of realizing one\'s own nature, insisting that the orthodox path is inward rather than merely devotional in form.',
        paragraphCount: 116,
        charCount: 14059,
        focus: 'Seeking Buddha within'
      },
      {
        id: 13,
        title: 'Session 13',
        excerpt:
          'The famous thirty-two marks of a Buddha are read symbolically rather than physically. The teacher links them to cultivating the six perfections through the faculties, shifting the emphasis from sacred appearance to disciplined transformation.',
        paragraphCount: 118,
        charCount: 14099,
        focus: 'Re-reading the thirty-two marks'
      },
      {
        id: 14,
        title: 'Session 14',
        excerpt:
          'This lecture focuses on “non-mark” and “true mark,” explaining that real suchness is precisely the mark of no fixed mark. The discussion leans on Nirvana Sutra language to show that reality cannot be captured by ordinary conceptual appearances.',
        paragraphCount: 120,
        charCount: 13152,
        focus: 'True mark as signlessness'
      },
      {
        id: 15,
        title: 'Session 15',
        excerpt:
          'The story of the patient sage cut by King Kali becomes a study in forbearance. The teacher highlights endurance without anger, showing that genuine patience is measured by the absence of retaliatory mind even in extreme bodily suffering.',
        paragraphCount: 97,
        charCount: 13046,
        focus: 'The perfection of patience'
      },
      {
        id: 16,
        title: 'Session 16',
        excerpt:
          'The Buddha\'s “true words, real words, such words” are unpacked in detail. Truthful speech is presented as language without deception, exaggeration, or strangeness: words that accord with reality and therefore inspire trust and stable faith.',
        paragraphCount: 102,
        charCount: 11270,
        focus: 'The meaning of truthful speech'
      },
      {
        id: 17,
        title: 'Session 17',
        excerpt:
          'This session praises the inconceivable merit of explaining and upholding the Diamond Sutra. Deep understanding is joined to compassionate action: insight into signlessness should become conduct that benefits others rather than private realization alone.',
        paragraphCount: 101,
        charCount: 12190,
        focus: 'Merit in receiving and teaching the sutra'
      },
      {
        id: 18,
        title: 'Session 18',
        excerpt:
          'The lecture distinguishes provisional teachings from the ultimate meaning, likening expedient instruction to soothing a child before revealing the full truth. Practitioners are urged to rely on teachings of definitive meaning rather than stop at lesser formulations.',
        paragraphCount: 107,
        charCount: 16803,
        focus: 'Provisional and ultimate teaching'
      },
      {
        id: 19,
        title: 'Session 19',
        excerpt:
          'Emptiness itself becomes the theme here: not only are dharmas empty, but emptiness too must be emptied. The lecture uses the idea of “emptiness of emptiness” to prevent attachment to emptiness as another subtle conceptual refuge.',
        paragraphCount: 100,
        charCount: 13639,
        focus: 'The emptiness of emptiness'
      },
      {
        id: 20,
        title: 'Session 20',
        excerpt:
          'Drawing on the Nirvana Sutra, the teacher expounds the four reliances: rely on Dharma, not persons; on wisdom, not mere consciousness; on meaning, not words. The lecture stresses interpretation guided by reality rather than surface phrasing.',
        paragraphCount: 120,
        charCount: 15575,
        focus: 'The four reliances'
      },
      {
        id: 21,
        title: 'Session 21',
        excerpt:
          'The adornment of the Buddha-land is revisited through a more interior lens. The true field of awakening is the purified mind itself, while ordinary beings mistake external magnificence for spiritual accomplishment.',
        paragraphCount: 89,
        charCount: 10890,
        focus: 'The pure land of the mind'
      },
      {
        id: 22,
        title: 'Session 22',
        excerpt:
          'By contemplating the sands of the Ganges, the lecture points toward measureless scale and immeasurable merit. The comparison serves to loosen finite calculation and to hint at vow, world, and merit beyond ordinary numerical grasp.',
        paragraphCount: 108,
        charCount: 12243,
        focus: 'Immeasurable merit'
      },
      {
        id: 23,
        title: 'Session 23',
        excerpt:
          'This session explores the “Treasury of the True Dharma Eye,” also called the pure Dharma eye. The emphasis falls on direct mind-to-mind realization: what is transmitted cannot be exhausted by verbal instruction alone.',
        paragraphCount: 100,
        charCount: 12535,
        focus: 'The treasury of the Dharma eye'
      },
      {
        id: 24,
        title: 'Session 24',
        excerpt:
          'Supreme awakening is discussed as a path open to all beings because Buddha-nature has no high or low. Although bodies and circumstances differ, cultivation of the six perfections reveals a fundamental equality at the level of true nature.',
        paragraphCount: 121,
        charCount: 12645,
        focus: 'Equality in Buddha-nature'
      },
      {
        id: 25,
        title: 'Session 25',
        excerpt:
          'The teacher pauses to explain why Lü Chunyang\'s commentary is valued so highly, even though he is not usually classed as a Buddhist commentator. The lecture argues that real insight into the sutra can appear across traditional boundaries.',
        paragraphCount: 106,
        charCount: 13549,
        focus: 'Why this commentary is treasured'
      },
      {
        id: 26,
        title: 'Session 26',
        excerpt:
          'A brief but substantial transitional session centers on clarifying a single difficult line. Even this compressed lecture continues the wider project of careful exegesis: slow down, examine the wording, and avoid hasty attachment to surface meaning.',
        paragraphCount: 111,
        charCount: 13226,
        focus: 'Clarifying a difficult line'
      },
      {
        id: 27,
        title: 'Session 27',
        excerpt:
          'The closing session returns to non-appearance, urging listeners to trust the teaching of signlessness and to break mistaken views tied to form. True Dharma-mark is said to arise only when one no longer produces attachment to marks at all.',
        paragraphCount: 66,
        charCount: 9112,
        focus: 'Ending in signlessness'
      }
    ]
  }
};
