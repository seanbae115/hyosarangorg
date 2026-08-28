import type { ServicesCopy } from "./types";

const services: { en: ServicesCopy; ko: ServicesCopy } = {
  en: {
    metaTitle: "Services — a trusted community access point",
    metaDescription:
      "Hyosarang Mission's established senior-serving programs: education, counseling, citizenship and English, health and benefits education, ensemble, youth contest, and community service.",
    heroTitle: "A trusted community access point",
    heroLead:
      "Education, faith, culture, health information, counseling, and volunteer service — the relationship base for Korean-language navigation.",

    featuresHeading: "What we do",
    features: [
      {
        name: "Hyosarang Senior College",
        text: "Faith, culture, health, technology, and music.",
        image: "/photos/senior-college-music.jpg",
        imageAlt: "Senior College members playing ukuleles together",
      },
      {
        name: "Senior & Family Support",
        text: "Counseling and service guidance.",
        icon: "support",
      },
      {
        name: "Citizenship & English",
        text: "Free citizenship prep and English classes.",
        icon: "language",
      },
      {
        name: "Health & Benefits Education",
        text: "Non-clinical education and referral support.",
        icon: "health",
      },
      {
        name: "Coram Deo Ensemble",
        text: "Senior-led music and nanta performance.",
        image: "/photos/senior-college-choir.jpg",
        imageAlt: "Senior College choir singing together",
      },
      {
        name: "Youth Identity & Hyo Contest",
        text: "Writing and art connecting the generations.",
        icon: "pencil",
      },
      {
        name: "Community & Mission Service",
        text: "Nursing-home visits and short-term missions.",
        image: "/photos/mission-fellowship.jpg",
        imageAlt: "Mission-trip participants sharing breakfast near the water",
      },
    ],

    portfolioHeading: "Programme details",
    portfolioNote:
      "The full portfolio, with established activities and intended community benefit.",
    portfolioCols: {
      area: "Program area",
      activities: "Established activities",
      benefit: "Intended community benefit",
    },
    portfolio: [
      {
        area: "Hyosarang Senior College",
        activities:
          "Faith, education, culture, health, technology, and civic learning for older adults.",
        benefit:
          "Lifelong learning, health literacy, belonging, and continued community participation.",
      },
      {
        area: "Senior & Family Support",
        activities:
          "Counseling, practical information, service guidance, and family support.",
        benefit:
          "Earlier identification of needs and reduced confusion in fragmented systems.",
      },
      {
        area: "Citizenship & English Education",
        activities: "Free citizenship preparation and English education.",
        benefit:
          "Greater civic participation, independence, and language confidence.",
      },
      {
        area: "Health & Benefits Education",
        activities:
          "Non-clinical education and referral support related to medical services and public benefits.",
        benefit:
          "Improved understanding and connection to qualified providers and agencies.",
      },
      {
        area: "Coram Deo Senior Ensemble",
        activities:
          "Senior ensemble, cultural engagement, performance, and community outreach.",
        benefit:
          "Reduced social isolation, purposeful participation, and intergenerational connection.",
      },
      {
        area: "Youth Identity & Hyo Contest",
        activities:
          "Writing and art competition focused on identity, family, and filial values.",
        benefit: "Intergenerational understanding and cultural identity.",
      },
      {
        area: "Community & Mission Service",
        activities:
          "Local volunteer activities and ongoing pastoral and mission engagement.",
        benefit:
          "Compassionate service, volunteer mobilization, and community relationships.",
      },
    ],
    principlesHeading: "How we deliver",
    principles: [
      "Korean-first, culturally responsive engagement.",
      "A clear boundary between education/navigation and licensed services.",
      "Consent-based referrals; participant choice respected.",
      "Volunteer supervision, role clarity, safety.",
      "Continuous improvement from participant feedback.",
    ],
    boundaryHeading: "Service boundary",
    boundaryLead:
      "Hyosarang Mission is a trusted access point, not a licensed provider. We are precise about where our role ends and a licensed professional's begins.",
    boundaryDoLabel: "We provide",
    boundaryDo: [
      "Culturally responsive education and health literacy",
      "Korean-language navigation and screening",
      "Consent-based referrals to qualified agencies",
      "3 / 14 / 30-day follow-up on service access",
    ],
    boundaryDontLabel: "We refer out",
    boundaryDont: [
      "Medical, legal, financial, or governmental determinations",
      "Anything that requires a licensed or official provider",
    ],
  },

  ko: {
    metaTitle: "사업 안내 — 신뢰받는 지역사회 접점",
    metaDescription:
      "효사랑 선교회의 기존 시니어 사업: 교육, 상담, 시민권·영어, 건강·혜택 교육, 앙상블, 청소년 공모전, 지역사회 봉사.",
    heroTitle: "신뢰받는 지역사회 접점",
    heroLead:
      "교육·신앙·문화·건강 정보·상담·자원봉사 — 한국어 내비게이션의 관계 토대가 됩니다.",

    featuresHeading: "주요 사업",
    features: [
      {
        name: "효사랑 시니어대학",
        text: "신앙·문화·건강·기술·음악.",
        image: "/photos/senior-college-music.jpg",
        imageAlt: "함께 우쿨렐레를 연주하는 시니어대학 참가자들",
      },
      {
        name: "시니어·가족 지원",
        text: "상담과 서비스 안내.",
        icon: "support",
      },
      {
        name: "시민권·영어 교육",
        text: "무료 시민권 준비반과 영어 수업.",
        icon: "language",
      },
      {
        name: "건강·혜택 교육",
        text: "비임상 교육과 의뢰 지원.",
        icon: "health",
      },
      {
        name: "코람데오 앙상블",
        text: "시니어 주도 음악·난타 공연.",
        image: "/photos/senior-college-choir.jpg",
        imageAlt: "함께 노래하는 시니어대학 합창단",
      },
      {
        name: "청소년 정체성·효 공모전",
        text: "세대를 잇는 글쓰기·미술.",
        icon: "pencil",
      },
      {
        name: "지역사회·선교 봉사",
        text: "양로병원 방문과 단기선교.",
        image: "/photos/mission-fellowship.jpg",
        imageAlt: "물가에서 아침 식사를 나누는 단기선교 참가자들",
      },
    ],

    portfolioHeading: "사업 상세",
    portfolioNote: "기존 활동과 기대하는 지역사회 효과를 담은 전체 포트폴리오입니다.",
    portfolioCols: {
      area: "사업 영역",
      activities: "기존 활동",
      benefit: "기대하는 지역사회 효과",
    },
    portfolio: [
      {
        area: "효사랑 시니어대학",
        activities: "어르신을 위한 신앙·교육·문화·건강·기술·시민 교육.",
        benefit: "평생 학습, 건강 문해력, 소속감, 지속적인 지역사회 참여.",
      },
      {
        area: "시니어·가족 지원",
        activities: "상담, 생활 정보, 서비스 안내, 가족 지원.",
        benefit: "필요의 조기 발견과 복잡한 제도 속 혼란 감소.",
      },
      {
        area: "시민권·영어 교육",
        activities: "무료 시민권 준비와 영어 교육.",
        benefit: "시민 참여 확대, 자립, 언어 자신감.",
      },
      {
        area: "건강·혜택 교육",
        activities: "의료 서비스와 공공 혜택에 관한 비임상 교육 및 의뢰 지원.",
        benefit: "이해 향상과 자격 있는 제공자·기관으로의 연결.",
      },
      {
        area: "코람데오 시니어 앙상블",
        activities: "시니어 앙상블, 문화 참여, 공연, 지역사회 봉사.",
        benefit: "사회적 고립 완화, 목적 있는 참여, 세대 간 연결.",
      },
      {
        area: "청소년 정체성·효 공모전",
        activities: "정체성·가족·효의 가치를 주제로 한 글짓기·그림 대회.",
        benefit: "세대 간 이해와 문화 정체성.",
      },
      {
        area: "지역사회·선교 봉사",
        activities: "지역 자원봉사 활동과 지속적인 목회·선교 참여.",
        benefit: "긍휼의 섬김, 자원봉사자 동원, 지역사회 관계.",
      },
    ],
    principlesHeading: "운영 방식",
    principles: [
      "한국어 우선, 문화에 맞춘 참여.",
      "교육·내비게이션과 면허 서비스 사이의 명확한 경계.",
      "동의에 기반한 의뢰; 참여자의 선택 존중.",
      "자원봉사자 감독, 역할 명확화, 안전.",
      "참여자 의견을 통한 지속적 개선.",
    ],
    boundaryHeading: "서비스 경계",
    boundaryLead:
      "효사랑 선교회는 신뢰받는 연결 창구이며, 면허 제공자가 아닙니다. 우리 역할이 끝나고 면허 전문가의 역할이 시작되는 지점을 분명히 합니다.",
    boundaryDoLabel: "제공합니다",
    boundaryDo: [
      "문화에 맞춘 교육과 건강 문해력",
      "한국어 내비게이션과 선별",
      "자격 있는 기관으로의 동의 기반 의뢰",
      "서비스 이용에 대한 3·14·30일 후속 확인",
    ],
    boundaryDontLabel: "의뢰로 연결합니다",
    boundaryDont: [
      "의료·법률·재정·행정 판정",
      "면허 또는 공식 제공자가 필요한 모든 사안",
    ],
  },
};

export default services;
