const surveyJSON = {
  "title": "IME Request Form",
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
      "type": "boolean",
      "name": "question11",
      "visibleIf": "{matterType} = 'Item 1'",
      "title": "Is this an exempt worker?",
      "isRequired": true
     },
     {
      "type": "dropdown",
      "name": "FirstName",
      "title": "Vaccination Status",
      "defaultValue": "Item 1",
      "choices": [
       {
        "value": "Item 1",
        "text": "Fully Vaccinated"
       },
       {
        "value": "Item 2",
        "text": "Partially Vaccinated"
       },
       {
        "value": "Item 3",
        "text": "Not Vaccinated"
       }
      ]
     },
     {
      "type": "text",
      "name": "LastName",
      "title": "IMS Code"
     },
     {
      "type": "text",
      "name": "question1",
      "title": "IRO Lawyer"
     },
     {
      "type": "text",
      "name": "question2",
      "title": "IRO Lawyer Email Address"
     },
     {
      "type": "text",
      "name": "question3",
      "title": "ILARS Reference"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "Requesting Lawyer (ALSP)"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "Doctor"
     },
     {
      "type": "text",
      "name": "question6",
      "title": "Specialty"
     },
     {
      "type": "text",
      "name": "question7",
      "title": "Provider"
     },
     {
      "type": "text",
      "name": "question8",
      "title": "Appointment Month"
     },
     {
      "type": "text",
      "name": "question9",
      "title": "Appointment Location / Region"
     },
     {
      "type": "boolean",
      "name": "question10",
      "title": "Interpreter Required"
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