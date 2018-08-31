using aspNetCoreGSheetReactReader.Models;
using System.Collections.Generic;
using System.IO;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;

namespace aspNetCoreGSheetReactReader.Utils
{
    public class SheetReader
    {
        static readonly string[] Scopes = { SheetsService.Scope.Spreadsheets };
        static readonly string ApplicationName = "Presidents";
        static readonly string SpreadsheetId = "1dilywqKrRpKqWtjr4W8hftj__CqdWp4iIL-TeD8Hnvk";
        static readonly string sheet = "Sheet1";
        static readonly bool header = true;
        static SheetsService _service;
        public IList<President> DataList { get; set; }

        public SheetReader()
        {
            GoogleCredential credential;
            using (var stream = new FileStream("client-secret.json", FileMode.Open, FileAccess.Read))
            {
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped(Scopes);
            }

            // Create Google Sheets API service.
            _service = new SheetsService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
        }

        public void ReadEntries()
        {
            bool skipped = false;
            var range = $"{sheet}!A:E";
            SpreadsheetsResource.ValuesResource.GetRequest request =
                    _service.Spreadsheets.Values.Get(SpreadsheetId, range);

            var response = request.Execute();
            IList<IList<object>> values = response.Values;
            DataList = new List<President>();

            if (values != null && values.Count > 0)
            {
                foreach (var row in values)
                {
                    // Save columns A to F, which correspond to indices 0 and 4.
                    if (header && !skipped)
                    {
                        skipped = true;
                    }
                    else
                    {
                        President p = new President();
                        p.Name = row[0].ToString();
                        p.Birthday = row[1].ToString();
                        p.Birthplace = row[2].ToString();
                        p.DeathDay = row.Count > 3 ? row[3].ToString() : null;
                        p.DeathPlace = row.Count > 4 ? row[4].ToString() : null;

                        DataList.Add(p);
                    }
                }
            }
        }
    }
}