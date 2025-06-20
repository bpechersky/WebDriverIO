// tests/pageobjects/uploadDownload.page.ts
import { $, browser } from '@wdio/globals';
import BasePage from './base.page';

class UploadDownloadPage extends BasePage {
    get downloadButton() { return $('#downloadButton'); }
    get uploadInput() { return $('#uploadFile'); }
    get uploadedFilePath() { return $('#uploadedFilePath'); }

    async open() {
        await super.open('/upload-download');
    }

    async uploadFile(filePath: string) {
        const remotePath = await browser.uploadFile(filePath);
        await this.uploadInput.setValue(remotePath);
    }

    async isFileUploaded(): Promise<boolean> {
        return await this.uploadedFilePath.isDisplayed();
    }
}

export default new UploadDownloadPage();
