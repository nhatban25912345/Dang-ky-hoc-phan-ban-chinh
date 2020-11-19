const $template = this.document.getElementById("object-manager-template")

export class ObjectManager extends HTMLElement {
    id = "";
    nameManager = "";  
    // objectId = "";
    objectName = "";
    teacherName = "";
    class = "";
    numberTc = "";
    tuition = "";

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append($template.content.cloneNode(true));
  
      this.$objectManagerContent = this.shadowRoot.getElementById("object-manager-content");
      this.$nameManager = this.shadowRoot.getElementById("name-manager");
    }

    static get observedAttributes() {
      return ["id","name-manager"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log("test");
      if(name == 'id') {
          this.id = newValue;
          console.log(this.id);
      } else if(name="name-manager"){
          this.nameManager = newValue;
      }
      this.render();
    }
  
    setObjectManager(objectManagerContent) {
        console.log(objectManagerContent);
      this.objectManagerContent = objectManagerContent;
    //   console.log(this.objects);
      this.render();
    }
    render() {
      console.log(this.id);
      this.$nameManager.innerHTML = "Danh sach hoc phan" + this.id;
      console.log(this.objects);
      this.$objects.innerHTML = this.map(function(object) {
          return `
              <object-container 
                  number="${object.number}"
                  object-id="${object.objectId}"
                  object-name="${object.objectName}"
                  teacher-name="${object.teacherName}"
                  class="${object.class}"
                  number-tc="${object.numberTc}"
                  tuition="${object.tuition}">
              </object-container>`
        }).join("");
    }
  }
  
  window.customElements.define("object-manager", ObjectManager);