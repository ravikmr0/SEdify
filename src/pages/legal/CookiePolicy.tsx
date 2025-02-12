import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or
              mobile device when you visit our website. They help us provide you
              with a better experience by remembering your preferences and
              analyzing how you use our site.
            </p>

            <h2>Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network
              management, and accessibility.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with
              our website, helping us improve our services and user experience.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization,
              such as remembering your preferences and settings.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their
              settings preferences. However, limiting cookies may impact your
              experience of our website.
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at privacy@sigmaedify.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
