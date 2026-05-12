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
    "zhSummary": "第一講從補錄因緣與六祖身份說起，說明禪宗法脈、惠能求法的行由，以及「佛性本無南北」的核心精神。",
    "enTitle": "Platform Sutra Lecture 1: Biography, Seeing the Nature, and Buddha-Nature Beyond South and North",
    "enSummary": "The first lecture introduces the Sixth Patriarch and frames Huineng’s story as a direct teaching on seeing one’s originally pure nature.",
    "enFull": [
      "The first lecture begins by explaining why the Platform Sutra series was re-recorded. Earlier recording conditions were incomplete, and some talks were not fully preserved on video. Because many people later asked for recordings, the teacher returned to the material and recorded it again. This makes the lecture archive itself a work of preservation.",
      "The lecture then introduces “the Sixth Patriarch” as Huineng, the sixth patriarch of Chinese Chan. The Chan lineage is traced from the Buddha to Mahakasyapa, through the Indian patriarchs, to Bodhidharma, who came to China and became the first patriarch of Chinese Chan. Huineng inherits this lineage and is therefore called the Sixth Patriarch.",
      "The point of the opening is not to dwell on biography alone. It is to prepare the listener for the Platform Sutra’s central aim: Chan points directly to the mind and leads people to see their nature. The famous teaching that the bodhi self-nature is originally pure is not just doctrine; it is the lens through which the whole archive should be read."
    ]
  },
  "2": {
    "id": 2,
    "zhTitle": "六祖壇經講說之二：般若、彼岸與不在口念",
    "zhSummary": "第二講承接般若與波羅蜜的義理，提醒讀者不要把音譯、名相或口頭空談誤認為修行本身。真正的般若要在心行上相應。",
    "enTitle": "Platform Sutra Lecture 2: Prajna, Paramita, and Practice Beyond Recitation",
    "enSummary": "The second lecture turns to prajna and paramita, warning that sounds, names, and verbal fluency are not yet cultivation.",
    "enFull": [
      "The second lecture continues the prajna teaching shared by the Platform Sutra and the Diamond Sutra. The teacher first warns that one should not become trapped in disputes about pronunciation. Different regions and languages pronounce terms differently; what matters is not attachment to sound, but avoiding misunderstanding of the meaning.",
      "Prajna means wisdom, but not ordinary cleverness. It is the wondrous wisdom that illuminates delusion and leads people away from attachment. If one only speaks of emptiness or prajna while the mind remains full of greed, anger, and delusion, then, as the Platform Sutra says, it is like talking about food without becoming full.",
      "Paramita means reaching the other shore. The teacher explains that the other shore is the state of leaving birth-and-death attachment and returning to the pure nature. This is not reached by words or terminology alone, but by practicing non-abiding in the actual movements of daily thought."
    ]
  },
  "3": {
    "id": 3,
    "zhTitle": "六祖壇經講說之三：師徒因緣、讚毀與調伏自心",
    "zhSummary": "第三講從師徒相處談起，說明受讚歎、被嫌責都要回到自心反省，不因外境稱譏動搖。",
    "enTitle": "Platform Sutra Lecture 3: Teacher-Student Conditions, Praise, Blame, and Subduing the Mind",
    "enSummary": "The third lecture uses teacher-student relations to show how praise and criticism should both become occasions for self-reflection.",
    "enFull": [
      "The third lecture begins with the conditions between teacher and student and the attitude needed to receive instruction. Whether a student is praised or criticized by the teacher, the first response should not be outward reaction but inward reflection: is the praise truly deserved, and does the criticism reveal a real fault?",
      "If praise immediately produces delight and arrogance, one is mistaking external approval for accomplishment. If criticism produces resentment and retreat, the mark of self is still strong. A true student of the Way uses both praise and blame as conditions for seeing the mind.",
      "Thus the third lecture teaches how to receive the Platform Sutra: with humility, self-examination, and correction rather than self-defense. In that way both praise and blame become a place of practice, and the teacher-student relationship becomes a field for refining prajna."
    ]
  },
  "4": {
    "id": 4,
    "zhTitle": "六祖壇經講說第 004 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「阿摩羅。一切新生。口來所證之法身果德。在凡不誠。現在看佛光大辭典。來分作九種的意義。就是我們的眼識耳識。再加上末那識。阿賴耶識這個第八識。」展開，可進入頁面閱讀完整講記。"
  },
  "5": {
    "id": 5,
    "zhTitle": "六祖壇經講說第 005 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「在無論什麼時候。你在一個極短的時間。來看出自己的本性。」展開，可進入頁面閱讀完整講記。"
  },
  "6": {
    "id": 6,
    "zhTitle": "六祖壇經講說第 006 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「節子這樣說。美之狀面。去之狀面無須廉。去之狀無須臾。古者桀紂長巨姣美。下之傑也。然而身死國亡。世俗之亂民鄉曲之傻子。莫不美麗姚冶。奇衣媚飾。血氣態度擬於女子。婦人莫不。不顧得以為士」展開，可進入頁面閱讀完整講記。"
  },
  "7": {
    "id": 7,
    "zhTitle": "六祖壇經講說第 007 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家晚安。」展開，可進入頁面閱讀完整講記。"
  },
  "8": {
    "id": 8,
    "zhTitle": "六祖壇經講說第 008 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在你看這個九十三頁。他說教空的人。直接說不立文字。直接說不用文字。這樣你不要說話。乾脆都不要說話。這就是文字之相啊。又說先天道不立文字。兩個字也是文字啊。所以你若看人家在講道理。」展開，可進入頁面閱讀完整講記。"
  },
  "9": {
    "id": 9,
    "zhTitle": "六祖壇經講說第 009 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「2型小炒。在這個宗教中有很多術語。以對這個術語。不知道的人啊。用字的意思去解釋。若這麼呢你就不能體。聖人絕真正的心意。個人你要看這個經書。所以說。最要緊要了解這個文裡面。這句話是說」展開，可進入頁面閱讀完整講記。"
  },
  "10": {
    "id": 10,
    "zhTitle": "六祖壇經講說第 010 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「在庭同修。在座同修。坐禪這個問題。一個禪源諸論集。實在行住坐臥皆是禪。並不是說這樣坐一個形式。我們今晚再來引。禪有沒有深。著相而修者。著空而修者。悟微自心本來清淨。此心即佛而修者。」展開，可進入頁面閱讀完整講記。"
  },
  "11": {
    "id": 11,
    "zhTitle": "六祖壇經講說第 011 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在再來引起個事例。六祖壇經機緣品一句話。僧問師雲。黃梅意旨甚廢人得。雲會佛法人得。僧雲和尚還得否。師雲我不會佛法。六祖壇經機緣品第七。有一個和尚來問惠能六祖。一的衣鉢什麼座人得到」展開，可進入頁面閱讀完整講記。"
  },
  "12": {
    "id": 12,
    "zhTitle": "六祖壇經講說第 012 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「佛說十二遊經。瞿夷者是太子第一夫人。第二夫人匿名耶惟檀。無名鹿野。以有三婦人故。太子文王立三時殿。佛以二十九歲出家。現在佛說十二遊經。」展開，可進入頁面閱讀完整講記。"
  },
  "13": {
    "id": 13,
    "zhTitle": "六祖壇經講說第 013 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「為八十二年所拍攝之家用帶，影音。現在運用我們的心量。的心裡就明白一切。一切就是。無論是去無論是來。都是自由自在。沒有一點點的障礙。這就是般若妙智慧的表現。」展開，可進入頁面閱讀完整講記。"
  },
  "14": {
    "id": 14,
    "zhTitle": "六祖壇經講說第 014 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「要說六祖壇經之前呢。有一位師兄弟呢。問我這幾句話。拿一張單子給我。兩人守一土。若解其中意。問我說老師要怎麼解釋。說知道就是知道。」展開，可進入頁面閱讀完整講記。"
  },
  "15": {
    "id": 15,
    "zhTitle": "六祖壇經講說第 015 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「人則有性。得遇金師。隨意使用。身喻世界。佛性喻金。有佛性寶。周智慧工匠。覺悟火烹鐫。是故以金剛為喻。是惠能六祖。他來解釋這個金剛經。說這部金剛經。怎麼怎麼樣叫做金剛經。在山的裡面。」展開，可進入頁面閱讀完整講記。"
  },
  "16": {
    "id": 16,
    "zhTitle": "六祖壇經講說第 016 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「他說假使若是大乘的人。實相的真理這個原因。於五百世作忍辱仙人。作忍辱仙人才成佛而已。這樣不用修了。萬裡那裡講道理。」展開，可進入頁面閱讀完整講記。"
  },
  "17": {
    "id": 17,
    "zhTitle": "六祖壇經講說第 017 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「二十七頁第八行。他說你這有善根的人。一切的經及所有的經文。共有十二部的經。都因為各人的根源不一樣。分別來所說。順應智慧的高低。但是現在就十二部經。」展開，可進入頁面閱讀完整講記。"
  },
  "18": {
    "id": 18,
    "zhTitle": "六祖壇經講說第 018 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「很多經有的讀一讀。我沒辦法去醒悟。六祖壇經裡面所說的。他在五祖的地方。後來為了要爭奪衣鉢。來問六祖一句說。我們人本來的面目。六祖回答一句話。就這樣開悟。符合心境不會開悟。因為各人的」展開，可進入頁面閱讀完整講記。"
  },
  "19": {
    "id": 19,
    "zhTitle": "六祖壇經講說第 019 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「涉外物浸染。但是這個字你就要注意。但是現在讀作「侵」。侵現在都寫一個人字旁。現在一般都寫人字旁。一是三點水的浸。音讀作浸和讀作侵。無量壽經說染著是什麼。下面寫一個者字。但是這都通用」展開，可進入頁面閱讀完整講記。"
  },
  "20": {
    "id": 20,
    "zhTitle": "六祖壇經講說第 020 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「再來看這個六祖壇經。絕對不可以孰相或是孰空。一切我們要盡力。見到你自己的過失。世間人都自己的遺失。所以你若時常有辦法。你就跟正道有相符合。我們一切的六道眾生。」展開，可進入頁面閱讀完整講記。"
  },
  "21": {
    "id": 21,
    "zhTitle": "六祖壇經講說第 021 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「就是說有一天。有一天這個章刺史。為了六祖來設一個大會齋。吃飯之夜。惠能六祖壁上講座。惠能六祖壇上講座。和一些這個官僚和眾信徒。和一些這個官僚和最信徒。六祖恭敬頂禮之後。要來請問這個」展開，可進入頁面閱讀完整講記。"
  },
  "22": {
    "id": 22,
    "zhTitle": "六祖壇經講說第 022 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「指承佛教命永住世間。一六尊同受供養。即一寶頂虛跋羅墮閣。十三因揭陀。自此經典漢譯以來。正法的十六尊的羅漢。一般關係十六尊。這是關係根據法住記。」展開，可進入頁面閱讀完整講記。"
  },
  "23": {
    "id": 23,
    "zhTitle": "六祖壇經講說第 023 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在譬如一個例子。比如說你拿普通的石頭。所以比如我們辣金子。鐫出來變成真金。一旦你若成了真金之後。你若不相信。這個鼠金跑出來之後。永遠都不會變金屬。」展開，可進入頁面閱讀完整講記。"
  },
  "24": {
    "id": 24,
    "zhTitle": "六祖壇經講說第 024 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「我們下午針對上期。這個十惡呢。對於我們的身體的三惡。毅滋姪這個殺字。身的三惡的第二惡。什麼叫做道。新譯作不與取。他說偷盜是什麼。偷盜是這個十惡業。若新的翻譯叫做不典取。」展開，可進入頁面閱讀完整講記。"
  },
  "25": {
    "id": 25,
    "zhTitle": "六祖壇經講說第 025 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家說老師你功德無量。你出來請道理給人聽。已不能度，為能度他人。出來講道四十九年。若不出來說法四十九年。躲在深山修行都不出來。四十九年的功德。對不對。」展開，可進入頁面閱讀完整講記。"
  },
  "26": {
    "id": 26,
    "zhTitle": "六祖壇經講說第 026 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「有辦法去找這個餅。血脈論是達摩祖師說的。這樣子你就不知道說。就是我們的本性。這樣你就跟大慈大悲。也成為大勢至菩薩。淨施謂佈施時。不求世間之名譽福利等報。謂妄心求福報而行佈施也。」展開，可進入頁面閱讀完整講記。"
  },
  "27": {
    "id": 27,
    "zhTitle": "六祖壇經講說第 027 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「金光明最勝王經疏。答以一切眾生平等心屬本。最勝王經疏這句話。因為我沒有這本書啦。所以沒有這本書。所以我才跟它離。有一個人來問祖師。祖師就說。」展開，可進入頁面閱讀完整講記。"
  },
  "28": {
    "id": 28,
    "zhTitle": "六祖壇經講說第 028 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「仙佛不染塵緣。從能禪定出神。慈航倒駕之仙佛。惟能禪定行者。仙佛隨時而下凡。或時而臨堂降筆。只在剎那。或時以應化之身。故住寺廟之神佛。或魔或鬼所打扮之神佛也。以勤化為王者。以濟世為王」展開，可進入頁面閱讀完整講記。"
  },
  "29": {
    "id": 29,
    "zhTitle": "六祖壇經講說第 029 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「維摩經弟子品曰。我聽佛言。同方便品回。阿耨多羅三藐三菩提心。這不是釋迦佛祖著的。維摩詰經簡單說是維摩經。這維摩經是維摩詰講的話。這個經和論要分別清楚。若沒到佛的境界。一般都說是論。」展開，可進入頁面閱讀完整講記。"
  },
  "30": {
    "id": 30,
    "zhTitle": "六祖壇經講說第 030 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「第七十六卷第九期運。第七十六卷第九期這句話。就變成詐誘啊。就變成詐詐啊。是有確實的書。都是有確實的書。經出版七十多年的書。是出版一年兩年。或是胡離。或是胡籬。佛教界都公認的書。自選」展開，可進入頁面閱讀完整講記。"
  },
  "31": {
    "id": 31,
    "zhTitle": "六祖壇經講說第 031 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家年安。」展開，可進入頁面閱讀完整講記。"
  },
  "32": {
    "id": 32,
    "zhTitle": "六祖壇經講說第 032 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在我們看到下文。說一個人你行義。要發出這個同情心去行善。不要為了這個名利來行義。所以當今的人常說。世間的人真的同情的人。怎樣叫做同情。同就是一樣嘛同樣嘛。」展開，可進入頁面閱讀完整講記。"
  },
  "33": {
    "id": 33,
    "zhTitle": "六祖壇經講說第 033 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「觸就是好比說有那個感觸。為了自己的利益來佈施。為了自己的利益在佈施。有的說佈施難道有人。我都對事不對人的。但是希望在座。一心想工作生。我最怕以前我沒交代。我一講就說是在講誰。不要講」展開，可進入頁面閱讀完整講記。"
  },
  "34": {
    "id": 34,
    "zhTitle": "六祖壇經講說第 034 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「僧者淨也。是在我們第六品的地方。我們現在說是在說第三品。在懺悔品的地方。因為這個文很長。下面的文都把它略起來。一坨黑板寫不下。一瑰黑板窩不下。俄悔品第六品。你把它翻開就有寫這些文。」展開，可進入頁面閱讀完整講記。"
  },
  "35": {
    "id": 35,
    "zhTitle": "六祖壇經講說第 035 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「說你不要我們的心。這樣彎彎曲曲。你只有你的嘴巴。不過你所作所為。根本沒有行這個直心啊。只要你照直心去做。對於一切的事情。都不會起這個執著的心了。做較難我常說這句話。人家說某人的功夫」展開，可進入頁面閱讀完整講記。"
  },
  "36": {
    "id": 36,
    "zhTitle": "六祖壇經講說第 036 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「不稱我們現任。明心見性是悟不是證。能今人能悟者尚少。印光大師這樣說。說一個人明心見性。不是懿。說的買房子一樣。說可以分期付款呢。不然錢會變小呀。錢真的會變小呢。我講個好笑的給你聽。」展開，可進入頁面閱讀完整講記。"
  },
  "37": {
    "id": 37,
    "zhTitle": "六祖壇經講說第 037 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「不應住聲香味觸法生心。金剛經莊嚴淨土分第十說。前面說了很多道理。現在這個如是就是。你要生出我們人清淨的心。不應該住這個色生心。看到一個東西我心就動。也不應該來住這個聲。耳朵聽到。你」展開，可進入頁面閱讀完整講記。"
  },
  "38": {
    "id": 38,
    "zhTitle": "六祖壇經講說第 038 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「金非銷故有。催復本來金。不復重為鎮。是生為金礦。我們這倆寫字旁這倆鎮。本來是通用的。等於就是專用金鑰。包含五金以及鐵。都要寫石字旁的那個礦。是隻有用於金字的鑿。字典再翻一下才不會錯」展開，可進入頁面閱讀完整講記。"
  },
  "39": {
    "id": 39,
    "zhTitle": "六祖壇經講說第 039 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「就是叫做定香。就是要燒香的時候。我們看人家好壤形形色色。會楚香禮拜。這就是叫做定香。達摩破相論一句話。所謂深信大乘。心無退步。一個人你信這個宗教。來燒香拜佛。最要緊要有一個定香。」展開，可進入頁面閱讀完整講記。"
  },
  "40": {
    "id": 40,
    "zhTitle": "六祖壇經講說第 040 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「來看六祖壇經這個下文。你們每個人跟着我咯。六祖說你們跟著我唸。那時六祖才說。說弟子過去和現在。過去不正常的念頭。以及緩來。我都被這個愚迷來污染。惡業和愚迷這個罪。」展開，可進入頁面閱讀完整講記。"
  },
  "41": {
    "id": 41,
    "zhTitle": "六祖壇經講說第 041 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「我們現在翻五十頁。他說你們這些有善根的人。師父您說跟生數不蓋。這是不是師父你要來度。要望仙佛來度你。仙佛若不能度。有詳細跟你說明白了。總是簡單跟你提一下。」展開，可進入頁面閱讀完整講記。"
  },
  "42": {
    "id": 42,
    "zhTitle": "六祖壇經講說第 042 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「我們本性的方法講不完。各教門的方法不同。我們要誓願來學。要自己看出你自己的本性。你時時要行正法。這才是真正叫做兵學。因為正法就是不迷信。你若跟神跟佛講條件。這就迷信了。大家說哎喲我」展開，可進入頁面閱讀完整講記。"
  },
  "43": {
    "id": 43,
    "zhTitle": "六祖壇經講說第 043 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「即菩薩為救度眾生。比喻為釣。維摩經卷中佛道品載。終令佛智。佛光大辭典這樣說。有一個術語叫做欲鉤。他說在我們佛家。就是我們修菩隆行的人。」展開，可進入頁面閱讀完整講記。"
  },
  "44": {
    "id": 44,
    "zhTitle": "六祖壇經講說第 044 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「我們剛才對於不淨說法。楊嚴經還有三個引證。很多都稱我是佛祖。我什麼本尊。我什麼無上師。他都說我前世是佛來降生。我是佛應化來的。一個人若了脫生死之後。他絕對不會來降生。什麼原因不會來」展開，可進入頁面閱讀完整講記。"
  },
  "45": {
    "id": 45,
    "zhTitle": "六祖壇經講說第 045 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「出家是分成很多種。還有四類的出家。這個佛學大辭典。因為我們剛才這二種僧。文還沒說啊。這個二種僧說完之後。再繼續來說四種的沙門。佛學大辭典這樣說。第二種僧。有二種的出家人。」展開，可進入頁面閱讀完整講記。"
  },
  "46": {
    "id": 46,
    "zhTitle": "六祖壇經講說第 046 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「瞭解空性與無我。簽得無我智慧。要達到離開這個四相。才可以說是究竟。你就要通過這個戒定慧。定才有辦法解這個嗎。你要通過這個戒定慧三學。來引這個心經這樣說。波羅揭諦。這是沒什神祕啦。在」展開，可進入頁面閱讀完整講記。"
  },
  "47": {
    "id": 47,
    "zhTitle": "六祖壇經講說第 047 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「我們現在來翻開五十一頁。你的自心若歸依清淨之後。我們所有的煩惱。摩勞就是煩惱。這個以前也解釋過了。和這個貪愛貪欲。這個束縛全部都解除。這個束縛全部都會解除。都不會受這個煩惱來所染。」展開，可進入頁面閱讀完整講記。"
  },
  "48": {
    "id": 48,
    "zhTitle": "六祖壇經講說第 048 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「怎樣叫做六時。我們這個時間。我們這時間。當今一天廿四小時。若我們中國以前算十二時。辰巳午未申酉戌亥。等冷一時兩個小時。一天分成六時。什麼六時。他們印度的時間。」展開，可進入頁面閱讀完整講記。"
  },
  "49": {
    "id": 49,
    "zhTitle": "六祖壇經講說第 049 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大寒年安。你現在在我們自性的裡面。有很多這些不好的心。就是說我們自性的最生。對於這個貢高心。炫耀自己諂口他的功勞。炫耀自己誇口他的功勞。適種的心。日常在這個生活中。所做的不善的行為」展開，可進入頁面閱讀完整講記。"
  },
  "50": {
    "id": 50,
    "zhTitle": "六祖壇經講說第 050 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「沒辦法去計算。好比像這個金剛經說的。週三千大千世界。還有存著這個三惡。這個三惡我們下面會再講。全都是求福來行善。希望將這個佈施。要來減他所做的罪業。雖然你有辦法得到福。所做的罪業還」展開，可進入頁面閱讀完整講記。"
  },
  "51": {
    "id": 51,
    "zhTitle": "六祖壇經講說第 051 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「法華經方便品第。舍利佛。所以者何。唯有佛典佛。法華經方便品裡面這樣說。以上就是停止。他說停止。利弗說:我不要再講了。道理說到這裡。是什麼原因我不要再講。很難解釋的這個法。釋迦佛祖到」展開，可進入頁面閱讀完整講記。"
  },
  "52": {
    "id": 52,
    "zhTitle": "六祖壇經講說第 052 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在我們再看下文下去。我們的本寫什麼。我們的課本寫什麼。玄侯孫那個錯了。這個文寫錯了。是要有魏武侯系。是要有魏武侯系統。曹叔良及居民。競來瞻禮。我說這個文不對。來引我本人一個意見。」展開，可進入頁面閱讀完整講記。"
  },
  "53": {
    "id": 53,
    "zhTitle": "六祖壇經講說第 053 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「普賢觀行記裡面這句話。在心目念。當今的人說念經。誦經和念經是不一樣。若在心就是叫做念。我們若用心在唸經。若發於嘴巴上的。嘴巴若發出來。才叫做誦經。你從心裡面念出來。株宏大師所說的。」展開，可進入頁面閱讀完整講記。"
  },
  "54": {
    "id": 54,
    "zhTitle": "六祖壇經講說第 054 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「法華經方便品這一段。我以無數方便。種種因緣。正如言辭。是法非思量分別之所能解。雖有諸佛。雖有諸佛乃能知之。諸佛世尊唯以。諸佛世尊唯以一大因緣故。云何名諸佛世尊。唯以一大事因緣故。出」展開，可進入頁面閱讀完整講記。"
  },
  "55": {
    "id": 55,
    "zhTitle": "六祖壇經講說第 055 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「是對這個法達和尚說的。他說他唸經唸三千部啦。吃三千部不是簡單的。法華經一部二十八品。你去想這個觀音普門品。你念一品觀世音菩薩。就要念多久。讓你一天吃一部好不好。就要吃三千年了啦。都」展開，可進入頁面閱讀完整講記。"
  },
  "56": {
    "id": 56,
    "zhTitle": "六祖壇經講說第 056 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「都是法華經方便品說的。一句三車並行的句子。知道三車並行的關係。才引證這段話。導念過去佛。亦應說三乘。說我這樣慢慢的去回想。想到過去的佛祖。釋迦佛祖之前的佛祖。這值得你要注意哦。得到」展開，可進入頁面閱讀完整講記。"
  },
  "57": {
    "id": 57,
    "zhTitle": "六祖壇經講說第 057 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「座座叫喚。現在這段就是法蓮和尚。被惠能六祖將他說破。他就大大的醒悟。現在惠能六祖才對他說。你就可以叫做念經的和尚。這一段你就要注意。不輟這個不字。像是一種的助詞。你不可以將它讀作不」展開，可進入頁面閱讀完整講記。"
  },
  "58": {
    "id": 58,
    "zhTitle": "六祖壇經講說第 058 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「佛學大辭典這樣。說有辦法拔別人的苦的心。所以我們說慈悲。慈是使人喜樂。有辦法救他人的苦。那個陳進與這樣說。他本來一直要反抗政府。一味的在討厭世間的人。」展開，可進入頁面閱讀完整講記。"
  },
  "59": {
    "id": 59,
    "zhTitle": "六祖壇經講說第 059 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「法華經這段文。我設是方便。當得成佛道。今正是其時。這裡面對這個方便的註解。佛光大辭典這樣說。對真實法而言。而權設之法門。即佛菩薩應眾生之根機。用種種方法施予化益。用種種方法施予化。」展開，可進入頁面閱讀完整講記。"
  },
  "60": {
    "id": 60,
    "zhTitle": "六祖壇經講說第 060 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「佛家所說的三佛性。這樣告訴我們。又作住自佛。而本具之佛性。出佛性。上有學之聖位。修·智慧禪定之力。藉修習智慧禪定之力。言之佛性。禪道佛。究竟果。足而現果位。覺悟究竟之天生佛性。要跟」展開，可進入頁面閱讀完整講記。"
  },
  "61": {
    "id": 61,
    "zhTitle": "六祖壇經講說第 061 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。」展開，可進入頁面閱讀完整講記。"
  },
  "62": {
    "id": 62,
    "zhTitle": "六祖壇經講說第 062 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「所以現在話說來到這裡。萬法盡通萬法俱備。一切不染離諸法相。-無所得名最上乘。已經說明跟你清楚了。說這個乘字是什麼。就是行的意思。好比像世人的船車一樣。可以來運物而行。不是用嘴巴來爭」展開，可進入頁面閱讀完整講記。"
  },
  "63": {
    "id": 63,
    "zhTitle": "六祖壇經講說第 063 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「這個第九十三卷。釋必定品裡面所說這句話。無作言不應作功德求涅槃。若言天作若言世界始末。雖是邪見而不遮作功德。以無作大惡故不生。這裡面有兩個註解。大辭典這樣說。指對輕罪之禁戒。」展開，可進入頁面閱讀完整講記。"
  },
  "64": {
    "id": 64,
    "zhTitle": "六祖壇經講說第 064 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。說我們人雖然。這個眼睛耳朵舌頭。諸根就是指六根來應用。若達到虛空的境界之後。六根來染到六塵。它就不會生出這個六識。那應該說起來。應用來發生這個妄想。明白一切事物。你若不要」展開，可進入頁面閱讀完整講記。"
  },
  "65": {
    "id": 65,
    "zhTitle": "六祖壇經講說第 065 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「它說這個懷讓禪師。是陝西省安康縣人。最初出家的時候。拜這個慧安國師為師。安就是指慧安。這個慧安國師。是五祖的徒弟。慧安和惠能六祖是師兄弟。」展開，可進入頁面閱讀完整講記。"
  },
  "66": {
    "id": 66,
    "zhTitle": "六祖壇經講說第 066 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。」展開，可進入頁面閱讀完整講記。"
  },
  "67": {
    "id": 67,
    "zhTitle": "六祖壇經講說第 067 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。我們現在來到七十二頁。兩個人的談論之後。惠能六祖就知道。已經有相當的認識。袖就這模樣跟他印可。是啊是啊。是來要求六祖。跟他證明他的道果。」展開，可進入頁面閱讀完整講記。"
  },
  "68": {
    "id": 68,
    "zhTitle": "六祖壇經講說第 068 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「七十三頁第四行。說有一個叫做智隍的出家人。拜這個五祖弘忍大師。和六祖是師兄弟。自己稱呼說他已經。麻就是一間小佛堂。差不多有二十年之久。可以說一點都不懶惰。」展開，可進入頁面閱讀完整講記。"
  },
  "69": {
    "id": 69,
    "zhTitle": "六祖壇經講說第 069 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「因為我們今天是最後一課。現在下文說下去的話。離生死之苦的問題。我來引一個我所經驗過的。老人幫他解決一個問題。要怎廻離。我說這個差不多。那時候還沒有固定的道場。四虎去到虎去說道理。一」展開，可進入頁面閱讀完整講記。"
  },
  "70": {
    "id": 70,
    "zhTitle": "六祖壇經講說第 070 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「今謂起於某點之事。而波及周圍日影警本此。辭海說好壞的事情。好比像那個影來跟這個形。後面就有一個影子。警來應這個聲。向那漫山你若大聲喊。而我們若喊大聲。」展開，可進入頁面閱讀完整講記。"
  },
  "71": {
    "id": 71,
    "zhTitle": "六祖壇經講說第 071 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家午安。」展開，可進入頁面閱讀完整講記。"
  },
  "72": {
    "id": 72,
    "zhTitle": "六祖壇經講說第 072 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在來看頓悟入道要門論。菩提可得否。菩提不可得。云何唯念菩提。寶不可得。為不可得故。即無有念。無有念。菩提無所念。無所念者。是無所念。念是無所念。是隨事方便。假立名字。但知一切虛無」展開，可進入頁面閱讀完整講記。"
  },
  "73": {
    "id": 73,
    "zhTitle": "六祖壇經講說第 073 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「呂純陽祖師道段文。最生之心。防禁身心之過也。教門最多。第八識不轉下第六識。心安理得。我們來做個詳細說明。他說我們這個跟生的心。」展開，可進入頁面閱讀完整講記。"
  },
  "74": {
    "id": 74,
    "zhTitle": "六祖壇經講說第 074 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「貨進來可以用嗎。這個貨出去有安全嗎。這就是我說生意的六度。什都要修這個示度。假使你若做生意是這樣。現在你授記一指之後。你今天沒有來行這個六度。你們大家忍辱波若蜜。臉就變了咬牙切齒。」展開，可進入頁面閱讀完整講記。"
  },
  "75": {
    "id": 75,
    "zhTitle": "六祖壇經講說第 075 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家午安。」展開，可進入頁面閱讀完整講記。"
  },
  "76": {
    "id": 76,
    "zhTitle": "六祖壇經講說第 076 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「紅蓮河婆。大家平安。」展開，可進入頁面閱讀完整講記。"
  },
  "77": {
    "id": 77,
    "zhTitle": "六祖壇經講說第 077 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「星座運勢。大家平安。這一段惠能六祖說。這一段惠能示祖說。無常就是有生有滅。有常就是永久。這個善惡諸法分別心。行昌聽到這句話卻驚嚇。佛經說的文義。」展開，可進入頁面閱讀完整講記。"
  },
  "78": {
    "id": 78,
    "zhTitle": "六祖壇經講說第 078 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。談這個了我和不了義。在我們涅槃經裡面所說的。了義是具實的道理。不了義是方便說法。謂諸大乘經。若依此而修者。若依此而修。在涅槃經裡面所說的。在涅盤經裡面所說的。你要依靠了義」展開，可進入頁面閱讀完整講記。"
  },
  "79": {
    "id": 79,
    "zhTitle": "六祖壇經講說第 079 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「四個註解首先做說明。這個名字若要全部稱呼。為有相干涉。其他的宗派叫做教門。再簡單叫做阿耨菩提。真正的禪翻譯中。所以現在說金等於就是錢。這樣你不是正常的佛教徒。鋸子不會拿。水泥加沙子」展開，可進入頁面閱讀完整講記。"
  },
  "80": {
    "id": 80,
    "zhTitle": "六祖壇經講說第 080 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。我們現在翻八十三頁。惠能六祖。他來聽到這個行宮的偶語。說你現在微悟佛理。我今天跟你取個法號。志微就這樣頂禮。上期種種的引證。」展開，可進入頁面閱讀完整講記。"
  },
  "81": {
    "id": 81,
    "zhTitle": "六祖壇經講說第 081 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「衛星問候。來引道四依。說來到這個依義不依字。這個達摩破相論。在達摩破相論裡面。下午要來補充一下。再來進入下文。又作破相論。保梁代菩提達摩撰。收於大正藏第八十五冊。佛光大辭典這樣說。」展開，可進入頁面閱讀完整講記。"
  },
  "82": {
    "id": 82,
    "zhTitle": "六祖壇經講說第 082 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家年安。」展開，可進入頁面閱讀完整講記。"
  },
  "83": {
    "id": 83,
    "zhTitle": "六祖壇經講說第 083 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「現在我們來看佛光大辭典。三善知識。欲得道果。必由教授知識以訓誨。三者俱備。故稱善知識。教授善知識。其人內外方便。通寒障凝皆能決了。修行之人。傷心寄語。三外護善知。指管理所須以助修行」展開，可進入頁面閱讀完整講記。"
  },
  "84": {
    "id": 84,
    "zhTitle": "六祖壇經講說第 084 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家午安。」展開，可進入頁面閱讀完整講記。"
  },
  "85": {
    "id": 85,
    "zhTitle": "六祖壇經講說第 085 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「巖洞中終日打坐。古見一人在磨碑。你磨過碑作甚磨。你磨過磚作甚廢。郝太古聞言笑曰。碑沱瓦泥。非銅非鐵。怎得作鏡。那人大笑曰。我既磨磚不成鏡。既磨礪不成鏡。坐又焉能成仙。終日打坐又焉能」展開，可進入頁面閱讀完整講記。"
  },
  "86": {
    "id": 86,
    "zhTitle": "六祖壇經講說第 086 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「平安大家平安。我們六祖壇經上期引證說。修先天之法。一定要自修自悟自證。要望想佛祖幫你超拔。這是不可能的事情。你希望神保佑你。這也是沒有辦法的。神佛可以去保佑人。那是可以說一種小慧。」展開，可進入頁面閱讀完整講記。"
  },
  "87": {
    "id": 87,
    "zhTitle": "六祖壇經講說第 087 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。去到日本的事情。去到回本的事情。我們拿了很多的引證。根本我就不會想說。所以在日本人方面。徐福有去日本。現在在日本的和歌山。」展開，可進入頁面閱讀完整講記。"
  },
  "88": {
    "id": 88,
    "zhTitle": "六祖壇經講說第 088 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「劉伯溫識這個第四段。茲今將治之方。和民國六十九年的傳單。四兩成金四十。來傳這個劉伯溫。也傳遇一次。到九月十五日為止。什麼叫做號。」展開，可進入頁面閱讀完整講記。"
  },
  "89": {
    "id": 89,
    "zhTitle": "六祖壇經講說第 089 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「佛光大辭典這一段文。有漏淨塵。由此善業力所招感之淨土。此淨土不離煩惱。此淨土之相狀清淨。故稱之曰淨土。即累生以有漏之業因。亦即佛為化益此土之眾生。西方極樂世界。釋淨土羣疑論卷。闍跡」展開，可進入頁面閱讀完整講記。"
  },
  "90": {
    "id": 90,
    "zhTitle": "六祖壇經講說第 090 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「精木墨泥。且貪現世之小慈。總共有九個註解。所以你若。達摩破相論這樣說。只有知道事相。就花很大的費用。金子來做佛祖。定個木材來雕刻佛祖像。要來拜這個佛祖圖。阿彌陀佛阿彌陀佛。喔就很努」展開，可進入頁面閱讀完整講記。"
  },
  "91": {
    "id": 91,
    "zhTitle": "六祖壇經講說第 091 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「亞瑟·施瓦姆的死亡。在問我這樣。就說老師啊。他要怎麼寫信。所以我說好啦。兩首詩。去去遇到阿六。我把他寫在黑板。讓這些師兄弟。這是林七說的。他姓林叫做林七。沒有說維漢。所以我有這個。」展開，可進入頁面閱讀完整講記。"
  },
  "92": {
    "id": 92,
    "zhTitle": "六祖壇經講說第 092 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「在座同修。大家平安。我們現在翻九十六頁。他說假使你若有辦法。來分別這個有屬。來分別這個固有屬。在事理初發心…。或是很大的煩惱。這個境遇時候。你不會被這個一切的。有辦法你做到無住的心」展開，可進入頁面閱讀完整講記。"
  },
  "93": {
    "id": 93,
    "zhTitle": "六祖壇經講說第 093 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「什麼年分生的不知道。不過他修成正果的年。在家修禪道的修行人。世間稱呼叫做鹿居士。來拜馬祖道一為師。來修成正果。馬祖道一的史蹟。和鹿居士的史蹟。」展開，可進入頁面閱讀完整講記。"
  },
  "94": {
    "id": 94,
    "zhTitle": "六祖壇經講說第 094 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。現在內容說這個舟楫。現在內容說這個角。是暗示這些跟徒累的話。」展開，可進入頁面閱讀完整講記。"
  },
  "95": {
    "id": 95,
    "zhTitle": "六祖壇經講說第 095 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「大家平安。其中有一個徒弟。說你父。正法眼藏你要傳給誰繼承。你今天祖師的地位。到底要傳給誰。那麼什麼叫做正法眼藏。簡單解釋三段。正法眼藏。於教外相傳之心印。德之作品佛。透見萬德私藏之」展開，可進入頁面閱讀完整講記。"
  },
  "96": {
    "id": 96,
    "zhTitle": "六祖壇經講說第 096 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「所以你若假使未曾遇去。就要等候下元會。下面這是算點。這樣慢慢計算。四大就是地水火風。那個火就激烈了。我們腳站的這個地方。這個風來擠火火來擠水。那個火柴就都流出來了。這個土地是水撐住」展開，可進入頁面閱讀完整講記。"
  },
  "97": {
    "id": 97,
    "zhTitle": "六祖壇經講說第 097 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「在座同修。大家平安。六祖壇經這個末段。這個歷代祖師的系統。駐厓劫的四季佛祖。莊嚴劫的四尊佛祖。過去勝殿劫是一千尊佛祖。但是最後面那四尊佛祖。」展開，可進入頁面閱讀完整講記。"
  },
  "98": {
    "id": 98,
    "zhTitle": "六祖壇經講說第 098 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「這個禪宗的傳統。說到三十三祖惠能。所以當今。一般是沒有談第七祖。六祖壇經裡面的一句話。說吾去七十年，有二菩薩。出家一在家。這句話就是說。」展開，可進入頁面閱讀完整講記。"
  },
  "99": {
    "id": 99,
    "zhTitle": "六祖壇經講說第 099 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「列位大賢大德。我們這次說六祖壇經。說到這個六祖的衣鉢。說第七祖承受。但是照著禪宗來說。若要強調說有第七祖。到底什麼人。所以我們上期以來。」展開，可進入頁面閱讀完整講記。"
  },
  "100": {
    "id": 100,
    "zhTitle": "六祖壇經講說第 100 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「列位師兄弟。現在來翻一百零一頁。」展開，可進入頁面閱讀完整講記。"
  },
  "101": {
    "id": 101,
    "zhTitle": "六祖壇經講說第 101 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「婦自痛言曰。男子回柳下惠則可。這一本是辭海的記載。魯國有一個男人。他這個人就很內向。都叫他魯男子。已獨身住一間房子。下那個西北雨。隔壁有一個寡婦。隔壁的房子屋頂塌了。一個女人屋頂塌」展開，可進入頁面閱讀完整講記。"
  },
  "102": {
    "id": 102,
    "zhTitle": "六祖壇經講說第 102 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「舍十七日。五欲無益。如假借須臾。五欲就是色。聲音味觸這五樣的境界。適五樣的境界。會生出我們人的欲心。以有時候名字叫做座。所以有時候名字叫做摩。」展開，可進入頁面閱讀完整講記。"
  },
  "103": {
    "id": 103,
    "zhTitle": "六祖壇經講說第 103 講",
    "zhSummary": "本講繁體中文逐字稿已上線，內容從「上期剛好說到這裡。但是我們還沒引路。對於六祖傳法。現在把它寫上黑板作參考。傳法正宗記卷第七。正宗至第六祖大鑑禪師。凡一千三百有四人也。說正法就是指禪宗。」展開，可進入頁面閱讀完整講記。"
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
