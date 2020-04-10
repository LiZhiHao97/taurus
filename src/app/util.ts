export class Util {
    public static dataURLtoFile(base64Data) {
        const blob = this.getBlobBydataURI(base64Data, 'image/jpeg');
        const fd = new FormData(document.forms[0]);
        fd.append('file', blob);
        return fd;
    }

    public static getBlobBydataURI(dataURI,type) {
        const binary = atob(dataURI.split(',')[1]);
        const array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type:type });
    } 
}