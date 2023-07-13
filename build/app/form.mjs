export class Form {
  constructor() {
    this.email = document.getElementById("email");
    this.login = document.querySelector('.card__content');
    this.success = document.querySelector('.success');
  }

  isValidEmail() {
    const regexEmail = /\w@(gmail|hotmail|yahoo).com$/gi;
    return regexEmail.test(this.email.value);
  }

  handleError() {
    const messageError = document.querySelector('.form__error');
    this.email.classList.toggle("form__inputError", !this.isValidEmail());
    messageError.classList.toggle("form__error--active", !this.isValidEmail())
  }

  showSucessCard() {
    const user = document.getElementById('user-email');
    if (this.isValidEmail()) {
      this.success.classList.add("success__show");
      this.login.classList.add("card__hidden");
      user.textContent = this.email.value;
    }
    this.handleError();
  }

  backLogin() {
    this.success.classList.remove('success__show');
    this.login.classList.remove('card__hidden');
  }
}