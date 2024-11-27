import { Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SkillRatings from "@/components/SkillRatings";
import ReportHeader from "@/components/ReportHeader";
import InterviewDetailsAndResources from "@/components/InterviewDetailsAndResources";

const Index = () => {
  const handleDownload = () => {
    toast.success("Report downloaded successfully!");
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg">
        <ReportHeader />
        
        {/* Candidate Section */}
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary rounded-3xl shadow-lg transform rotate-3"></div>
              <img
                src="/placeholder.svg"
                alt="John Doe"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl transform -rotate-3 transition-transform hover:rotate-0 duration-300"
              />
            </div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Frontend Developer</p>
          </div>
          <div className="md:col-span-2">
            <Card className="p-6 space-y-6 bg-gradient-to-r from-muted to-background">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Recommendation</span>
                <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white px-6 py-1 text-lg">
                  YES
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Overall Score</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-xl font-bold">85%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Performance Rating</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 transition-all duration-300 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400 hover:scale-110"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <InterviewDetailsAndResources />

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
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/f2b45404-d2e2-4e5e-b454-9d870b7d810a.png" 
                alt="Exterview Logo" 
                className="h-8"
              />
              <p className="text-sm text-muted-foreground">
                Generated by Exterview Platform
              </p>
            </div>
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