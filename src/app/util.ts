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

    public static getDateDiff(date) {
        const time1 = new Date(date).getTime();
        const da = new Date();
        let sda = new Date(time1);
        const time2 = da.getTime();
        let time;
        if (time1 > time2) {
            time = time1 - time2;
            sda = da;
        } else {
            time = time2 - time1;
        }
        if (time < 1000) {
            return '刚刚';
        }
        time = parseInt(`${time / 1000}`);
        if (time > 86400) {
            var day = parseInt(`${time / (24 * 60 * 60)}`);
            if (day === 1)
            {
            return '昨天(' + sda.getHours() + ':' + sda.getMinutes() + ')';
            } else if (day < 30)
            {
            return day + '天前';
            } else if (day < 360)
            {
            const moth = parseInt(`${day / 30}`);
            return moth + '个月前';
            } else
            {
            const year = parseInt(`${day / 360}`);
            return year + '年前';
            };
        } else if (time > 3600) {
            const hour = parseInt(`${time / (60 * 60)}`);
            return hour + '小时前';
        } else if (time > 60) {
            const hour = parseInt(`${time / 60}`);
            return hour + '分钟前';
        } else {
            return time + '秒前';
        }
    }
}