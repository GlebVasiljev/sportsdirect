import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com";
  }
  static get BrandsMenuOption(){
    return cy.get('[id="lnkTopLevelMenu_2579840"]').contains('Brands');
  }
  static get AddidasOption(){
    return cy.get('.Adidas > a');
  }
  static get TrainersOption(){
    return cy.get('.swiper-slide-next > a > .slideName');
  }
  static get MensCheckBox(){
    return cy.get('[data-productname="Mens"] > .FilterAnchor > .SelectableFilter');
  }
  static get TrainersCheckBox(){
    return cy.get('[data-productname="Trainers"] > .FilterAnchor > .SelectableFilter');
  }
  static get CourtTrainersCheckBox(){
    return cy.get('[data-productname="Court Trainers"] > .FilterAnchor > .SelectableFilter');
  }
  static get LeatherCheckBox(){
    return cy.get('[data-productname="Leather"] > .FilterAnchor > .SelectableFilter');
  }
  static get BlackCheckBox(){
    return cy.get('[data-productname="Black"] > .FilterAnchor > .SelectableFilter');
  }
  static get ItemsValidation(){
    return cy.get('[class="s-productthumbbox"]');
  }
  static get BoxThatContainsSeTrainers(){
    return cy.get('[class="s-productthumbbox"]').contains("SE Trainers");
  }
  static get ProductValidation(){
    return cy.get('[id="lblProductName"]');
  }
}

export default HomePage;