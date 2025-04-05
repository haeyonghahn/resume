import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ERP 재무 회계 솔루션 개발 및 운영',
      startedAt: '2020-08',
      where: '더존비즈온 ERP 재무 회계 솔루션 개발',
      descriptions: [
        {
          content: '결의서 중복 전표 처리 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content: '문제: 레이스 컨디션으로 인한 동시성 문제 발생',
            },
            {
              content:
                '개선 방법: Redis를 활용한 분산 락을 적용하여 동일 결의서 중복 처리 방지. 트랜잭션 처리 전 결의서 상태 확인 로직 추가',
            },
          ],
        },
        {
          content: '결의서 증빙 자료 서비스 개발 (팩토리 메서드 패턴 적용)',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '문제: 다양한 증빙 자료 유형에 따라 서비스 로직 분기 처리로 복잡성이 증가하여 가독성이 나쁨',
            },
            {
              content:
                '개선 방법: 팩토리 메서드 패턴을 적용하여 증빙 자료별 서비스 객체를 동적으로 생성. 인터페이스 기반 구조로 변경하여 신규 증빙 유형 추가 시 코드 수정 최소화',
            },
          ],
        },
        {
          content: '전표 데이터 엑셀 다운로드 시 OOM 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '문제: 약 50만 건 계정과목별 전표 데이터 엑셀 다운로드 시 OutOfMemory 오류 발생',
            },
            {
              content:
                '개선 방법: HTTP API → WebSocket 기반 전송 방식으로 변경하고 클라이언트가 처리할 수 있는 데이터 크기를 고려하여 MyBatis fetchSize 조절 및 resultHandler 활용하여 적절한 사이즈로 메모리 사용을 최소화하는 방식으로 개선',
            },
          ],
        },
        {
          content: '전자결재 예산 검증 프로세스 개선',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '문제: ERP 시스템 연동 과정에서 예산 초과 입력 오류가 발생 시, 상태 추적 기능 부재로 원인 분석에 어려움',
            },
            {
              content:
                '개선 방법: 예산 트랜잭션 로그 및 전자결재 히스토리 테이블을 조회하여 변경 이력 추적 기능 추가. ERP-그룹웨어 간 예산 검증 프로세스에서 예외 처리 로직을 추가하여 입력 데이터 정합성 강화',
            },
          ],
        },
        {
          content: 'SQL 쿼리 성능 최적화',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '문제: 기존 쿼리는 WHERE id IN (ID) 조건에서 100개 이상의 ID를 포함할 경우 슬로우 쿼리 발생',
            },
            {
              content:
                '개선 방법: ID 정보를 임시 테이블에 저장하고, JOIN을 활용하여 조회 방식 변경 → 불필요한 IN 연산 제거',
            },
          ],
        },
      ],
    },
    {
      title: 'B2C 배달앱 중개 서비스 개발',
      startedAt: '2024-12',
      endedAt: '2025-03',
      where: '패스트캠퍼스 INNER CIRCLE 2기 개발의 민족 팀 백엔드 개발',
      descriptions: [
        {
          content: 'nextjs 도커 이미지 경량화를 통해 인프라 리소스 비용을 줄이는 방법',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BPR%5D-nextjs-%EB%8F%84%EC%BB%A4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%9F%89%ED%99%94%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%9D%B8%ED%94%84%EB%9D%BC-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%B9%84%EC%9A%A9-%EC%A4%84%EC%9D%B4%EA%B8%B0',
        },
        {
          content: '주문 상세 조회 API를 PostgreSQL에서 MongoDB로 바꾼 이유',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BPR%5D-%EC%A3%BC%EB%AC%B8-%EC%83%81%EC%84%B8-%EC%A1%B0%ED%9A%8C-%EA%B0%9C%EC%84%A0',
        },
        {
          content: '시스템 운영 시 안정성 및 성능 분석 고려를 위해 모니터링 시스템 구축',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BPR%5D-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0',
        },
        {
          content: 'AWS 인프라 설계 및 Terraform 기반 AWS 인프라 자동화 구축',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-infra',
        },
        {
          content: '배달앱 중개 서비스 비즈니스 로직 설계',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BBE%5D-%EC%8B%9C%ED%80%80%EC%8A%A4-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8-Ver.2',
        },
        {
          content:
            '배포버전과 DB 불일치로 오류 발생 문제 해결을 위해 DB 마이그레이션 툴(Flyway) 도입하여 운영 DB 누락 등 휴먼 오류 개선',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-BE/blob/develop/flyway/flyway.md',
        },
        {
          content: 'B2C 배달앱 중개 서비스 개발 히스토리를 남기기 위한 문서 작성',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki',
        },
      ],
    },
  ],
};

export default project;
