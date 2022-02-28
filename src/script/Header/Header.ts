import BaseComponent from '../components/BaseComponent/BaseComponent';
import './header.css';
import Container from '../container/Container';
import LinkComponent from '../components/LinkComponent/LinkComponent';

const NAV = [
  {
    adress: 'Skills',
    id: 'skills_id',
  },
  {
    adress: 'Projects',
    id: 'projects_id',
  },
  {
    adress: 'Languages',
    id: 'languages_id',
  },
  {
    adress: 'Education',
    id: 'education_id',
  },
  {
    adress: 'Code',
    id: 'code_id',
  },
  {
    adress: 'Contacts',
    id: 'contacts_id',
  },
];

export default class Header extends BaseComponent {
  container: Container;

  wrapNav: BaseComponent<HTMLDivElement>;

  linkNav?: LinkComponent;

  constructor() {
    super('header', ['header']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const wrapNav = new BaseComponent<HTMLDivElement>('div', ['wrap-nav']);
    container.addChild(wrapNav);
    this.wrapNav = wrapNav;

    NAV.forEach((item) => {
      const linkNav = new LinkComponent(['link-nav'], `#${item.id}`, `${item.adress}`);
      wrapNav.addChild(linkNav);
      this.linkNav = linkNav;
    });
  }
}
