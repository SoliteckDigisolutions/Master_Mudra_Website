import Image from "next/image";
import logos  from "@/public/assets/h-logo.svg";
export default function TermsConditions() {
  return (
    <section id="terms" className="min-h-screen bg-gray-50 px-13 py-12 ">

      <div className="max-w-8xl px-8 mx-auto mt-10 bg-white shadow-xl rounded-2xl p-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={logos}
            alt="Master Mudra Logo"
            width={90}
            height={60}
            className="mb-4"
          />

          <h1 className="text-3xl font-bold text-gray-800">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 text-center mt-2 max-w-xl">
            Please read these terms carefully before using the Master Mudra platform.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            Please read the following Terms and Conditions carefully before
            registering, accessing, browsing, downloading, or using the Master Mudra
            application. By accessing or using the application or services,
            you agree to be bound by these Terms and Conditions, including any
            future updates or modifications.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            If at any time you do not agree with these terms, you should not
            access or use the application and must immediately discontinue
            the use of the services.
          </p>
        </section>

        {/* Agreement */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            User Agreement
          </h2>

          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions constitute a legal agreement between
            you (the user) and Master Mudra. By using our services, you confirm
            that you are at least 18 years of age and legally capable of
            entering into a binding agreement.
          </p>
        </section>

        {/* Service Ownership */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Platform Ownership
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Master Mudra is a digital platform providing payment and financial
            services. All rights, ownership, and operational control of
            the platform remain with Master Mudra and its authorized operators.
          </p>
        </section>

        {/* Modifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Changes to Terms
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Master Mudra reserves the right to modify, update, or remove portions
            of these Terms and Conditions at any time without prior notice.
            Users are encouraged to review this page periodically to stay
            informed about updates.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Acceptable Use
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Users must use Master Mudra services only for lawful purposes.
            Any fraudulent, illegal, or unauthorized use of the platform
            may result in suspension or termination of access.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-3">
            For questions regarding these Terms & Conditions, please contact us.
          </p>

          <div className="text-gray-700 space-y-1">
            <p>mastermudracoustomersupport@gmail.com
</p>
           
          </div>
        </section>

      </div>

    </section>
  );
}