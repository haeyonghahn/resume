import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Haeyong Hahn';
const description = 'This is a haeyong web resume.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'Haeyong.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
