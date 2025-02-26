
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li>Account information (email, name, billing details)</li>
                <li>Usage data (API calls, prompts, generated content)</li>
                <li>Device information (IP address, browser type)</li>
                <li>Payment information (processed securely via Stripe)</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul>
                <li>Providing and improving our services</li>
                <li>Training and fine-tuning our AI models</li>
                <li>Personalizing your experience</li>
                <li>Marketing and advertising purposes</li>
                <li>Analytics and service optimization</li>
              </ul>
            </section>

            <section>
              <h2>3. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers (e.g., Stripe for payment processing)</li>
                <li>Analytics partners</li>
                <li>Marketing partners</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2>4. AI Training and Data Usage</h2>
              <p>Content generated through our platform may be used to:</p>
              <ul>
                <li>Improve our AI models</li>
                <li>Analyze usage patterns</li>
                <li>Develop new features</li>
                <li>Create derivative works</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data, subject to legal requirements.</p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2>7. Security</h2>
              <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2>8. Updates to Privacy Policy</h2>
              <p>We may update this policy periodically. We will notify you of significant changes via email or service notifications.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
