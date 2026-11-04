import type { FaithNotice, MinistriesCopy } from "./types";
import { missionVideos } from "./wixVideos";

// Faith ministries. Kept on their own pages, apart from grant-funded services
// (Services, KSLC Navigation, Governance). Source: old Wix site pages
// ministry-mission, nursing-home-ministry, mexico-mission.

export const faithNotice: { en: FaithNotice; ko: FaithNotice } = {
  en: {
    heading: "Separate from our grant-funded services",
    body: "The ministries on this page are religious activities of Hyosarang Mission. They run apart from our grant-funded community services and are not paid for with grant funds. No one needs to take part in them to receive those services.",
    linkLabel: "Read our separation policy",
  },
  ko: {
    heading: "그랜트 지원 서비스와 분리된 사역입니다",
    body: "이 페이지의 사역은 효사랑 선교회의 종교 활동입니다. 그랜트로 지원되는 지역사회 서비스와 분리하여 운영하며, 그랜트 자금을 사용하지 않습니다. 그 서비스를 받기 위해 이 사역에 참여하실 필요는 없습니다.",
    linkLabel: "분리 원칙 보기",
  },
};

const ministries: { en: MinistriesCopy; ko: MinistriesCopy } = {
  en: {
    metaTitle: "Faith Ministries",
    metaDescription:
      "Hyosarang Mission's faith ministries: Hyosarang Senior College, nursing-home visits, and short-term missions to Ensenada, Mexico.",
    heroTitle: "Faith ministries",
    heroLead:
      "A community of people who live by the Word as God's children, through biblical hyo (filial piety).",
    heroImageAlt:
      "Hyosarang Mission team in front of a church in Ensenada, Mexico, on the spring 2026 short-term mission",
    notice: faithNotice.en,
    listHeading: "Our ministries",
    ministries: [
      {
        name: "Hyosarang Senior College",
        text: "Worship and classes every Tuesday and Thursday, passing on a legacy of faith.",
        image: "/photos/college-bible.jpg",
        imageAlt: "Seniors listening to a Bible Panorama lecture in a classroom",
        href: "/senior-college",
      },
      {
        name: "Nursing-home ministry",
        text: "Worship and music in nursing homes three times a week.",
        image: "/photos/nursing-home-nanta.jpg",
        imageAlt: "Senior College members playing nanta drums for nursing-home residents",
        href: "#nursing",
      },
      {
        name: "Ensenada short-term mission",
        text: "A short trip to Ensenada, Mexico, after each spring and fall semester.",
        image: "/photos/mission-ensenada-2026.jpg",
        imageAlt: "Mission team gathered in front of a church in Ensenada, Mexico",
        href: "#mission",
      },
    ],
    newsLinkLabel: "News",
    nursingHeading: "Nursing-home ministry",
    nursingBody: [
      "Many parents spend their last years in nursing homes because of physical weakness. This ministry brings them comfort and builds up their faith, so they can live with joy and the hope of heaven as God's children.",
      "Every Wednesday, Friday, and Sunday, Senior College members visit nursing homes and serve with the nanta, aerophone, and harmonica they learned in class.",
    ],
    missionHeading: "Short-term mission to Ensenada, Mexico",
    missionBody:
      "Twice a year, after the spring and fall semesters, members travel to Ensenada, Mexico. They lead worship and perform nanta, healing dance, harmonica, and aerophone at a senior home and at rehabilitation centers for women and youth, and visit alternative schools.",
    missionPurposesLabel: "The mission has three purposes:",
    missionPurposes: [
      "To hold the seniors of Mexico in our hearts.",
      "To join the local missionaries' passion for the gospel and take part in building God's kingdom.",
      "To serve the people of Mexico with what we learned through Senior College education and training.",
    ],
    missionImage: {
      src: "/photos/mission-school-2026.jpg",
      alt: "An outdoor tent classroom with rows of school chairs and a Spanish lesson on the whiteboard",
      caption: "A school classroom in Mexico, June 2026",
    },
    viewLargerLabel: "View larger",
    missionVideos: {
      heading: "Ensenada mission videos",
      note: "Videos and titles are in Korean.",
      videos: [
        { ...missionVideos[0], titleLang: "ko", desc: "Spring 2024 short-term mission to Mexico (June 26–27, 2024)" },
        { ...missionVideos[1], titleLang: "ko", desc: "Fall-semester short-term mission to Mexico (Dec 5–6)" },
        { ...missionVideos[2], titleLang: "ko", desc: "Mission news: short-term mission to Mexico, July 18–19, 2022" },
        { ...missionVideos[3], titleLang: "ko", desc: "Senior College mission to Ensenada, Mexico (Nov 29–30)" },
      ],
    },
    contactLead: "Would you like to join a ministry or support a mission trip?",
    contactLinkLabel: "Contact us",
  },

  ko: {
    metaTitle: "신앙 사역",
    metaDescription:
      "효사랑 선교회의 신앙 사역: 효사랑 시니어대학, 양로병원 사역, 멕시코 엔세나다 단기선교.",
    heroTitle: "신앙 사역",
    heroLead:
      "효사랑 선교회는 성경적 효를 통해 하나님의 자녀로 말씀대로 살아가는 사람들이 함께하는 공동체입니다.",
    heroImageAlt:
      "2026년 봄학기 멕시코 엔세나다 단기선교 중 교회 앞에 모인 효사랑 선교회 선교팀",
    notice: faithNotice.ko,
    listHeading: "사역 안내",
    ministries: [
      {
        name: "효사랑 시니어대학",
        text: "매주 화·목요일 예배와 수업으로 신앙의 유산을 이어 갑니다.",
        image: "/photos/college-bible.jpg",
        imageAlt: "교실에서 성경 파노라마 강의를 듣는 시니어들",
        href: "/senior-college",
      },
      {
        name: "양로병원 사역",
        text: "매주 세 번 양로병원을 찾아 예배와 음악으로 섬깁니다.",
        image: "/photos/nursing-home-nanta.jpg",
        imageAlt: "양로병원 어르신들 앞에서 난타를 공연하는 시니어대학 학생들",
        href: "#nursing",
      },
      {
        name: "멕시코 엔세나다 단기선교",
        text: "봄·가을 학기를 마칠 때마다 멕시코 엔세나다로 단기선교를 떠납니다.",
        image: "/photos/mission-ensenada-2026.jpg",
        imageAlt: "멕시코 엔세나다의 교회 앞에 모인 선교팀",
        href: "#mission",
      },
    ],
    newsLinkLabel: "소식",
    nursingHeading: "양로병원 사역",
    nursingBody: [
      "육신의 연약함 때문에 양로병원에서 노후를 보내고 계신 부모님들이 영육 간에 강건하시고, 하나님의 자녀로서 천국의 소망을 품고 기쁘게 사시도록 믿음을 세워 드리는 사역입니다.",
      "매주 수요일, 금요일, 주일 세 번 양로병원을 방문해 시니어대학에서 배운 난타, 에어로폰, 하모니카로 섬기고 있습니다.",
    ],
    missionHeading: "멕시코 엔세나다 단기선교",
    missionBody:
      "1년에 두 번, 봄학기와 가을학기를 마치고 멕시코 엔세나다로 단기선교를 갑니다. 시니어대학에서 배운 난타, 힐링댄스, 하모니카, 에어로폰으로 양로원과 여성·청소년 갱생원에서 예배와 공연을 하고, 대안학교도 방문합니다.",
    missionPurposesLabel: "단기선교의 목적은 세 가지입니다.",
    missionPurposes: [
      "멕시코에 있는 시니어들의 영혼을 마음에 품습니다.",
      "현지 선교사님의 복음을 향한 열정에 동참하여 하나님 나라를 세우는 일에 참여합니다.",
      "시니어대학의 교육과 훈련으로 배운 것을 멕시코의 영혼들과 나눕니다.",
    ],
    missionImage: {
      src: "/photos/mission-school-2026.jpg",
      alt: "학생용 의자가 줄지어 놓이고 화이트보드에 스페인어 수업 내용이 적힌 야외 천막 교실",
      caption: "멕시코의 학교 교실, 2026년 6월",
    },
    viewLargerLabel: "크게 보기",
    missionVideos: {
      heading: "엔세나다 단기선교 영상",
      videos: missionVideos,
    },
    contactLead: "사역에 함께하시거나 단기선교를 후원하고 싶으신가요?",
    contactLinkLabel: "문의하기",
  },
};

export default ministries;
