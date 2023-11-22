import Airtable from "airtable";
import { headers } from "next/dist/client/components/headers";
import axios from "axios";
/*
const Record = async (req, res)=>{
  if (req.method=='POST') {
    const body = JSON.parse(req.body);
    console.log(body)
    Airtable.configure({apiKey: token3});
    var base = Airtable.base('appBILRlgu5Md99a8');
    var table1 = base('Teams');
    /*table1.select({
      view: 'Grid view'
  }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Team Name'));
      });
  });
await table1.create([
  {
    "fields": {
      "Team Name": body.teamName,
      "Sensory": (body.sens=='on')?true:false,
      "Weeb Wars": (body.ww=='on')?true:false,
      "Tech Feud": (body.tf=='on')?true:false,
      "Escape The Mainframe": (body.etm=='on')?true:false,
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
]/*, function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
  return records;
  }
  
);
res.status(200).send();
//res.status(200).send('<html><h1 style="margin: auto;">REGISTRATION SUCCESSFUL!</h1></html>');
}
    /*fetch("https://api.airtable.com/v0/appBILRlgu5Md99a8/tblMypUO46Se4lavC", {mode: 'cors', headers:{'content-type': 'application/json', 'Authorisation':'Bearer pat4EzBJDRdJp4Oij.3d2a69b6199406195b9c01ccd12edf430e57672574170b6a63965e9195f0794f'}, method: 'POST', body: JSON.stringify({
      fields: {
        Name: body.teamName,
        "Member 1 Name": "namename"
      }
    })}).then(response=>console.log(response.json()))
    axios.post(
      "https://api.airtable.com/v0/appBILRlgu5Md99a8/tblMypUO46Se4lavC", {
        "fields": {
          "Team Name": body.teamName,
          "Member 1 Name": "namename"
        }
      },
      {headers:{
        'Content-Type': 'application/json',
        'Authorisation':'Bearer '+ token2}}
      ).catch(exception=>console.log(exception)).then(response=>console.log(response))
    console.log(body)
}

export default Record

*/