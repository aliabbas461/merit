const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');
const { google } = require('googleapis');

const keys = require('./keys.json');

exports.addGoogleSheets = (req, res, next) => {
    console.log(req.body);
    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    client.authorize(function (err, token) {
        if (err) {
            console.log('jWT Error......', err);
            return;
        } else {
            console.log('Connected.......');
            gsrun(client, req.body);
        }
    });

    // res.json({message: 'Data is posted successfully......', data: req.body});
}

exports.accessGoogleSheets = async () => {
    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    client.authorize(function (err, token) {
        if (err) {
            console.log('jWT Error......', err);
            return;
        } else {
            console.log('Connected.......');
            gsrun(client);
        }
    });
}

async function gsrun(cl, postData) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });

    const opt = {
        spreadsheetId: '1ltRHRcgeTzPFi6kiX3nYcqYrOdN6y_BMK-7hpZv8sIM',
        range: 'SheetDemo'
    };
    if (postData) {
        const data = Object.entries(postData);
        console.log(data);
        const updateOptions = {
            spreadsheetId: '1ltRHRcgeTzPFi6kiX3nYcqYrOdN6y_BMK-7hpZv8sIM',
            range: 'SheetDemo',
            valueInputOption: 'USER_ENTERED',
            resource: { values: data }
        }

        let result = await gsapi.spreadsheets.values.update(updateOptions);
        console.log('posted Data.......', result.data);
        return;
    }

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
}