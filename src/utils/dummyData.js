//export const resourceData = [];
export const resourceData = [
  {
    id: 1,
    name: "Imabi",
    type: "website", //book, podcast, ...?
    description: "Is an excellent collection of grammar lessons.",
    url: [
      {id: 0, url: "http://www.imabi.net/", website_title: "website"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "FREE",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["grammar"],
    reviews: []
  },
  {
    id: 2,
    name: "WaniKani",
    type: "website", //book, podcast, ...?
    description: "Created by the Tofugu team. Great way to learn how to read all the common kanji in a organized and often humorous way. Free trial for lower levels.",
    url: [{id: 0, url: "https://www.wanikani.com/", website_title: "website"}],
    cost: {
      hasCost: true,
      is_subscription: true,
      price: "$10 - $300",
      min: 10,
      max: 300
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["kanji", "jlpt", "practice"],
    reviews: []
  },
  {
    id: 3,
    name: "Tae Kim's Guide to Japanese",
    type: "website", //book, podcast, ...?
    description: "A thorough, excellent, and free guide. It gives you the vocabulary as you proceed through the guide as well.",
    url: [{id: 0, url: "http://www.guidetojapanese.org/learn/grammar", website_title: "website"}],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["grammar", "kana", "vocabulary"],
    reviews: []
  },
  {
    id: 4,
    name: "NHK's Japanese Lessons",
    type: "website", //book, podcast, ...?
    description: "NHK's Japanese lessons have all kana and pronunciations.",
    url: [
      {id: 0, url: "http://www3.nhk.or.jp/lesson/english/syllabary/index.html", website_title: "Hiragana and Katakana"},
      {id: 1, url: "http://www3.nhk.or.jp/lesson/english/", website_title: "Grammar"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate"],
    topics: ["kana", "grammar", "vocabulary"],
    reviews: []
  },
  {
    id: 5,
    name: "ManyThings Kana Practice",
    type: "website", //book, podcast, ...?
    description: "Katakana and Hiragana practice games.",
    url: [
      {id: 0, url: "http://www.manythings.org/japanese/kana/", website_title: "website"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner"],
    topics: ["kana"],
    reviews: []
  },
  {
    id: 6,
    name: "Usagi-Chan",
    type: "website", //book, podcast, ...?
    description: "Simple games to learn Hiragana and Katakana. Lists for kanji and vocabulary",
    url: [{id: 0, url: "http://www.csus.edu/indiv/s/sheaa/projects/genki/index.html", website_title: "website"}],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate"],
    topics: ["kanji", "kana", "vocabulary"],
    reviews: []
  },
  {
    id: 7,
    name: "Read the Kanji",
    type: "website", //book, podcast, ...?
    description: "Practice the various readings of every kanji. Free for lower levels.",
    url: [{id: 0, url: "https://www.readthekanji.com/", website_title: "website"}],
    cost: {
      hasCost: true,
      is_subscription: true,
      price: "free for low levels",
      min: 0,
      max: 5
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["kanji", "kana", "vocabulary"],
    reviews: []
  },
  {
    id: 8,
    name: "One Kanji",
    type: "website", //book, podcast, ...?
    description: "Learn one kanji a day.",
    url: [{id: 0, url: "http://one.kanji.website/", website_title: "website"}],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["kanji"],
    reviews: []
  },
  {
    id: 9,
    name: "Lang 8",
    type: "website", //book, podcast, ...?
    description: "Write blog posts and have native speakers correct your Japanese. Also a great way to make Japanese friends to practice with.",
    url: [{id: 0, url: "http://lang-8.com/", website_title: "website"}],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice"],
    reviews: []
  },
  {
    id: 10,
    name: "iTalki",
    type: "website", //book, podcast, ...?
    description: "Get formal or informal Japanese lessons from a tutor",
    url: [{id: 0, url: "http://www.italki.com/", website_title: "website"}],
    cost: {
      hasCost: true,
      is_subscription: false,
      price: "various",
      min: 5,
      max: 30
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice"],
    reviews: []
  },
  {
    id: 11,
    name: "Japan Guide Classifieds",
    type: "website", //book, podcast, ...?
    description: "A classifieds board to meet people for language exchange",
    url: [{id: 0, url: "http://www.japan-guide.com/local/?aCAT=3", website_title: "Website"}],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice"],
    reviews: []
  },
  {
    id: 12,
    name: "Memrise",
    type: "website", //book, podcast, ...?
    description: "Very beautiful flash card site and application",
    url: [
      {id: 0, url: "https://www.memrise.com/", website_title: "Website"},
      {id: 1, url: "https://play.google.com/store/apps/details?id=com.memrise.android.memrisecompanion", website_title: "Android App"},
      {id: 2, url: "https://itunes.apple.com/us/app/memrise-ultimate-memorisation/id635966718", website_title: "iOS app"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice", "kana", "kanji", "vocabulary", "jlpt"],
    reviews: []
  },
  {
    id: 13,
    name: "Anki",
    type: "website", //book, podcast, ...?
    description: "Flash card website and application. Can customize your own decks or download premade ones.",
    url: [
      {id: 0, url: "http://ankisrs.net/", website_title: "Website"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice", "kana", "kanji", "vocabulary", "jlpt"],
    reviews: []
  },
  {
    id: 14,
    name: "Dictionary of Japanese Grammar",
    type: "book", //book, podcast, ...?
    description: "One of the most extensive and clear books on Japanese grammar written by Seiichi Makino. Three books in the series from basic to advanced.",
    url: [
      {id: 0, url: "http://www.amazon.com/A-Dictionary-Basic-Japanese-Grammar/dp/4789004546", website_title: "Amazon: Basic"},
      {id: 1, url: "http://www.amazon.com/Dictionary-Intermediate-Japanese-Grammar/dp/4789007758", website_title: "Amazon: intermediate"},
      {id: 2, url: "http://www.amazon.com/Dictionary-Advanced-Japanese-Grammar/dp/4789012956", website_title: "Amazon: Advanced"}
    ],
    cost: {
      hasCost: true,
      is_subscription: false,
      price: "30ish",
      min: 20,
      max: 50
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice", "kana", "kanji", "vocabulary", "grammar"],
    reviews: [{
      id: 1,
      website_title: "Tofugu Review",
      url: "http://www.tofugu.com/reviews/a-dictionary-of-japanese-grammar/"
    }]
  },
  {
    id: 15,
    name: "Jisho",
    type: "website", //book, podcast, ...?
    description: "Very clean Japanese dictionary",
    url: [
      {id: 0, url: "http://jisho.org/", website_title: "Website"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["kana", "kanji", "vocabulary"],
    reviews: []
  },
  {
    id: 16,
    name: "Tangorin",
    type: "website", //book, podcast, ...?
    description: "Great Japanese dictionary website and application.",
    url: [
      {id: 0, url: "http://tangorin.com/", website_title: "Website"},
      {id: 2, url: "https://play.google.com/store/apps/details?id=com.tangorin.app", website_title: "Android App"},
      {id: 1, url: "https://itunes.apple.com/pl/app/tangorin-japanese-dictionary/id909997347", website_title: "iOS App"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["kana", "kanji", "vocabulary"],
    reviews: []
  },
  {
    id: 17,
    name: "Weblio",
    type: "website", //book, podcast, ...?
    description: "A Japanese to English dictionary. Often a great starting point for understanding new words you find.",
    url: [
      {id: 0, url: "http://ejje.weblio.jp/", website_title: "Website"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["intermediate", "advanced"],
    topics: ["kanji", "vocabulary"],
    reviews: []
  },
  {
    id: 18,
    name: "Hello Talk",
    type: "website", //book, podcast, ...?
    description: "Language exchange app to meet new people who want to practice languges.",
    url: [
      {id: 0, url: "http://www.hellotalk.com/", website_title: "Website"},
      {id: 1, url: "https://play.google.com/store/apps/details?id=com.hellotalk", website_title: "Android App"},
      {id: 2, url: "https://itunes.apple.com/us/app/hellotalk/id557130558", website_title: "iOS App"}
    ],
    cost: {
      hasCost: false,
      is_subscription: false,
      price: "free",
      min: 0,
      max: 0
    },
    level: ["beginner", "intermediate", "advanced"],
    topics: ["practice"],
    reviews: []
  }
];

// {
//     id: 2,
//     name: "another resource",
//     type: "book", //book, podcast, ...?
//     description: "book description",
//     url: [{id: 0, url: "http://longest.voyage", website_title: "Longest Voyage"}],
//     cost: {
//       hasCost: true,
//       is_subscription: false,
//       price: "$1 - $100",
//       min: 5,
//       max: 40
//     },
//     level: ["beginner", "intermediate"],
//     topics: ["grammar", "practice", "vocabulary"],
//     reviews: [{
//       id: 1,
//       website_title: "some review",
//       url: "http://www.google.com"
//     },{
//       id: 2,
//       website_title: "some other review",
//       url: "http://www.google.com"
//     }]
//   },