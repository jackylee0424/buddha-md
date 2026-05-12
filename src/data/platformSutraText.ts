import type { Locale } from './siteData';

export type PlatformSutraSection = {
  id: number;
  zhTitle: string;
  zhParagraphs: string[];
  enTitle: string;
  enParagraphs: string[];
};

export const platformSutraPageContent: Record<Locale, {
  homeEyebrow: string;
  homeHeading: string;
  homeDescription: string;
  ctaLabel: string;
  pageEyebrow: string;
  pageTitle: string;
  pageDescription: string;
  introTitle: string;
  introParagraphs: string[];
  sourceLabel: string;
  sourceUrl: string;
}> = {
  'zh-Hant': {
    homeEyebrow: '六祖壇經原文',
    homeHeading: '《六祖大師法寶壇經》原文與英文譯文',
    homeDescription: '依 Wikisource 繁體中文《六祖壇經》目錄建立十品閱讀頁，英文模式提供公開英譯摘讀，方便和講記頁互相參照。',
    ctaLabel: '閱讀壇經原文',
    pageEyebrow: '原典閱讀',
    pageTitle: '六祖壇經原文',
    pageDescription: '繁體中文模式顯示《六祖大師法寶壇經》十品原文選段；可切換英文模式閱讀對應英譯。',
    introTitle: '來源說明',
    introParagraphs: [
      '中文原文依 Wikisource《六祖壇經／六祖大師法寶壇經》繁體頁面整理。',
      '英文閱讀模式參考 Dwight Goddard 1932 edition, based upon Wong Mou-lam’s 1930 translation, as preserved by the Internet Sacred Text Archive；本站採摘讀方式，後續可逐品擴充為全文。'
    ],
    sourceLabel: '來源：Wikisource《六祖壇經》',
    sourceUrl: 'https://zh.wikisource.org/zh-hant/六祖壇經'
  },
  en: {
    homeEyebrow: 'Platform Sutra source text',
    homeHeading: 'Read the Platform Sutra in Chinese or English',
    homeDescription: 'A ten-section reading route for the Platform Sutra, grounded in the Wikisource Chinese text and paired with a public English translation source.',
    ctaLabel: 'Read the Platform Sutra text',
    pageEyebrow: 'Source reading',
    pageTitle: 'The Platform Sutra',
    pageDescription: 'Read selected English passages from the Platform Sutra; switch to Traditional Chinese for the Wikisource Chinese source text.',
    introTitle: 'Source note',
    introParagraphs: [
      'Chinese source: Wikisource, 六祖壇經／六祖大師法寶壇經.',
      'English source: Dwight Goddard’s 1932 edition, based upon Wong Mou-lam’s 1930 translation, preserved by the Internet Sacred Text Archive. This page starts with selected reading passages and is structured for later full-chapter expansion.'
    ],
    sourceLabel: 'Source: Sacred Texts Platform Sutra translation',
    sourceUrl: 'https://sacred-texts.com/bud/bb/bb25.htm'
  }
} as const;

