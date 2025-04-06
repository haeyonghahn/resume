import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '더존비즈온',
      positions: [
        {
          title: 'ERP / Software Developer',
          startedAt: '2020-08',
          descriptions: [
            '재무 업무 비즈니스에 필요한 주요 API 구현 및 데이터 모델 설계',
            '내부 그룹웨어 및 고객사 전자결재 연동 시스템 개발',
            '사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
          ],
          skillKeywords: [
            'JavaScript',
            'Java',
            'Spring',
            'Spring Batch',
            'Redis',
            'Oracle',
            'mariaDB',
          ],
        },
      ],
    },
  ],
};

export default experience;
