import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

  static get properties() {
    return {
      'name': String,
    };
  }

  static styles = css`
    :host {
      font-family: Arial, 'sans serif';
    }
    h1 {
      color: #8af;
    }
  `;

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <p>This is a sample LitElement project.</p>
    `;
  }

}
customElements.define('my-element', MyElement);

class myApp extends LitElement {

  
    render() {

      var domparser = new DOMParser();​​​​​​

      var doc = domparser.parseFromString('<h1>Hello world!</h1>', "text/html")

      var ttt = doc.querySelector('h1')

      console.log(doc.body)
      console.log(ttt)
 
      return html`
         <h1>Hello world1!</h1>
         ${ttt}
      `;
   }
}

customElements.define('my-app4441', myApp);