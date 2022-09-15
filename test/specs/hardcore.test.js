import cloudGooglePage from "../../pageobjects/cloudGooglePage";
import generatorMail from "../../pageobjects/generatorMail";
import testData from "../../testData/testData";

describe ("Harcore", () => {

    it("Create new calculator", async () => {

        cloudGooglePage.open();

        await cloudGooglePage.searchCloudGoogleCalculator();
        await cloudGooglePage.switchToNeededFrame();
        await cloudGooglePage.chooseNeededParametersForCalculator();
        await cloudGooglePage.clickEmailButton();       
        await cloudGooglePage.openEmailWindow();
        await cloudGooglePage.switchWindow();
        await cloudGooglePage.switchToNeededFrame();
        await cloudGooglePage.copyPastEmail();
        await cloudGooglePage.switchToGeneratorEmail();
        
        await expect(generatorMail.emailedCostOfEstimate).toHaveTextContaining(testData.neededCost);
    })
})