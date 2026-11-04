import { faithNotice } from "./ministries";
import type { SeniorCollegeCopy } from "./types";
import { collegeVideos } from "./wixVideos";

// Hyosarang Senior College, a faith ministry. Source: old Wix site pages
// hyosarang-senior-university, class, and the per-class pages.

const seniorCollege: { en: SeniorCollegeCopy; ko: SeniorCollegeCopy } = {
  en: {
    metaTitle: "Hyosarang Senior College",
    metaDescription:
      "Hyosarang Senior College is a faith-based school for Korean-American seniors in Buena Park: Bible, music, art, dance, writing, and smartphone classes every Tuesday and Thursday.",
    heroTitle: "Hyosarang Senior College",
    heroLead:
      "“Don't just live as old people — live as respected elders.”",
    heroImageAlt: "Senior College students working with clay around classroom tables",
    notice: faithNotice.en,
    aboutHeading: "Passing on a legacy of faith",
    about: [
      "Hyosarang Senior College is a two-year, faith-based school dedicated to passing on a legacy of true faith to the next generation. The later years of life are a precious time to complete our calling as parents.",
      "Each class opens with the slogan “Let's gather, let's learn, let's set an example!” Courses center on faith that honors God with honesty, diligence, and truthfulness, alongside practical learning for daily life.",
      "What students learn goes back out: they serve on nursing-home visits and on the Ensenada mission trips.",
    ],
    facts: [
      { label: "When", value: "Worship and classes every Tuesday and Thursday" },
      { label: "Spring semester", value: "Starts the second Tuesday of February each year" },
      { label: "Fall semester", value: "Starts the second Tuesday of August each year" },
      { label: "Since", value: "2003, with 65 students in the first year" },
    ],
    classesHeading: "Classes",
    classesIntro:
      "Classes change from semester to semester. Contact us for the current schedule.",
    instructorLabel: "Instructor",
    classes: [
      {
        name: "Bible Panorama",
        text: "The 66 books of the Bible as one story of God's Kingdom, taught like a historical drama.",
        instructor: "Rev. Joshua Y. Park",
      },
      {
        name: "Bible & Literature",
        text: "Meditating on Scripture and writing about faith and life.",
      },
      {
        name: "Autobiography Writing",
        text: "Looking back on life with the eyes of faith; the advanced course works toward a full draft.",
      },
      {
        name: "Writing",
        text: "Writing to keep the mind sharp, organize thoughts, and reflect on life.",
      },
      {
        name: "Chorus",
        text: "Singing together in praise, with harmony and fellowship.",
        instructor: "Rev. Moon-soo Kang",
      },
      {
        name: "Music & Coram Deo Ensemble",
        text: "Songs and hymns, and a vocal ensemble that sings for neighbors.",
        instructor: "Jin-yeong Han",
      },
      {
        name: "Ukulele",
        text: "Praise and healing through the bright sound of the ukulele.",
      },
      {
        name: "Harmonica",
        text: "Theory and practice with children's songs, popular songs, and hymns.",
        instructor: "Rev. Jeong-gil Seo",
      },
      {
        name: "Aerophone",
        text: "An introduction to the aerophone, an electronic wind instrument.",
      },
      {
        name: "Nanta",
        text: "Energetic Korean percussion for body and mind.",
        instructor: "Annie Kang",
      },
      {
        name: "Healing Dance",
        text: "Joyful movement to music that restores body, mind, and spirit.",
        instructor: "Eun-hee Seo",
      },
      {
        name: "Line Dance",
        text: "Easy basic steps anyone can follow, with laughter and fellowship.",
      },
      {
        name: "Art",
        text: "Painting, drawing, and other visual arts.",
      },
      {
        name: "Pottery",
        text: "Wheel throwing, hand-building, and glazing.",
        instructor: "Jae Sook Byun",
      },
      {
        name: "Photography",
        text: "Basic techniques for capturing beauty, the passage of time, and a story.",
      },
      {
        name: "Smartphone",
        text: "Calls, texts, photos, KakaoTalk, maps, and YouTube, one step at a time.",
      },
    ],
    galleryHeading: "In class",
    gallery: [
      {
        src: "/photos/college-bible.jpg",
        alt: "Seniors listening to a Bible Panorama lecture",
        caption: "Bible Panorama",
      },
      {
        src: "/photos/college-dance.jpg",
        alt: "Seniors dancing together in a classroom",
        caption: "Dance class",
      },
      {
        src: "/photos/college-aerophone.jpg",
        alt: "Four seniors playing aerophones outdoors with a music stand",
        caption: "Aerophone",
      },
      {
        src: "/photos/college-harmonica.jpg",
        alt: "An instructor playing harmonica beside a screen of sheet music",
        caption: "Harmonica",
      },
      {
        src: "/photos/college-art.jpg",
        alt: "Seniors painting at classroom tables",
        caption: "Art",
      },
      {
        src: "/photos/college-pottery.jpg",
        alt: "Seniors shaping clay at a table",
        caption: "Pottery",
      },
      {
        src: "/photos/college-nanta.jpg",
        alt: "Seniors in red shirts performing nanta drums in a church",
        caption: "Nanta performance",
      },
      {
        src: "/photos/college-smartphone.jpg",
        alt: "Seniors smiling at the camera in a smartphone class",
        caption: "Smartphone class, fall 2026",
      },
      {
        src: "/photos/college-art-instructor.jpg",
        alt: "An art instructor in an apron setting out paints at a classroom table",
        caption: "Art class",
      },
      {
        src: "/photos/college-lecture.jpg",
        alt: "A speaker with a name badge talking to students in a classroom",
        caption: "In the classroom",
      },
    ],
    viewLargerLabel: "View larger",
    classVideos: {
      heading: "Class videos",
      note: "Videos and titles are in Korean.",
      videos: [
        { ...collegeVideos[0], titleLang: "ko", desc: "Winter 2021 term, class 2 (Nov 23, 2021)" },
        { ...collegeVideos[1], titleLang: "ko", desc: "Class 9 (Oct 20, 2020)" },
        { ...collegeVideos[2], titleLang: "ko", desc: "Class 1 (Aug 25, 2020)" },
        { ...collegeVideos[3], titleLang: "ko", desc: "Class 8 (Oct 13, 2020)" },
        { ...collegeVideos[4], titleLang: "ko", desc: "Winter 2021 term, class 6 (Dec 21, 2021)" },
        { ...collegeVideos[5], titleLang: "ko", desc: "Nanta performance 1: “Jesus Loves Me” & a cheer song" },
        { ...collegeVideos[6], titleLang: "ko", desc: "Harmonica, class 1" },
      ],
    },
    contactLead: "Interested in enrolling for the next semester?",
    contactLinkLabel: "Contact us",
  },

  ko: {
    metaTitle: "효사랑 시니어대학",
    metaDescription:
      "효사랑 시니어대학은 부에나파크의 한인 시니어를 위한 신앙교육기관입니다. 매주 화·목요일 성경, 음악, 미술, 댄스, 글쓰기, 스마트폰 수업.",
    heroTitle: "효사랑 시니어대학",
    heroLead: "“노인으로 살지 말고 존경받는 어르신으로 살자!”",
    heroImageAlt: "교실 탁자에 둘러앉아 흙을 빚는 시니어대학 학생들",
    notice: faithNotice.ko,
    aboutHeading: "신앙의 유산을 물려주는 학교",
    about: [
      "효사랑 시니어대학은 진실한 신앙의 유산을 다음 세대에 전하기 위한 2년제 신앙교육기관입니다. 시니어들의 남은 생애는 부모로서의 사명을 완수하는 귀한 시간입니다.",
      "매 수업의 시작마다 “모이자, 배우자, 본을 보이자!”라는 구호를 함께 외칩니다. 교육과정은 하나님을 경외하는 정직, 성실, 진실의 신앙을 중심으로, 일상생활에 필요한 여러 배움을 함께 나눕니다.",
      "배운 것은 다시 나눔이 됩니다. 학생들은 양로병원 사역과 멕시코 엔세나다 단기선교에서 섬깁니다.",
    ],
    facts: [
      { label: "수업", value: "매주 화요일·목요일 예배와 수업" },
      { label: "봄학기", value: "매년 2월 둘째 주 화요일 개강" },
      { label: "가을학기", value: "매년 8월 둘째 주 화요일 개강" },
      { label: "개교", value: "2003년, 첫해 65명" },
    ],
    classesHeading: "수업 안내",
    classesIntro: "개설 과목은 학기마다 달라집니다. 이번 학기 시간표는 문의해 주세요.",
    instructorLabel: "강사",
    classes: [
      {
        name: "성경 파노라마",
        text: "성경 66권을 하나님 나라라는 하나의 이야기로, 역사 드라마처럼 배웁니다.",
        instructor: "박용일 목사",
      },
      {
        name: "성경과 문학",
        text: "말씀을 묵상하고 신앙과 삶의 이야기를 글로 씁니다.",
        instructor: "백승철 목사",
      },
      {
        name: "자서전 쓰기",
        text: "신앙의 눈으로 삶을 되짚어 봅니다. 심화 과정은 자서전 초고 완성을 목표로 합니다.",
      },
      {
        name: "글쓰기",
        text: "사고력과 기억력을 지키며 생각을 정리하고 삶을 돌아봅니다.",
      },
      {
        name: "합창",
        text: "함께 찬양하며 화합과 교제 속에 몸과 마음을 회복합니다.",
        instructor: "강문수 목사",
      },
      {
        name: "음악 교실 · 코람데오 중창단",
        text: "노래와 찬양을 배우고, 중창단으로 이웃에게 사랑을 전합니다.",
        instructor: "한진영",
      },
      {
        name: "우쿨렐레",
        text: "우쿨렐레의 맑은 소리로 함께 찬양하며 마음의 치유를 경험합니다.",
      },
      {
        name: "하모니카",
        text: "동요, 가요, 찬송가로 이론과 실습을 함께 배웁니다.",
        instructor: "서정길 목사",
      },
      {
        name: "에어로폰",
        text: "전자 색소폰으로도 불리는 에어로폰을 배웁니다.",
        instructor: "김제희",
      },
      {
        name: "난타",
        text: "신체와 정신 건강을 함께 돕는 활기찬 타악기 수업입니다.",
        instructor: "강애니",
      },
      {
        name: "힐링댄스",
        text: "음악과 움직임으로 몸과 마음과 영혼을 회복합니다.",
        instructor: "서은희",
      },
      {
        name: "라인댄스",
        text: "누구나 따라 할 수 있는 기본 스텝으로 즐겁게 배웁니다.",
      },
      {
        name: "미술",
        text: "그림과 회화 등 다양한 미술 활동으로 자신을 표현합니다.",
      },
      {
        name: "도예",
        text: "물레 성형, 손 성형, 유약 바르기를 배우며 작품을 만듭니다.",
        instructor: "Jae Sook Byun",
      },
      {
        name: "사진",
        text: "자연의 아름다움과 시간의 흐름, 대상의 이야기를 담는 법을 배웁니다.",
      },
      {
        name: "스마트폰",
        text: "전화, 문자, 사진부터 카카오톡, 지도, 유튜브까지 천천히 함께 배웁니다.",
      },
    ],
    galleryHeading: "수업 풍경",
    gallery: [
      {
        src: "/photos/college-bible.jpg",
        alt: "성경 파노라마 강의를 듣는 시니어들",
        caption: "성경 파노라마",
      },
      {
        src: "/photos/college-dance.jpg",
        alt: "교실에서 함께 춤추는 시니어들",
        caption: "댄스 수업",
      },
      {
        src: "/photos/college-aerophone.jpg",
        alt: "야외에서 보면대를 두고 에어로폰을 연주하는 시니어 네 명",
        caption: "에어로폰",
      },
      {
        src: "/photos/college-harmonica.jpg",
        alt: "악보 화면 옆에서 하모니카를 연주하는 강사",
        caption: "하모니카",
      },
      {
        src: "/photos/college-art.jpg",
        alt: "교실 탁자에서 그림을 그리는 시니어들",
        caption: "미술",
      },
      {
        src: "/photos/college-pottery.jpg",
        alt: "탁자에서 흙을 빚는 시니어들",
        caption: "도예",
      },
      {
        src: "/photos/college-nanta.jpg",
        alt: "교회에서 빨간 티셔츠를 입고 난타를 공연하는 시니어들",
        caption: "난타 공연",
      },
      {
        src: "/photos/college-smartphone.jpg",
        alt: "스마트폰 수업에서 카메라를 보고 웃는 시니어들",
        caption: "2026 가을학기 스마트폰 수업",
      },
      {
        src: "/photos/college-art-instructor.jpg",
        alt: "앞치마를 두르고 교실 탁자에 물감을 준비하는 미술 강사",
        caption: "미술 수업",
      },
      {
        src: "/photos/college-lecture.jpg",
        alt: "이름표를 단 강사가 교실에서 학생들에게 이야기하는 모습",
        caption: "강의 시간",
      },
    ],
    viewLargerLabel: "크게 보기",
    classVideos: {
      heading: "강의 영상",
      videos: collegeVideos,
    },
    contactLead: "다음 학기 등록을 원하시나요?",
    contactLinkLabel: "문의하기",
  },
};

export default seniorCollege;
