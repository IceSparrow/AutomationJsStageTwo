import cloudGooglePage from "../../pageobjects/cloudGooglePage";
import testData from "../../testData/testData";

describe ("Hurt me plenty", () => {

    it("Create new calculator", async () => {

        cloudGooglePage.open();

        await cloudGooglePage.searchBtn.waitForClickable();
        await cloudGooglePage.searchBtn.click();
        await cloudGooglePage.searchQueryField.addValue(cloudGooglePage.searchQuery);
        await cloudGooglePage.searchQueryField.keys('\uE007');
        await cloudGooglePage.neededLink.waitForExist();
        await cloudGooglePage.neededLink.click();

        await browser.switchToFrame(0);
        await browser.switchToFrame(0);

        await cloudGooglePage.instances.waitForExist();
        await cloudGooglePage.instances.click();
        await cloudGooglePage.instances.addValue(`4`);

        await cloudGooglePage.operatingSystem.waitForClickable();
        await cloudGooglePage.operatingSystem.click();
        await cloudGooglePage.opSysFree.click();

        await cloudGooglePage.provisioningModel.waitForClickable();
        await cloudGooglePage.provisioningModel.click();
        await cloudGooglePage.provModRegular.click();

        await cloudGooglePage.series.waitForClickable();
        await cloudGooglePage.series.click();
        await cloudGooglePage.seriesN1.click();

        await cloudGooglePage.machineType.waitForClickable();
        await cloudGooglePage.machineType.click();
        await cloudGooglePage.machT8.click();

        await cloudGooglePage.checkboxGPU.waitForClickable();
        await cloudGooglePage.checkboxGPU.click();
        await cloudGooglePage.gpuType.waitForClickable();
        await cloudGooglePage.gpuType.click();
        await cloudGooglePage.neededGpuType.waitForClickable();
        await cloudGooglePage.neededGpuType.click();
        await cloudGooglePage.numberGpu.waitForClickable();
        await cloudGooglePage.numberGpu.click();
        await cloudGooglePage.neededGpuNum.waitForClickable();
        await cloudGooglePage.neededGpuNum.click();

        await cloudGooglePage.localSsd.waitForClickable();
        await cloudGooglePage.localSsd.click();
        await cloudGooglePage.neededLocalSsd.waitForClickable();
        await cloudGooglePage.neededLocalSsd.click();

        await cloudGooglePage.datacenterLoc.waitForClickable();
        await cloudGooglePage.datacenterLoc.click();
        await cloudGooglePage.neededDcLoc.waitForClickable();
        await cloudGooglePage.neededDcLoc.click();

        await cloudGooglePage.committedUsage.waitForClickable();
        await cloudGooglePage.committedUsage.click();
        await cloudGooglePage.neededComUs.waitForClickable();
        await cloudGooglePage.neededComUs.click();

        await cloudGooglePage.addBtn.click();

        await expect(cloudGooglePage.regionOfEstimate).toHaveTextContaining(testData.neededRegion);
        await expect(cloudGooglePage.termOfEstimate).toHaveTextContaining(testData.neededTerm);
        await expect(cloudGooglePage.modelOfEstimate).toHaveTextContaining(testData.neededModel);
        await expect(cloudGooglePage.typeOfEstimate).toHaveTextContaining(testData.neededType);
        await expect(cloudGooglePage.ssdOfEstimate).toHaveTextContaining(testData.neededSsd);
        await expect(cloudGooglePage.costOfEstimate).toHaveTextContaining(testData.neededCost);
    })
})