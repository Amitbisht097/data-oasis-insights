
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, position, company, image }: TestimonialCardProps) => {
  return (
    <Card className="bg-white shadow-md border-0">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg className="h-8 w-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img
                src={image}
                alt={author}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-brand-secondary">{author}</p>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
