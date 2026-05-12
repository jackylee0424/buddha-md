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
    "zhTitle": "六祖壇經講說之一：行由、見性與佛性無南北",
    "zhSummary": "由六祖身分與法寶題義說起，辨正欲貪欲差別，勸聞經須落實以除心病。",
    "enTitle": "Platform Sutra Lecture 1: Biography, Seeing the Nature, and Buddha-Nature Beyond South and North",
    "enSummary": "Introduces Huineng, Dharma treasure, proper desire versus greed, and practicing teachings to heal the mind.",
    "enFull": [
      "The first lecture begins by explaining why the Platform Sutra series was re-recorded. Earlier recording conditions were incomplete, and some talks were not fully preserved on video. Because many people later asked for recordings, the teacher returned to the material and recorded it again. This makes the lecture archive itself a work of preservation.",
      "The lecture then introduces “the Sixth Patriarch” as Huineng, the sixth patriarch of Chinese Chan. The Chan lineage is traced from the Buddha to Mahakasyapa, through the Indian patriarchs, to Bodhidharma, who came to China and became the first patriarch of Chinese Chan. Huineng inherits this lineage and is therefore called the Sixth Patriarch.",
      "The point of the opening is not to dwell on biography alone. It is to prepare the listener for the Platform Sutra’s central aim: Chan points directly to the mind and leads people to see their nature. The famous teaching that the bodhi self-nature is originally pure is not just doctrine; it is the lens through which the whole archive should be read."
    ]
  },
  "2": {
    "id": 2,
    "zhTitle": "六祖壇經講說之二：般若、彼岸與不在口念",
    "zhSummary": "先解般若波羅蜜為到彼岸妙慧，再敘惠能遠赴黃梅求佛並入磨坊受磨練。",
    "enTitle": "Platform Sutra Lecture 2: Prajna, Paramita, and Practice Beyond Recitation",
    "enSummary": "Explains prajna paramita, then follows Huineng's journey to Huangmei and his millroom training.",
    "enFull": [
      "The second lecture continues the prajna teaching shared by the Platform Sutra and the Diamond Sutra. The teacher first warns that one should not become trapped in disputes about pronunciation. Different regions and languages pronounce terms differently; what matters is not attachment to sound, but avoiding misunderstanding of the meaning.",
      "Prajna means wisdom, but not ordinary cleverness. It is the wondrous wisdom that illuminates delusion and leads people away from attachment. If one only speaks of emptiness or prajna while the mind remains full of greed, anger, and delusion, then, as the Platform Sutra says, it is like talking about food without becoming full.",
      "Paramita means reaching the other shore. The teacher explains that the other shore is the state of leaving birth-and-death attachment and returning to the pure nature. This is not reached by words or terminology alone, but by practicing non-abiding in the actual movements of daily thought."
    ]
  },
  "3": {
    "id": 3,
    "zhTitle": "六祖壇經講說之三：師徒因緣、讚毀與調伏自心",
    "zhSummary": "由師父讚歎嫌責談弟子受磨練之心，並析喜怒哀樂中節、六識與八識作用。",
    "enTitle": "Platform Sutra Lecture 3: Teacher-Student Conditions, Praise, Blame, and Subduing the Mind",
    "enSummary": "Discusses teacherly praise and blame as training, then analyzes emotions and the sixth through eighth consciousnesses.",
    "enFull": [
      "The third lecture begins with the conditions between teacher and student and the attitude needed to receive instruction. Whether a student is praised or criticized by the teacher, the first response should not be outward reaction but inward reflection: is the praise truly deserved, and does the criticism reveal a real fault?",
      "If praise immediately produces delight and arrogance, one is mistaking external approval for accomplishment. If criticism produces resentment and retreat, the mark of self is still strong. A true student of the Way uses both praise and blame as conditions for seeing the mind.",
      "Thus the third lecture teaches how to receive the Platform Sutra: with humility, self-examination, and correction rather than self-defense. In that way both praise and blame become a place of practice, and the teacher-student relationship becomes a field for refining prajna."
    ]
  },
  "4": {
    "id": 4,
    "zhTitle": "六祖壇經講說第 004 講",
    "zhSummary": "解第九清淨識如日被妄雲覆蔽，兼評神秀偈語及有漏福德利益與菩提。",
    "enSummary": "Explains the ninth pure consciousness, the cloud-sun metaphor, Shenxiu's verse, and limited worldly merit."
  },
  "5": {
    "id": 5,
    "zhTitle": "六祖壇經講說第 005 講",
    "zhSummary": "以慧可安心公案說萬法不滯，詳評惠能本來無一物之偈與神秀拂塵高下。",
    "enSummary": "Uses Huike's pacified mind to explain nonattachment, then evaluates Huineng's no-thing verse."
  },
  "6": {
    "id": 6,
    "zhTitle": "六祖壇經講說第 006 講",
    "zhSummary": "借古賢醜貌破以貌取人之見，再說六根六塵不生滅與自性能生萬法。",
    "enSummary": "Rejects judging by appearance, then explains six sense fields and how self-nature gives rise to phenomena."
  },
  "7": {
    "id": 7,
    "zhTitle": "六祖壇經講說第 007 講",
    "zhSummary": "明見本心即能作丈夫天人師，轉入無情無學與十惡八邪、十萬八千里西方義。",
    "enSummary": "Clarifies seeing the original mind, then turns to no-learning and the inner meaning of Western purity."
  },
  "8": {
    "id": 8,
    "zhTitle": "六祖壇經講說第 008 講",
    "zhSummary": "辨不立文字並非棄絕經教，借戒素、密意與十萬八千里破口頭執相迷信。",
    "enSummary": "Clarifies no dependence on words, using precepts, vegetarianism, and hidden meanings to challenge literalism."
  },
  "9": {
    "id": 9,
    "zhTitle": "六祖壇經講說第 009 講",
    "zhSummary": "解密語密意，將三大阿僧祇會歸貪瞋癡三毒，並說三界火宅與清淨禪。",
    "enSummary": "Explains hidden meanings, reads three asankhyeya kalpas as three poisons, and describes pure Chan."
  },
  "10": {
    "id": 10,
    "zhTitle": "六祖壇經講說第 010 講",
    "zhSummary": "說禪在行住坐臥不拘坐相，辨真妄二心、重戒罪、一闡提與頓教聖傳承。",
    "enSummary": "Presents Chan beyond sitting, distinguishing true and deluded mind, grave offenses, and the sudden teaching."
  },
  "11": {
    "id": 11,
    "zhTitle": "六祖壇經講說第 011 講",
    "zhSummary": "以六祖孔佛與金剛經示聖人無所得之謙卑，勸念佛須發菩提心並心口相應。",
    "enSummary": "Uses Huineng, Confucius, and the Buddha to teach humility and bodhi-minded recitation."
  },
  "12": {
    "id": 12,
    "zhTitle": "六祖壇經講說第 012 講",
    "zhSummary": "考釋迦家世三妻與三時殿史料出處，轉說大乘真空不偏空及聖人心量。",
    "enSummary": "Reviews the Buddha's household and three-season palace, then explains true emptiness and sage-like breadth."
  },
  "13": {
    "id": 13,
    "zhTitle": "六祖壇經講說第 013 講",
    "zhSummary": "以一即一切闡明無所住心，斥自封名師與貪供養，並說煩惱中求菩提。",
    "enSummary": "Uses one-is-all to explain nonabiding, criticizes self-appointed masters, and finds bodhi amid affliction."
  },
  "14": {
    "id": 14,
    "zhTitle": "六祖壇經講說第 014 講",
    "zhSummary": "釋呂祖語與八萬四千、天上一日等譬喻數密意，勸持金剛經須依教實行。",
    "enSummary": "Explains Lu Zu verses and symbolic numbers, urging Diamond Sutra recitation as lived practice."
  },
  "15": {
    "id": 15,
    "zhTitle": "六祖壇經講說第 015 講",
    "zhSummary": "以金礦譬喻佛性寶須遇明師鍛鍊，論末法持經功德、狐疑與受戒規矩。",
    "enSummary": "Compares Buddha-nature to ore needing refinement, then discusses sutra merit and precept responsibilities."
  },
  "16": {
    "id": 16,
    "zhTitle": "六祖壇經講說第 016 講",
    "zhSummary": "借忍辱仙人與法水洗垢，續明十二部經重頌孤起分類及說法須周詳。",
    "enSummary": "Uses the patience sage and cleansing Dharma-water to explain scriptural categories and careful teaching."
  },
  "17": {
    "id": 17,
    "zhTitle": "六祖壇經講說第 017 講",
    "zhSummary": "續釋十二部經與華嚴經本、方言文詞差異，提醒學人勿輕毀他宗初學。",
    "enSummary": "Continues the twelve divisions and textual variants, warning students not to disparage other practices."
  },
  "18": {
    "id": 18,
    "zhTitle": "六祖壇經講說第 018 講",
    "zhSummary": "說法須因人因地應機取用各不相同，並釋宿業病緣與無念不是無正念。",
    "enSummary": "Teaches adapting Dharma to circumstances, then explains karmic illness and no-thought as nonattachment."
  },
  "19": {
    "id": 19,
    "zhTitle": "六祖壇經講說第 019 講",
    "zhSummary": "解染著我所與外物牽心，勸五教隨俗互尊勿誹謗，並析魔障業障報障。",
    "enSummary": "Explains attachment and possessions, urges respect among traditions, and analyzes demonic, karmic, and retributive obstacles."
  },
  "20": {
    "id": 20,
    "zhTitle": "六祖壇經講說第 020 講",
    "zhSummary": "明道不離身心而須內求，人道天道相即不離世法，結大梵寺頓法開示。",
    "enSummary": "Shows the Way is sought within body-mind, linking human and heavenly paths before the sudden teaching."
  },
  "21": {
    "id": 21,
    "zhTitle": "六祖壇經講說第 021 講",
    "zhSummary": "由梁武帝無功德案分別福德功德與方便，並轉入十六十八羅漢考證。",
    "enSummary": "Uses Emperor Wu's question to distinguish merit from blessing and begins examining sixteen and eighteen arhats."
  },
  "22": {
    "id": 22,
    "zhTitle": "六祖壇經講說第 022 講",
    "zhSummary": "考證十六十八羅漢傳說，續解八邪與西方遠近，嚴斥靈感災祥預言邪說。",
    "enSummary": "Verifies arhat traditions, explains eight deviations and Western purity, and denounces sensational prophecies."
  },
  "23": {
    "id": 23,
    "zhTitle": "六祖壇經講說第 023 講",
    "zhSummary": "以真金喻成佛不退轉，論殺生戒、弘戒艱難與世俗嫌正法，勉眾求了生死。",
    "enSummary": "Compares Buddhahood to refined gold, discusses killing precepts, difficulties of teaching discipline, and liberation."
  },
  "24": {
    "id": 24,
    "zhTitle": "六祖壇經講說第 024 講",
    "zhSummary": "詳說十惡中的盜淫與八邪，指出不信因果為邪見之首及為利說法之害。",
    "enSummary": "Details stealing, sexual misconduct, eight deviations, disbelief in causality, and profit-driven preaching."
  },
  "25": {
    "id": 25,
    "zhTitle": "六祖壇經講說第 025 講",
    "zhSummary": "辨說法是否有功德與正命，解一心念佛非雜念及性在身心中的作用。",
    "enSummary": "Distinguishes teaching merit and right livelihood, explaining single-minded recitation and self-nature within body-mind."
  },
  "26": {
    "id": 26,
    "zhTitle": "六祖壇經講說第 026 講",
    "zhSummary": "明淨施不求名報與回向，舉喜捨求名反例，回到無住生清淨心行布施。",
    "enSummary": "Defines pure giving beyond fame or repayment, using examples before returning to nonabiding pure mind."
  },
  "27": {
    "id": 27,
    "zhTitle": "六祖壇經講說第 027 講",
    "zhSummary": "從平等慈悲心談應度化善惡眾生，依經辨正邪鬼神並強調依法不依人。",
    "enSummary": "Teaches equal-heartedly helping wrongdoers while using scripture to discern spirits and rely on Dharma."
  },
  "28": {
    "id": 28,
    "zhTitle": "六祖壇經講說第 028 講",
    "zhSummary": "辨仙佛不染塵緣與廟神正邪，破依賴神佛升天迷想並明在家也能修行。",
    "enSummary": "Distinguishes true immortals from temple spirits, rejects dependence on gods, and affirms lay practice."
  },
  "29": {
    "id": 29,
    "zhTitle": "六祖壇經講說第 029 講",
    "zhSummary": "由維摩經論辨經論名分與菩薩階位，談貧富各修其道與慈航法師清規。",
    "enSummary": "Distinguishes sutra, treatise, and bodhisattva levels, then discusses practicing amid poverty, wealth, and Cihang's discipline."
  },
  "30": {
    "id": 30,
    "zhTitle": "六祖壇經講說第 030 講",
    "zhSummary": "借海潮音批誦經賺錢亂象，分辨道教派門與輪藏由來，並勸守法心平。",
    "enSummary": "Cites Haichaoyin against paid chanting abuses, distinguishes Daoist branches, and urges lawful, peaceful conduct."
  },
  "31": {
    "id": 31,
    "zhTitle": "六祖壇經講說第 031 講",
    "zhSummary": "解心平何勞持戒與八戒齋，警惕大妄語活佛明師之罪並舉孔子孝化鄉里。",
    "enSummary": "Explains precepts when mind is even, warns against great false claims, and cites Confucian filial influence."
  },
  "32": {
    "id": 32,
    "zhTitle": "六祖壇經講說第 032 講",
    "zhSummary": "談行義同情應視人如親，釋安忍不動心，明無心行善可受報而不求報。",
    "enSummary": "Frames charity as kinship, explains patient nonreactivity, and teaches helping without seeking repayment."
  },
  "33": {
    "id": 33,
    "zhTitle": "六祖壇經講說第 033 講",
    "zhSummary": "辨行善動機與說法副作用，說念佛法會有後天益，並伏筆自性三寶本義。",
    "enSummary": "Examines motives and teaching side effects, noting recitation's worldly benefits before introducing self-nature's Three Jewels."
  },
  "34": {
    "id": 34,
    "zhTitle": "六祖壇經講說第 034 講",
    "zhSummary": "釋自性三寶為覺正淨，進論禪定智慧相資、狂慧之弊，並以直心為道場。",
    "enSummary": "Explains the self-nature Three Jewels as awakening, correctness, and purity, then links concentration, wisdom, and direct mind."
  },
  "35": {
    "id": 35,
    "zhTitle": "六祖壇經講說第 035 講",
    "zhSummary": "從直心談一行三昧，破除口是心非與枯坐著空。",
    "enSummary": "Explains straight mind and one-practice samadhi, rejecting hypocrisy and empty attachment to sitting."
  },
  "36": {
    "id": 36,
    "zhTitle": "六祖壇經講說第 036 講",
    "zhSummary": "闡明無相、真空與無住心，並引德山悟道公案。",
    "enSummary": "Clarifies formlessness, true emptiness, and non-abiding, ending with Deshan’s awakening story."
  },
  "37": {
    "id": 37,
    "zhTitle": "六祖壇經講說第 037 講",
    "zhSummary": "以金剛經說無所住，辨三毒六賊與無念正義。",
    "enSummary": "Uses the Diamond Sutra to explain non-abiding, the three poisons, and true no-thought."
  },
  "38": {
    "id": 38,
    "zhTitle": "六祖壇經講說第 038 講",
    "zhSummary": "辨佛不再投胎轉世，並說真如本性與坐禪正念。",
    "enSummary": "Rejects Buddha reincarnation claims while explaining true suchness, self-nature, and proper meditation."
  },
  "39": {
    "id": 39,
    "zhTitle": "六祖壇經講說第 039 講",
    "zhSummary": "從定香談信仰不迷，批判鬼神貪饗與外求度脫。",
    "enSummary": "Discusses meditative incense, warning against ghostly superstition and relying outwardly for liberation."
  },
  "40": {
    "id": 40,
    "zhTitle": "六祖壇經講說第 040 講",
    "zhSummary": "說無相懺悔與四弘誓願，強調自度勝於外求。",
    "enSummary": "Explains formless repentance and the four vows, stressing self-deliverance over outside rescue."
  },
  "41": {
    "id": 41,
    "zhTitle": "六祖壇經講說第 041 講",
    "zhSummary": "辨了義與方便，說神佛助緣有限，修行須靠自心。",
    "enSummary": "Distinguishes definitive meaning from expedients, emphasizing that practice depends on one’s own mind."
  },
  "42": {
    "id": 42,
    "zhTitle": "六祖壇經講說第 042 講",
    "zhSummary": "開示無相三歸依，以覺正淨破貪欲與迷信祈求。",
    "enSummary": "Presents formless refuge in awakening, rightness, and purity to counter greed and superstition."
  },
  "43": {
    "id": 43,
    "zhTitle": "六祖壇經講說第 043 講",
    "zhSummary": "借欲鉤說方便引入正道，歸依法僧須離欲清淨。",
    "enSummary": "Explains expedient desire-hooks while teaching refuge in Dharma and Sangha as purity and renunciation."
  },
  "44": {
    "id": 44,
    "zhTitle": "六祖壇經講說第 044 講",
    "zhSummary": "破佛神投胎說，辨真供養與自心正法清淨。",
    "enSummary": "Refutes divine reincarnation claims and defines true offering through right Dharma and purity."
  },
  "45": {
    "id": 45,
    "zhTitle": "六祖壇經講說第 045 講",
    "zhSummary": "辨僧與沙門種類，說看破名利、自家寶藏與少欲。",
    "enSummary": "Classifies monks and seekers, teaching detachment from fame, inner treasure, and contentment."
  },
  "46": {
    "id": 46,
    "zhTitle": "六祖壇經講說第 046 講",
    "zhSummary": "從無我空性說灌頂非得道，並析四相與邪慢。",
    "enSummary": "Explains emptiness and no-self, rejecting initiation as attainment while analyzing four marks."
  },
  "47": {
    "id": 47,
    "zhTitle": "六祖壇經講說第 047 講",
    "zhSummary": "說歸依淨與自性三寶，破執木佛而不廢敬禮。",
    "enSummary": "Explains refuge in purity and self-nature’s Three Jewels without clinging to wooden Buddhas."
  },
  "48": {
    "id": 48,
    "zhTitle": "六祖壇經講說第 048 講",
    "zhSummary": "引寒山詩斥募財諂曲，勸去吾我慢與私心。",
    "enSummary": "Uses Hanshan’s verse to criticize flattering fundraising and urge removal of egoistic pride."
  },
  "49": {
    "id": 49,
    "zhTitle": "六祖壇經講說第 049 講",
    "zhSummary": "說實性真如與一念變化，辨梁武帝福德非功德。",
    "enSummary": "Explains true suchness and thought’s transformations, distinguishing Liang Wudi’s merit from virtue."
  },
  "50": {
    "id": 50,
    "zhTitle": "六祖壇經講說第 050 講",
    "zhSummary": "分福報與罪業，明住相布施不能消業了生死。",
    "enSummary": "Separates blessings from karmic wrongdoing, showing attached giving cannot erase karma or liberate."
  },
  "51": {
    "id": 51,
    "zhTitle": "六祖壇經講說第 051 講",
    "zhSummary": "依法華說方便退席，破超度掛號即可解脫之見。",
    "enSummary": "Uses the Lotus Sutra’s expedients to reject guaranteed salvation through rituals alone."
  },
  "52": {
    "id": 52,
    "zhTitle": "六祖壇經講說第 052 講",
    "zhSummary": "校正六祖事蹟與避難石傳說，轉入定慧等持。",
    "enSummary": "Corrects stories about Huineng and the refuge stone, then turns to balancing samadhi and wisdom."
  },
  "53": {
    "id": 53,
    "zhTitle": "六祖壇經講說第 053 講",
    "zhSummary": "辨誦經與念經，說法達須解法華宗旨而非徒誦。",
    "enSummary": "Distinguishes reciting from mindful practice, showing Fada must grasp the Lotus Sutra’s purpose."
  },
  "54": {
    "id": 54,
    "zhTitle": "六祖壇經講說第 054 講",
    "zhSummary": "詳說法華一大事因緣，開示悟入皆為佛知見。",
    "enSummary": "Explains the Lotus Sutra’s one great matter as opening, showing, realizing, and entering Buddha-wisdom."
  },
  "55": {
    "id": 55,
    "zhTitle": "六祖壇經講說第 055 講",
    "zhSummary": "以犛牛愛尾喻執誦經，並析三車火宅與功德福德。",
    "enSummary": "Uses the yak-tail analogy for clinging to recitation, then explains three carts and merit."
  },
  "56": {
    "id": 56,
    "zhTitle": "六祖壇經講說第 056 講",
    "zhSummary": "明三乘皆方便，唯一佛乘直指佛性與見性成佛。",
    "enSummary": "Shows the three vehicles are expedients and the one Buddha vehicle points to self-nature."
  },
  "57": {
    "id": 57,
    "zhTitle": "六祖壇經講說第 057 講",
    "zhSummary": "由智通問三身四智，說八識轉成圓鏡與平等智。",
    "enSummary": "Through Zhitong’s question, explains three bodies, four wisdoms, and transforming consciousness."
  },
  "58": {
    "id": 58,
    "zhTitle": "六祖壇經講說第 058 講",
    "zhSummary": "闡平等性智與大悲，並說妙觀察智須因機說法。",
    "enSummary": "Expounds equality wisdom and great compassion, then explains discerning wisdom as teaching by capacities."
  },
  "59": {
    "id": 59,
    "zhTitle": "六祖壇經講說第 059 講",
    "zhSummary": "辨方便與真實，說三身四智皆是假名，佛性為本。",
    "enSummary": "Distinguishes expedient and true teaching, saying three bodies and four wisdoms are provisional names."
  },
  "60": {
    "id": 60,
    "zhTitle": "六祖壇經講說第 060 講",
    "zhSummary": "說三佛性與道莫污染，轉入智常問本心本性。",
    "enSummary": "Explains three kinds of Buddha-nature and non-contamination before Zhitong asks about original mind."
  },
  "61": {
    "id": 61,
    "zhTitle": "六祖壇經講說第 061 講",
    "zhSummary": "破空見為一法真如，並辨方便、權智與實智。",
    "enSummary": "Rejects empty nihilism by explaining the one Dharma as true suchness and skillful wisdom."
  },
  "62": {
    "id": 62,
    "zhTitle": "六祖壇經講說第 062 講",
    "zhSummary": "明最上乘須萬法俱通，並以志道問涅槃樂辨斷常。",
    "enSummary": "Defines the supreme vehicle as unobstructed practice and uses Zhidao’s question to refute extremes."
  },
  "63": {
    "id": 63,
    "zhTitle": "六祖壇經講說第 063 講",
    "zhSummary": "破無作邪見與佛菩薩投胎說，兼明性戒遮戒。",
    "enSummary": "Rejects no-practice wrong views and divine rebirth claims while explaining inherent and prohibitive precepts."
  },
  "64": {
    "id": 64,
    "zhTitle": "六祖壇經講說第 064 講",
    "zhSummary": "說六根對境不起用想，並以真我釋唯我獨尊。",
    "enSummary": "Teaches sense faculties meeting objects without grasping and interprets ‘I alone am honored’ as true self."
  },
  "65": {
    "id": 65,
    "zhTitle": "六祖壇經講說第 065 講",
    "zhSummary": "講懷讓悟無物可比，並引磨磚作鏡破枯坐。",
    "enSummary": "Explains Huairang’s insight beyond comparison and the brick-polishing story against mere sitting."
  },
  "66": {
    "id": 66,
    "zhTitle": "六祖壇經講說第 066 講",
    "zhSummary": "由玄覺悟佛心宗，說威音王以前與真比丘義。",
    "enSummary": "Through Xuanjue, explains the Buddha-mind school, primordial self-nature, and true monkhood."
  },
  "67": {
    "id": 67,
    "zhTitle": "六祖壇經講說第 067 講",
    "zhSummary": "說玄覺一宿覺與第九識佛性，並引證道歌。",
    "enSummary": "Discusses Xuanjue’s overnight awakening, ninth consciousness as Buddha-nature, and the Song of Enlightenment."
  },
  "68": {
    "id": 68,
    "zhTitle": "六祖壇經講說第 068 講",
    "zhSummary": "由智隍入定說正受，辨常定大定與看破名利。",
    "enSummary": "Using Zhihuang’s meditation, explains true absorption, great stability, and detachment from fame."
  },
  "69": {
    "id": 69,
    "zhTitle": "六祖壇經講說第 069 講",
    "zhSummary": "以離生死苦結課，並辨宿業、見道與性相如如。",
    "enSummary": "Concludes with freedom from birth-death suffering, karmic causes, seeing the Way, and suchness."
  },
  "70": {
    "id": 70,
    "zhTitle": "六祖壇經講說第 070 講",
    "zhSummary": "從智隍悟道談無所得，並解正法眼藏、僧伽梨與離相見性之義。",
    "enSummary": "Explains Zhihuang's awakening, non-attainment, Dharma eye, robes, and seeing nature beyond forms."
  },
  "71": {
    "id": 71,
    "zhTitle": "六祖壇經講說第 071 講",
    "zhSummary": "由方辯袈裟因緣說背相歸性，辨神秀偈語與頓除妄念的頓悟。",
    "enSummary": "Moves from Fangbian's robe story to rejecting forms, Shenxiu's verse, and sudden awakening."
  },
  "72": {
    "id": 72,
    "zhTitle": "六祖壇經講說第 072 講",
    "zhSummary": "闡明菩提不可得與無師智，轉入志誠所聞自性戒定慧修證之路。",
    "enSummary": "Clarifies unattainable bodhi, teacherless wisdom, and the practice of self-nature's precepts, meditation, and wisdom."
  },
  "73": {
    "id": 73,
    "zhTitle": "六祖壇經講說第 073 講",
    "zhSummary": "以自性戒定慧解第八識轉化，提醒修行中不住空相且離有所得心。",
    "enSummary": "Explains self-nature's precepts, meditation, and wisdom through consciousness, avoiding attachment to emptiness or forms."
  },
  "74": {
    "id": 74,
    "zhTitle": "六祖壇經講說第 074 講",
    "zhSummary": "從生意六度與無所得談實修，警示大妄語與戒律須因機理解重點。",
    "enSummary": "Stresses practicing the six perfections, non-attainment, grave false speech, and contextual understanding of discipline."
  },
  "75": {
    "id": 75,
    "zhTitle": "六祖壇經講說第 075 講",
    "zhSummary": "釋遊戲三昧與三界輪迴，破除舍利崇拜及種種著相求福迷信。",
    "enSummary": "Explains playful samadhi and the three realms while challenging relic worship and form-bound superstition."
  },
  "76": {
    "id": 76,
    "zhTitle": "六祖壇經講說第 076 講",
    "zhSummary": "述志誠離相法門與行昌刺祖因緣，鋪陳心印及佛性無常義本旨。",
    "enSummary": "Recounts Zhicheng's freedom from forms and Xingchang's attempted attack, leading toward Buddha-nature's impermanence."
  },
  "77": {
    "id": 77,
    "zhTitle": "六祖壇經講說第 077 講",
    "zhSummary": "辨佛性常無常的方便深義，勸人依法依智而不陷宗教爭執之失。",
    "enSummary": "Interprets Buddha-nature as constant or impermanent skillfully, urging reliance on Dharma and wisdom."
  },
  "78": {
    "id": 78,
    "zhTitle": "六祖壇經講說第 078 講",
    "zhSummary": "分辨了義經與方便說法，指出常無常皆須回到中道修心性根本。",
    "enSummary": "Distinguishes definitive meaning from expedient teaching, grounding constant and impermanent in the middle way."
  },
  "79": {
    "id": 79,
    "zhTitle": "六祖壇經講說第 079 講",
    "zhSummary": "以依法不依人說無住禪，破解十萬八千里與阿僧祇文字執之害。",
    "enSummary": "Uses reliance on Dharma to explain non-abiding Chan and decode symbolic scriptural language."
  },
  "80": {
    "id": 80,
    "zhTitle": "六祖壇經講說第 080 講",
    "zhSummary": "詳說涅槃經四依原則，借三大阿僧祇闡明依義不依字的密旨。",
    "enSummary": "Explains the Nirvana Sutra's four reliances, reading three asaṃkhyeyas as inner poisons."
  },
  "81": {
    "id": 81,
    "zhTitle": "六祖壇經講說第 081 講",
    "zhSummary": "引破相論辨阿僧祇密義，警惕心外求佛、貪財與破戒過失危險。",
    "enSummary": "Cites the Treatise on Breaking Forms to warn against externalized Buddhahood, greed, and broken precepts."
  },
  "82": {
    "id": 82,
    "zhTitle": "六祖壇經講說第 082 講",
    "zhSummary": "補述沙彌十戒與供養分寸，講清神會公案和善知識三義脈絡。",
    "enSummary": "Supplements novice precepts and proper offerings, then turns to Shenhui and the good friend."
  },
  "83": {
    "id": 83,
    "zhTitle": "六祖壇經講說第 083 講",
    "zhSummary": "解教授、同行、外護善知識，並說無相無住須親自從自心領悟。",
    "enSummary": "Explains three good friends, formless non-abiding, and truths that must be realized inwardly."
  },
  "84": {
    "id": 84,
    "zhTitle": "六祖壇經講說第 084 講",
    "zhSummary": "由方便權假說回自性佛性，並述六祖拒召與機緣品開端脈絡。",
    "enSummary": "Returns from expedient teaching to self-nature and Buddha-nature, then begins the imperial summons episode."
  },
  "85": {
    "id": 85,
    "zhTitle": "六祖壇經講說第 085 講",
    "zhSummary": "借磨磚作鏡破除枯坐成佛觀，闡明如來清淨禪與自悟修行真義。",
    "enSummary": "Uses polishing a brick into a mirror to reject dead sitting and clarify pure Chan."
  },
  "86": {
    "id": 86,
    "zhTitle": "六祖壇經講說第 086 講",
    "zhSummary": "強調先天法須自修自悟自證，並以煩惱即菩提破外求長生修行。",
    "enSummary": "Emphasizes self-practice and self-realization, using afflictions-as-bodhi to refute external quests for longevity."
  },
  "87": {
    "id": 87,
    "zhTitle": "六祖壇經講說第 087 講",
    "zhSummary": "考證徐福入海赴日傳說與劉伯溫讖，批判傳單謠言惑眾迷信流弊。",
    "enSummary": "Examines Xu Fu's voyage and Liu Bowen prophecies, criticizing fear-mongering pamphlet rumors."
  },
  "88": {
    "id": 88,
    "zhTitle": "六祖壇經講說第 088 講",
    "zhSummary": "續破劉伯溫讖語恐嚇，轉述薛簡問法及八識有漏無漏修行之義。",
    "enSummary": "Continues debunking Liu Bowen prophecies, then turns to Xue Jian, consciousness, and leakage."
  },
  "89": {
    "id": 89,
    "zhTitle": "六祖壇經講說第 089 講",
    "zhSummary": "辨有漏淨土與中道無住，說明蓋寺行善福德不等於功德的差別。",
    "enSummary": "Distinguishes leaky Pure Land, middle-way non-abiding, and merit that does not end birth and death."
  },
  "90": {
    "id": 90,
    "zhTitle": "六祖壇經講說第 090 講",
    "zhSummary": "依達摩破相論詳斷三毒，警醒盲目布施與貪求名聞利養兩種過患。",
    "enSummary": "Uses the Treatise on Breaking Forms to sever the three poisons and critique blind giving."
  },
  "91": {
    "id": 91,
    "zhTitle": "六祖壇經講說第 091 講",
    "zhSummary": "批判邪命賣法與借道斂財，承六祖臨終教中道、真心與利他之道。",
    "enSummary": "Critiques selling Dharma for livelihood, then teaches the middle way, true mind, and altruistic bodhi."
  },
  "92": {
    "id": 92,
    "zhTitle": "六祖壇經講說第 092 講",
    "zhSummary": "由第一義無住離空相談起，考辨六祖預言中的第七祖人選真義。",
    "enSummary": "Begins with first-principle non-abiding and investigates candidates for the predicted seventh patriarch."
  },
  "93": {
    "id": 93,
    "zhTitle": "六祖壇經講說第 093 講",
    "zhSummary": "考定馬祖與龐居士同興禪宗，並補說一相一行三昧與真忍本義。",
    "enSummary": "Identifies Mazu and Layman Pang as Chan renewers, adding one-mark samadhi and genuine forbearance."
  },
  "94": {
    "id": 94,
    "zhTitle": "六祖壇經講說第 094 講",
    "zhSummary": "述六祖示寂前落葉歸根，辨心印正法眼藏與衣鉢傳承問題之義。",
    "enSummary": "Describes Huineng's final return, then examines mind-seal, Dharma eye, and transmission issues."
  },
  "95": {
    "id": 95,
    "zhTitle": "六祖壇經講說第 095 講",
    "zhSummary": "詳解正法眼藏與依義不依字，並述六祖肉身盜首預言護法因緣。",
    "enSummary": "Explains the true Dharma eye and meaning over words, including Huineng's stolen-head prediction."
  },
  "96": {
    "id": 96,
    "zhTitle": "六祖壇經講說第 096 講",
    "zhSummary": "談劫運四大與易卦源流，辨彌勒、布袋和尚與附會出世說亂象。",
    "enSummary": "Discusses cosmic elements, Yijing origins, Maitreya, Budai, and dubious claims of incarnation."
  },
  "97": {
    "id": 97,
    "zhTitle": "六祖壇經講說第 097 講",
    "zhSummary": "梳理賢劫諸佛與宗派源流，續辨彌勒附會與第七祖諸說各種爭議。",
    "enSummary": "Surveys kalpa Buddhas and sectarian lineages while continuing debates over Maitreya and the seventh patriarch."
  },
  "98": {
    "id": 98,
    "zhTitle": "六祖壇經講說第 098 講",
    "zhSummary": "續考第七祖四種說法，排除年代矛盾後歸向馬祖與龐居士為定論。",
    "enSummary": "Continues testing seventh-patriarch theories, rejecting chronological contradictions and favoring Mazu and Pang."
  },
  "99": {
    "id": 99,
    "zhTitle": "六祖壇經講說第 099 講",
    "zhSummary": "總結第七祖考證，轉談和尚尊稱、自性覺迷與忠恕一貫之道本義。",
    "enSummary": "Concludes the seventh-patriarch inquiry, then discusses monk honorifics, awakened nature, and loyal reciprocity."
  },
  "100": {
    "id": 100,
    "zhTitle": "六祖壇經講說第 100 講",
    "zhSummary": "以一以貫之會通天道與人道，說無明心動及三身化用修行關鍵。",
    "enSummary": "Connects the single thread with human and heavenly ways, explaining ignorance and the three bodies."
  },
  "101": {
    "id": 101,
    "zhTitle": "六祖壇經講說第 101 講",
    "zhSummary": "借柳下惠與盜跖故事，辨定力、巧智、善財與功德差別真正之別。",
    "enSummary": "Uses Liu Xiahui and Robber Zhi stories to distinguish samadhi, cleverness, wealth, and merit."
  },
  "102": {
    "id": 102,
    "zhTitle": "六祖壇經講說第 102 講",
    "zhSummary": "從五欲無益談人生如借，述八識轉化與六祖入龕肉身前後事蹟。",
    "enSummary": "Reflects on futile desires and brief life, then explains consciousness transformation and Huineng's enshrinement."
  },
  "103": {
    "id": 103,
    "zhTitle": "六祖壇經講說第 103 講",
    "zhSummary": "補述六祖傳法、四十三法嗣與諡號，辨自性三寶並警惕迷信敗法。",
    "enSummary": "Supplements Huineng's transmission and posthumous titles, distinguishes self-nature treasures, and warns against superstition."
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
    archiveHeading: '六祖壇經逐講選讀',
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
