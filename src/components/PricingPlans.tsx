import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free Trial",
    price: 0,
    description: "Perfect for getting started",
    features: [
      { text: "Access to 5 free courses", included: true },
      { text: "Basic course materials", included: true },
      { text: "Community forum access", included: true },
      { text: "Course completion certificates", included: false },
      { text: "Offline downloads", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: 29,
    description: "Best for individual learners",
    popular: true,
    features: [
      { text: "Unlimited course access", included: true },
      { text: "Premium course materials", included: true },
      { text: "Community forum access", included: true },
      { text: "Course completion certificates", included: true },
      { text: "Offline downloads", included: true },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For teams and organizations",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Custom learning paths", included: true },
      { text: "Team analytics", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start with our free trial. No credit card required. Upgrade anytime
            to unlock more features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check
                        className={`h-5 w-5 ${feature.included ? "text-primary" : "text-muted-foreground/40"}`}
                      />
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground/40"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === 0 ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            All plans include:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary">30-day money-back guarantee</Badge>
            <Badge variant="secondary">Cancel anytime</Badge>
            <Badge variant="secondary">24/7 Support</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
