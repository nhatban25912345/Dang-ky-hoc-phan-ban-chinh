import { getCurrentUser } from "./utils.js";

const $template = document.getElementById("student-profile-template");
export class StudentProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$studentId = this.shadowRoot.getElementById("student-id");
    this.$fullName = this.shadowRoot.getElementById("full-name");
    this.$dateOfBirth = this.shadowRoot.getElementById("date-of-birth");
    this.$majors = this.shadowRoot.getElementById("majors");
    this.$course = this.shadowRoot.getElementById("course");
    this.$avatar = this.shadowRoot.getElementById("avatar");
    this.$sex = this.shadowRoot.getElementById('sex');
    this.$email = this.shadowRoot.getElementById('email');
    this.$numberPhone = this.shadowRoot.getElementById('number-phone');
  }


  async connectedCallback() {
    let studentProfileData = getCurrentUser();
    this.$studentId.setAttribute("value", studentProfileData.studentId);
    this.$fullName.setAttribute("value", studentProfileData.fullName);
    this.$dateOfBirth.setAttribute("value", studentProfileData.dateOfBirth);
    this.$majors.setAttribute("value", studentProfileData.majors);
    this.$course.setAttribute("value", studentProfileData.course);
    this.$avatar.setAttribute("src", studentProfileData.avatar);
    this.$sex.setAttribute("value", studentProfileData.sex);
    this.$email.setAttribute("value", studentProfileData.email);
    this.$numberPhone.setAttribute("value", studentProfileData.numberPhone);
  }
}

window.customElements.define("student-profile", StudentProfile);