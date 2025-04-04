
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  image: string;
  tags: string[];
}

const CaseStudyCard = ({ id, title, client, industry, summary, image, tags }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${client} - ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-brand-primary hover:bg-brand-accent">{industry}</Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{client}</div>
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-light">
          <Link to={`/case-studies/${id}`}>Read Case Study</Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
