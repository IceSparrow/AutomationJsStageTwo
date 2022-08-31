import Page from './page';

class CloudGooglePage extends Page {
    
    get searchBtn() { return $('[class="devsite-search-container"]')};
    get searchQueryField() { return $(`//input[@name="q"]`)};
    get neededLink() { return $(`//a[@class="gs-title"][1]`)};
    get instances() { return $(`//input[@ng-model="listingCtrl.computeServer.quantity"]`)};
    get operatingSystem() { return $(`#select_value_label_81`)};
    get opSysFree() { return $(`#select_option_91`)};
    get provisioningModel() { return $(`#select_value_label_82`)};
    get provModRegular() { return $(`#select_option_104`)};
    get series() { return $(`#select_value_label_84`)};
    get seriesN1() { return $(`#select_option_199`)};
    get machineType() { return $(`#select_value_label_85`)};
    get machT8() { return $(`#select_option_423`)};
    get checkboxGPU() { return $(`//*[@aria-label="Add GPUs"]`)};
    get gpuType() { return $(`[placeholder="GPU type"]`)};
    get neededGpuType() { return $(`[value="NVIDIA_TESLA_T4"]`)};
    get numberGpu() { return $(`[placeholder="Number of GPUs"]`)};
    get neededGpuNum() { return $(`//*[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][2]`)};
    get localSsd() { return $(`//*[@ng-model="listingCtrl.computeServer.ssd"]`)};
    get neededLocalSsd() { return $(`//*[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][3]`)};
    get datacenterLoc() { return $(`//*[@ng-model="listingCtrl.computeServer.location"]`)};
    get neededDcLoc() { return $(`//*[@ng-repeat="item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer"][12]`)};
    get committedUsage() { return $(`//*[@ng-model="listingCtrl.computeServer.cud"]`)};
    get neededComUs() { return $(`#select_option_127 > div.md-text`)};
    get addBtn() { return $(`[ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]`)};
    get emailBtn() { return $(`[ng-click="cloudCartCtrl.showEmailForm();"]`)};
    get calculatorPage() { return `https://cloud.google.com/products`};
    get calculatorEmailField() { return $(`[ng-model="emailQuote.user.email"]`)};
    get sendEmailBtn() {return $(`[aria-label="Send Email"]`)};


    get regionOfEstimate() { return $(`#compute > md-list > md-list-item:nth-child(2) > div`)};
    get termOfEstimate() { return $(`#compute > md-list > md-list-item:nth-child(6) > div`)};
    get modelOfEstimate() { return $(`#compute > md-list > md-list-item:nth-child(8) > div`)};
    get typeOfEstimate() { return $(`md-list-item:nth-child(10) > div.md-list-item-text`)};
    get ssdOfEstimate() { return $(`md-list-item:nth-child(16) > div.md-list-item-text`)};
    get costOfEstimate() { return $(`md-card-content > div > div > div > h2 > b`)};

    get searchQuery() { return `Google Cloud Platform Pricing Calculator`};
  
    open() {
        super.open('https://cloud.google.com');
      }
    }

export default new CloudGooglePage();