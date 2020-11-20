const $template = document.getElementById("object-manager-template")

export class ObjectManager extends HTMLElement {
    id = "";
    Objects = [];

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
      // console.log("test");
      if(name == 'id') {
          this.id = newValue;
          // console.log(this.id);
      } else if(name="name-manager"){
          this.nameManager = newValue;
      }
      this.render();
    }
  
    setObjects(Objects) {
      this.Objects = Objects;
      // console.log(this.Objects);
      this.render();
    }
    render() {
      // console.log(this.id);
      this.$nameManager.innerHTML = "Danh sách học phần được đăng ký trong kỳ I ";
      // console.log(this.objects);
      let number = 0;
      this.$objectManagerContent.innerHTML = this.Objects.map(function(object) {
        number++;
          return `
              <object-container 
                  number="${number}"
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