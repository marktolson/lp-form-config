const surveyJSON = {
  "title": "Medical Records Request",
  "completedHtml": "<h3>Thanks for the submission!</h3>",
  "completedHtmlOnCondition": [
   {
    "expression": "{nps_score} >= 9",
    "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
   },
   {
    "expression": "{nps_score} >= 6  and {nps_score} <= 8",
    "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
   }
  ],
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "matterType",
      "minWidth": "200px",
      "title": "Matter Type",
      "choices": [
       {
        "value": "Item 1",
        "text": "WC"
       },
       {
        "value": "Item 2",
        "text": "WID"
       },
       {
        "value": "Item 3",
        "text": "PL"
       },
       {
        "value": "Item 4",
        "text": "MN"
       },
       {
        "value": "Item 5",
        "text": "TPD"
       },
       {
        "value": "Item 6",
        "text": "CTP"
       }
      ],
      "colCount": 2
     },
     {
      "type": "radiogroup",
      "name": "requestType",
      "title": "Request Type",
      "choices": [
       {
        "value": "medOnly",
        "text": "Medical Records Only"
       },
       {
        "value": "medAndRadio",
        "text": "Medical Records and Radiology"
       },
       {
        "value": "radioOnly",
        "text": "Radiology Only"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "range",
      "title": "Range",
      "choices": [
       {
        "value": "completeRecords",
        "text": "Complete Records"
       },
       {
        "value": "betweenDates",
        "text": "Between Specified Dates"
       },
       {
        "value": "updatedRecords",
        "text": "Updated Records"
       }
      ]
     },
     {
      "type": "multipletext",
      "name": "dateRange",
      "visibleIf": "{range} = 'betweenDates'",
      "title": "Date Range",
      "items": [
       {
        "name": "dateFrom",
        "inputType": "date",
        "title": "From"
       },
       {
        "name": "dateTo",
        "inputType": "date",
        "title": "To"
       }
      ]
     },
     {
      "type": "text",
      "name": "providerName",
      "title": "Provider Name",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "providerAddress",
      "title": "Provider Address"
     },
     {
      "type": "text",
      "name": "providerPhone",
      "title": "Provider Phone"
     },
     {
      "type": "text",
      "name": "providerFax",
      "title": "Provider Fax"
     },
     {
      "type": "text",
      "name": "providerEmail",
      "title": "Provider Email",
      "isRequired": true
     },
     {
      "type": "comment",
      "name": "Notes",
      "title": "Further Instructions / Notes"
     }
    ]
   }
  ],
  "showQuestionNumbers": "off"
 };
 
  const options = {
      showLogicTab: true,
      isAutoSave: true
  };
  const creator = new SurveyCreator.SurveyCreator(options);
  creator.JSON = surveyJSON;
  creator.render("surveyCreatorContainer");