import { LitElement, html } from 'lit-element';


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