export const platformSutraSections: PlatformSutraSection[] = [
  {
    id: 1,
    zhTitle: '行由品第一',
    zhParagraphs: [
      '時大師至寶林，韶州韋刺史名璩，與官僚入山，請師出於城中大梵寺講堂，為眾開緣說法。師升座次，刺史官僚三十餘人、儒宗學士三十餘人、僧尼道俗一千餘人，同時作禮，願聞法要。',
      '大師告眾曰：「善知識！菩提自性，本來清淨，但用此心，直了成佛。善知識！且聽惠能行由得法事意。」',
      '惠能聞客誦《金剛經》云：「應無所著，而生其心。」心即開悟，遂問客誦何經。客曰：「金剛經。」'
    ],
    enTitle: 'Chapter 1: Autobiography / Causes and Conditions',
    enParagraphs: [
      'Once, when the Patriarch had come to Pao-lam Monastery, Prefect Wai and other officials invited him to give a public address in the lecture hall of Ta-fan Temple.',
      'The Master said to the assembly: “Learned Audience, our essence of mind, which is the seed or kernel of enlightenment, is pure by nature. By making use of this mind alone, we may reach Buddhahood directly.”',
      'Huineng heard a guest reciting the Diamond Sutra line about allowing the mind to arise without abiding, and his mind immediately opened.'
    ]
  },
  {
    id: 2,
    zhTitle: '般若品第二',
    zhParagraphs: [
      '次日，韋使君請益。師升坐，告大眾曰：「總淨心念摩訶般若波羅蜜多。」',
      '善知識，菩提般若之智，世人本自有之，只緣心迷，不能自悟，須假大善知識，示導見性。',
      '善知識，世人終日口念般若，不識自性般若，猶如說食不飽。此須心行，不在口念。'
    ],
    enTitle: 'Chapter 2: Prajna',
    enParagraphs: [
      'On the following day, Prefect Wai asked the Patriarch to give another address. Having taken his seat, the Patriarch asked the assembly first to purify their minds and recite Maha Prajna Paramita.',
      'The wisdom of enlightenment is inherent in every person, but because the mind is deluded, people cannot realize it by themselves and need a good teacher to show the way to seeing the nature.',
      'To recite prajna all day without knowing the prajna of one’s own nature is like talking about food without becoming full. It must be practiced in the mind, not merely spoken by the mouth.'
    ]
  },
  {
    id: 3,
    zhTitle: '疑問品第三',
    zhParagraphs: [
      '韋刺史問曰：「和尚所說，可不是達摩大師宗旨乎？」師曰：「是。」',
      '公曰：「梁武帝一生造寺度僧，布施設齋，有何功德？」達摩言：「實無功德。」師曰：「實無功德，勿疑先聖之言。」',
      '功德在法身中，不在修福；見性是功，平等是德。'
    ],
    enTitle: 'Chapter 3: Questions and Doubts',
    enParagraphs: [
      'The Prefect asked whether the teaching was not the doctrine of Bodhidharma. The Master answered that it was.',
      'The famous question of Emperor Wu of Liang is raised: what merit is gained by building temples, ordaining monks, giving alms, and holding vegetarian feasts? Bodhidharma answered: “No merit.”',
      'The Master explains that merit is found in the Dharma-body and not merely in cultivating blessings. Seeing the nature is achievement; equality is virtue.'
    ]
  },
  {
    id: 4,
    zhTitle: '定慧品第四',
    zhParagraphs: [
      '師示眾云：「善知識！我此法門，以定慧為本。大眾勿迷，言定慧別。定慧一體，不是二。」',
      '定是慧體，慧是定用；即慧之時定在慧，即定之時慧在定。',
      '若識此義，即是定慧等學。'
    ],
    enTitle: 'Chapter 4: Concentration and Wisdom',
    enParagraphs: [
      'The Master teaches that in this Dharma door, concentration and wisdom are the foundation.',
      'Do not mistakenly regard concentration and wisdom as separate. They are one substance, not two.',
      'Concentration is the essence of wisdom, and wisdom is the function of concentration.'
    ]
  },
  {
    id: 5,
    zhTitle: '坐禪品第五',
    zhParagraphs: [
      '師示眾云：「此門坐禪，元不著心，亦不著淨，亦不是不動。」',
      '若言著心，心元是妄，知心如幻，故無所著也。',
      '外於一切善惡境界，心念不起，名為坐；內見自性不動，名為禪。'
    ],
    enTitle: 'Chapter 5: Sitting in Chan',
    enParagraphs: [
      'In this teaching, sitting in meditation is not attachment to the mind, not attachment to purity, and not mere motionlessness.',
      'If one clings to the mind, the mind is originally delusive; knowing the mind as illusory, there is nothing to cling to.',
      'Not giving rise to thoughts toward external good or evil states is called sitting; inwardly seeing the unmoving self-nature is called Chan.'
    ]
  },
  {
    id: 6,
    zhTitle: '懺悔品第六',
    zhParagraphs: [
      '師言：「善知識！各隨我語，一時道：弟子等從前念、今念及後念，念念不被愚迷染。」',
      '前念今念後念，念念不被愚迷染，從前所有惡業，愚迷等罪，悉皆懺悔。',
      '自性若悟，眾生是佛；自性若迷，佛是眾生。'
    ],
    enTitle: 'Chapter 6: Repentance and Reform',
    enParagraphs: [
      'The Master leads the assembly in a formless repentance: in past, present, and future thoughts, may each thought be unstained by delusion.',
      'All former evil karma and deluded offenses are repented of by turning the mind away from delusion.',
      'When the self-nature is awakened, living beings are Buddhas; when the self-nature is deluded, Buddhas appear as living beings.'
    ]
  },
  {
    id: 7,
    zhTitle: '機緣品第七',
    zhParagraphs: [
      '師自黃梅得法，回至韶州曹侯村，人無知者。',
      '有儒士劉志略禮遇甚厚；志略有姑為尼，名無盡藏，常誦《涅槃經》。',
      '師暫聽即知妙義，遂為解說。'
    ],
    enTitle: 'Chapter 7: Opportunities and Conditions',
    enParagraphs: [
      'After receiving the Dharma at Huangmei, the Master returned south and was not yet known by people.',
      'Various encounters then unfolded according to karmic conditions, including meetings with practitioners who recited sutras and sought clarification.',
      'The chapter shows how the teaching is opened according to the conditions of each person.'
    ]
  },
  {
    id: 8,
    zhTitle: '頓漸品第八',
    zhParagraphs: [
      '時，祖師居曹溪寶林，神秀大師在荊南玉泉寺。',
      '兩宗盛化，人皆稱南能北秀，故有南北二宗頓漸之分。',
      '師曰：「法本一宗，人有南北；法即一種，見有遲疾。何名頓漸？法無頓漸，人有利鈍，故名頓漸。」'
    ],
    enTitle: 'Chapter 8: Sudden and Gradual',
    enParagraphs: [
      'In time people spoke of southern Huineng and northern Shenxiu, and of sudden and gradual schools.',
      'The Master explains that the Dharma is originally one. People may be southern or northern, and their capacities may be sharp or dull, but the Dharma itself is not two.',
      'There is no sudden or gradual in the Dharma; sudden and gradual refer to people’s capacities and realization.'
    ]
  },
  {
    id: 9,
    zhTitle: '護法品第九',
    zhParagraphs: [
      '神龍元年上元日，則天、中宗詔云：「朕請安、秀二師，宮中供養，萬機之暇，每究一乘。」',
      '二師推讓云：「南方有能禪師，密受忍大師衣法，傳佛心印，可請彼問。」',
      '今遣內侍薛簡馳詔迎請，願師慈念，速赴上京。'
    ],
    enTitle: 'Chapter 9: Imperial Protection',
    enParagraphs: [
      'The imperial court hears of the teaching and sends an invitation to the Master.',
      'Other teachers point to Huineng as the one who secretly received the robe and Dharma from the Fifth Patriarch and transmitted the Buddha-mind seal.',
      'The chapter records the relationship between the teaching and those who sought to protect or honor it.'
    ]
  },
  {
    id: 10,
    zhTitle: '付囑品第十',
    zhParagraphs: [
      '一日，師喚門人法海、志誠、法達、神會等曰：「汝等不同餘人，吾滅度後，各為一方師。」',
      '吾今教汝說法，不失本宗。先須舉三科法門，動用三十六對，出沒即離兩邊。',
      '若有人問法，出語盡雙，皆取對法，來去相因，究竟二法盡除，更無去處。'
    ],
    enTitle: 'Chapter 10: Final Instructions',
    enParagraphs: [
      'One day the Master calls his disciples and instructs them that after his passing they will each teach in one direction.',
      'He teaches them how to speak the Dharma without losing the root doctrine, using paired principles while leaving both extremes.',
      'The final instructions preserve the living method of teaching: respond to conditions while not falling into dualistic attachment.'
    ]
  }
];
