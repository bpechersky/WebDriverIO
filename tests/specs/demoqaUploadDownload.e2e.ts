// tests/specs/demoqaUploadDownload.e2e.ts
import UploadDownloadPage from '../pageobjects/uploadDownload.page';
import path from 'path';

describe('DemoQA Upload & Download', () => {
    it('should upload a file successfully', async () => {
        await UploadDownloadPage.open();

        const filePath = path.join(__dirname, '../resources/sampleFile.txt');
        await UploadDownloadPage.uploadFile(filePath);

        const uploaded = await UploadDownloadPage.isFileUploaded();
        expect(uploaded).toBe(true);
    });

    // Note: This test only verifies the download button is clickable
    // since browser automation can't confirm the file system download
    it('should have a working download button', async () => {
        await UploadDownloadPage.open();
        await expect(UploadDownloadPage.downloadButton).toBeDisplayed();
        await UploadDownloadPage.downloadButton.click();
    });
});
