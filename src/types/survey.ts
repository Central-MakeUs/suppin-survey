export type SurveyDataType = {
  eventId: number;
  eventTitle: string;
  eventDescription: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
  personalInfoOptions: [
    {
      optionName: string;
    },
  ];
  questions: [
    {
      questionType: 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
      questionText: string;
      options: string[];
    },
  ];
};

export type SurveyType = {
  code: string;
  message: string;
  data: SurveyDataType;
} | null;
