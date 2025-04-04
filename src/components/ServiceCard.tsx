
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-brand-primary h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-start">
          <div className="bg-brand-light p-3 rounded-md w-12 h-12 flex items-center justify-center">
            <Icon className="h-6 w-6 text-brand-primary" />
          </div>
        </div>
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
