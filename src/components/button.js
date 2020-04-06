import { LitElement, html, css } from 'lit-element';

class MiniHumidifierButton extends LitElement {
  render() {
    return html`
      <div class="container">
        <div class="slot-container">
          <slot></slot>
        </div>
        <paper-ripple></paper-ripple>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 4px;
        min-width: 0;
        overflow: hidden;
        transition: background .5s;
        border-radius: 4px;
        font-weight: 500;
      }
      :host([raised]) {
        background: var(--mh-button-color);
        min-height: calc(var(--mh-unit) * .8);
        box-shadow:
          0px 3px 1px -2px rgba(0, 0, 0, 0.2),
          0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0,0,0,.12);
      }
      :host([color]) {
        background: var(--mh-icon-active-color);
        transition: background .25s;
        opacity: 1;
      }
      :host([faded]) {
        opacity: .75;
      }
      :host([disabled]) {
        opacity: .25;
        pointer-events: none;
      }
      .container {
        height: 100%;
        width: 100%;
      }
      .slot-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        width: auto;
      }
      paper-ripple {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `;
  }
}

customElements.define('mh-button', MiniHumidifierButton);
