import type { NewsCopy } from "./types";
import { contestVideos } from "./wixVideos";

// News, from the old Wix blog (7 posts). Dates come from the post text or the
// Wix "Our History" page; two posts give no date, so none is shown for them.

const news: { en: NewsCopy; ko: NewsCopy } = {
  en: {
    metaTitle: "News",
    metaDescription:
      "News from Hyosarang Mission: Senior College semesters, the Bible College graduation, the youth identity contest, concerts, and exhibitions.",
    heroTitle: "News",
    heroLead: "Recent events at Hyosarang Mission and Hyosarang Senior College.",
    items: [
      {
        date: "August 2026",
        title: "Senior College fall 2026 semester opens",
        body: [
          "The fall 2026 semester began with new hearts and joy. At the opening service, Rev. Young Chan Kim spoke on “What kind of person am I?”, inviting students to reflect on their identity and the meaning of life in God rather than by the world's standards.",
          "We hope for a happy semester of learning, new friendships, and encouraging one another.",
        ],
        image: "/photos/news-fall-2026.jpg",
        imageAlt: "Students seated in rows at the fall 2026 opening ceremony",
      },
      {
        date: "June 20, 2026",
        title: "First Hyosarang Bible College graduation",
        body: [
          "By God's grace we held the first graduation of Hyosarang Bible College. Five students completed the two-year Bible Chronology Program.",
          "Congratulations to every graduate who finished with a love of learning and faith. Family, friends, and Senior College members attended.",
        ],
        image: "/photos/news-bible-college.jpg",
        imageAlt: "Bible College graduates in gowns with family and Senior College members",
      },
      {
        date: "May 28, 2026",
        title: "Senior College spring 2026 closing ceremony",
        body: [
          "The spring 2026 semester closed with a ceremony and a student showcase. We bless every senior who shared a semester of learning and fellowship.",
        ],
        image: "/photos/news-spring-2026.jpg",
        imageAlt: "Seniors seated in rows at the spring 2026 closing ceremony",
      },
      {
        date: "April 25, 2026",
        title: "13th Youth Identity Writing & Drawing Contest awards",
        body: [
          "Young people reflected on their dreams, values, and identity and expressed them in writing and drawing. Thirty-five students took part, and their honest, creative entries moved everyone who came.",
          "Certificates were presented by U.S. Representative Young Kim, California State Senator Steven Choi, and Assemblymember Sharon Quirk-Silva.",
        ],
        image: "/photos/news-contest-13.jpg",
        imageAlt: "Award winners and guests under the 13th contest banner",
      },
      {
        date: "December 12–13, 2024",
        title: "2nd Senior College art exhibition",
        body: [
          "Senior College students showed the paintings and crafts they prepared over a semester. The exhibition raised support for the nursing-home mission in Mexico.",
          "The art instructors, members of the American Art Therapy Association, teach and lead art ministry for seniors in Fullerton.",
        ],
      },
      {
        title: "2nd Year-End Music Festival",
        body: [
          "Our second year-end music festival raised support for building a nursing home in Mexico.",
        ],
        image: "/photos/news-concert.jpg",
        imageAlt: "Senior College choir singing on a church stage",
      },
      {
        title: "Honoring the sacrifice of U.S. veterans",
        body: [
          "For Veterans Day, Senior College students visited the Korean War memorial at Hillcrest Park in Fullerton, led by Dean Rev. Seong Woo Cho. Before the 36,591 names of American service members who died in the war, they paused in silence and prayer.",
          "The student council president said her heart was moved thinking of the young soldiers who left their own country and gave their lives to defend Korea.",
        ],
        image: "/photos/news-veterans.jpg",
        imageAlt: "Senior College students standing behind the Korean War Memorial sign",
      },
    ],
    contestVideos: {
      heading: "Youth contest award ceremonies",
      note: "Videos and titles are in Korean.",
      videos: [
        { ...contestVideos[0], titleLang: "ko", desc: "10th Hyo Drawing & Essay Contest awards ceremony (Apr 22, 2023)" },
        { ...contestVideos[1], titleLang: "ko", desc: "12th Hyo Essay & Drawing Contest awards ceremony (Apr 26, 2025)" },
        { ...contestVideos[2], titleLang: "ko", desc: "11th Hyo Essay & Drawing Contest awards ceremony" },
        {
          ...contestVideos[3],
          titleLang: "ko",
          desc: "12th U.S. Youth Identity Hyo Essay & Drawing Contest, a segment by GBC, a Korean American gospel broadcaster",
        },
      ],
    },
    historyLinkLabel: "See our full history",
  },

  ko: {
    metaTitle: "소식",
    metaDescription:
      "효사랑 선교회 소식: 시니어대학 학기, 성경대학 학위 수여식, 청소년 정체성 찾기 공모전, 음악회와 전시회.",
    heroTitle: "소식",
    heroLead: "효사랑 선교회와 효사랑 시니어대학의 최근 소식입니다.",
    items: [
      {
        date: "2026년 8월",
        title: "효사랑 시니어대학 2026 가을학기 개강식",
        body: [
          "효사랑 시니어대학 2026년 가을학기가 새로운 마음과 기쁨으로 시작되었습니다. 개강식에서 김영찬 목사님은 「나는 어떤 사람인가」라는 제목으로 말씀을 전하며, 세상의 기준이 아닌 하나님 안에서 우리의 정체성과 삶의 의미를 돌아보는 귀한 시간을 가졌습니다.",
          "새로운 배움과 만남을 통해 서로 격려하며 함께 성장하는 행복한 가을학기가 되기를 소망합니다.",
        ],
        image: "/photos/news-fall-2026.jpg",
        imageAlt: "2026 가을학기 개강식에 줄지어 앉은 학생들",
      },
      {
        date: "2026년 6월 20일",
        title: "제1회 효사랑 성경대학 학위 수여식",
        body: [
          "하나님의 은혜 가운데 제1회 효사랑 성경대학 학위 수여식을 거행했습니다. 5명이 2년 과정의 성경 연대기 과정을 마쳤습니다.",
          "배움에 대한 열정과 믿음으로 학업을 마치신 모든 졸업생께 진심으로 축하드립니다. 가족과 친구, 시니어대학 식구들이 함께했습니다.",
        ],
        image: "/photos/news-bible-college.jpg",
        imageAlt: "가운을 입은 성경대학 졸업생들과 가족, 시니어대학 식구들",
      },
      {
        date: "2026년 5월 28일",
        title: "효사랑 시니어대학 2026 봄학기 종강식",
        body: [
          "2026 봄학기 종강식과 학생 발표회가 은혜 가운데 진행되었습니다. 한 학기 동안 배움과 교제의 시간을 함께한 모든 어르신들을 축복합니다.",
        ],
        image: "/photos/news-spring-2026.jpg",
        imageAlt: "2026 봄학기 종강식에 줄지어 앉은 어르신들",
      },
      {
        date: "2026년 4월 25일",
        title: "제13회 청소년 정체성 찾기 공모전 시상식",
        body: [
          "청소년들이 자신의 꿈과 가치관, 정체성에 대해 깊이 고민하고 이를 글과 그림으로 표현한 뜻깊은 자리였습니다. 35명이 참여했으며, 창의적이고 진솔한 작품들이 큰 감동을 전했습니다.",
          "영 김 연방하원의원, 최석호 주상원의원, 섀런 쿼크-실바 주하원의원이 증서를 전달했습니다.",
        ],
        image: "/photos/news-contest-13.jpg",
        imageAlt: "제13회 공모전 현수막 아래 모인 수상자와 내빈들",
      },
      {
        date: "2024년 12월 12~13일",
        title: "효사랑 시니어대학 제2회 미술전시회",
        body: [
          "시니어대학 학생들이 한 학기 동안 정성껏 준비한 회화와 공예 작품을 선보였습니다. 전시 수익금은 멕시코 양로원 선교 사역에 쓰였습니다.",
          "미국 미술치료협회(AATA) 정회원으로 활동하며 풀러턴 지역에서 미술 교육과 치료 사역을 하는 강사진이 함께했습니다.",
        ],
      },
      {
        title: "효사랑 시니어대학 제2회 송년음악축제",
        body: ["멕시코 양로원 건축 후원을 위한 제2회 송년음악축제를 열었습니다."],
        image: "/photos/news-concert.jpg",
        imageAlt: "교회 무대에서 노래하는 시니어대학 합창단",
      },
      {
        title: "미군 참전용사들의 희생을 기려요",
        body: [
          "베테랑스 데이를 맞아 시니어대학 학생들이 학장 조성우 목사의 인솔로 풀러턴 힐크레스트 공원 입구의 한국전 참전 기념비를 방문했습니다. 3만 6,591명의 미군 전사자 이름이 새겨진 기념비 앞에서 묵념과 기도를 드렸습니다.",
          "학생 회장은 대한민국을 지키기 위해 고국을 떠나 목숨을 걸었던 젊은 용사들의 용기와 헌신을 생각하니 가슴이 뭉클했다고 말했습니다.",
        ],
        image: "/photos/news-veterans.jpg",
        imageAlt: "한국전 참전 기념비 표지 뒤에 선 시니어대학 학생들",
      },
    ],
    contestVideos: {
      heading: "청소년 공모전 시상식 영상",
      videos: contestVideos.map((v, i) =>
        i === 3 ? { ...v, desc: "GBC 미주복음방송 영상" } : v,
      ),
    },
    historyLinkLabel: "전체 연혁 보기",
  },
};

export default news;
