import type { Locale } from './siteData';

export type PlatformLecturePage = {
  id: number;
  zhTitle: string;
  zhSummary: string;
  zhFull?: string[];
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

const platformPlaylistUrl = 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12';

export const platformAvailableLectureIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103] as const;
export const platformEnglishLectureIds = [1, 2, 3] as const;

export const platformLecturePages: Record<number, PlatformLecturePage> = {
  "1": {
    "id": 1,
    "zhTitle": "六祖壇經講說第 001 講：行由、法寶與佛性無南北",
    "zhSummary": "從惠能承接禪宗第六祖與「法寶」題義說起，指出《壇經》重在直指本心、見性成佛。南北差別被用來破除身分成見的執著，並以欲與貪欲之辨勸學人把聞經落實為除心病的修行。",
    "enTitle": "Platform Sutra Lecture 001: Biography, Dharma Treasure, and Buddha-Nature Beyond North and South",
    "enSummary": "The lecture introduces Huineng as the Sixth Patriarch and explains the Platform Sutra as a precious Dharma treasure centered on seeing the nature. It uses the north-south exchange and the distinction between proper desire and greed to stress practice over mere recitation.",
    "enFull": [
      "The first lecture begins by explaining why the Platform Sutra series was re-recorded. Earlier recording conditions were incomplete, and some talks were not fully preserved on video. Because many people later asked for recordings, the teacher returned to the material and recorded it again. This makes the lecture archive itself a work of preservation.",
      "The lecture then introduces “the Sixth Patriarch” as Huineng, the sixth patriarch of Chinese Chan. The Chan lineage is traced from the Buddha to Mahakasyapa, through the Indian patriarchs, to Bodhidharma, who came to China and became the first patriarch of Chinese Chan. Huineng inherits this lineage and is therefore called the Sixth Patriarch.",
      "The point of the opening is not to dwell on biography alone. It is to prepare the listener for the Platform Sutra’s central aim: Chan points directly to the mind and leads people to see their nature. The famous teaching that the bodhi self-nature is originally pure is not just doctrine; it is the lens through which the whole archive should be read."
    ]
  },
  "2": {
    "id": 2,
    "zhTitle": "六祖壇經講說第 002 講：般若、彼岸與黃梅求法",
    "zhSummary": "般若波羅蜜被解作到彼岸的妙智慧，重點不在音讀爭辯，而在離執、照破貪瞋癡。惠能遠赴黃梅求佛的因緣，顯出道心須經辱罵、磨坊勞作與師徒試煉而堅固。",
    "enTitle": "Platform Sutra Lecture 002: Prajna, the Other Shore, and Huineng at Huangmei",
    "enSummary": "The lecture explains prajna paramita as the wondrous wisdom that reaches the other shore rather than a term to argue over. It then follows Huineng to Huangmei, where insults, millroom labor, and testing reveal the firmness of his resolve.",
    "enFull": [
      "The second lecture continues the prajna teaching shared by the Platform Sutra and the Diamond Sutra. The teacher first warns that one should not become trapped in disputes about pronunciation. Different regions and languages pronounce terms differently; what matters is not attachment to sound, but avoiding misunderstanding of the meaning.",
      "Prajna means wisdom, but not ordinary cleverness. It is the wondrous wisdom that illuminates delusion and leads people away from attachment. If one only speaks of emptiness or prajna while the mind remains full of greed, anger, and delusion, then, as the Platform Sutra says, it is like talking about food without becoming full.",
      "Paramita means reaching the other shore. The teacher explains that the other shore is the state of leaving birth-and-death attachment and returning to the pure nature. This is not reached by words or terminology alone, but by practicing non-abiding in the actual movements of daily thought."
    ]
  },
  "3": {
    "id": 3,
    "zhTitle": "六祖壇經講說第 003 講：師徒磨鍊、讚毀與調伏自心",
    "zhSummary": "師父的讚歎與嫌責都被視為磨鍊弟子的因緣，學人應先反觀自己是否生出得意或怨懟。講說進一步分辨喜怒哀樂的中節與失度，並以六識、七識、八識說明心念如何被境界牽動。",
    "enTitle": "Platform Sutra Lecture 003: Teacherly Testing, Praise, Blame, and the Mind",
    "enSummary": "Praise and blame from a teacher are treated as conditions for training, not as occasions for pride or resentment. The lecture also examines measured and excessive emotion through the sixth, seventh, and eighth consciousnesses.",
    "enFull": [
      "The third lecture begins with the conditions between teacher and student and the attitude needed to receive instruction. Whether a student is praised or criticized by the teacher, the first response should not be outward reaction but inward reflection: is the praise truly deserved, and does the criticism reveal a real fault?",
      "If praise immediately produces delight and arrogance, one is mistaking external approval for accomplishment. If criticism produces resentment and retreat, the mark of self is still strong. A true student of the Way uses both praise and blame as conditions for seeing the mind.",
      "Thus the third lecture teaches how to receive the Platform Sutra: with humility, self-examination, and correction rather than self-defense. In that way both praise and blame become a place of practice, and the teacher-student relationship becomes a field for refining prajna."
    ]
  },
  "4": {
    "id": 4,
    "zhTitle": "六祖壇經講說第 004 講：清淨識、雲日譬喻與神秀偈",
    "zhSummary": "第九清淨識被譬喻為雲層上常照的太陽，凡聖不增不減，只因妄念雲覆而顯隱不同。神秀偈語的利益被肯定為有漏福德與方便教化，但仍未被判為直見菩提本性的究竟。",
    "enTitle": "Platform Sutra Lecture 004: Pure Consciousness, the Sun Behind Clouds, and Shenxiu's Verse",
    "enSummary": "The ninth pure consciousness is compared to the sun above the clouds, unchanged in sages and ordinary beings but obscured by deluded thought. Shenxiu's verse is treated as beneficial worldly merit and skillful guidance, yet not as the final seeing of bodhi-nature."
  },
  "5": {
    "id": 5,
    "zhTitle": "六祖壇經講說第 005 講：慧可安心、無滯萬法與本來無一物",
    "zhSummary": "慧可向達摩求安心的公案說明心不可得，真正的安穩來自於不滯著萬法與如如不動。惠能「本來無一物」之偈被用來對照神秀拂塵偈，顯示離相見性比逐境拂拭更為透徹。",
    "enTitle": "Platform Sutra Lecture 005: Huike's Pacified Mind and No Thing from the Beginning",
    "enSummary": "Huike's request for peace of mind shows that the mind cannot be grasped, so peace depends on not being detained by phenomena. Huineng's no-thing verse is contrasted with Shenxiu's dust-wiping verse to clarify seeing nature beyond forms."
  },
  "6": {
    "id": 6,
    "zhTitle": "六祖壇經講說第 006 講：破相取人、六根六塵與自性能生萬法",
    "zhSummary": "古聖賢容貌不齊的例子破除以貌取人的習氣，提醒修行不可用外表判定賢愚。六根對六塵時若不被好惡牽轉，便可體會不生不滅的真性與自性能生萬法的義理。",
    "enTitle": "Platform Sutra Lecture 006: Beyond Appearance, the Six Sense Fields, and Self-Nature",
    "enSummary": "Examples of unattractive yet worthy sages challenge the habit of judging spiritual capacity by appearance. When the six faculties meet the six objects without being driven by liking and dislike, the lecture points to the unborn nature that gives rise to phenomena."
  },
  "7": {
    "id": 7,
    "zhTitle": "六祖壇經講說第 007 講：本心見性、天人師與西方密義",
    "zhSummary": "五祖認可惠能見本心見本性，進而說明丈夫、天人師等尊號皆指向覺悟者的德相。講說再以大道無情、十惡八邪與十萬八千里等語，將西方遠近會歸到自心迷悟的差別。",
    "enTitle": "Platform Sutra Lecture 007: Original Mind, Teacher of Gods and Humans, and the Inner West",
    "enSummary": "Huineng's recognition by the Fifth Patriarch becomes the setting for explaining original mind, original nature, and titles such as teacher of gods and humans. The lecture then reads phrases about no-feeling, ten evils, eight deviations, and one hundred eight thousand miles as pointing back to delusion and awakening in the mind."
  },
  "8": {
    "id": 8,
    "zhTitle": "六祖壇經講說第 008 講：不立文字、戒素密意與破除口頭執相",
    "zhSummary": "不立文字並不是毀棄經教或拒絕說明，而是要透過文字會取其中義理，不被名相黏住。戒律、素食、密意與十萬八千里的解釋都被用來警醒口頭禪與迷信式理解的偏差。",
    "enTitle": "Platform Sutra Lecture 008: No Dependence on Words, Precepts, and Hidden Meaning",
    "enSummary": "No dependence on words is not a rejection of scriptures or explanation, but a warning not to cling to verbal forms. Discussions of precepts, vegetarian practice, hidden meaning, and the distance to the West correct merely verbal or superstitious readings."
  },
  "9": {
    "id": 9,
    "zhTitle": "六祖壇經講說第 009 講：密語密意、三毒與清淨禪",
    "zhSummary": "惠明所問的密語密意被歸結為世人迷悟差別，提醒讀經須辨別實說、方便與象徵語。三大阿僧祇劫被依達摩破相論詮釋為貪瞋癡三毒，火宅、水難與觀音名號等譬喻也回到熄滅內心無明。",
    "enTitle": "Platform Sutra Lecture 009: Hidden Meaning, the Three Poisons, and Pure Chan",
    "enSummary": "Huiming's question about secret words is answered through the difference between delusion and awakening, with attention to literal, expedient, and symbolic language. The three asaṃkhyeya kalpas are read through Bodhidharma's Treatise on Breaking Forms as the three poisons, and scriptural fire and water images are brought back to inner affliction."
  },
  "10": {
    "id": 10,
    "zhTitle": "六祖壇經講說第 010 講：行住坐臥之禪、真妄二心與頓教",
    "zhSummary": "禪不拘於坐相，行住坐臥皆可成為修行處，只是凡夫、小乘、大乘與如來清淨禪的深淺不同。講說分辨真心與妄心，並以重戒罪、一闡提與頓悟入道說明不污染自性的重要。",
    "enTitle": "Platform Sutra Lecture 010: Chan in All Postures, True and Deluded Mind, and Sudden Teaching",
    "enSummary": "Chan is not confined to a sitting posture, because walking, standing, sitting, and lying down can all become fields of practice. The lecture distinguishes true mind from deluded mind while warning through grave offenses, icchantika teaching, and the sudden path against contaminating self-nature."
  },
  "11": {
    "id": 11,
    "zhTitle": "六祖壇經講說第 011 講：聖人謙卑、金剛經與心口相應念佛",
    "zhSummary": "六祖說自己不會佛法，與孔子、佛陀的無所得謙辭相互映照，顯示真正聖人不以名相自居。念佛須口念心惟、耳聽智觀並發菩提心，否則只剩聲音而不能度心中眾生。",
    "enTitle": "Platform Sutra Lecture 011: Sage Humility, the Diamond Sutra, and Mindful Recitation",
    "enSummary": "Huineng's statement that he does not understand the Dharma is read alongside Confucius and the Buddha as a lesson in non-possessive humility. Recitation of the Buddha's name must join mouth, mind, hearing, wisdom, and bodhi resolve, otherwise it remains only sound."
  },
  "12": {
    "id": 12,
    "zhTitle": "六祖壇經講說第 012 講：釋尊家世、三時殿與大乘真空",
    "zhSummary": "佛說十二遊經與佛光大辭典等材料被用來考釋迦太子的家世、三位夫人與三時殿背景。講說隨後轉入大乘真空，指出非空之空不是斷滅空，而是離相無住的心量。",
    "enTitle": "Platform Sutra Lecture 012: The Buddha's Household, Three-Season Palace, and True Emptiness",
    "enSummary": "The lecture reviews sources on Prince Siddhartha's household, the three wives, and the three-season palace. It then turns to Mahayana true emptiness, explaining that true emptiness is not nihilism but non-abiding freedom from forms."
  },
  "13": {
    "id": 13,
    "zhTitle": "六祖壇經講說第 013 講：一即一切、無所住心與煩惱求菩提",
    "zhSummary": "華嚴與永嘉禪師的譬喻說明一即一切、一法含攝一切法，並把修行樞紐歸到無所住心。講說也批判自封名師、貪收徒眾與貪供養的危險，提醒菩提須在煩惱境中反照而求。",
    "enTitle": "Platform Sutra Lecture 013: One Is All, Non-Abiding Mind, and Bodhi Amid Affliction",
    "enSummary": "Huayan and Yongjia images present one as containing all dharmas and return the point of practice to the non-abiding mind. The lecture also criticizes self-appointed teachers, acquisitive discipleship, and greed for offerings while locating bodhi within the work of facing affliction."
  },
  "14": {
    "id": 14,
    "zhTitle": "六祖壇經講說第 014 講：呂祖詩語、象徵數目與持經實行",
    "zhSummary": "呂祖對「兩人守一土」等語的解釋，帶出坐禪、放下心念與一念不生等義理。八萬四千、天上一日與經中數目被說為譬喻或密意，勸人持《金剛經》時依教奉行而非執著字面。",
    "enTitle": "Platform Sutra Lecture 014: Lu Zu's Verses, Symbolic Numbers, and Practicing Scripture",
    "enSummary": "Lu Zu's explanation of cryptic lines opens into teachings on sitting Chan, letting the mind settle, and the meaning of one thought not arising. Numbers such as eighty-four thousand and heavenly days are treated as figurative or hidden meanings, so Diamond Sutra practice must be lived rather than literalized."
  },
  "15": {
    "id": 15,
    "zhTitle": "六祖壇經講說第 015 講：金礦佛性、明師鍛鍊與末法持經",
    "zhSummary": "金在山中須遇冶金師鍛鍊，譬喻四大身中的佛性寶也要藉智慧、覺悟與明師引導而顯發。講說再論末法持經功德、狐疑不信與受戒規矩，提醒少量供養若具真心也能成就深重善根。",
    "enTitle": "Platform Sutra Lecture 015: Gold Ore, Buddha-Nature, and Sutra Practice in the Degenerate Age",
    "enSummary": "Gold hidden in a mountain must meet a skilled refiner, just as Buddha-nature in the four-element body needs wisdom, awakening, and guidance to be revealed. The lecture also discusses sutra merit in the degenerate age, doubt, precept responsibilities, and the power of sincere small offerings."
  },
  "16": {
    "id": 16,
    "zhTitle": "六祖壇經講說第 016 講：忍辱仙人、法水洗垢與十二部經",
    "zhSummary": "忍辱仙人被歌利王節節支解的經文，提醒說經不可執著年歲與字面，須小心引例使義理圓滿。法水洗垢的譬喻說明諸法性一而說法各異，並引出十二部經中重頌、孤起等分類。",
    "enTitle": "Platform Sutra Lecture 016: The Patience Sage, Dharma-Water, and the Twelve Divisions",
    "enSummary": "The story of the patience sage cut apart by King Kali warns against clinging to dates and literal wording when explaining scripture. The image of Dharma-water washing away defilement shows one Dharma-nature expressed in varied teachings and leads into the twelve scriptural divisions."
  },
  "17": {
    "id": 17,
    "zhTitle": "六祖壇經講說第 017 講：十二部經、文本差異與勿輕毀初學",
    "zhSummary": "十二部經不是十二本經，而是經典中依因緣、譬喻、重頌等功能所作的分類。華嚴本、敦煌本與方言文詞差異被用來說明依義不依字，也勸學人不要輕毀他宗與初學者。",
    "enTitle": "Platform Sutra Lecture 017: Scriptural Divisions, Textual Variants, and Respect for Beginners",
    "enSummary": "The twelve divisions are explained not as twelve books but as functional categories such as causes, conditions, parables, and verses within scripture. Differences among Huayan versions, Dunhuang texts, and regional wording illustrate reliance on meaning rather than letters and support caution against disparaging other practices or beginners."
  },
  "18": {
    "id": 18,
    "zhTitle": "六祖壇經講說第 018 講：應機說法、宿業病緣與無念正義",
    "zhSummary": "同一句法不必人人照用，因人、因地、因時的根機不同，善知識須像取用工具般應機施教。宿業、病苦與三惡道的說明提醒今生要及時修行，而無念不是呆滯無心，是不被境界黏住的正念。",
    "enTitle": "Platform Sutra Lecture 018: Teaching by Capacity, Karmic Illness, and True No-Thought",
    "enSummary": "A teaching need not be applied identically to everyone, because capacities, circumstances, and timing differ. Reflections on karmic illness and the lower realms urge practice in this life, while no-thought is clarified as nonattachment rather than blankness."
  },
  "19": {
    "id": 19,
    "zhTitle": "六祖壇經講說第 019 講：染著我所、宗派互尊與三障",
    "zhSummary": "染著與我所被解作愛欲和外物侵佔其心，使人把身外萬物誤認為自我所有。講說勸五教隨俗互尊、勿因宗派而誹謗，並分辨魔障、業障與報障對修道的牽制。",
    "enTitle": "Platform Sutra Lecture 019: Attachment, Possession, Mutual Respect, and Three Obstacles",
    "enSummary": "Attachment and possession are explained as desire and external objects taking over the mind, so one mistakes what is outside the body as one's own. The lecture urges mutual respect among traditions and distinguishes demonic, karmic, and retributive obstacles to practice."
  },
  "20": {
    "id": 20,
    "zhTitle": "六祖壇經講說第 020 講：道在身心、人道天道與頓法結示",
    "zhSummary": "道不可離身心片刻，凡夫若向外望天求保佑，便錯過了菩提只向內心覓的要點。人道與天道不離世間倫理，故離人道求天道如求兔角，並由此收束大梵寺頓法開示。",
    "enTitle": "Platform Sutra Lecture 020: The Way Within Body-Mind, Human Ethics, and the Sudden Teaching",
    "enSummary": "The Way cannot be separated from body and mind, so seeking protection outwardly misses the point of looking within for bodhi. Human and heavenly paths are tied to worldly ethics, making a search for heaven apart from human conduct like seeking horns on a rabbit."
  },
  "21": {
    "id": 21,
    "zhTitle": "六祖壇經講說第 021 講：梁武帝問功德、福德方便與羅漢考證",
    "zhSummary": "梁武帝造寺、供僧、設齋而被達摩判為無功德，成為分辨福德、功德與方便善法的核心案例。講說指出因果不昧與無心修德的差別，並轉入十六羅漢、十八羅漢傳承的考證。",
    "enTitle": "Platform Sutra Lecture 021: Emperor Wu, Merit and Blessing, and the Arhat Inquiry",
    "enSummary": "Emperor Wu's temple building, offerings, and vegetarian feasts become the central case for distinguishing blessing, merit, and skillful good deeds. The lecture contrasts karmic causality with virtue free of self-seeking and then begins examining traditions of the sixteen and eighteen arhats."
  },
  "22": {
    "id": 22,
    "zhTitle": "六祖壇經講說第 022 講：十六十八羅漢、八邪與災祥預言",
    "zhSummary": "十六羅漢與十八羅漢的不同說法被逐一考證，包含法住記、度友尊者與乾隆考證等來源。講說再回到八邪與西方遠近的心地義，嚴斥以靈感、災祥與預言恐嚇眾生的邪說。",
    "enTitle": "Platform Sutra Lecture 022: Sixteen and Eighteen Arhats, Eight Deviations, and Prophecy Claims",
    "enSummary": "Different accounts of the sixteen and eighteen arhats are examined through sources such as the Record of Abiding Dharma, the elder Nandimitra, and later Qing discussion. The lecture then returns to the mental meaning of eight deviations and the distance to the West while strongly rejecting frightening prophecy and omen claims."
  },
  "23": {
    "id": 23,
    "zhTitle": "六祖壇經講說第 023 講：真金不退、殺戒弘戒與了生死",
    "zhSummary": "真金一成不再變回礦石，譬喻成佛與見性不退轉，也破除活佛降世、貪財受供的錯解。殺生戒與弘戒艱難被放在世俗嫌正法的背景中討論，勸人不要被名利牽引而忘了了生死。",
    "enTitle": "Platform Sutra Lecture 023: Refined Gold, the Killing Precept, and Liberation from Birth and Death",
    "enSummary": "Refined gold that does not return to ore serves as an image for non-retrogression in awakening and corrects confused claims about living Buddhas and greedy offerings. The killing precept and the difficulty of teaching discipline are discussed against the background of worldly resistance to right Dharma."
  },
  "24": {
    "id": 24,
    "zhTitle": "六祖壇經講說第 024 講：盜淫十惡、八邪與不信因果",
    "zhSummary": "十惡中身業的盜與淫被仔細分辨，包含不與取、邪淫與在家出家戒相的差異。八邪中最嚴重的是撥無因果的邪見，因它使人誤認善惡無報，並滋長為利說法等過失。",
    "enTitle": "Platform Sutra Lecture 024: Stealing, Sexual Misconduct, Eight Deviations, and Causality",
    "enSummary": "The bodily evils of stealing and sexual misconduct are carefully distinguished, including taking what is not given and differences between lay and monastic precepts. Among the eight deviations, denial of causality is treated as especially harmful because it erodes moral accountability and supports profit-driven preaching."
  },
  "25": {
    "id": 25,
    "zhTitle": "六祖壇經講說第 025 講：說法功德、正命念佛與身心自性",
    "zhSummary": "出來說法未必就是功德無量，若夾雜名利、邪命或誤導眾生，反而可能成為過失。念佛求生西方須行方便善事、心口相應，並由自性在身心中的作用理解十善與十惡的去向。",
    "enTitle": "Platform Sutra Lecture 025: Teaching Merit, Right Livelihood, Recitation, and Self-Nature",
    "enSummary": "Public teaching is not automatically immeasurable merit, because fame, profit, wrong livelihood, or misleading others can turn it into fault. Recitation for rebirth in the West must be joined with skillful good conduct and mind-mouth accord, understood through self-nature active in body and mind."
  },
  "26": {
    "id": 26,
    "zhTitle": "六祖壇經講說第 026 講：淨施、回向福德與無住布施",
    "zhSummary": "淨施是不求名譽、福利與報答的布施，與為福報而作的妄心布施不同。回向能令父母妻兒得福德，卻仍須回到《金剛經》無住生清淨心的功德方向。",
    "enTitle": "Platform Sutra Lecture 026: Pure Giving, Dedication, Blessing, and Non-Abiding Generosity",
    "enSummary": "Pure giving is defined as generosity that does not seek reputation, benefit, repayment, or worldly reward. Dedication may bring blessings to parents and family, yet the lecture returns to the Diamond Sutra ideal of giving from a non-abiding pure mind."
  },
  "27": {
    "id": 27,
    "zhTitle": "六祖壇經講說第 027 講：平等慈悲、度惡眾生與依法辨邪正",
    "zhSummary": "平等心不是只度善人而拒絕有過失的人，蓮華色女、鬼子母等例子被用來說明惡人更須慈悲引導。講說又依經分辨鬼神、阿修羅與威力靈感，提醒學人依法不依人，不被恐怖神通迷惑。",
    "enTitle": "Platform Sutra Lecture 027: Equal Compassion, Helping Wrongdoers, and Discernment by Dharma",
    "enSummary": "Equality of mind does not mean helping only the already-good, and examples such as Utpalavarna and Hariti show why wrongdoers also need compassionate guidance. The lecture uses scripture to distinguish spirits, asuras, power, and fearsome influence, urging reliance on Dharma rather than persons or marvels."
  },
  "28": {
    "id": 28,
    "zhTitle": "六祖壇經講說第 028 講：仙佛塵緣、廟神正邪與在家修行",
    "zhSummary": "仙佛不染塵緣，不能簡單等同於常住廟中的神靈或降筆顯化，故須分辨正神、邪神、鬼魔與應化方便。愚人依賴神明保佑而不能自立自修，講說因而強調在家守五倫、行正道也能修行。",
    "enTitle": "Platform Sutra Lecture 028: Immortals, Temple Spirits, Discernment, and Lay Practice",
    "enSummary": "Immortals and Buddhas are described as unstained by worldly entanglement, so they should not be naively equated with every temple spirit, spirit writing, or display of power. Reliance on divine protection blocks self-cultivation, and the lecture therefore affirms lay practice through ethical relations and the right path."
  },
  "29": {
    "id": 29,
    "zhTitle": "六祖壇經講說第 029 講：維摩經論、菩薩階位與慈航清規",
    "zhSummary": "維摩經的地位引出經與論的分辨，並說明果地菩薩、因地菩薩與願地菩薩等不同階位。貧富都各有修道處，弘戒者更須甘於寂寞，慈航法師與戒律學綱要被舉為清規與弘戒的參照。",
    "enTitle": "Platform Sutra Lecture 029: Vimalakirti, Sutra and Treatise, Bodhisattva Levels, and Cihang's Discipline",
    "enSummary": "The status of the Vimalakirti Sutra leads to a distinction between sutra and treatise and to an explanation of fruit-stage, cause-stage, and vow-stage bodhisattvas. Poverty and wealth each provide conditions for practice, while Cihang and discussions of discipline illustrate the loneliness required for teaching precepts."
  },
  "30": {
    "id": 30,
    "zhTitle": "六祖壇經講說第 030 講：海潮音批判、輪藏由來與守法心平",
    "zhSummary": "《海潮音》批評誦經賺錢與行儀粗俗的亂象，被用來提醒佛教形象不可被職業化經懺敗壞。講說同時分辨道教派門、傅大士與輪藏由來，並勸在家學人守法律、心平氣和地修道。",
    "enTitle": "Platform Sutra Lecture 030: Haichaoyin's Critique, Revolving Repositories, and Peaceful Lawfulness",
    "enSummary": "A passage from Haichaoyin criticizes paid chanting and crude conduct, warning that professionalized rituals can damage the public face of Buddhism. The lecture also distinguishes Daoist branches, explains Fu Dashi and revolving scripture repositories, and urges lay practitioners to keep the law with a calm mind."
  },
  "31": {
    "id": 31,
    "zhTitle": "六祖壇經講說第 031 講：心平持戒、八戒齋與大妄語",
    "zhSummary": "「心平何勞持戒」不是廢戒，而是說不貪不瞋不癡的平等心自然遠離犯戒因緣。八戒齋、供養分寸與波羅夷罪被逐項說明，並警惕自稱明師活佛、未得謂得的大妄語。",
    "enTitle": "Platform Sutra Lecture 031: Even Mind, Eight Precepts, and Great False Speech",
    "enSummary": "The line about not needing precepts when the mind is even does not abolish discipline, but points to a mind free of greed, anger, and delusion. The lecture explains the eight precepts, proper offerings, and pārājika offenses while warning against claims to be a living Buddha or enlightened teacher."
  },
  "32": {
    "id": 32,
    "zhTitle": "六祖壇經講說第 032 講：同情行義、安忍不動與無求行善",
    "zhSummary": "行義須從真正同情出發，把天下父母子女視如自己的父母子女，而不是以高下心施捨。安忍不是外表不爭而內心憤怒，而是心不動、能生悲憫，並以無心求報的方式行善。",
    "enTitle": "Platform Sutra Lecture 032: Compassionate Service, Patient Nonreactivity, and Help Without Reward",
    "enSummary": "Charitable action should arise from genuine fellow-feeling, seeing others' parents and children as one's own rather than giving from superiority. Patience is not suppressed anger but an unmoving mind that can respond with compassion and help without seeking repayment."
  },
  "33": {
    "id": 33,
    "zhTitle": "六祖壇經講說第 033 講：行善動機、念佛後益與自性三寶伏筆",
    "zhSummary": "布施與說法都要檢點動機，若為利益、名聲或攻擊個人，善事也可能帶來副作用。念佛、拜佛與誦經對後天戒惡修善有益，卻仍須回到是心是佛與自性三寶的根本義。",
    "enTitle": "Platform Sutra Lecture 033: Motives in Good Works, Recitation Benefits, and the Three Jewels of Self-Nature",
    "enSummary": "Giving and teaching require examination of motive, because acts done for profit, fame, or personal attack can have harmful side effects. Reciting, bowing, and chanting may support ordinary moral restraint, yet the deeper point returns to mind as Buddha and the Three Jewels of self-nature."
  },
  "34": {
    "id": 34,
    "zhTitle": "六祖壇經講說第 034 講：自性三寶、定慧相資與直心道場",
    "zhSummary": "自性三寶被解作覺、正、淨，皈依佛法僧就是在自心中離迷、離邪、離染。講說進一步指出禪定與智慧須相資相應，避免狂慧或枯定，並以直心作為入道的道場。",
    "enTitle": "Platform Sutra Lecture 034: The Three Jewels of Self-Nature, Concentration and Wisdom, and Straight Mind",
    "enSummary": "The Three Jewels of self-nature are explained as awakening, rightness, and purity, so refuge means leaving delusion, deviation, and defilement in one's own mind. The lecture further links concentration with wisdom, warns against ungrounded cleverness or stagnant stillness, and presents straight mind as the place of practice."
  },
  "35": {
    "id": 35,
    "zhTitle": "六祖壇經講說第 035 講：直心、一行三昧與坐禪正義",
    "zhSummary": "從「直心是道場」說到一行三昧，強調言行相應而非口說道心、內懷曲折。進一步破斥枯坐看心、著空求靜的偏差，指出行住坐臥皆須六根清淨、心不妄動。",
    "enTitle": "Platform Sutra Lecture 035: Straight Mind, One-Practice Samadhi, and True Sitting",
    "enSummary": "The lecture moves from straight mind as the place of practice to one-practice samadhi, stressing conduct that matches speech rather than crooked intent. It rejects blank sitting and attachment to quiet emptiness, teaching that walking, standing, sitting, and lying down all require purified senses and an unmoving mind."
  },
  "36": {
    "id": 36,
    "zhTitle": "六祖壇經講說第 036 講：無相、真空與無住心",
    "zhSummary": "本講以無念為宗、無相為體、無住為本，辨明離相不是廢除禮敬，而是真空能容萬法。又以淨土、直心與德山公案等引證無住用心，提醒修行不可執著外相或固定境界。",
    "enTitle": "Platform Sutra Lecture 036: Formlessness, True Emptiness, and Non-Abiding Mind",
    "enSummary": "This lecture presents no-thought as the teaching's principle, formlessness as its substance, and non-abiding as its basis, clarifying that leaving marks does not abolish reverence. It uses Pure Land, straight mind, and Deshan's story to show non-abiding practice and warn against clinging to outer forms or fixed states."
  },
  "37": {
    "id": 37,
    "zhTitle": "六祖壇經講說第 037 講：金剛經、無所住與三毒六賊",
    "zhSummary": "依《金剛經》「應無所住而生其心」解釋六境本空，修行人須在見聞覺知中不被境界牽動。再引達摩破相論說三毒與六賊，指出功德在於內照自性、斷貪瞋癡，而非心外求福。",
    "enTitle": "Platform Sutra Lecture 037: The Diamond Sutra, Non-Abiding, and the Inner Thieves",
    "enSummary": "Using the Diamond Sutra's teaching to give rise to mind without abiding, the lecture explains that the six sense objects are empty and need not move the practitioner. It then cites Bodhidharma on the three poisons and six thieves, locating true merit in inward illumination and cutting greed, anger, and delusion rather than seeking blessings outside."
  },
  "38": {
    "id": 38,
    "zhTitle": "六祖壇經講說第 038 講：佛不轉世、真如本性與正念坐禪",
    "zhSummary": "先以真金出礦譬喻說佛果不再還作眾生，謹慎辨正「佛祖轉世」之說。再解真如、本性與起念的關係，指出正念坐禪在於見自性而不被六識境界牽動。",
    "enTitle": "Platform Sutra Lecture 038: No Buddha Rebirth, True Suchness, and Right Meditation",
    "enSummary": "The lecture uses the image of refined gold to argue that Buddhahood does not revert to ordinary rebirth, carefully rejecting claims of Buddhas reincarnating. It then explains true suchness, self-nature, and the arising of thought, showing that right meditation means seeing self-nature without being pulled by the six consciousnesses."
  },
  "39": {
    "id": 39,
    "zhTitle": "六祖壇經講說第 039 講：定香、正信與鬼神迷誤",
    "zhSummary": "從五分法身香中的定香談信心不退，強調禮拜燒香須有正信與定心。又據經論辨鬼神假扮、貪饗牲禮與臨終接引等迷誤，勸人不以殺生祭祀和外求代替修行。",
    "enTitle": "Platform Sutra Lecture 039: Samadhi Incense, Right Faith, and Ghostly Delusion",
    "enSummary": "Beginning with the incense of samadhi among the fivefold Dharma-body incenses, the lecture says worship and offerings must rest on steady right faith. It cites scriptures to warn against ghosts masquerading as holy beings, craving sacrificial food, or promising deathbed rescue, urging practice instead of killing, ritual dependence, and outward seeking."
  },
  "40": {
    "id": 40,
    "zhTitle": "六祖壇經講說第 040 講：無相懺悔、四弘誓願與自性自度",
    "zhSummary": "本講詳說無相懺悔，強調懺是知過，悔是從今永斷，必須針對自身實際習氣而改。接著開示四弘誓願與自性自度，說佛祖師長只能指路，了生死仍要自己依法實行。",
    "enTitle": "Platform Sutra Lecture 040: Formless Repentance, the Four Vows, and Self-Deliverance",
    "enSummary": "This lecture explains formless repentance as knowing past faults and permanently cutting them off, applying the practice to one's own real habits. It then turns to the four great vows and self-deliverance, teaching that Buddhas and teachers can point the way but liberation depends on personal practice."
  },
  "41": {
    "id": 41,
    "zhTitle": "六祖壇經講說第 041 講：了義方便、神佛助緣與自心修行",
    "zhSummary": "本講辨了義與不了義、方便與真實，說明神佛只能作助緣，不能代人斷煩惱、了生死。六祖「迷時師度，悟時自度」被反覆申明，修行須從自心邪迷、嫉妒與惡毒處轉化。",
    "enTitle": "Platform Sutra Lecture 041: Definitive Meaning, Skillful Means, and Practice in One's Own Mind",
    "enSummary": "The lecture distinguishes definitive meaning from provisional skillful means, explaining that gods and Buddhas can assist conditions but cannot cut afflictions or liberate someone in their place. It repeatedly returns to Huineng's teaching that teachers guide the confused but the awakened must deliver themselves by transforming delusion, jealousy, and malice in their own mind."
  },
  "42": {
    "id": 42,
    "zhTitle": "六祖壇經講說第 042 講：無相三歸依、覺正淨與離欲",
    "zhSummary": "由四弘誓願轉入無相三歸依，說明真正歸依不是只依外相，而是回到自性覺、正、淨。講者以法船、七聖財與貪欲為喻，提醒求福求利的迷信祈願不能代替正法實修。",
    "enTitle": "Platform Sutra Lecture 042: Formless Refuge, Awakening, Rightness, and Purity",
    "enSummary": "Moving from the four great vows into formless refuge, the lecture explains that true refuge is not merely external but a return to self-nature's awakening, rightness, and purity. Through images of the Dharma boat, the seven noble treasures, and greed, it warns that superstitious prayers for benefit cannot replace actual practice of the right Dharma."
  },
  "43": {
    "id": 43,
    "zhTitle": "六祖壇經講說第 043 講：欲鉤方便、法僧歸依與清淨正道",
    "zhSummary": "承欲鉤之說，說明佛菩薩以方便順應眾生貪欲，只為引迷入悟而非助長外求。歸依法僧則須捨邪歸正、離欲清淨，讓生活中的行持回到正道與和合。",
    "enTitle": "Platform Sutra Lecture 043: Desire-Hooks, Refuge in Dharma and Sangha, and the Clean Path",
    "enSummary": "Continuing the theme of desire-hooks, the lecture explains that Buddhas and bodhisattvas use expedients to meet beings' desires only to lead them from confusion into awakening. Refuge in Dharma and Sangha therefore means leaving the crooked for the right, purifying desire, and bringing daily conduct back to the path and harmony."
  },
  "44": {
    "id": 44,
    "zhTitle": "六祖壇經講說第 044 講：佛神投胎辨正、真供養與自心正法",
    "zhSummary": "本講續辨佛神投胎轉世之說，提醒以怪異靈驗證成神聖身分，容易落入有相迷信。真供養在於自心奉行正法、清淨三業，而不是執著神像、名號或外在儀式。",
    "enTitle": "Platform Sutra Lecture 044: Reincarnation Claims, True Offering, and Right Dharma in the Mind",
    "enSummary": "This lecture continues to challenge claims that Buddhas or divine beings take ordinary rebirth, warning that unusual signs and miracles easily become attachment to marks. True offering is to uphold right Dharma in one's own mind and purify body, speech, and thought, rather than cling to images, titles, or ritual display."
  },
  "45": {
    "id": 45,
    "zhTitle": "六祖壇經講說第 045 講：沙門類別、名利看破與自家寶藏",
    "zhSummary": "以僧、沙門與出家名義的分別，檢視修行人是否真能離俗、少欲、守道。講者借名利與財用的例子指出自家寶藏本具，若執著供養、地位與享受，便失去修行本意。",
    "enTitle": "Platform Sutra Lecture 045: Types of Renunciants, Fame and Profit, and the Inner Treasure",
    "enSummary": "By distinguishing monks, shramanas, and the name of renunciation, the lecture asks whether a practitioner truly leaves worldliness, reduces desire, and keeps the Way. Examples about fame, profit, and material support point back to the inner treasure, warning that attachment to offerings, status, and comfort loses the purpose of practice."
  },
  "46": {
    "id": 46,
    "zhTitle": "六祖壇經講說第 046 講：無我空性、灌頂迷思與四相邪慢",
    "zhSummary": "從無我與空性的角度說明修行不可把灌頂、儀式或稱號誤認為得道。進一步析論我相、人相、眾生相、壽者相及未證謂證的邪慢，勸人以實修破除自我執著。",
    "enTitle": "Platform Sutra Lecture 046: No-Self, Empty Nature, Initiation, and the Four Marks",
    "enSummary": "From no-self and emptiness, the lecture explains that initiation, ritual, or titles should not be mistaken for realization. It further analyzes the marks of self, person, beings, and lifespan along with the arrogance of claiming attainment without proof, urging real practice to cut self-attachment."
  },
  "47": {
    "id": 47,
    "zhTitle": "六祖壇經講說第 047 講：歸依清淨、自性三寶與敬佛不執",
    "zhSummary": "本講說歸依淨與自性三寶，將佛法僧落回清淨法身、正法與自性和合。對木佛、畫像與住持三寶的敬禮應作方便護持，不可把外相當成究竟而忘失自心修行。",
    "enTitle": "Platform Sutra Lecture 047: Refuge in Purity, the Self-Nature Three Jewels, and Non-Clinging Reverence",
    "enSummary": "The lecture explains refuge in purity and the self-nature Three Jewels, returning Buddha, Dharma, and Sangha to pure Dharma body, right Dharma, and harmony in self-nature. Reverence for wooden Buddhas, images, and the institutional Three Jewels is a supportive expedient, not an ultimate object that should eclipse practice in one's own mind."
  },
  "48": {
    "id": 48,
    "zhTitle": "六祖壇經講說第 048 講：寒山詩、募財諂曲與吾我慢",
    "zhSummary": "藉寒山詩批判美舌甜脣、為愛錢財而說法募財的諂曲之心，提醒談道不可藉道斂財。又從吾我慢、私心與名利習氣說起，勸修行人先除內在驕慢與貪求。",
    "enTitle": "Platform Sutra Lecture 048: Hanshan's Verse, Fundraising Flattery, and Ego-Pride",
    "enSummary": "Using Hanshan's verse, the lecture criticizes sweet-tongued preaching and fundraising driven by love of money, warning that speaking the Way must not become a means of extracting wealth. It also addresses ego-pride, selfishness, and habits around fame and profit, urging practitioners to remove inner arrogance and craving first."
  },
  "49": {
    "id": 49,
    "zhTitle": "六祖壇經講說第 049 講：實性真如、一念變化與功德福德",
    "zhSummary": "以實性真如說明一念可以轉凡成聖，也可以被無明牽動而流轉。再借梁武帝問達摩的故事分辨福德與功德，指出外在善行若住相求報，仍未契入無為功德。",
    "enTitle": "Platform Sutra Lecture 049: True Suchness, One Thought, and Merit Versus Blessing",
    "enSummary": "Through real-nature true suchness, the lecture shows how a single thought can turn toward sagehood or be carried along by ignorance. Liang Wudi's exchange with Bodhidharma is used to distinguish blessings from merit, showing that external good deeds done with attachment and expectation do not yet accord with unconditioned merit."
  },
  "50": {
    "id": 50,
    "zhTitle": "六祖壇經講說第 050 講：福報罪業、住相布施與業障生死",
    "zhSummary": "本講細分福報與罪業，說明布施供養可感福果，卻不能替代懺悔、斷惡與了生死。若以住相布施求消業或購買解脫，仍落在有為福德，無法清淨業障。",
    "enTitle": "Platform Sutra Lecture 050: Blessings, Karma, Attached Giving, and Liberation",
    "enSummary": "This lecture separates blessings from karmic wrongdoing, explaining that giving and offerings may bring fortunate results but cannot replace repentance, cutting evil, or ending birth and death. Giving with attachment in order to erase karma or purchase liberation remains conditioned blessing and cannot purify karmic obstruction."
  },
  "51": {
    "id": 51,
    "zhTitle": "六祖壇經講說第 051 講：法華方便、退席警策與超度迷思",
    "zhSummary": "引《法華經》方便品中五千退席與舍利弗三請，說明深法不宜輕率對無根器者宣說。並以反覆超度祖先等例子破除「掛號作法即可解脫」的觀念，強調契機、持戒與自修才是要點。",
    "enTitle": "Platform Sutra Lecture 051: Lotus Expedients, Departing Listeners, and Ritual Salvation",
    "enSummary": "Citing the Lotus Sutra's five thousand who left and Shariputra's three requests, the lecture explains why profound Dharma should not be spoken carelessly to those without the capacity for it. Examples of repeatedly performing rites for ancestors challenge the idea that ritual registration guarantees liberation, emphasizing timing, discipline, and self-practice instead."
  },
  "52": {
    "id": 52,
    "zhTitle": "六祖壇經講說第 052 講：六祖事蹟、避難石與定慧等持",
    "zhSummary": "校正六祖受衣鉢後的事蹟與避難石傳說，提醒尊敬祖師不必附會神奇痕跡。隨後轉入法海問「即心即佛」與定慧等持，說明定是慧體、慧是定用，二者不可偏修。",
    "enTitle": "Platform Sutra Lecture 052: Huineng's Story, the Refuge Stone, and Samadhi-Wisdom Balance",
    "enSummary": "The lecture corrects stories about Huineng after receiving the robe and bowl and questions the legend of the refuge stone, showing that reverence for ancestors need not depend on miraculous traces. It then turns to Fahai's question about mind itself being Buddha and to balanced samadhi and wisdom, explaining that samadhi is wisdom's substance and wisdom is samadhi's function."
  },
  "53": {
    "id": 53,
    "zhTitle": "六祖壇經講說第 053 講：誦經、念經與法華宗旨",
    "zhSummary": "本講分辨口頭誦經與用心念經，指出法達若只計較法華經三千部，仍會被經卷與功德相所縛。講者以六祖開示提醒，持經貴在明白經義並落實於心行，而不是把誦讀本身當作解脫。",
    "enTitle": "Platform Sutra Lecture 053: Reciting, Mindful Practice, and the Lotus Sutra’s Aim",
    "enSummary": "This lecture distinguishes verbal recitation from mindful practice, showing that Fada’s pride in reciting the Lotus Sutra thousands of times still binds him to forms. Huineng’s instruction stresses that upholding a sutra means understanding its meaning and embodying it in conduct, not treating recitation itself as liberation."
  },
  "54": {
    "id": 54,
    "zhTitle": "六祖壇經講說第 054 講：法華因緣、佛知見與開示悟入",
    "zhSummary": "本講依《法華經》說明諸佛出世的一大事因緣，即令眾生開、示、悟、入佛之知見。講者反覆指出佛知見不在外相與名相中，而在回到自性、明白本心的真實修行。",
    "enTitle": "Platform Sutra Lecture 054: The Lotus Sutra’s Great Matter and Buddha-Wisdom",
    "enSummary": "This lecture explains the Lotus Sutra’s one great matter as opening, showing, realizing, and entering Buddha-wisdom. The teaching keeps the focus away from external forms and terminology, returning Buddha-wisdom to self-nature and the original mind."
  },
  "55": {
    "id": 55,
    "zhTitle": "六祖壇經講說第 055 講：犛牛愛尾、三車火宅與功德福德",
    "zhSummary": "本講以犛牛愛尾譬喻執著誦經功德，說明若心被經卷、數目與名相黏住，仍未契入法華本旨。講者再由羊車、鹿車、牛車與火宅譬喻，分辨方便接引、真實解脫以及功德福德的差別。",
    "enTitle": "Platform Sutra Lecture 055: The Yak-Tail Analogy, Three Carts, and True Merit",
    "enSummary": "This lecture uses the yak-tail analogy to show how attachment to recitation, numbers, and scripture-forms can obscure the Lotus Sutra’s purpose. It then explains the three carts and burning house as expedient guidance, while distinguishing true liberating merit from ordinary blessings."
  },
  "56": {
    "id": 56,
    "zhTitle": "六祖壇經講說第 056 講：三乘方便、一佛乘與權實分辨",
    "zhSummary": "本講依《法華經》說三乘只是因人施教的權巧方便，真正歸趣仍是一佛乘與見性成佛。講者以權教與實教的差別提醒，方便可暫時引迷入悟，但成熟之後必須捨權入實。",
    "enTitle": "Platform Sutra Lecture 056: Expedient Vehicles, the One Buddha Vehicle, and True Teaching",
    "enSummary": "This lecture explains the three vehicles as provisional methods suited to different capacities, with the one Buddha vehicle and seeing self-nature as the true destination. It distinguishes expedient from ultimate teaching, warning that skillful means should lead into truth rather than become a permanent attachment."
  },
  "57": {
    "id": 57,
    "zhTitle": "六祖壇經講說第 057 講：三身、四智與轉識成智",
    "zhSummary": "本講從智通請問三身四智說起，說明清淨法身、圓滿報身與千百億化身皆不離自性。講者再依八識轉四智，解釋大圓鏡智與平等性智如何由心識轉化而顯。",
    "enTitle": "Platform Sutra Lecture 057: The Three Bodies, Four Wisdoms, and Transforming Consciousness",
    "enSummary": "Beginning with Zhitong’s question, this lecture explains that the pure dharma body, complete reward body, and countless transformation bodies do not depart from self-nature. It then describes how the eight consciousnesses are transformed into the four wisdoms, especially great mirror wisdom and equality wisdom."
  },
  "58": {
    "id": 58,
    "zhTitle": "六祖壇經講說第 058 講：平等悲心、妙觀察與成所作智",
    "zhSummary": "本講續說平等性智，強調大慈大悲不是偏愛善人，而是能不憎惡人、隨其根機而教化。講者再解妙觀察智與成所作智，說明傳道須觀機逗教，方便示現也不可被名利貪欲拖走。",
    "enTitle": "Platform Sutra Lecture 058: Equality, Compassion, Discerning Wisdom, and Skillful Action",
    "enSummary": "This lecture continues equality wisdom by stressing that great compassion is not partiality toward the good, but the ability to guide even difficult people without hatred. It then explains discerning wisdom and accomplishing wisdom as the ability to teach according to capacity while avoiding corruption by fame, gain, or desire."
  },
  "59": {
    "id": 59,
    "zhTitle": "六祖壇經講說第 059 講：方便真實、三身四智與那伽定",
    "zhSummary": "本講總攝三身四智，指出名相只是便於說明的假名，真正實性仍是本源佛性。講者又說轉識不可著意強轉，若不被轉識名相拘束，方能契入行住坐臥皆定的那伽定。",
    "enTitle": "Platform Sutra Lecture 059: Expedient and Real, Three Bodies and Four Wisdoms, and Naga Samadhi",
    "enSummary": "This lecture summarizes the three bodies and four wisdoms as provisional names used for explanation, while the real nature remains Buddha-nature itself. It also warns against forcing the transformation of consciousness, pointing instead to freedom from attachment to such terms and to samadhi in all postures."
  },
  "60": {
    "id": 60,
    "zhTitle": "六祖壇經講說第 060 講：三佛性、莫污染與智常問性",
    "zhSummary": "本講說明住自佛性、引出佛性與至得果佛性，分辨先修後得與先得後修的修行次第。講者再引馬祖道一「道不用修，但莫污染」之意，轉入智常向大通和尚請問本心本性的因緣。",
    "enTitle": "Platform Sutra Lecture 060: Three Kinds of Buddha-Nature, Non-Contamination, and Zhichang’s Question",
    "enSummary": "This lecture explains the three kinds of Buddha-nature and distinguishes gradual cultivation before realization from realization followed by cultivation. It then uses Mazu’s warning not to contaminate the Way as a bridge into Zhichang’s question about original mind and original nature."
  },
  "61": {
    "id": 61,
    "zhTitle": "六祖壇經講說第 061 講：一法真如、空見與權實方便",
    "zhSummary": "本講解析大通和尚以虛空喻本性的說法，指出若執著「無一物可見」，仍會落入空見而遮蔽自性靈光。講者進一步說明一法即真如法性，並辨析方便、權智與實智在引導眾生時的不同用法。",
    "enTitle": "Platform Sutra Lecture 061: One Dharma, True Suchness, Empty Views, and Skillful Means",
    "enSummary": "This lecture examines Datong’s comparison of original nature to empty space and warns that clinging to having nothing to see becomes an empty view. It clarifies the one Dharma as true suchness and distinguishes expedient means, provisional wisdom, and real wisdom in guiding beings."
  },
  "62": {
    "id": 62,
    "zhTitle": "六祖壇經講說第 062 講：最上乘、實行與涅槃樂",
    "zhSummary": "本講說最上乘不是口頭爭高下，而是萬法盡通、萬法俱備、一切不染的實際修行。講者再由志道請問涅槃樂，破除把死後斷滅或世間受樂當作究竟的斷常邪見。",
    "enTitle": "Platform Sutra Lecture 062: The Supreme Vehicle, Practice, and Nirvana’s Joy",
    "enSummary": "This lecture presents the supreme vehicle not as verbal superiority, but as practice that penetrates all teachings without being stained by them. Through Zhidao’s question about nirvana’s joy, it rejects both annihilationism and attachment to worldly enjoyment as ultimate truth."
  },
  "63": {
    "id": 63,
    "zhTitle": "六祖壇經講說第 063 講：無作邪見、佛菩薩轉世與性遮二戒",
    "zhSummary": "本講破斥不用作功德、只靠他力便能解脫的無作邪見，並說明成佛如金已鍊成，不應粗率宣稱佛菩薩投胎再來。講者再分辨殺盜淫妄等性戒與酒肉五辛等遮戒，提醒修行須守正見與戒行而不以形相妄評他人。",
    "enTitle": "Platform Sutra Lecture 063: No-Practice Wrong Views, Rebirth Claims, and Two Kinds of Precepts",
    "enSummary": "This lecture refutes the wrong view that one can avoid meritorious practice and rely on outside power alone for liberation, and it cautions against casual claims that Buddhas or bodhisattvas are reborn through ordinary womb birth. It also distinguishes inherent precepts from prohibitive precepts, urging right view and disciplined conduct without careless judgment based on appearances."
  },
  "64": {
    "id": 64,
    "zhTitle": "六祖壇經講說第 064 講：寂滅真樂、真我與行思無得",
    "zhSummary": "本講續釋真常寂滅樂，說六根對境而不起用想，心能如如不動才顯涅槃相。講者又以「天上天下唯我獨尊」說真我本性，並轉入行思禪師以無苦集滅道、無所得回應階級之問。",
    "enTitle": "Platform Sutra Lecture 064: True Joy, the True Self, and Xingsi’s Non-Attainment",
    "enSummary": "This lecture continues the explanation of true, constant, quiescent joy by showing how the six faculties can meet objects without producing grasping thoughts. It interprets “I alone am honored” as the true self of Buddha-nature, then turns to Xingsi’s answer of no four truths and no attainment."
  },
  "65": {
    "id": 65,
    "zhTitle": "六祖壇經講說第 065 講：懷讓悟性、護念與磨磚作鏡",
    "zhSummary": "本講介紹南嶽懷讓的來歷，說他以「說似一物即不中」回應六祖，表明自性不可被任何物相相比。講者再引六祖預言馬祖興起，並以懷讓磨磚作鏡破除馬祖執著坐禪成佛的偏見。",
    "enTitle": "Platform Sutra Lecture 065: Huairang’s Insight, Protection of Mind, and Polishing a Brick",
    "enSummary": "This lecture introduces Nanyue Huairang and his reply that comparing self-nature to any thing already misses the mark. It also recounts Huineng’s prophecy of Mazu and Huairang’s brick-polishing teaching, which breaks attachment to mere sitting as the way to Buddhahood."
  },
  "66": {
    "id": 66,
    "zhTitle": "六祖壇經講說第 066 講：玄覺心宗、威音王前與真比丘",
    "zhSummary": "本講由永嘉玄覺因《維摩經》悟入佛心宗說起，解釋威音王以前等禪門語，是指未迷未悟的本來面目。講者又藉玄覺持錫而來，詳辨比丘、錫杖、具足戒與真出家，指出真正修行在於心不染著。",
    "enTitle": "Platform Sutra Lecture 066: Xuanjue, the Buddha-Mind School, Primordial Nature, and True Monkhood",
    "enSummary": "This lecture begins with Yongjia Xuanjue’s insight into the Buddha-mind school through the Vimalakirti Sutra and explains “before King Awesome Sound” as the original face before delusion and awakening. Using Xuanjue’s staff and conduct, it clarifies monkhood, robes, precepts, and true renunciation as non-attachment of the mind."
  },
  "67": {
    "id": 67,
    "zhTitle": "六祖壇經講說第 067 講：一宿覺、第九識與證道歌",
    "zhSummary": "本講說玄覺與六祖問答生死無常、無生與分別，顯示其已契不生不滅之理，故有一宿覺之稱。講者再詳說第九識為無垢清淨識與佛性，並引《證道歌》說行住坐臥皆禪、貧道不貧與布施著相之失。",
    "enTitle": "Platform Sutra Lecture 067: Overnight Awakening, the Ninth Consciousness, and the Song of Enlightenment",
    "enSummary": "This lecture presents Xuanjue’s dialogue with Huineng on birth and death, non-arising, and discrimination, showing why he became known as the one-night awakened master. It then explains the ninth consciousness as undefiled Buddha-nature and cites the Song of Enlightenment on everyday Chan, true poverty, and the limits of attached giving."
  },
  "68": {
    "id": 68,
    "zhTitle": "六祖壇經講說第 068 講：智隍正受、常定大定與看破名利",
    "zhSummary": "本講由智隍長年入定說起，分辨正受、入定、常定與大定，提醒若貪求靈感善巧，禪定也可能成為魔境。講者進一步指出大定不只是枯坐，而是身心穩如泰山、能看破名利並不取非分之財。",
    "enTitle": "Platform Sutra Lecture 068: Zhihuang’s Absorption, Ordinary Samadhi, Great Stability, and Fame",
    "enSummary": "This lecture begins with Zhihuang’s long meditation and distinguishes true absorption, entering samadhi, ordinary stillness, and great stability, warning that craving spiritual powers can lead into demonic states. It further teaches that great stability is not mere sitting, but a mind steady as Mount Tai that sees through fame and refuses improper gain."
  },
  "69": {
    "id": 69,
    "zhTitle": "六祖壇經講說第 069 講：圓寂離苦、空見因果與性相如如",
    "zhSummary": "本講續釋妙湛圓寂與五陰本空，說離生死苦不是逃避世間，而是在逆境中不被苦恨與妄念牽動。講者再辨空見、三世因果、凡聖情忘、能所俱泯與性相如如，指出真修行須離執而不廢因果正見。",
    "enTitle": "Platform Sutra Lecture 069: Quiescent Completion, Empty Views, Karma, and Suchness",
    "enSummary": "This lecture continues the explanation of clear, complete quiescence and the emptiness of the five aggregates, showing that freedom from birth-death suffering is not escape from life but non-grasping amid adversity. It then analyzes empty views, karma across three lives, forgetting the distinction between ordinary and holy, dissolving subject and object, and the suchness of nature and form."
  },
  "70": {
    "id": 70,
    "zhTitle": "六祖壇經講說第 070 講：智隍悟道、無所得與正法眼藏",
    "zhSummary": "承接智隍二十年坐禪後因六祖指示而悟，講者以金剛經與論語說明真正修行不落有所得心。下半講轉入方辯因緣，解正法眼藏、僧伽梨與離相見性，提醒不可把衣鉢袈裟當作究竟。",
    "enTitle": "Platform Sutra Lecture 070: Zhihuang, Non-Attainment, and the Dharma Eye",
    "enSummary": "The lecture follows Zhihuang's awakening after Huineng's instruction and uses Buddhist and Confucian citations to clarify non-attainment. It then turns to Fangbian, the Dharma eye treasury, sanghati robes, and seeing the nature without clinging to forms."
  },
  "71": {
    "id": 71,
    "zhTitle": "六祖壇經講說第 071 講：方辯袈裟、背相歸性與頓除妄念",
    "zhSummary": "此講續說方辯與袈裟因緣，藉梁武帝賜袈裟等例子辨別紀念、供養與著相之差。講者回到神秀偈與頓悟義，指出頓不是離開實修，而是當下頓除妄念、背相歸性。",
    "enTitle": "Platform Sutra Lecture 071: Fangbian's Robe, Returning from Forms, and Sudden Awakening",
    "enSummary": "This lecture continues Fangbian's robe episode and distinguishes reverent remembrance from attachment to material signs. It revisits Shenxiu's verse and defines sudden awakening as suddenly removing deluded thoughts while returning from forms to the nature."
  },
  "72": {
    "id": 72,
    "zhTitle": "六祖壇經講說第 072 講：菩提不可得、無師智與自性戒定慧",
    "zhSummary": "講者依頓悟入道要門論說菩提不可作可得之物，並以無師智指出悟處仍須回到自心。後段進入志誠所聞的自性戒定慧，說心地無非是戒的起點，修證不能落入空談。",
    "enTitle": "Platform Sutra Lecture 072: Unattainable Bodhi, Teacherless Wisdom, and Self-Nature's Discipline",
    "enSummary": "The lecture explains that bodhi is not an object to be acquired and frames teacherless wisdom as realization within one's own mind. It then begins Zhicheng's teaching on self-nature's precepts, concentration, and wisdom, stressing that practice cannot remain mere talk."
  },
  "73": {
    "id": 73,
    "zhTitle": "六祖壇經講說第 073 講：第八識轉化、自性戒定慧與不住空相",
    "zhSummary": "此講以第八識如地含藏種子作譬喻，說明自性戒定慧如何在心識轉化中落實。講者一再提醒不可以空相自矜或執著有所得，修行須在日常經驗中培養定力與智慧。",
    "enTitle": "Platform Sutra Lecture 073: Transforming the Eighth Consciousness and Not Abiding in Emptiness",
    "enSummary": "Using the eighth consciousness as a field that stores seeds, the lecture explains self-nature's precepts, concentration, and wisdom as practical transformation. It warns against pride in emptiness or any claim of attainment, grounding practice in daily experience and steady discernment."
  },
  "74": {
    "id": 74,
    "zhTitle": "六祖壇經講說第 074 講：生意六度、無所得與戒律重點",
    "zhSummary": "講者以做生意也須布施、持戒、忍辱等六度為例，將無所得心落在實際工作與待人處事。後段辨大妄語與戒律輕重，說學戒要掌握佛意與機宜，不可只拿文字相互壓迫。",
    "enTitle": "Platform Sutra Lecture 074: Six Perfections in Business, Non-Attainment, and Discipline",
    "enSummary": "The lecture applies the six perfections to business, showing how non-attainment must be tested in work and relationships. It also discusses grave false speech and precept interpretation, urging students to grasp the Buddha's intention rather than weaponize literal rules."
  },
  "75": {
    "id": 75,
    "zhTitle": "六祖壇經講說第 075 講：遊戲三昧、三界輪迴與舍利著相",
    "zhSummary": "此講說方便建立有相法門的限度，並以遊戲三昧與三界輪迴提醒眾生心念仍在善惡境界中流轉。講者批評把舍利、佛牙或感應當成求福保證的心態，要求聽眾把重點放回離相修心。",
    "enTitle": "Platform Sutra Lecture 075: Playful Samadhi, the Three Realms, and Relic Attachment",
    "enSummary": "This lecture explains the limited role of form-based expedients and uses playful samadhi and the three realms to describe karmic wandering. It criticizes treating relics or sacred objects as guarantees of blessing and redirects attention to practice beyond forms."
  },
  "76": {
    "id": 76,
    "zhTitle": "六祖壇經講說第 076 講：志誠離相、行昌刺祖與佛性無常",
    "zhSummary": "講者續解不建立有相法門，說志誠仍須在方便與究竟之間分清，不可把暫設方法當成常法。後段鋪陳行昌刺祖因緣與心印問題，預告佛性無常說將以特殊角度破除常見執著。",
    "enTitle": "Platform Sutra Lecture 076: Zhicheng, Xingchang, and the Impermanence of Buddha-Nature",
    "enSummary": "The lecture continues the teaching that no form-based method is ultimately established, while clarifying the difference between provisional means and the final point. It introduces Xingchang's attempted attack on Huineng and prepares the discussion of Buddha-nature as impermanent in a special corrective sense."
  },
  "77": {
    "id": 77,
    "zhTitle": "六祖壇經講說第 077 講：常無常義、依法依智與離諍修心",
    "zhSummary": "此講面對佛性常或無常的疑難，說六祖是依眾生執著而開方便，不可把語句割裂成宗派爭執。講者多次勸人依法依智、學心境而不學爭論，將經義落在調伏我慢與嗔心。",
    "enTitle": "Platform Sutra Lecture 077: Constant and Impermanent, Reliance on Wisdom, and Leaving Disputes",
    "enSummary": "The lecture addresses whether Buddha-nature is constant or impermanent and treats Huineng's wording as a skillful response to attachment. It urges reliance on Dharma and wisdom rather than sectarian argument, making the point a practice of reducing pride and anger."
  },
  "78": {
    "id": 78,
    "zhTitle": "六祖壇經講說第 078 講：了義方便、中道心性與念佛不在口",
    "zhSummary": "講者依涅槃經分辨了義與不了義，指出常與無常的說法都須回到中道，而不能停在字面。講中並談念佛在心不在口、宗教名相不可取代修心，強調心性若不改則功夫難成。",
    "enTitle": "Platform Sutra Lecture 078: Definitive Meaning, Expedients, and Mindful Recitation",
    "enSummary": "Drawing on the Nirvana Sutra, the lecture distinguishes definitive meaning from expedient teaching and returns constant and impermanent language to the middle way. It also says recitation depends on the mind rather than the mouth, since religious labels cannot replace transformation of the nature."
  },
  "79": {
    "id": 79,
    "zhTitle": "六祖壇經講說第 079 講：依法不依人、無住禪與經義密旨",
    "zhSummary": "此講從四依與宗派名相說起，提醒聽眾即使名師之言也須以經義檢驗，不能盲從人情威望。講者以十萬八千里與阿僧祇等例子說明依義不依字，並警告亂改經義說法可能誤人甚深。",
    "enTitle": "Platform Sutra Lecture 079: Relying on Dharma, Non-Abiding Chan, and Scriptural Meaning",
    "enSummary": "The lecture begins from the four reliances and insists that even famous teachers must be tested by Dharma meaning rather than prestige. It uses symbolic phrases such as one hundred and eight thousand li and asaṃkhyeya to teach reliance on meaning over words, warning that careless preaching can mislead others."
  },
  "80": {
    "id": 80,
    "zhTitle": "六祖壇經講說第 080 講：涅槃四依、依義不依字與三毒阿僧祇",
    "zhSummary": "講者詳說涅槃經四依原則，把依義不依字、依智不依識作為判斷說法的關鍵。講中再以三大阿僧祇會歸貪瞋癡三毒，指出不懂佛祖密意便容易被文字表層牽走。",
    "enTitle": "Platform Sutra Lecture 080: The Four Reliances and the Hidden Meaning of Asaṃkhyeya",
    "enSummary": "This lecture explains the Nirvana Sutra's four reliances, especially relying on meaning rather than words and on wisdom rather than consciousness. It reads the three great asaṃkhyeya kalpas through the three poisons, warning that missing the Buddha's intent leaves one trapped on the surface of language."
  },
  "81": {
    "id": 81,
    "zhTitle": "六祖壇經講說第 081 講：破相論、心外求佛與戒行危險",
    "zhSummary": "此講補述達摩破相論對阿僧祇密義的解釋，將長劫修行拉回當下斷貪瞋癡。講者同時警惕心外求佛、貪財名利與破戒不知懺悔，提醒受戒後更須明白戒相與責任。",
    "enTitle": "Platform Sutra Lecture 081: Breaking Forms, Seeking Buddha Outside, and Precept Responsibility",
    "enSummary": "The lecture supplements the Treatise on Breaking Forms to explain the hidden meaning of asaṃkhyeya as cutting through greed, anger, and delusion now. It warns against seeking Buddhahood outside the mind, chasing money or fame, and taking precepts without understanding their responsibilities."
  },
  "82": {
    "id": 82,
    "zhTitle": "六祖壇經講說第 082 講：沙彌十戒、神會問法與三種善知識",
    "zhSummary": "講者先補說沙彌身分必須受持十戒，並藉供養與寺廟經營問題提醒修行不可被財物排場牽引。後段轉入神會公案，帶出請教善知識的必要，並開示善知識有教授、同行、外護三種。",
    "enTitle": "Platform Sutra Lecture 082: Novice Precepts, Shenhui, and Three Kinds of Good Friends",
    "enSummary": "The lecture first supplements the ten novice precepts and uses offerings and temple management to caution against being led by money or display. It then turns to Shenhui's encounter and introduces the need for good friends as teachers, fellow practitioners, and protectors."
  },
  "83": {
    "id": 83,
    "zhTitle": "六祖壇經講說第 083 講：善知識三義、無相無住與自心領悟",
    "zhSummary": "此講詳解教授善知識、同行善知識與外護善知識，說修行需要教導、同參與護持各方面助緣。講者再以無相、無住與實相說明，真正的理必須在安靜觀照自心中領悟，不能只靠外在名相。",
    "enTitle": "Platform Sutra Lecture 083: Good Friends, Formlessness, Non-Abiding, and Inner Realization",
    "enSummary": "This lecture details three kinds of good friends: teachers, fellow practitioners, and protectors who support practice in different ways. It then links formlessness, non-abiding, and true suchness to direct reflection within one's own mind rather than reliance on labels."
  },
  "84": {
    "id": 84,
    "zhTitle": "六祖壇經講說第 084 講：方便權假、自性佛性與磨磚伏筆",
    "zhSummary": "講者由道可道非常道說明先天大道與自性佛性本不可被名稱固定，種種方便只是為不同根器而設。講中轉入機緣品脈絡與六祖拒召背景，並預先引出磨磚作鏡一類公案來破枯坐執著。",
    "enTitle": "Platform Sutra Lecture 084: Expedient Names, Self-Nature, and the Brick-Polishing Prelude",
    "enSummary": "The lecture uses the Dao that can be spoken to show that self-nature and Buddha-nature cannot be fixed by names, while expedients serve differing capacities. It moves into the conditions chapter and Huineng's refusal of summons, then prepares the brick-polishing story against dead sitting."
  },
  "85": {
    "id": 85,
    "zhTitle": "六祖壇經講說第 085 講：磨磚作鏡、清淨禪與不求神異",
    "zhSummary": "此講以懷讓磨磚作鏡點醒馬祖的故事，破除終日打坐便能成佛的枯坐見。講者進一步說如來清淨禪在自悟自修，不在神異、排場或祈求風調雨順的外相上。",
    "enTitle": "Platform Sutra Lecture 085: Polishing a Brick, Pure Chan, and Not Seeking Wonders",
    "enSummary": "The lecture uses Huairang polishing a brick into a mirror to awaken Mazu, rejecting the idea that sitting all day by itself makes a Buddha. It explains pure Chan as self-realization and self-cultivation rather than miracles, displays, or prayers for favorable conditions."
  },
  "86": {
    "id": 86,
    "zhTitle": "六祖壇經講說第 086 講：自修自悟、煩惱即菩提與外求長生",
    "zhSummary": "講者明說先天法須自修、自悟、自證，不能指望佛祖或外力代替自己超拔。講中以煩惱即菩提反對逃避現實求仙丹長生，並提醒養身也要合乎體質與清淨心念。",
    "enTitle": "Platform Sutra Lecture 086: Self-Practice, Afflictions as Bodhi, and the Quest for Longevity",
    "enSummary": "The lecture states that the innate Dharma must be practiced, realized, and verified by oneself, not outsourced to Buddhas or external powers. It uses afflictions as bodhi to reject escapist quests for elixirs and longevity, while advising bodily care grounded in suitability and a clear mind."
  },
  "87": {
    "id": 87,
    "zhTitle": "六祖壇經講說第 087 講：徐福傳說、劉伯溫讖與破除謠言",
    "zhSummary": "此講考察徐福入海赴日等傳說，顯示歷史故事常被後人附會成神異說法。講者再批判劉伯溫讖與災劫傳單，以年代與事實檢驗恐嚇眾生的迷信流弊。",
    "enTitle": "Platform Sutra Lecture 087: Xu Fu Legends, Liu Bowen Prophecies, and Rumor-Breaking",
    "enSummary": "This lecture examines legends of Xu Fu's voyage to Japan to show how historical stories can become supernatural claims. It then criticizes Liu Bowen prophecies and disaster pamphlets, testing fear-mongering superstition by dates and facts."
  },
  "88": {
    "id": 88,
    "zhTitle": "六祖壇經講說第 088 講：讖語恐嚇、薛簡問法與有漏無漏",
    "zhSummary": "講者續破劉伯溫讖語與民間傳單的恐嚇，把預言災禍看作擾亂人心而非正法。後段回到薛簡請法與皇宮往返，並以八識與漏的義理鋪陳有漏淨土問題。",
    "enTitle": "Platform Sutra Lecture 088: Frightening Prophecies, Xue Jian, and Leaky Purity",
    "enSummary": "The lecture continues dismantling Liu Bowen-style prophecies and popular pamphlets as disturbances of mind rather than true Dharma. It then returns to Xue Jian's inquiry and the imperial court, using consciousness and leakage to prepare the issue of leaky Pure Land."
  },
  "89": {
    "id": 89,
    "zhTitle": "六祖壇經講說第 089 講：有漏淨土、中道無住與福德功德",
    "zhSummary": "此講依佛學辭典解有漏淨土，說由有漏善業所感的清淨境界仍不同於了生死的究竟解脫。講者以參與世間活動而不被相黏住說中道無住，並重申蓋寺行善是福德不等於功德。",
    "enTitle": "Platform Sutra Lecture 089: Leaky Pure Land, Middle-Way Non-Abiding, and Merit",
    "enSummary": "The lecture explains leaky Pure Land as a purified result of conditioned good karma, distinct from final liberation from birth and death. It teaches joining worldly activities without being stuck to forms and again distinguishes temple-building blessings from liberating merit."
  },
  "90": {
    "id": 90,
    "zhTitle": "六祖壇經講說第 090 講：破相論斷三毒、盲目布施與邪命賣法",
    "zhSummary": "講者依達摩破相論說木佛、念佛與無相之義，將斷貪瞋癡三毒視為真正供養與修行。後段批評盲目布施、貪名聞利養與把弘法混同生意，主張傳道與世俗營利必須分清。",
    "enTitle": "Platform Sutra Lecture 090: Cutting the Three Poisons, Blind Giving, and Wrong Livelihood",
    "enSummary": "Using the Treatise on Breaking Forms, the lecture explains wooden Buddhas, recitation, and formlessness through the task of cutting greed, anger, and delusion. It criticizes blind donations, chasing fame and profit, and mixing Dharma teaching with business."
  },
  "91": {
    "id": 91,
    "zhTitle": "六祖壇經講說第 091 講：邪命賣法、中道真心與利他菩提",
    "zhSummary": "講者承接邪命賣法問題，批評把經商口才與宗教招牌用來斂財，將弘法與營利混同。講中並轉向一乘、中道與真心利他，提醒修行不是追求巧辯利益，而要回到菩提心。",
    "enTitle": "Platform Sutra Lecture 091: Selling Dharma, the Middle Way, and Altruistic Bodhi",
    "enSummary": "The lecture continues the critique of wrong livelihood and using religious language or business skill for profit. It turns toward the one vehicle, the middle way, true mind, and altruistic bodhi rather than clever speech or gain."
  },
  "92": {
    "id": 92,
    "zhTitle": "六祖壇經講說第 092 講：第一義無住、第七祖預言與年代考辨",
    "zhSummary": "講者從第一義與無住離相說起，指出若能分辨固有屬相便不被一切境界牽轉。後段考辨六祖去後七十年有二菩薩的預言，以年代矛盾檢查第七祖候選說法。",
    "enTitle": "Platform Sutra Lecture 092: First Principle, Non-Abiding, and the Seventh Patriarch Question",
    "enSummary": "The lecture begins with first-principle non-abiding and freedom from marks, teaching that clear discernment prevents being led by conditions. It then examines Huineng's prediction of two bodhisattvas after seventy years and tests proposed seventh-patriarch candidates against chronology."
  },
  "93": {
    "id": 93,
    "zhTitle": "六祖壇經講說第 093 講：馬祖龐居士、一相一行與真忍",
    "zhSummary": "此講續考馬祖道一與龐居士興盛禪宗的因緣，指出在家修行與出家傳承都可在禪門中成為關鍵。講者補說一相三昧、一行三昧與真正忍辱，將成就理解為以正智實證而非外在名聲。",
    "enTitle": "Platform Sutra Lecture 093: Mazu, Layman Pang, One-Mark Samadhi, and True Forbearance",
    "enSummary": "This lecture continues the inquiry into Mazu Daoyi and Layman Pang as figures who helped Chan flourish, noting the importance of both monastic and lay practice. It adds one-mark samadhi, one-practice samadhi, and genuine forbearance, defining accomplishment through verified wisdom rather than reputation."
  },
  "94": {
    "id": 94,
    "zhTitle": "六祖壇經講說第 094 講：落葉歸根、心印傳承與衣鉢疑義",
    "zhSummary": "講者述六祖示寂前欲返故里的落葉歸根，說祖師臨終開示常含有對徒眾的暗示。講中再辨心印、正法眼藏與衣鉢傳承問題，並以願意接受有根據的訂正來示範依法不固執。",
    "enTitle": "Platform Sutra Lecture 094: Returning to the Root, Mind-Seal, and Transmission Questions",
    "enSummary": "The lecture describes Huineng's wish to return home before death as a return of leaves to the root, with final instructions carrying hints for disciples. It then examines mind-seal, the Dharma eye treasury, and robe-bowl transmission while modeling willingness to accept evidence-based correction."
  },
  "95": {
    "id": 95,
    "zhTitle": "六祖壇經講說第 095 講：正法眼藏、依義不依字與盜首預言",
    "zhSummary": "此講詳解正法眼藏為教外相傳的心印，並重申讀經說法要依義不依字，不能只守文字表面。後段述弟子問六祖行道中有無災難，帶出肉身盜首預言與護法因緣。",
    "enTitle": "Platform Sutra Lecture 095: The Dharma Eye, Meaning over Words, and the Stolen-Head Prediction",
    "enSummary": "This lecture explains the Dharma eye treasury as the mind-seal transmitted outside ordinary teaching and again emphasizes meaning over wording. It then recounts a disciple asking about dangers in Huineng's career, leading to the prediction about the theft of his enshrined head and its protection."
  },
  "96": {
    "id": 96,
    "zhTitle": "六祖壇經講說第 096 講：劫運四大、彌勒布袋與附會出世",
    "zhSummary": "講者以地水火風四大與劫運變化說明世間成住壞空，並旁及易卦源流與古佛名號。後段辨彌勒、布袋和尚與武則天時代附會出世的說法，提醒不要把政治與神異傳聞當成正信。",
    "enTitle": "Platform Sutra Lecture 096: Kalpas, the Four Elements, Maitreya, and Budai",
    "enSummary": "The lecture uses earth, water, fire, and wind with kalpa changes to explain worldly formation and decay, also touching on Yijing origins and ancient Buddha names. It then distinguishes Maitreya, Budai, and claims of incarnate appearance, warning against treating political or miraculous rumors as proper faith."
  },
  "97": {
    "id": 97,
    "zhTitle": "六祖壇經講說第 097 講：賢劫諸佛、宗派源流與第七祖爭議",
    "zhSummary": "此講梳理莊嚴劫、賢劫諸佛與歷代祖師系統，讓六祖末段的傳承語放在較大的佛教史脈絡中。講者續辨彌勒附會與第七祖諸說，指出若只停在傳聞就像到車站卻未買票上車。",
    "enTitle": "Platform Sutra Lecture 097: Kalpa Buddhas, Lineages, and the Seventh Patriarch Debate",
    "enSummary": "This lecture surveys Buddhas of past and present kalpas and the patriarchal systems so Huineng's final transmission statements sit within broader Buddhist history. It continues sorting Maitreya-related claims and seventh-patriarch theories, warning that hearsay without practice is like reaching a station without buying a ticket."
  },
  "98": {
    "id": 98,
    "zhTitle": "六祖壇經講說第 098 講：第七祖四說、年代矛盾與馬祖龐居士",
    "zhSummary": "講者整理關於第七祖的四種說法，逐一用六祖去後七十年的語句與人物年代加以檢驗。排除矛盾後，講中傾向以馬祖道一與龐居士同興禪宗來理解二菩薩預言。",
    "enTitle": "Platform Sutra Lecture 098: Four Seventh-Patriarch Theories, Chronology, and Mazu with Pang",
    "enSummary": "The lecture organizes four theories about a seventh patriarch and tests them against Huineng's seventy-year prediction and the dates of the figures involved. After rejecting contradictions, it favors understanding the two bodhisattvas as Mazu Daoyi and Layman Pang helping Chan flourish."
  },
  "99": {
    "id": 99,
    "zhTitle": "六祖壇經講說第 099 講：第七祖結論、和尚尊稱與忠恕之道",
    "zhSummary": "此講總結第七祖考證，指出強立單一第七祖不如依六祖語意理解禪宗後世興盛。講者再談和尚尊稱、自性覺迷與孔子忠恕一貫之道，把成就落在因時因地因人說法與能忍能度。",
    "enTitle": "Platform Sutra Lecture 099: Concluding the Seventh Patriarch Inquiry and the Way of Reciprocity",
    "enSummary": "The lecture concludes the seventh-patriarch investigation, suggesting that Huineng's words are better read through the later flourishing of Chan than by forcing a single successor. It then discusses monk honorifics, awakening and delusion in self-nature, and Confucian loyal reciprocity as adaptive teaching and patient helping."
  },
  "100": {
    "id": 100,
    "zhTitle": "六祖壇經講說第 100 講：一以貫之、天道人道與三身化用",
    "zhSummary": "講者由孔子一以貫之會通天道與人道，說修行不能離開日用倫常與待人處世。後段談無明心動、欲性障蔽與三身化用，指出除去邪欲便顯清淨本性的法身。",
    "enTitle": "Platform Sutra Lecture 100: The Single Thread, Human and Heavenly Ways, and the Three Bodies",
    "enSummary": "The lecture links Confucius's single thread with human and heavenly ways, showing that practice cannot be separated from ordinary conduct and relationships. It then explains the stirring of ignorance, obstructive desire, and the functioning of the three bodies, with purity revealed as distorted desire is removed."
  },
  "101": {
    "id": 101,
    "zhTitle": "六祖壇經講說第 101 講：柳下惠盜跖、定力巧智與轉識成智",
    "zhSummary": "此講借柳下惠與盜跖故事分辨定力、欲境與巧智，說不被境界牽動才是真修養。講者並談善財、魯班巧藝與功德差別，轉入前五識與八識轉化來說見自性。",
    "enTitle": "Platform Sutra Lecture 101: Liu Xiahui, Robber Zhi, Samadhi, Cleverness, and Consciousness",
    "enSummary": "Using stories of Liu Xiahui and Robber Zhi, the lecture distinguishes stable discipline from cleverness and the pull of desire. It also discusses wealth, artisan skill, and merit before turning to the five sense consciousnesses and the transformation of consciousness for seeing self-nature."
  },
  "102": {
    "id": 102,
    "zhTitle": "六祖壇經講說第 102 講：五欲無益、人生如借與六祖入龕",
    "zhSummary": "講者從色聲香味觸五欲會引發欲心說起，提醒人生短暫如借住旅舍，不宜把心耗在無益追逐。後段述八識轉化、禪宗流派與六祖入龕肉身事蹟，並預告四十三位法嗣的補述。",
    "enTitle": "Platform Sutra Lecture 102: Futile Desires, Borrowed Life, and Huineng's Enshrinement",
    "enSummary": "The lecture begins with the five sense objects and the desires they stir, presenting human life as temporary lodging rather than a place for futile pursuit. It then discusses consciousness transformation, Chan lineages, and Huineng's enshrinement, setting up the account of forty-three Dharma heirs."
  },
  "103": {
    "id": 103,
    "zhTitle": "六祖壇經講說第 103 講：四十三法嗣、自性三寶與諡號流傳",
    "zhSummary": "最後一講補引傳法正宗記等資料，說明六祖門下四十三位得法弟子與禪宗傳法的後續。講者兼辨自性三寶、佛教在印度衰微與東亞保存，以及大鑑禪師諡號層層加封的流傳情形。",
    "enTitle": "Platform Sutra Lecture 103: Forty-Three Heirs, Self-Nature's Three Jewels, and Posthumous Titles",
    "enSummary": "The final lecture cites transmission records to supplement the forty-three disciples who received Dharma from Huineng and the later continuation of Chan. It also discusses self-nature's Three Jewels, the decline and preservation of Buddhism across regions, and the layered posthumous titles of Great Mirror Chan Master."
  }
};

