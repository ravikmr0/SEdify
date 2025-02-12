import React from "react";
import { motion } from "framer-motion";

const GDPR = () => {
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
            <h1 className="text-4xl font-bold mb-6">GDPR Compliance</h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Your Rights Under GDPR</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have
              several rights regarding your personal data:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>

            <h2>Data Processing</h2>
            <p>
              We process personal data only when we have a legal basis to do so,
              including:
            </p>
            <ul>
              <li>When you have given consent</li>
              <li>To fulfill contractual obligations</li>
              <li>To comply with legal obligations</li>
              <li>To protect vital interests</li>
              <li>For legitimate business interests</li>
            </ul>

            <h2>International Data Transfers</h2>
            <p>
              When we transfer personal data outside the European Economic Area
              (EEA), we ensure appropriate safeguards are in place to protect
              your data.
            </p>

            <h2>Data Protection Officer</h2>
            <p>
              Our Data Protection Officer can be contacted at dpo@sigmaedify.com
              for any GDPR-related inquiries.
            </p>

            <h2>Exercising Your Rights</h2>
            <p>
              To exercise any of your rights under GDPR, please contact us at
              privacy@sigmaedify.com. We will respond to your request within 30
              days.
            </p>

            <h2>Complaints</h2>
            <p>
              You have the right to lodge a complaint with your local data
              protection authority if you believe we have not handled your
              personal data in accordance with GDPR.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPR;
