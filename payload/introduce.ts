import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '재무 업무 프로세스 이해를 기반으로 시스템을 개발한 경험이 있습니다. JavaScript, Spring, Java, Oracle, Redis, Git, Linux 등을 사용하여 웹 서비스의 아키텍쳐와 RESTful API 설계에 대한 이해도를 가지고 있으며 재무 업무 프로세스 개발, 운영 경험으로 결산업무 효율화를 위해 노력하고 있습니다.',
    '개인 프로젝트나 개발 커뮤니티 활동 등 다양한 개발 경험을 진행하고 있습니다. 개발 경험을 기록하는 것을 좋아하며 제 자신만의 개발 아카이브를 늘리기 위해 노력하고 있습니다. 항상 어딘가의 기술 조직에 에이스가 되리라는 목표를 가지고 다양한 기술을 학습하거나 사용하며 경험을 쌓고 있습니다.',
    '개발이란 결국 비즈니스와 커뮤니케이션을 통해, 비즈니스를 현실화하기 위한 도구이자 수단이라고 생각합니다. 이해관계자들과 적극적인 커뮤니케이션으로 문제를 정의하며 비즈니스 발전을 위한 문제 해결도 필요합니다. 이러한 점을 바탕으로 좋은 개발자로서 성장하기 위해 학습하고, 경험하며, 노력하고 있습니다.',
  ],
  sign: 'haeyong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
