
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatisticCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

const StatisticCard = ({ icon: Icon, value, label, description }: StatisticCardProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="bg-brand-light p-3 rounded-full">
            <Icon className="h-6 w-6 text-brand-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-secondary">{value}</div>
            <div className="text-sm font-medium text-gray-500">{label}</div>
          </div>
        </div>
        {description && (
          <p className="mt-4 text-sm text-gray-600">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
