import Image from "next/image";
import logos  from "@/public/assets/h-logo.svg";

export default function page() {
  return (
    <section id="privacy" className="min-h-screen bg-gray-50 px-13 py-12 ">
      
      <div className="max-w-8xl mt-10 mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col justify-center align-middle items-center">
           <Image
            src={logos}
            alt="Logo"
            width={90}
            height={60}
            className="mb-4"
          />
           <h1 className="text-3xl font-bold text-gray-800">
           Master Mudra Privacy Policy
          </h1>

          <p className="text-gray-500 text-center mt-2 max-w-xl">
            Please read these Privacy Policy carefully before using the Master Mudra platform.
          </p>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
        
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          Transparency and trust - that’s what powers Master Mudra’s commitment to your data security.
        </p>

        {/* Your Privacy */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Privacy, Our Commitment
          </h2>
          <p className="text-gray-600">
            At Master Mudra, we value the trust you place in us. Protecting your personal
            information is a top priority. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our platform.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Personal details such as name, phone number, and email address.
            </li>
            <li>
              Transaction information related to payments, recharges, and other services.
            </li>
            <li>
              Technical details like device type, browser information, and IP address
              to improve service and security.
            </li>
          </ul>
        </section>

        {/* Data Usage */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-600">
            Your information helps us process transactions, improve platform
            features, communicate important updates, and maintain security.
            Master Mudra does not sell or rent personal information to third parties.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Cookies
          </h2>
          <p className="text-gray-600">
            Cookies help us personalize your experience and analyze platform
            performance. They do not store sensitive personal information.
          </p>
        </section>

        {/* Third Party */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our platform may contain links to external websites. Master Mudra is not
            responsible for the privacy practices of those websites. Please review
            their privacy policies before sharing personal information.
          </p>
        </section>

        {/* Security */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Security
          </h2>
          <p className="text-gray-600">
            We use secure infrastructure including encryption, firewalls, and
            authentication mechanisms to protect your data from unauthorized access.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us.
          </p>

          <div className="mt-3 text-gray-700">
            <p>arpaycoustomersupport@gmail.com
</p>
           
          </div>
        </section>

      </div>

    </section>
  );
}