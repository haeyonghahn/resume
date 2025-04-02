import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '한해용',
    small: '',
  },
  contact: [
    {
      title: 'yong80211@gmail.com',
      link: 'mailto:yong80211@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/haeyonghahn',
      icon: faGithub,
    },
    {
      link: 'https://linkedin.com/in/haeyonghahn',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '휴대전화나 링크드인 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
