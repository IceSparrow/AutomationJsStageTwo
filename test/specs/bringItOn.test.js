// import PastebinPage from "./../../pageobjects/pastebinPage";


// describe("Bring it on", () => {
    
//     it("Creat new paste", async () => {
//     await PastebinPage.open();
//     await PastebinPage.pasteArea.setValue(PastebinPage.pasteText);

//     await PastebinPage.syntaxHighlighting.waitForClickable();
//     await PastebinPage.syntaxHighlighting.click();
//     await PastebinPage.highlighterInput.addValue("Bash");
//     await PastebinPage.highlighterInput.keys('\uE007');

//     await PastebinPage.expirationList.waitForClickable();
//     await PastebinPage.expirationList.click();

//     await PastebinPage.neededExpiration.waitForClickable();
//     await PastebinPage.neededExpiration.click();

//     await PastebinPage.pasteName.setValue(PastebinPage.title);
//     await PastebinPage.createPasteBtn.waitForClickable();
//     await PastebinPage.createPasteBtn.click();

//     await browser.refresh();
//     await expect(browser).toHaveTitleContaining(PastebinPage.title);
//     await expect (PastebinPage.bashHighlighter).toExist();
//     await expect (PastebinPage.pasteTextElement).toHaveValueContaining(PastebinPage.pasteText);
//     })
// })