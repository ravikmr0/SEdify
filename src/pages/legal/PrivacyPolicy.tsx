import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including when
              you create an account, make a purchase, or contact us for support.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to process your transactions, and to
              communicate with you.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your
              information with third-party service providers who assist us in
              operating our platform.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access or
              disclosure.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You may also object to or restrict certain processing
              of your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@sigmaedify.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
