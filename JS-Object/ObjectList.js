import { getDataFromDoc } from "../js/utils.js";

const $template = document.getElementById("object-list-template");

export class ObjectList extends HTMLElement {
  // id = "";
  // objects = [];
  // owner = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append($template.content.cloneNode(true));

    this.$objects = this.shadowRoot.getElementById("objects");
    this.$name = this.shadowRoot.getElementById("name");
    this.$ObjectList = this.shadowRoot.querySelector(".object-list-container");
  }

  // static get observedAttributes() {
  //   return ["id", "owner"];
  // }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  setObjects(objects) {
    this.objects = objects;
    this.render();
  }

  async render() {
    this.$name.innerHTML = "Danh sách học phần";
    let number = 0;
    // this.$objects.innerHTML = this.objects
    //   .map( function (object) {
    //     let result = await firebase.firestore().collection('objectManager').doc(object.id).get();
    //     object = {id: object.id, ... getDataFromDoc(result)}
    //     number++;
        // return `
        //     <object-container
        //         number="${number}"
        //         object-id="${object.objectId}"
        //         object-name="${object.objectName}"
        //         teacher-name="${object.teacherName}"
        //         class="${object.class}"
        //         number-tc="${object.numberTc}"
        //         tuition="${object.tuition}">
        //     </object-container>`;
    //   })
    //   .join("");
    console.log(this.objects);
    for (let objectData of this.objects) {
      let result = await firebase
        .firestore()
        .collection("objectManager")
        .doc(objectData.objectId)
        .get();

      let object = getDataFromDoc(result);
      console.log('aa');
      this.$objects.innerHTML += `
        <object-container
            number="${++number}"
            object-id="${object.objectId}"
            object-name="${object.objectName}"
            teacher-name="${object.teacherName}"
            class="${object.class}"
            number-tc="${object.numberTc}"
            tuition="${object.tuition}">
        </object-container>`;
    }
  }
}

window.customElements.define("object-list", ObjectList);
