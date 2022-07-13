import HomePage from "../pageObjects/HomePage";

describe('SportDirect Tests', () => {
  beforeEach(() => {
    
    HomePage.visit();
  });

  it('Senario 1', () => {

    HomePage.BrandsMenuOption.click();
    HomePage.AddidasOption.click();
    HomePage.TrainersOption.click();

    HomePage.MensCheckBox.click();
    HomePage.TrainersCheckBox.click();
    HomePage.CourtTrainersCheckBox.click();
    HomePage.LeatherCheckBox.click();
    HomePage.BlackCheckBox.click().wait(10000);

    HomePage.ItemsValidation.should('have.length',2);

    HomePage.BoxThatContainsSeTrainers.click();

    HomePage.ProductValidation.should('have.text','Grand Court SE Trainers Mens');
  })

})