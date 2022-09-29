var wbook = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1d6_txTl0rzfrU88LSDMGqj-9EVLDYY3G8ScMV5DDfJM/edit?usp=sharing');

var sheet = wbook.getSheetByName('UserInfo');

function doPost(e){

  var action = e.parameter.action;

  if(action == "addUser"){
  
  return addUser(e);

  }

}

function addUser(e){

  var user = JSON.parse(e.postData.contents);
  sheet.appendRow([user.name,user.age,user.mobile,user.email]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  
}
