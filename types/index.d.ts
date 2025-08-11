interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}

interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback
}

interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: Tips[]
  };
  toneAndStyle: {
    score: number;
    tips: Tips[];
  };
  content: {
    score: number;
    tips: Tips[];
  };
  structure:  {
    score: number;
    tips: Tips[];
  };
  skills: {
    score: number;
    tips: Tips[];
  }
}

interface Tips {
  type: "good" |  "improve";
  tip: string;
  explanation?: string;
}