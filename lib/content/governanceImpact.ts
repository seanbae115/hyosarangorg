import type { GovernanceCopy } from "./types";

const governanceImpact: { en: GovernanceCopy; ko: GovernanceCopy } = {
  en: {
    metaTitle: "Governance & Impact",
    metaDescription:
      "How Hyosarang Mission keeps grant-funded work accountable and measurable: Proposed Year-One Targets, a measurement framework, strict separation of religious and grant-funded activity, Board oversight, fund accounting, data privacy, and a link to the public Form 990.",
    heroTitle: "Governance & Impact",
    heroLead:
      "How Hyosarang Mission keeps grant-funded work accountable, measurable, and separate from religious activity.",

    targetsHeading: "Proposed Year-One Targets",
    targetsQualifier:
      "These are proposals, not past results. Final figures are set through Board approval and the funder agreement, with verified baselines established in the program's first quarter.",
    targets: [
      { value: "150", label: "community members reached" },
      { value: "100", label: "economic-security screenings" },
      { value: "60", label: "individual navigation cases" },
      { value: "50", label: "completed warm handoffs" },
      { value: "70%+", label: "target confirmed-access rate" },
      { value: "35", label: "households with documented gains" },
    ],

    frameworkHeading: "Measurement framework",
    frameworkCols: {
      domain: "Domain",
      measures: "Core measures",
      cycle: "Review cycle",
    },
    framework: [
      {
        domain: "Reach & Equity",
        measures:
          "Unique participants; age, language, geography; priority-population reach; new vs. returning.",
        cycle: "Quarterly",
      },
      {
        domain: "Education & Wellness",
        measures:
          "Enrollment, attendance, retention, learning and health-literacy feedback, social connection.",
        cycle: "Each cycle / quarterly",
      },
      {
        domain: "Navigation",
        measures:
          "Screenings, action plans, warm handoffs, completion rate, unresolved cases, follow-up timeliness.",
        cycle: "Monthly / quarterly",
      },
      {
        domain: "Mobility",
        measures:
          "Riders, trips, destinations, no-shows, accessibility needs, incidents, cost per completed trip.",
        cycle: "Monthly / quarterly",
      },
      {
        domain: "Partnerships",
        measures:
          "Active agreements, referrals sent/received, completion, responsiveness, joint outputs.",
        cycle: "Quarterly / annual",
      },
      {
        domain: "Participant Experience",
        measures:
          "Satisfaction, language access, dignity and respect, complaints and resolution.",
        cycle: "Quarterly / annual",
      },
      {
        domain: "Finance & Organization",
        measures:
          "Budget-to-actual, restricted funds, revenue diversity, volunteer hours, training, compliance.",
        cycle: "Monthly / quarterly",
      },
      {
        domain: "Community Impact",
        measures:
          "Documented service connections, maintained benefits or access, reduced barriers, participant-reported stability.",
        cycle: "Annual",
      },
    ],
    frameworkNote:
      "Every participant is tracked through a secure Case ID. Aggregate reporting combines service milestones, 3/14/30-day follow-up, participant feedback, and de-identified stories of change.",

    separationHeading:
      "Separation of religious and grant-funded activity",
    separationBody:
      "Grant-funded economic-security services are available according to program eligibility and need, regardless of religion, denomination, church participation, immigration background, gender, or disability. Receiving them never requires worship, religious instruction, or church membership. Grant funds are used only for the secular community services described in the applicable grant agreement.",

    boardHeading: "Board oversight",
    boardBody:
      "A 15-member Board of Directors, with designated President, Secretary, and CFO officers, retains legal, fiscal, and programmatic control — including control of grant funds, budgets, personnel, compliance, insurance, data protection, and reporting. The Board reviews quarterly dashboards, completes an annual self-assessment, and requires disclosure and management of conflicts of interest.",
    boardNote:
      "The current Board roster is maintained and confirmed against the latest Board resolution.",

    fundHeading: "Fund accounting and financial segregation",
    fundBody:
      "Grant funds are tracked through approved budgets, documentation, and a separate program code, with restricted-fund tracking, monthly reconciliation, and quarterly finance review. Funds are never commingled. Grant responsibility or control is not transferred to a partner without Board-approved written terms.",

    privacyHeading: "Data privacy",
    privacyBody:
      "We collect only the information a service requires, obtain informed consent that explains how it will be used, assign secure Case IDs, limit access by role, and report only de-identified aggregate data. An incident-response process, annual privacy training, and periodic access reviews are in place.",

    form990Heading: "Public financial records",
    form990Body:
      "Hyosarang Mission's federal tax filings are public. Reviewers can view the organization's Form 990 records on ProPublica's Nonprofit Explorer.",
    form990Label: "View the public Form 990",
    recognitionAlt:
      "Three people holding a California State Assembly Certificate of Recognition presented to a Hyosarang Senior College instructor",
    recognitionCaption:
      "California State Assembly Certificate of Recognition — Hyosarang Senior College",
    viewLargerLabel: "View larger",
  },

  ko: {
    metaTitle: "운영·성과",
    metaDescription:
      "효사랑 선교회가 그랜트 지원 사업을 책임 있고 측정 가능하게 운영하는 방식: 제안된 1년차 목표, 성과 측정 체계, 종교 활동과 그랜트 지원 사업의 엄격한 분리, 이사회 감독, 자금 회계, 개인정보 보호, 공개 Form 990 연결.",
    heroTitle: "운영·성과",
    heroLead:
      "효사랑 선교회가 그랜트 지원 사업을 책임 있고, 측정 가능하며, 종교 활동과 분리된 방식으로 운영하는 방법.",

    targetsHeading: "제안된 1년차 목표 (Proposed Year-One Targets)",
    targetsQualifier:
      "이는 확정 실적이 아니라 제안입니다. 최종 수치는 이사회 승인과 지원기관 협의를 거쳐 정해지며, 검증된 기준선은 사업 첫 분기에 수립합니다.",
    targets: [
      { value: "150", label: "지역주민 아웃리치" },
      { value: "100", label: "경제 안정 선별" },
      { value: "60", label: "개별 내비게이션 사례" },
      { value: "50", label: "완료된 Warm Handoff" },
      { value: "70%+", label: "실제 이용 확인 목표율" },
      { value: "35", label: "개선이 확인된 가구" },
    ],

    frameworkHeading: "성과 측정 체계",
    frameworkCols: {
      domain: "영역",
      measures: "핵심 지표",
      cycle: "검토 주기",
    },
    framework: [
      {
        domain: "도달과 형평",
        measures:
          "고유 참여자; 연령·언어·지역; 우선 대상 도달; 신규 대비 재참여.",
        cycle: "분기",
      },
      {
        domain: "교육과 웰빙",
        measures: "등록, 출석, 유지, 학습·건강 문해력 의견, 사회적 연결.",
        cycle: "학기별 / 분기",
      },
      {
        domain: "내비게이션",
        measures:
          "선별, 실행 계획, Warm Handoff, 완료율, 미해결 사례, 후속 확인 적시성.",
        cycle: "월별 / 분기",
      },
      {
        domain: "이동성",
        measures:
          "이용자, 이동 횟수, 목적지, 노쇼, 접근성 필요, 사고, 완료 이동당 비용.",
        cycle: "월별 / 분기",
      },
      {
        domain: "협력",
        measures:
          "유효 협약, 주고받은 의뢰, 완료, 응답성, 공동 산출물.",
        cycle: "분기 / 연간",
      },
      {
        domain: "참여자 경험",
        measures: "만족도, 언어 접근, 존엄과 존중, 민원과 해결.",
        cycle: "분기 / 연간",
      },
      {
        domain: "재정과 조직",
        measures:
          "예산 대비 실적, 제한 자금, 수입 다양성, 자원봉사 시간, 교육, 규정 준수.",
        cycle: "월별 / 분기",
      },
      {
        domain: "지역사회 영향",
        measures:
          "확인된 서비스 연결, 유지된 혜택·이용, 감소한 장벽, 참여자가 보고한 안정성.",
        cycle: "연간",
      },
    ],
    frameworkNote:
      "모든 참여자는 안전한 Case ID로 관리합니다. 집계 보고는 서비스 단계, 3·14·30일 후속 확인, 참여자 의견, 비식별 변화 사례를 종합합니다.",

    separationHeading: "종교 활동과 그랜트 지원 사업의 분리",
    separationBody:
      "그랜트로 지원되는 경제 안정 서비스는 종교, 교단, 교회 출석, 이민 배경, 성별, 장애와 관계없이 사업 자격과 필요에 따라 제공됩니다. 서비스를 받는 데 예배, 종교 교육, 교회 등록을 요구하지 않습니다. 그랜트 자금은 해당 지원 협약이 정한 비종교적 지역사회 서비스에만 사용됩니다.",

    boardHeading: "이사회 감독",
    boardBody:
      "회장·서기·재무(CFO) 임원을 둔 15인 이사회가 그랜트 자금, 예산, 인사, 규정 준수, 보험, 데이터 보호, 보고를 포함한 법적·재정적·사업적 통제권을 보유합니다. 이사회는 분기별 대시보드를 검토하고, 연간 자체 평가를 실시하며, 이해 상충의 공개와 관리를 요구합니다.",
    boardNote:
      "현재 이사회 명단은 최신 이사회 결의서를 기준으로 유지·확인됩니다.",

    fundHeading: "자금 회계와 재정 분리",
    fundBody:
      "그랜트 자금은 승인 예산, 증빙, 별도 프로그램 코드로 관리하며, 제한 자금 추적, 월별 대사, 분기별 재정 검토를 거칩니다. 자금은 절대 혼용하지 않습니다. 이사회가 승인한 서면 조건 없이는 그랜트 책임이나 통제권을 파트너에게 이전하지 않습니다.",

    privacyHeading: "개인정보 보호",
    privacyBody:
      "서비스에 필요한 정보만 수집하고, 사용 방식을 설명하는 사전 동의를 받으며, 안전한 Case ID를 부여하고, 역할별로 접근을 제한하며, 비식별 집계 자료만 보고합니다. 사고 대응 절차, 연간 개인정보 교육, 정기 접근 권한 검토를 운영합니다.",

    form990Heading: "공개 재정 자료",
    form990Body:
      "효사랑 선교회의 연방 세금 신고 자료는 공개되어 있습니다. 검토자는 ProPublica Nonprofit Explorer에서 기관의 Form 990 자료를 확인할 수 있습니다.",
    form990Label: "공개 Form 990 보기",
    recognitionAlt:
      "효사랑 시니어대학 강사에게 수여된 캘리포니아 주 의회 표창장을 든 세 사람",
    recognitionCaption: "캘리포니아 주 의회 표창 — 효사랑 시니어대학",
    viewLargerLabel: "크게 보기",
  },
};

export default governanceImpact;
