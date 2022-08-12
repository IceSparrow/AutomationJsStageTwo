describe("Bring it on", () => {
    
    it("Creat new paste", async () => {
    let bashText = `git config --global user.name "New Sheriff in Town"
    git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    git push origin master --force")`;
    await browser.url("https://pastebin.com");
    await $(`//textarea[@id="postform-text"]`).setValue(bashText);

    await $(`#select2-postform-format-container`).waitForClickable();
    await $(`#select2-postform-format-container`).click();
    await $(`//input[@class="select2-search__field"]`).addValue("Bash");
    await $(`//input[@class="select2-search__field"]`).keys('\uE007');
    await $(`#select2-postform-expiration-container`).waitForClickable();
    await $(`#select2-postform-expiration-container`).click();
    let neededExpiration = await $(`#select2-postform-expiration-results :nth-child(3)`);
    await neededExpiration.waitForClickable();
    await neededExpiration.click();
    await $(`[class="form-control"]`).setValue("how to gain dominance among developers");
    await $(`//button[@type="submit"]`).waitForClickable();
    await $(`//button[@type="submit"]`).click();
    await browser.refresh();
    await expect(browser).toHaveTitleContaining("how to gain dominance among developers");
    await expect ($(`[class="bash"]`)).toExist();
    await expect ($(`[class="textarea -raw js-paste-raw"]`)).toHaveValueContaining(bashText);
    })
})