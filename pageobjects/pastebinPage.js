import Page from './page';

class PastebinPage extends Page {
  get pasteArea() { return $('//*[@id="postform-text"]');}
  get syntaxHighlighting() { return $('#select2-postform-format-container');}
  get highlighterInput() { return $('//input[@class="select2-search__field"]');}

  get expirationList() { return $('#select2-postform-expiration-container');}
  get neededExpiration() { return $('#select2-postform-expiration-results :nth-child(3)');}

  get pasteName() { return $('[class="form-control"]');}
  get createPasteBtn() { return $('//button[@type="submit"]');}

  get bashHighlighterElement() { return $('//a[@href="/archive/bash"]'); }
  get pasteTextElement(){ return $('[class="textarea -raw js-paste-raw"]');}

  get title() { return 'how to gain dominance among developers';}  
  get pasteText() { return `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`;}
  get bashHighlighter() { return $('[class="bash"]'); }

  open() {
    super.open('http://pastebin.com');
  }
}
export default new PastebinPage();