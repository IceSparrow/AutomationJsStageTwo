describe("I can win task", () => {
    
    it("Creat new paste", async () => {
    await browser.url("https://pastebin.com");
    await $(`//textarea[@id="postform-text"]`).setValue("Hello from WebDriver");
    await $(`#select2-postform-expiration-container`).click();
    let neededExpiration = await $(`#select2-postform-expiration-results :nth-child(3)`);
    await neededExpiration.waitForClickable();
    await neededExpiration.click();
    await $(`[class="form-control"]`).setValue("helloweb");
    await $(`//button[@type="submit"]`).click();
    await expect(browser).toHaveTitle("helloweb - Pastebin.com");
    })
})