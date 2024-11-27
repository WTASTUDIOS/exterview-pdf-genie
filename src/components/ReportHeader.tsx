import { Link } from "lucide-react";

const ReportHeader = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b">
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/c7cca098-f1c6-4f3d-9eef-e52c2a0fc01a.png" alt="WTA Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold text-primary">WE THINK APP</h1>
        </div>
      </div>
      <div className="text-right">
        <h2 className="font-semibold">Frontend Engineer</h2>
        <p className="text-sm text-muted-foreground">JOB-123</p>
      </div>
    </div>
  );
};

export default ReportHeader;