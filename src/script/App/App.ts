import BaseComponent from '../components/BaseComponent/BaseComponent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default class App extends BaseComponent {
  private header: Header;

  private main: Main;

  private footer: Footer;

  constructor() {
    super('div', ['app']);
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
  }

  start(): void {
    this.addChild(this.header);
    this.addChild(this.main);
    this.addChild(this.footer);
  }
}
