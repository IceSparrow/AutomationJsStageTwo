import Page from './page';

class GeneratorMail extends Page {

    get copyGeneratedEmail() { return $(`#email_ch_text`)};
    get emailedCostOfEstimate() {return $(`#mobilepadding > td > table > tbody > tr.odd > td:nth-child(4)`)};

}

export default new GeneratorMail();