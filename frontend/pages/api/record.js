import Airtable from "airtable";
const Record = async (req, res) => {
    if (req.method == 'POST') {
      const body = JSON.parse(req.body);
      console.log(body)
      Airtable.configure({ apiKey: 'API_KEY' });
      var base = Airtable.base('appBILRlgu5Md99a8');
      var table1 = base('Teams');
      table1.select({
        view: 'Grid view'
      }).firstPage(function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) {
          console.log('Retrieved', record.get('Team Name'));
        });
      });
  
      try {
        await new Promise((resolve, reject) => {
          table1.create([
            {
              "fields": {
                "Team Name": body.teamName,
                "Sensory": (body.sens == 'on') ? true : false,
                "Weeb Wars": (body.ww == 'on') ? true : false,
                "Tech Feud": (body.tf == 'on') ? true : false,
                "Escape The Mainframe": (body.etm == 'on') ? true : false,
                "Member 1 Name": body.Name1,
                "Member 2 Name": body.Name2,
                "Member 1 Register Number": body.regno1,
                "Member 1 Contact No.": body.phno1,
                "Member 1 Shift": body.shift1,
                "Member 2 Register Number": body.regno2,
                "Member 2 Contact No.": body.phno2,
                "Member 2 Shift": body.shift2
              }
            }
          ], function (err, records) {
            if (err) {
              console.error(err);
              reject(err);
              return;
            }
            records.forEach(function (record) {
              console.log(record.getId());
            });
            resolve(records);
          });
        });
      } catch (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
  
      res.status(200).send();
    }
  }

  export default Record

  