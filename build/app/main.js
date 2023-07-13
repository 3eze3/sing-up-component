import { Form } from "./form.mjs";
function main() {
  const button = document.querySelector(".form__btn");
  const back_button = document.querySelector(".success__button");
  const objForm = new Form()
  button.addEventListener("click", e => {
    e.preventDefault();
    objForm.showSucessCard()
  });
  back_button.addEventListener("click", () => objForm.backLogin())
}
main()