const zhFocusById: Record<number, string> = {
  "1": "行由與見性",
  "2": "般若實修",
  "3": "調伏自心"
};

function buildSessions(locale: Locale): PlatformSessionRecord[] {
  return Array.from({ length: 103 }, (_, index) => {
    const id = index + 1;
    const page = platformLecturePages[id];

    if (locale === 'en') {
      return {
        id,
        title: page.enTitle ?? `Platform Sutra Lecture ${String(id).padStart(3, '0')}`,
        excerpt: page.enSummary ?? 'The full Traditional Chinese Tangjin transcript is now available as a lecture page; English editing can follow in a later pass.',
        focus: page.enTitle ? 'English summary available' : 'Chinese transcript live'
      };
    }

    return {
      id,
      title: page.zhTitle,
      excerpt: page.zhSummary,
      focus: zhFocusById[id] ?? '繁體逐字稿'
    };
  });
}

export const platformLocalizedContent: Record<Locale, PlatformContent> = {
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    title: '六祖壇經講記',
    subtitle: '一百零三講六祖壇經課程藏錄',
    description: '依「唐巾」逐字稿來源建立《六祖壇經》書頁，連結講記 playlist、繁體中文原典與英文譯文閱讀頁，並開放 103 講繁體中文逐字稿全文頁。',
    heroKicker: '禪宗 · 見性 · 般若',
    sourceLabel: '李瑞烈老師《六祖壇經》講記',
    sourceUrl: platformPlaylistUrl,
    languageToggleLabel: '語文切換',
    languages: { 'zh-Hant': '繁體中文', en: 'English' },
    teachingsEyebrow: '壇經三門',
    teachingsHeading: '以見性為修行中軸',
    featuredTeachings: [
      { title: '菩提自性，本來清淨', body: '《壇經》開宗明義指向自心本具清淨佛性，讀經不是外求知識，而是回到本心照見。' },
      { title: '口念心行，方是般若', body: '般若不是口頭名相；若口念而心不行，仍如說食不飽，不能真正到彼岸。' },
      { title: '無念、無相、無住', body: '一百零三講逐字稿已完整接入，可按講次回到原始講說脈絡中閱讀見性法門。' }
    ],
    ritualEyebrow: '閱讀次第',
    ritualHeading: '先原典、後講記、再回自心',
    ritualSteps: [
      '先讀《壇經》原文：掌握行由、般若、疑問、定慧等十品脈絡。',
      '再讀逐講整理：103 講繁體中文逐字稿已可逐頁閱讀，預覽卡保留短摘要。',
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
    description: 'A dedicated Platform Sutra book page from the Tangjin transcript source, with source-text reading, playlist links, and all 103 Traditional Chinese transcript pages live.',
    heroKicker: 'Chan · Seeing Nature · Prajna',
    sourceLabel: 'Li Ruilie Platform Sutra lecture playlist',
    sourceUrl: platformPlaylistUrl,
    languageToggleLabel: 'Language switcher',
    languages: { 'zh-Hant': '繁體中文', en: 'English' },
    teachingsEyebrow: 'Three Platform Sutra gates',
    teachingsHeading: 'Seeing the nature as the center of practice',
    featuredTeachings: [
      { title: 'The bodhi self-nature is originally pure', body: 'The Platform Sutra begins by pointing directly to the originally pure nature of one’s own mind; reading is a return inward, not a hunt for external information.' },
      { title: 'Prajna must be practiced, not merely recited', body: 'Prajna is not a verbal label. If the mouth recites while the mind does not practice, it is like talking about food without becoming full.' },
      { title: 'All 103 Tangjin transcripts are live', body: 'The archive now exposes every lecture as a Traditional Chinese transcript page, with English summaries to follow in later editorial passes.' }
    ],
    ritualEyebrow: 'Reading sequence',
    ritualHeading: 'Source text, lecture notes, then the mind itself',
    ritualSteps: [
      'Read the Platform Sutra source text first to orient around biography, prajna, questions, concentration and wisdom, and the ten-part structure.',
      'Then read the lecture pages: all 103 Traditional Chinese Tangjin transcripts are now linked from preview cards.',
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
    archiveHeading: '六祖壇經逐講選讀-李瑞烈老師',
    archiveDescription: '103 講繁體中文 tangjin 逐字稿全文頁已全部上線；每張預覽卡提供短摘要，方便快速定位講次。',
    readFullText: '閱讀',
    pendingLabel: '待整理',
    readingLabel: '六祖壇經講記閱讀',
    chromeNote: '本講已接入繁體中文 tangjin 逐字稿全文。',
    chromeNoteReady: '本講已整理為繁體中文與英文講記頁。',
    backToIndex: '返回六祖壇經總覽',
    sourceLabel: '來源：transcripts_tangjin 與六祖壇經講記 playlist',
    fullTextReady: '繁體中文逐字稿',
    fullTextReadyEnglish: 'Full English lecture page',
    unavailableTitle: '本講整理中',
    unavailableBody: '此講逐字稿已在 tangjin archive 中，尚未整理成可閱讀的講記頁。',
    unavailableAction: '返回六祖壇經總覽'
  },
  en: {
    archiveKicker: '103-lecture index',
    archiveHeading: 'Platform Sutra lecture notes',
    archiveDescription: 'All 103 Traditional Chinese Tangjin transcript pages are live. English prose editing remains staged after the Chinese transcript rollout.',
    readFullText: 'Read',
    pendingLabel: 'Pending',
    readingLabel: 'Platform Sutra lecture reading',
    chromeNote: 'This page is the full Traditional Chinese Tangjin transcript for the selected lecture.',
    chromeNoteReady: 'This lecture is available as a full Chinese and English page.',
    backToIndex: 'Back to Platform Sutra index',
    sourceLabel: 'Source: transcripts_tangjin and the Platform Sutra lecture playlist',
    fullTextReady: 'Traditional Chinese transcript',
    fullTextReadyEnglish: 'Full English lecture page',
    unavailableTitle: 'Lecture page in progress',
    unavailableBody: 'The transcript is present in the Tangjin archive but has not yet been edited into a readable lecture page.',
    unavailableAction: 'Back to Platform Sutra index'
  }
};
