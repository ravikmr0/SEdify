import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Sigma Edify's services, you agree to be
              bound by these Terms of Service and all applicable laws and
              regulations.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>

            <h2>3. Course Content</h2>
            <p>
              All course content is protected by copyright and other
              intellectual property rights. You may not reproduce, distribute,
              or create derivative works without our express permission.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              You agree to use our services for lawful purposes only and not to
              engage in any behavior that may disrupt or interfere with the
              platform's functionality.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Course fees are non-refundable unless otherwise specified. We
              reserve the right to modify pricing at any time.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our
              services at our sole discretion, without prior notice or
              liability.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of our services constitutes acceptance of the modified terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at
              legal@sigmaedify.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
