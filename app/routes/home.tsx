import type { Route } from "./+types/home";
import {resumes} from '../../constants';
import ResumeCard from '~/components/ResumeCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section border-4">
            {resumes.map((resume: any) => (
              <ResumeCard key={resume.id} resume={resume}/>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
