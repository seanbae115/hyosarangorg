import type { HistoryCopy, HistoryYear } from "./types";

// Full history from the old Wix "Our History" page (read live 2026-11-02).
// Names of private individuals (graduates, award recipients) are left out;
// elected officials who presented awards are kept.

// [date, en, ko]. Date is "M-D" or a range "M-D/M-D" (same year).
type Row = [string, string, string];

const rows: [string, Row[]][] = [
  ["2002", [
    ["6-15", "Positive Church was established in Norwalk, California.", "캘리포니아 노워크에 Positive Church가 세워졌습니다."],
    ["8-15", "Positive Church's Filial Duty Mission (Hyo-do Mission) was registered as a nonprofit.", "Positive Church의 효도선교회가 비영리단체로 등록되었습니다."],
    ["10-15", "Inaugural worship service and celebration of the Filial Duty Mission.", "효도선교회 창립 예배와 기념 행사를 가졌습니다."],
    ["11-7", "Weekly nursing-home ministry began at Paramount Nursing Home and continues today.", "파라마운트 양로병원에서 매주 양로병원 사역을 시작해 지금까지 이어 오고 있습니다."],
  ]],
  ["2003", [
    ["3-2", "Senior Filial Piety University opened its two-year program with 65 students.", "시니어 효도대학이 2년 과정으로 개교했습니다(학생 65명)."],
    ["5-11", "2nd International Mother's Day Celebration for 300+ multicultural seniors at the Norwalk Senior Center.", "노워크 시니어센터에서 다문화 어르신 300여 명과 제2회 국제 어머니날 행사를 열었습니다."],
    ["5-13", "International Mother's Day Celebration at the Norwalk Senior Center, sharing Korean traditions with 300+ participants.", "노워크 시니어센터에서 300여 명과 한국 전통을 나누는 국제 어머니날 행사를 열었습니다."],
    ["5-30", "Certificate of Appreciation from the City of Norwalk for community service.", "노워크시로부터 지역사회 봉사 감사장을 받았습니다."],
  ]],
  ["2004", [
    ["4-18", "Certificate of Appreciation from Paramount Convalescent Hospital for volunteer ministry.", "파라마운트 요양병원으로부터 봉사 사역 감사장을 받았습니다."],
    ["11-14", "Thanksgiving worship and fellowship at Paramount Nursing Home.", "파라마운트 양로병원에서 추수감사 예배와 교제의 시간을 가졌습니다."],
  ]],
  ["2005", [
    ["5-9", "3rd International Mother's Day Celebration for 300+ multicultural seniors.", "다문화 어르신 300여 명과 제3회 국제 어머니날 행사를 열었습니다."],
    ["7-27", "First 12 students graduated from Senior Filial Piety University.", "시니어 효도대학 첫 졸업생 12명을 배출했습니다."],
    ["9-9", "Second class of Senior Filial Piety University opened with 62 students.", "시니어 효도대학 2기가 학생 62명으로 개강했습니다."],
    ["9-16", "Chuseok thanksgiving worship at Paramount Nursing Home.", "파라마운트 양로병원에서 추석 감사 예배를 드렸습니다."],
  ]],
  ["2006", [
    ["5-6", "Senior Filial Piety University outdoor worship service.", "시니어 효도대학 야외 예배를 드렸습니다."],
    ["8-1", "Free community health screenings began every Saturday.", "매주 토요일 무료 건강 검진을 시작했습니다."],
    ["11-30", "Completed a four-month free medical care program for the community.", "4개월간의 지역 주민 무료 진료 프로그램을 마쳤습니다."],
  ]],
  ["2007", [
    ["6-24", "Second class of Senior Filial Piety University graduated (11 students).", "시니어 효도대학 2기 졸업식(11명)을 가졌습니다."],
    ["9-9", "Free after-school program on filial piety for elementary students began.", "초등학생을 위한 무료 효 교육 방과후 프로그램을 시작했습니다."],
    ["12-1", "3rd regional joint scholarship program: 23 multicultural students in need.", "제3회 지역 연합 장학금으로 형편이 어려운 다문화 학생 23명을 지원했습니다."],
  ]],
  ["2008", [
    ["12-4", "4th annual scholarship program: 22 multicultural students in need.", "제4회 장학금으로 다문화 학생 22명을 지원했습니다."],
  ]],
  ["2009", [
    ["11-16", "First Family Relationship Restoration Program: 25 families over two weeks.", "첫 가정관계 회복 프로그램에 25가정이 2주간 참여했습니다."],
    ["12-11", "Second session of the Family Relationship Restoration Program completed.", "가정관계 회복 프로그램 2차를 마쳤습니다."],
    ["12-13", "Scholarships for 21 multicultural students in need.", "다문화 학생 21명에게 장학금을 전달했습니다."],
  ]],
  ["2010", [
    ["3-10", "Filial Piety Campaign launched with a special worship service.", "특별 예배와 함께 효 캠페인을 시작했습니다."],
    ["11-28", "Scholarships for 22 multicultural students in need.", "다문화 학생 22명에게 장학금을 전달했습니다."],
    ["12-15", "Free after-school program on character and filial piety concluded.", "인성·효 교육 무료 방과후 프로그램을 마무리했습니다."],
  ]],
  ["2011", [
    ["3-28", "Office moved to Buena Park, California.", "사무실을 캘리포니아 부에나파크로 옮겼습니다."],
    ["9-21", "Name changed from Filial Duty Mission to Hyosarang Mission; nonprofit registration completed under the new name.", "효도선교회에서 효사랑 선교회로 이름을 바꾸고 새 이름으로 비영리 등록을 마쳤습니다."],
    ["11-28", "Scholarships for 23 multicultural students; Certificate of Appreciation from the Mayor of Cerritos.", "다문화 학생 23명에게 장학금을 전달하고, 세리토스 시장으로부터 감사장을 받았습니다."],
    ["12-28", "Published 5,000 copies of the first Hyosarang Mission booklet.", "효사랑 선교회 첫 소개 책자 5,000부를 펴냈습니다."],
  ]],
  ["2012", [
    ["2-4", "U.S. citizenship class opened at Jesus Vision Church.", "Jesus Vision Church에서 시민권 수업을 열었습니다."],
    ["4-22/5-9", "Drama ministry for seniors living alone, presented at three churches.", "홀로 사는 어르신을 위한 드라마 사역을 세 교회에서 공연했습니다."],
    ["11-9", "8th annual scholarship ceremony: 25 multicultural students.", "제8회 장학금 시상식에서 다문화 학생 25명에게 장학금을 전달했습니다."],
  ]],
  ["2013", [
    ["7-15", "Registration opened for the 1st American Youth Filial Piety Writing & Drawing Contest.", "제1회 미주 청소년 효 글짓기·그림 공모전 접수를 시작했습니다."],
    ["9-14", "1st Youth Filial Piety Contest awards: 54 students recognized.", "제1회 공모전 시상식에서 학생 54명이 수상했습니다."],
    ["12-2", "Scholarships for 22 multicultural students in need.", "다문화 학생 22명에게 장학금을 전달했습니다."],
    ["12-3", "Certificate of Appreciation from the ABC Unified School District Superintendent.", "ABC 통합교육구 교육감으로부터 감사장을 받았습니다."],
  ]],
  ["2014", [
    ["2-4", "U.S. citizenship class opened at Hyosarang Mission in Buena Park.", "부에나파크 효사랑 선교회에서 시민권 수업을 열었습니다."],
    ["3-23", "Community Service Award from California State Assemblymember Sharon Quirk-Silva.", "섀런 쿼크-실바 캘리포니아 주하원의원으로부터 지역사회 봉사상을 받았습니다."],
    ["4-20", "Registration opened for the 2nd Youth Filial Piety Contest.", "제2회 청소년 효 공모전 접수를 시작했습니다."],
    ["6-7", "2nd contest awards: 66 students; Assemblymember Sharon Quirk-Silva presented awards to 26.", "제2회 시상식에서 66명이 수상했고, 쿼크-실바 주하원의원이 26명에게 직접 시상했습니다."],
    ["12-1", "Scholarships for 22 multicultural students in need.", "다문화 학생 22명에게 장학금을 전달했습니다."],
  ]],
  ["2015", [
    ["6-13", "3rd contest awards: 104 students; U.S. Representative Young Kim presented awards.", "제3회 시상식에서 104명이 수상했고, 영 김 연방하원의원이 시상했습니다."],
    ["7-9", "3rd class of Hyosarang Senior College opened under the new name.", "이름을 바꾼 뒤 효사랑 시니어대학 3기가 개강했습니다."],
    ["11-30", "Scholarships for 22 multicultural students in need.", "다문화 학생 22명에게 장학금을 전달했습니다."],
  ]],
  ["2016", [
    ["6-11", "4th contest awards: 68 students; Assemblymember Young Kim presented awards.", "제4회 시상식에서 68명이 수상했고, 영 김 주하원의원이 시상했습니다."],
    ["12-5", "Scholarships for 22 multicultural students in need.", "다문화 학생 22명에게 장학금을 전달했습니다."],
    ["12-11", "Parents' Love Praise Festival with nine performing teams.", "9개 팀이 참여한 부모사랑 찬양 축제를 열었습니다."],
  ]],
  ["2017", [
    ["4-22", "5th contest awards: 56 students; guests included Assemblymembers Steven Choi, Sharon Quirk-Silva, and Philip Chen, and OC Supervisor Michelle Steel.", "제5회 시상식에서 56명이 수상했고, 최석호·쿼크-실바·필립 첸 주하원의원과 미셸 스틸 OC 수퍼바이저가 참석했습니다."],
    ["6-3", "3rd Senior College graduation: 22 students.", "시니어대학 3회 졸업식(22명)을 가졌습니다."],
    ["8-8", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
    ["8-15", "Recognized as a Presidential Volunteer Service Award Certifying Organization.", "대통령 봉사상 인증 기관으로 지정되었습니다."],
    ["11-26", "21 students graduated from Greenfield Senior Bible College.", "그린필드 시니어 성경대학에서 21명이 졸업했습니다."],
    ["11-30", "Senior College fall semester completed.", "시니어대학 가을학기를 마쳤습니다."],
    ["12-10", "A volunteer received the Presidential Lifetime Achievement Award.", "봉사자 한 분이 대통령 평생 공로상을 받았습니다."],
  ]],
  ["2018", [
    ["1-16", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["2-24", "Presidential Volunteer Service Award ceremony and orientation with HEIVN: two Lifetime Achievement Awards plus Gold and Bronze awards for student volunteers.", "HEIVN과 함께 대통령 봉사상 시상식과 오리엔테이션을 열어 평생 공로상 2명과 학생 봉사자 금상·동상을 시상했습니다."],
    ["3-18", "Presidential Volunteer Service Award ceremony: four Gold Awards.", "대통령 봉사상 시상식에서 금상 4명을 시상했습니다."],
    ["6-16", "6th contest awards at Fullerton Presbyterian Church: 66 students.", "풀러턴 장로교회에서 제6회 공모전 시상식(66명)을 가졌습니다."],
    ["8-4", "Presidential Volunteer Service Award ceremony at Saeyoung Church: one Lifetime Achievement and eight Gold Awards.", "새영교회에서 대통령 봉사상 시상식을 열어 평생 공로상 1명, 금상 8명을 시상했습니다."],
    ["8-7", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
    ["9-25", "Two-day short-term mission to a nursing home in Ensenada, Mexico.", "멕시코 엔세나다 양로원으로 1박 2일 단기선교를 다녀왔습니다."],
    ["11-29", "Senior College fall semester completed.", "시니어대학 가을학기를 마쳤습니다."],
  ]],
  ["2019", [
    ["2-5", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["3-14", "Spring outing to the poppy fields at Lake Elsinore.", "레이크 엘시노어 양귀비 꽃밭으로 봄 나들이를 다녀왔습니다."],
    ["4-6", "7th contest awards: 65 students; awards presented by Assemblymember Sharon Quirk-Silva and OC Supervisor Michelle Steel.", "제7회 시상식에서 65명이 수상했고, 쿼크-실바 주하원의원과 미셸 스틸 OC 수퍼바이저가 시상했습니다."],
    ["5-28/5-29", "Two-day short-term mission to Ensenada, Mexico.", "멕시코 엔세나다로 1박 2일 단기선교를 다녀왔습니다."],
    ["5-29", "Senior College spring semester completed.", "시니어대학 봄학기를 마쳤습니다."],
    ["8-6", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
    ["8-21", "Presidential Volunteer Service Award to three adult volunteers.", "성인 봉사자 3명에게 대통령 봉사상을 수여했습니다."],
    ["11-30", "Senior College fall semester completed.", "시니어대학 가을학기를 마쳤습니다."],
  ]],
  ["2020", [
    ["2-1", "Senior College spring semester opened in Buena Park.", "부에나파크에서 시니어대학 봄학기를 개강했습니다."],
    ["2-28", "In-person classes paused because of COVID-19.", "코로나19로 대면 수업을 잠시 멈췄습니다."],
    ["8-25", "Weekly online classes on YouTube began.", "매주 유튜브 온라인 수업을 시작했습니다."],
  ]],
  ["2021", [
    ["4-25", "8th American Youth Identity Writing & Drawing Contest awards: 57 students (23 writing, 34 drawing).", "제8회 미주 청소년 정체성 찾기 글짓기·그림 공모전 시상식에서 57명(글 23, 그림 34)이 수상했습니다."],
    ["5-30", "Weekly online YouTube classes concluded.", "매주 진행한 유튜브 온라인 수업을 마쳤습니다."],
    ["8-6", "Fall semester opened with in-person classes in Buena Park.", "부에나파크에서 대면 수업으로 가을학기를 개강했습니다."],
    ["11-25", "Senior College fall semester completed.", "시니어대학 가을학기를 마쳤습니다."],
  ]],
  ["2022", [
    ["3-6", "Senior College spring semester opened in Buena Park.", "부에나파크에서 시니어대학 봄학기를 개강했습니다."],
    ["6-18", "9th contest: 56 students (23 writing, 33 drawing); awards presented by U.S. Representative Michelle Steel; 26 student volunteers received volunteer service awards.", "제9회 공모전에 56명(글 23, 그림 33)이 참여했고 미셸 스틸 연방하원의원이 시상했습니다. 학생 봉사자 26명이 봉사상을 받았습니다."],
    ["7-5", "Senior College spring semester completed.", "시니어대학 봄학기를 마쳤습니다."],
    ["8-13", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
  ]],
  ["2023", [
    ["2-7", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["4-22", "10th contest: 54 students; awards presented by U.S. Representative Young Kim.", "제10회 공모전에 54명이 참여했고 영 김 연방하원의원이 시상했습니다."],
    ["5-25", "Senior College spring semester completed.", "시니어대학 봄학기를 마쳤습니다."],
    ["6-12/6-13", "Short-term mission to Ensenada, Mexico.", "멕시코 엔세나다 단기선교를 다녀왔습니다."],
    ["8-8", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
    ["11-30", "Senior College fall semester completed.", "시니어대학 가을학기를 마쳤습니다."],
    ["12-5/12-6", "Short-term mission to Ensenada, Mexico.", "멕시코 엔세나다 단기선교를 다녀왔습니다."],
    ["12-18", "First Rodem Tree Choir Year-End Music Festival.", "제1회 로뎀나무 합창단 송년 음악회를 열었습니다."],
    ["12-26", "Year-end and New Year fellowship with students and volunteers.", "학생, 봉사자들과 송년·신년 모임을 가졌습니다."],
  ]],
  ["2024", [
    ["2-13", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["4-20", "11th contest: 77 students (33 writing, 44 drawing); awards presented by U.S. Representative Michelle Steel.", "제11회 공모전에 77명(글 33, 그림 44)이 참여했고 미셸 스틸 연방하원의원이 시상했습니다."],
    ["5-30", "Senior College spring semester completed.", "시니어대학 봄학기를 마쳤습니다."],
    ["6-1", "Coram Deo Choir founded.", "코람데오 중창단을 창단했습니다."],
    ["6-26/6-27", "Short-term mission to Ensenada, Mexico.", "멕시코 엔세나다 단기선교를 다녀왔습니다."],
  ]],
  ["2025", [
    ["1-6", "2025 New Year's celebration.", "2025년 신년 하례회를 가졌습니다."],
    ["2-11", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["4-26", "12th contest awards: 104 students; certificates from U.S. Representatives Young Kim and Michelle Steel, State Senator Steven Choi, Assemblymember Sharon Quirk-Silva, and Buena Park Mayor Joyce Ahn.", "제12회 시상식에 104명이 참여했고, 영 김·미셸 스틸 연방하원의원, 최석호 주상원의원, 쿼크-실바 주하원의원, 조이스 안 부에나파크 시장이 증서를 전달했습니다."],
    ["5-21/5-22", "18 students served on a mission to Ensenada, Mexico: a nursing home, a women's rehabilitation center, and a public elementary school.", "학생 18명이 멕시코 엔세나다 단기선교에서 양로원, 여성 갱생원, 공립 초등학교를 섬겼습니다."],
    ["5-29", "Spring semester closing ceremony and student showcase.", "봄학기 종강식과 학생 발표회를 가졌습니다."],
    ["7-23/7-25", "Senior summer Vacation Bible School.", "시니어 여름성경학교를 열었습니다."],
    ["8-12", "Senior College fall semester opened.", "시니어대학 가을학기를 개강했습니다."],
    ["11-25", "Fall semester closing ceremony and student showcase.", "가을학기 종강식과 학생 발표회를 가졌습니다."],
    ["12-2/12-4", "19 students served on another mission to Ensenada, Mexico.", "학생 19명이 다시 멕시코 엔세나다 단기선교를 다녀왔습니다."],
  ]],
  ["2026", [
    ["1-13", "2026 New Year's celebration.", "2026년 신년 하례회를 가졌습니다."],
    ["2-10", "Senior College spring semester opened.", "시니어대학 봄학기를 개강했습니다."],
    ["2-20/2-23", "Volunteer team performed nanta, harmonica, and aerophone at the 40th anniversary of Tucson–Sierra Vista Korean Presbyterian Church in Arizona.", "봉사 공연팀이 애리조나 투산–시에라비스타 한인장로교회 창립 40주년 행사에서 난타, 하모니카, 에어로폰을 공연했습니다."],
    ["3-25", "Visited the Korean War Veterans Memorial to honor the sacrifice of American service members.", "한국전 참전 기념비를 찾아 미군 참전용사들의 희생을 기렸습니다."],
    ["4-25", "13th contest awards: 35 students; certificates from U.S. Representative Young Kim, State Senator Steven Choi, and Assemblymember Sharon Quirk-Silva.", "제13회 시상식에 35명이 참여했고, 영 김 연방하원의원, 최석호 주상원의원, 쿼크-실바 주하원의원이 증서를 전달했습니다."],
    ["5-28", "Spring semester closing ceremony and student showcase.", "봄학기 종강식과 학생 발표회를 가졌습니다."],
    ["6-9/6-10", "13 students served on a mission to Ensenada, Mexico: a nursing home, a women's rehabilitation center, and a public elementary school.", "학생 13명이 멕시코 엔세나다 단기선교에서 양로원, 여성 갱생원, 공립 초등학교를 섬겼습니다."],
    ["6-20", "First graduation of Hyosarang Bible College: five students completed the two-year Bible Chronology Program.", "효사랑 성경대학 제1회 학위 수여식에서 5명이 2년 과정의 성경 연대기 과정을 마쳤습니다."],
  ]],
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function fmt(date: string, lang: "en" | "ko"): string {
  const one = (md: string) => {
    const [m, d] = md.split("-").map(Number);
    return lang === "ko" ? `${m}월 ${d}일` : `${MONTHS[m - 1]} ${d}`;
  };
  const [a, b] = date.split("/");
  if (!b) return one(a);
  // Same month: "May 28–29" / "5월 28~29일"
  const [am] = a.split("-");
  const [bm, bd] = b.split("-");
  if (am === bm) {
    return lang === "ko" ? `${one(a).replace("일", "")}~${bd}일` : `${one(a)}–${bd}`;
  }
  return lang === "ko" ? `${one(a)} ~ ${one(b)}` : `${one(a)} – ${one(b)}`;
}

function years(lang: "en" | "ko"): HistoryYear[] {
  return rows.map(([year, items]) => ({
    year,
    items: items.map(([date, en, ko]) => ({
      date: fmt(date, lang),
      text: lang === "ko" ? ko : en,
    })),
  }));
}

const history: { en: HistoryCopy; ko: HistoryCopy } = {
  en: {
    metaTitle: "Our History",
    metaDescription:
      "Hyosarang Mission's history since 2002: nursing-home ministry, Senior College, the youth Hyo contest, scholarships, and missions to Ensenada, Mexico.",
    heroTitle: "Our history",
    heroLead:
      "Since 2002, Hyosarang Mission has served seniors, families, and the next generation through education, community service, and missions.",
    years: years("en"),
  },
  ko: {
    metaTitle: "연혁",
    metaDescription:
      "2002년부터 이어 온 효사랑 선교회의 연혁: 양로병원 사역, 시니어대학, 청소년 효 공모전, 장학금, 멕시코 엔세나다 선교.",
    heroTitle: "연혁",
    heroLead:
      "효사랑 선교회는 2002년부터 교육과 지역사회 봉사, 선교로 시니어와 가정, 다음 세대를 섬겨 왔습니다.",
    years: years("ko"),
  },
};

export default history;
