
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Select onValueChange={handleSelectChange} value={formData.service}>
          <SelectTrigger>
            <SelectValue placeholder="Which service are you interested in?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="data-strategy">Data Strategy & Architecture</SelectItem>
            <SelectItem value="advanced-analytics">Advanced Analytics</SelectItem>
            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
            <SelectItem value="data-engineering">Data Engineering</SelectItem>
            <SelectItem value="consulting">Data Consulting</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[120px]"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-brand-primary hover:bg-brand-accent"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
