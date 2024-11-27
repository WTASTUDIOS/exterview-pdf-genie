import { Star, Link as LinkIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SkillRatings from "@/components/SkillRatings";

const Index = () => {
  const handleDownload = () => {
    toast.success("Report downloaded successfully!");
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="Company Logo" className="h-12" />
            <h1 className="text-2xl font-bold text-primary">Interview Report</h1>
          </div>
          <div className="text-right">
            <h2 className="font-semibold">Frontend Engineer</h2>
            <p className="text-sm text-muted-foreground">JOB-123</p>
          </div>
        </div>

        {/* Candidate Section */}
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Candidate"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Frontend Developer</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Recommendation:</span>
              <span className="text-green-600 font-bold">YES</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Overall Score:</span>
              <span className="font-bold">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Performance Rating:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interview Details */}
        <div className="p-6 border-t space-y-4">
          <h3 className="font-semibold text-lg mb-4">Interview Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Interviewer</p>
              <p>Sarah Smith - Lead Frontend Engineer</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recruiter</p>
              <p>Mike Johnson</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p>45-60 minutes</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p>March 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="p-6 border-t space-y-4">
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Recording", href: "#" },
              { label: "Transcript", href: "#" },
              { label: "Job Description", href: "#" },
              { label: "Resume", href: "#" },
            ].map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="flex items-center space-x-2 text-accent hover:underline"
              >
                <LinkIcon className="w-4 h-4" />
                <span>{resource.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Questions & Feedback */}
        <div className="p-6 border-t space-y-6">
          <h3 className="font-semibold text-lg">Questions & Feedback</h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="fullstack">
              <AccordionTrigger className="text-lg font-semibold">
                Full Stack Questions
              </AccordionTrigger>
              <AccordionContent className="space-y-6">
                {[
                  {
                    question: "What is the difference between REST and GraphQL?",
                    sampleAnswer: "REST is an architectural style for designing networked applications, while GraphQL is a query language for APIs that allows clients to request specific data.",
                    actualAnswer: "Pending evaluation",
                    score: "1/1"
                  },
                  {
                    question: "Explain the concept of closures in JavaScript.",
                    sampleAnswer: "Closures are functions that have access to the outer (enclosing) function's variables even after the outer function has completed.",
                    actualAnswer: "Pending evaluation",
                    score: "1/1"
                  },
                  // Add more questions here
                ].map((item, index) => (
                  <Card key={index} className="p-4 space-y-2">
                    <h4 className="font-semibold">{item.question}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Sample Answer:</span> {item.sampleAnswer}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Actual Answer:</span> {item.actualAnswer}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm">Score:</span>
                        <span className="font-semibold">{item.score}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills">
              <AccordionTrigger className="text-lg font-semibold">
                Skill Ratings
              </AccordionTrigger>
              <AccordionContent>
                <SkillRatings />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="overall">
              <AccordionTrigger className="text-lg font-semibold">
                Overall Feedback
              </AccordionTrigger>
              <AccordionContent className="space-y-6">
                {[
                  {
                    question: "How would you describe the company culture at WE THINK APP?",
                    sampleAnswer: "At WE THINK APP, we foster a culture of innovation, collaboration, and ownership. We encourage open communication, where every team member feels heard and empowered to contribute to the company's growth.",
                    actualAnswer: "Pending evaluation",
                    score: "1/1"
                  },
                  {
                    question: "How do you promote diversity and inclusion in your workplace?",
                    sampleAnswer: "We actively promote diversity by hiring individuals from different backgrounds and regions, valuing diverse perspectives in decision-making.",
                    actualAnswer: "Pending evaluation",
                    score: "1/1"
                  },
                  // Add more feedback questions here
                ].map((item, index) => (
                  <Card key={index} className="p-4 space-y-2">
                    <h4 className="font-semibold">{item.question}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Sample Answer:</span> {item.sampleAnswer}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Actual Answer:</span> {item.actualAnswer}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm">Score:</span>
                        <span className="font-semibold">{item.score}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-muted rounded-b-lg">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Generated by Exterview Platform
            </p>
            <Button onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
