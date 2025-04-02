import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '강원대학교',
      subTitle: '컴퓨터정보통신공학과 학사 졸업',
      startedAt: '2013-03',
      endedAt: '2019-02',
    },
    {
      title: '성사고',
      subTitle: '인문계 졸업 (경기도 고양시)',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
