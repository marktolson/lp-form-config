const surveyJSON = {
  "title": "Statement Request Form",
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
      "type": "boolean",
      "name": "inDispute",
      "title": "In Dispute?",
      "defaultValue": "false"
     },
     {
      "type": "checkbox",
      "name": "nonDisputeOptions",
      "visibleIf": "{inDispute} = false",
      "title": "Select Relevant Options",
      "choices": [
       {
        "value": "Item 1",
        "text": "Physical permanent impairment - WPI"
       },
       {
        "value": "Item 2",
        "text": "Physical permanent impairment – scarring"
       },
       {
        "value": "Item 3",
        "text": "Physical permanent impairment – activities of daily living (spinal injuries)"
       },
       {
        "value": "Item 4",
        "text": "Psychological permanent impairment (PIRS)"
       },
       {
        "value": "Item 5",
        "text": "Top up deterioration claim (prior s66 claim made before 19/6/12)"
       },
       {
        "value": "Item 6",
        "text": "Supplementary statement (insert notes below as to what further issues need to be addressed)"
       }
      ]
     },
     {
      "type": "checkbox",
      "name": "disputeOptions",
      "visibleIf": "{inDispute} = true",
      "title": "Select Relevant Options",
      "choices": [
       {
        "value": "Item 1",
        "text": "WPI claim- injury in dispute (section 4/9a raised)"
       },
       {
        "value": "Item 2",
        "text": "Consequential condition disputed"
       },
       {
        "value": "Item 3",
        "text": "Psychological permanent impairment (PIRS)"
       },
       {
        "value": "Item 4",
        "text": "Supplementary statement (insert notes below as to what further issues need to be addressed)"
       },
       {
        "value": "Item 5",
        "text": "Weekly payments dispute (complete details below)"
       },
       {
        "value": "Item 6",
        "text": "Medical treatment claim (complete details below)"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question1",
      "title": "Further Claim Details"
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