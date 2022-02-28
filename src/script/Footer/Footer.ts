import BaseComponent from '../components/BaseComponent/BaseComponent';
import './footer.css';
import Container from '../container/Container';
import LinkComponent from '../components/LinkComponent/LinkComponent';

const INFO_ABOUT_ME = [
  {
    info: '2022',
  },
  {
    info: 'Email: andrey.drobysh.04@gmail.com',
  },
  {
    info: 'Telegram: @AndreyDrobysh',
    link: '',
  },
  {
    info: 'Github',
    link: 'https://github.com/AndreyDrobysh',
  },
];

export default class Footer extends BaseComponent {
  container: Container;

  footerWrap: BaseComponent<HTMLDivElement>;

  contact?: BaseComponent<HTMLParagraphElement>;

  contactLink?: LinkComponent;

  constructor() {
    super('footer', ['footer']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const footerWrap = new BaseComponent<HTMLDivElement>('div', ['footer-wrap']);
    container.addChild(footerWrap);
    footerWrap.element.id = 'contacts_id';
    this.footerWrap = footerWrap;

    INFO_ABOUT_ME.forEach((item) => {
      if (item.link) {
        const contactLink = new LinkComponent(['contact-link'], `${item.link}`, `${item.info}`);
        footerWrap.addChild(contactLink);
        this.contactLink = contactLink;
      } else {
        const contact = new BaseComponent<HTMLParagraphElement>('p', ['contact'], `${item.info}`);
        footerWrap.addChild(contact);
        this.contact = contact;
      }
    });
  }
}
