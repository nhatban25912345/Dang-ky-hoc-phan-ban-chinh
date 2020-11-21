import { getCurrentUser } from "../js//utils.js";

const $template = document.getElementById("object-manager-template");

export class ObjectManager extends HTMLElement {
  // id = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append($template.content.cloneNode(true));

    this.$objectManagerContent = this.shadowRoot.getElementById(
      "object-manager-content"
    );
    this.$nameManager = this.shadowRoot.getElementById("name-manager");

    this.$ObjectList = this.shadowRoot.querySelector(".object-list-container");
    this.$ObjectList.addEventListener("register-object-event", (event) => {
      this.registerObject(event.detail.id);
    });
  }

  // static get observedAttributes() {
  //   return ["id","name-manager"];
  // }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log("test");
    // if(name == 'id') {
    //     this.id = newValue;
    //     // console.log(this.id);
    // } else if(name="name-manager"){
    //     this.nameManager = newValue;
    // }
    this.render();
  }

  setObjects(objects) {
    this.objects = objects;
    // console.log(this.Objects);
    this.render();
  }

  async registerObject(objectId) {
    let user = getCurrentUser();
    console.log(objectId, user.id);
    let result = await firebase
      .firestore()
      .collection("objectList")
      .where("objectId", "==", objectId)
      .where("userId", "==", user.id)
      .get();
    if (!result.empty) {
      alert("Môn học đã được đăng kí, vui lòng kiểm tra lại ở phần thông tin tài khoản");
      return;
    }

    await firebase.firestore().collection("objectList").add({
      objectId: objectId,
      userId: user.id,
    });

    alert("Đăng ký thành công");
  }

  render() {
    // console.log(this.id);
    this.$nameManager.innerHTML = "Danh sách học phần đăng ký được trong kỳ I ";
    // console.log(this.objects);
    let number = 0;
    this.$objectManagerContent.innerHTML = this.objects
      .map(function (object) {
        number++;
        return `
              <object-register 
                  id="${object.id}"
                  number="${number}"
                  object-id="${object.objectId}"
                  object-name="${object.objectName}"
                  teacher-name="${object.teacherName}"
                  class="${object.class}"
                  number-tc="${object.numberTc}"
                  tuition="${object.tuition}">
              </object-register>`;
      })
      .join("");
  }
}

window.customElements.define("object-manager", ObjectManager);
