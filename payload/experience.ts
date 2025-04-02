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
            '내부 그룹웨어 팀 및 외부 협력사와 협업하여 전자결재 시스템 개발',
            '재무 업무 비즈니스에 필요한 주요 API 구현 및 데이터 모델 설계',
            '사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
            'Quartz Job 스케줄러와 Spring Batch를 사용한 자동화',
            '기술 스터디를 통한 팀 내 전문성 및 협업 역량 강화',
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
