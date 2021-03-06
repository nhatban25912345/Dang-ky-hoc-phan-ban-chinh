const $template = document.getElementById("object-register-template");

export class ObjectRegister extends HTMLElement {
  id = "";
  number = "";
  objectId = "";
  objectName = "";
  teacherName = "";
  class = "";
  numberTc = "";
  tuition = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$number = this.shadowRoot.getElementById("number");
    this.$objectId = this.shadowRoot.getElementById("object-id");
    this.$objectName = this.shadowRoot.getElementById("object-name");
    this.$teacherName = this.shadowRoot.getElementById("teacher-name");
    this.$class = this.shadowRoot.getElementById("class");
    this.$numberTc = this.shadowRoot.getElementById("number-tc");
    this.$tuition = this.shadowRoot.getElementById("tuition");
    
    this.$formRegisterObject = this.shadowRoot.querySelector(
      ".form-register-object"
    );

    this.$formRegisterObject.onsubmit = (event) => {
      event.preventDefault();
      this.handle();
      console.log("ok");
      // cái này ok rồi
    };
  }
  static get observedAttributes() {
    return [
      "id",
      "number",
      "object-id",
      "object-name",
      "teacher-name",
      "class",
      "number-tc",
      "tuition",
    ];
  }

  attributeChangedCallback(name, oldvalue, newValue) {
    // console.log("aahihi");
    switch (name) {
      case "id":
        this.id = newValue;
        break;
      case "number":
        this.number = newValue;
        // console.log(this.number);
        break;

      case "object-id":
        this.objectId = newValue;
        break;

      case "object-name":
        this.objectName = newValue;
        break;

      case "teacher-name":
        this.teacherName = newValue;
        break;

      case "class":
        this.class = newValue;
        break;

      case "number-tc":
        this.numberTc = newValue;
        break;

      case "tuition":
        this.tuition = newValue;
        break;
    }
    this.render();
  }
  handle() {
    let registerObjectEvent = new CustomEvent("register-object-event", {
      bubbles: true,
      detail: {
        id: this.id
      },
    });
    this.dispatchEvent(registerObjectEvent);
  }
  render() {
    // console.log("lala");
    this.$number.innerHTML = this.number;
    this.$objectId.innerHTML = this.objectId;
    this.$objectName.innerHTML = this.objectName;
    this.$teacherName.innerHTML = this.teacherName;
    this.$class.innerHTML = this.class;
    this.$numberTc.innerHTML = this.numberTc;
    this.$tuition.innerHTML = this.tuition;
  }
}
window.customElements.define("object-register",ObjectRegister);
