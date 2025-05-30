'use strict'

class MultipartHelper {
    static buildDataFiles(boundary, formParams) {
        let data = '';
        const eol = "\r\n";

        const delimiter = '-------------' + boundary;

        for (const [name, content] of Object.entries(formParams)) {
            data += `--${delimiter}${eol}`
                  + `Content-Disposition: form-data; name="${name}"; filename="${name}"${eol}`
                  + `Content-Transfer-Encoding: binary${eol}`;

            data += eol;
            data += content + eol;
        }
        data += `--${delimiter}--${eol}`;

        return data;
    }
}

module.exports = MultipartHelper;