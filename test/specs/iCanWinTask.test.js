// import PastebinPage from "./../../pageobjects/pastebinPage";

// describe("I can win task", () => {
    
//     it("Creat new paste", async () => {
//     await PastebinPage.open();
//     await PastebinPage.pasteArea.setValue(PastebinPage.iCanWinText);

//     await PastebinPage.expirationList.waitForClickable();
//     await PastebinPage.expirationList.click();
//     await PastebinPage.neededExpiration.waitForClickable();
//     await PastebinPage.neededExpiration.click();
    
//     await PastebinPage.pasteName.setValue(PastebinPage.iCanWinTitle);
//     await PastebinPage.createPasteBtn.waitForClickable();
//     await PastebinPage.createPasteBtn.click();
    
//     await browser.refresh();
//     await expect(browser).toHaveTitleContaining(PastebinPage.iCanWinTitle);
//     })
// })