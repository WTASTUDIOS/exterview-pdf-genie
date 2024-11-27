import { Link as LinkIcon } from "lucide-react";

const InterviewDetailsAndResources = () => {
  return (
    <div className="p-6 border-t space-y-6">
      <h3 className="font-semibold text-lg mb-4">Interview Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Interview Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-base">Details</h4>
          <div className="grid gap-4">
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
        <div className="space-y-4">
          <h4 className="font-medium text-base">Resources</h4>
          <div className="grid gap-4">
            {[
              { label: "Recording", href: "#" },
              { label: "Transcript", href: "#" },
              { label: "Job Description", href: "#" },
              { label: "Resume", href: "#" },
            ].map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="flex items-center space-x-2 text-accent-foreground hover:underline"
              >
                <LinkIcon className="w-4 h-4" />
                <span>{resource.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetailsAndResources;