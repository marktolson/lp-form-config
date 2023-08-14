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
      "name": "question4",
      "maxWidth": "140%",
      "title": "Stage",
      "choices": [
       {
        "value": "Item 1",
        "text": "New"
       },
       {
        "value": "Item 2",
        "text": "Review"
       },
       {
        "value": "Item 3",
        "text": "Meeting"
       },
       {
        "value": "Item 4",
        "text": "Registration"
       },
       {
        "value": "Item 5",
        "text": "Cancellation"
       }
      ],
      "colCount": 0
     },
     {
      "type": "boolean",
      "name": "question1",
      "title": "Mode",
      "defaultValue": "false",
      "labelTrue": "Conference",
      "labelFalse": "Enquiry"
     },
     {
      "type": "dropdown",
      "name": "question2",
      "title": "Lead Source",
      "choices": [
       {
        "value": "Item 1",
        "text": "Webform"
       },
       {
        "value": "Item 2",
        "text": "Live Chat"
       },
       {
        "value": "Item 3",
        "text": "Phone"
       },
       {
        "value": "Item 4",
        "text": "Other"
       }
      ]
     },
     {
      "type": "html",
      "name": "question3",
      "html": "<a href=\"#\">View Lead Details</>"
     },
     {
      "type": "boolean",
      "name": "callOnBehalf",
      "title": "Calling on behalf of another person?",
      "defaultValue": "false"
     },
     {
      "type": "text",
      "name": "callerName",
      "visibleIf": "{callOnBehalf} = true",
      "title": "Caller Name"
     },
     {
      "type": "multipletext",
      "name": "claimantDetails",
      "title": "Claimant Details",
      "items": [
       {
        "name": "firstName",
        "title": "First Name"
       },
       {
        "name": "lastName",
        "title": "Last Name"
       },
       {
        "name": "email",
        "title": "Email"
       },
       {
        "name": "phone",
        "title": "Phone"
       }
      ]
     }
    ],
    "title": "Details"
   },
   {
    "name": "page2",
    "title": "Initial Details"
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