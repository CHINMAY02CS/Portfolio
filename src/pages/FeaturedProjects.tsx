import VENDOR from "@/assets/Vendor.png";
import FRANCHISE from "@/assets/Franchise.png";
import SHIPLOGO from "@/assets/ShipGlobalLogo.png";
import RATECALC from "@/assets/vendor/RateCalc.png";
import ADDMULTIBOX from "@/assets/vendor/AddMultibox.png";
import ADDORDER from "@/assets/vendor/AddOrder.png";
import ORDERLIST from "@/assets/vendor/Order Listing.png";
import VIEWORDER from "@/assets/vendor/ViewOrder.png";
import VIEWMULTIBOX from "@/assets/vendor/ViewMultibox.png";
import MANIFESTLIST from "@/assets/vendor/MANIFESTLIST.png";
import PICKUPLIST from "@/assets/vendor/PICKUPLIST.png";
import VIEWMANIFEST from "@/assets/vendor/VIEWMANIFEST.png";
import VIEWPICKUP from "@/assets/vendor/VIEWPICKUP.png";
import WALLETTABS from "@/assets/vendor/WALLETTABS.png";
import RECHARGE from "@/assets/vendor/RECHARGE.png";
import DOCS from "@/assets/vendor/DOCS.png";

import TYPEKYC from "@/assets/vendor/TYPEKYC.png";
import KYCPAGE from "@/assets/vendor/KYCPAGE.png";
import PICKUPADDRESS from "@/assets/vendor/PICKUP ADDRESS.png";
import KYCDETAILS from "@/assets/vendor/KYCDETAILS.png";
import PROFILE from "@/assets/vendor/PROFILE.png";
import INTEGRATIONS from "@/assets/vendor/INTEGRATIONS.png";
import ADDINTEGRATION from "@/assets/vendor/ADDINTEGRATION.png";

import ADDCUSTOMERFR from "@/assets/franchise/ADDCUSTOMER.png";
import ADDMANIFESTFR from "@/assets/franchise/ADDMANIFEST.png";
import ADDMULTIBOXFR from "@/assets/franchise/ADDMULTIBOX.png";
import ADDORDERFR from "@/assets/franchise/ADDORDER.png";
import ADDPICKUPFR from "@/assets/franchise/ADDPICKUP.png";
import CUSTOMERFR from "@/assets/franchise/CUSTOMER.png";
import DASHBOARDFR from "@/assets/franchise/DASHBOARD.png";
import KYCFR from "@/assets/franchise/KYC.png";
import MANIFESTLISTFR from "@/assets/franchise/MANIFESTLIST.png";
import MULTIBOXLISTFR from "@/assets/franchise/MULTIBOXLIST.png";
import ORDERLISTFR from "@/assets/franchise/ORDERLIST.png";
import PICKUPLISTFR from "@/assets/franchise/PICKUPLIST.png";
import PROFILEFR from "@/assets/franchise/PROFILE.png";
import RATECALCFR from "@/assets/franchise/RATECALC.png";
import RECHARGEFR from "@/assets/franchise/RECHARGE.png";
import VIEWPICKUPFR from "@/assets/franchise/VIEWPICKUP.png";
import WALLETDETAILFR from "@/assets/franchise/WALLETDETAIL.png";
import WALLETLISTFR from "@/assets/franchise/WALLETLIST.png";
import ADMIN from "@/assets/admin/ADMIN.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  return (
    <>
      <div className="md:px-16 px-4 lg:px-[168px] lg:py-24 py-8 md:py-16 mx-auto">
        <p className="mt-2 text-3xl font-extrabold text-center md:text-4xl lg:text-5xl">
          Featured Projects
        </p>

        <ProjectDescription
          projectImg={ADMIN}
          heading="Admin Panel for Vendor & Franchise Revamp"
          description="Rebuilt the legacy admin panel from PHP to React, improving
              performance, scalability, and developer efficiency. Implemented a
              modular component structure, API integration, and role-based
              access, enabling smoother management of vendors and franchise
              operations."
        />
        <ProjectDescription
          reverse
          projectImg={VENDOR}
          heading="Redesign of ShipGlobal Portal for e-commerce exporters"
          view
          description="Led the frontend revamp of ShipGlobal’s vendor portal, enhancing
              usability and performance across key business modules that
              resulted in a 60% reduction in support tickets, demonstrating a
              significant improvement in vendor satisfaction and operational
              cost savings."
          innerDescription=" This project involved designing and developing a comprehensive
                Software as a Service (SaaS) vendor panel for ShipGlobal.in, an
                international shipping platform. The objective was to provide
                e-commerce merchants with a streamlined, all-in-one system to
                manage global logistics, from calculating rates and processing
                orders to handling financial transactions and mandated export
                compliance."
          innerContent={
            <>
              <ImageCard
                heading="Rate Calculation & Service Selection"
                images={[RATECALC]}
                description="This module allows users to determine shipping costs instantly
                  by inputting Destination Country, Pincode, Dead Weight, and
                  package Dimensions (L x W x H). The system features
                  intelligent weight handling by automatically calculating
                  Volumetric Weight and assigning the Billed Weight as the
                  higher of the Dead Weight or Volumetric Weight, in line with
                  industry standards. It then presents multiple service options
                  from different Courier Partners with corresponding Shipment
                  Rates and Estimated Delivery Times for easy comparison."
              />
              <ImageCard
                heading="Order Management (Orders & Multi Box)"
                images={[
                  VIEWORDER,
                  ADDMULTIBOX,
                  ADDORDER,
                  VIEWMULTIBOX,
                  ORDERLIST,
                ]}
                description="The platform provides a comprehensive view for tracking
                  individual shipments, whether it's a Single Order View or a
                  complex Multi Box Handling order. The views include granular
                  details such as Pickup Address, Delivery Address, full cost
                  Summary (Logistic Fee, GST), and detailed Billed Details
                  (Product Name, SKU, HSN). Orders are managed through a full
                  lifecycle of status tracking, including Drafts, Ready, Packed,
                  Manifested, Dispatched, Processed, and Cancelled."
              />
              <ImageCard
                heading="Logistics Workflow (Manifest & Pickup)"
                images={[MANIFESTLIST, VIEWMANIFEST, PICKUPLIST, VIEWPICKUP]}
                description="These tools are designed to streamline the handover of
                  packages to the carrier. The Manifest Creation function
                  enables merchants to group multiple orders (based on same or
                  other addresses) into a single Manifest Code for bulk
                  processing. Separately, the Pickup Requests module tracks all
                  scheduled pickups, linking the Pickup Code directly to the
                  orders and the associated Manifest Code, detailing the pickup
                  address, total weight, and status (Open/Picked)."
              />
              <ImageCard
                heading="Financial Management (Wallet & Documents)"
                images={[WALLETTABS, RECHARGE, PICKUPLIST, DOCS]}
                description="The system ensures complete financial transparency and
                  control. The Wallet module displays the real-time balance and
                  facilitates instant Recharge while keeping a detailed ledger
                  of all financial movements in the Transaction History
                  (including wallet deductions and claims). The Documents module
                  provides easy access to all generated invoices (e.g.,
                  SGINV2528CRZC) with relevant accounting details."
              />
              <ImageCard
                heading="Compliance and Settings"
                images={[PROFILE, PICKUPADDRESS, TYPEKYC, KYCPAGE, KYCDETAILS]}
                description="This is a critical feature for international trade, managing
                  both account and regulatory requirements. Profile Management
                  allows users to update basic contact details and manage their
                  pickup address. The KYC and Regulatory Compliance section
                  ensures necessary export adherence by facilitating the
                  submission and verification of Business KYC documents (Aadhar,
                  GST, PAN, Signature) and country-specific customs documents
                  like the IEC Number and ADCODE."
              />
              <ImageCard
                heading="E-commerce Integrations"
                images={[INTEGRATIONS, ADDINTEGRATION]}
                description="The platform ensures a seamless flow of data from storefronts.
                  The Channel List provides pre-built, one-click connections
                  with major e-commerce platforms like Shopify and Walmart to
                  enable orders to be automatically fetched, eliminating manual
                  entry and ensuring data accuracy."
              />
            </>
          }
        />

        <ProjectDescription
          projectImg={FRANCHISE}
          heading="Franchise Model for Cross-Border Shipping"
          view
          description="This model targets local entrepreneurs (Franchise Partners) to
              establish and manage the crucial first-mile logistics for
              cross-border e-commerce, offering a tech-first, low-investment
              alternative to traditional logistics franchises. The platform
              equips partners with a dedicated system to manage regional
              pickups, ensure compliance adherence, and grow their local
              logistics business."
          innerDescription="This project involved designing and developing a comprehensive
                  Software as a Service (SaaS) vendor panel for ShipGlobal.in,
                  an international shipping platform. The objective was to
                  provide e-commerce merchants with a streamlined, all-in-one
                  system to manage global logistics, from calculating rates and
                  processing orders to handling financial transactions and
                  mandated export compliance."
          innerContent={
            <>
              <ImageCard
                heading="Dashboard and Operational Overview"
                images={[DASHBOARDFR]}
                description="The central Dashboard provides an immediate, high-level
                    snapshot of all operational activities, designed to help
                    merchants prioritize tasks. Key metrics include the status
                    and count of all orders: All Orders, Drafted Orders, Pending
                    for Label, Packed Orders, and Dispatched Orders. An Action
                    Required section prominently alerts the user to critical
                    pending compliance tasks, specifically KYC Approval Pending
                    and CSB-V Approval Pending, ensuring regulatory adherence is
                    not overlooked. Additionally, the Wallet Activity panel
                    tracks recent transactions and prompts users to Recharge
                    Wallet if the balance is low, a necessary step to create new
                    orders."
              />
              <ImageCard
                heading="Rate Calculation & Service Selection"
                images={[RATECALCFR]}
                description="This module allows users to determine shipping costs
                    instantly by inputting Destination Country, Pincode, Dead
                    Weight, and package Dimensions (L x W x H). The system
                    features intelligent weight handling by automatically
                    calculating Volumetric Weight and assigning the Billed
                    Weight as the higher of the Dead Weight or Volumetric
                    Weight, in line with industry standards. It then presents
                    multiple service options from different Courier Partners
                    with corresponding Shipment Rates and Estimated Delivery
                    Times for easy comparison."
              />
              <ImageCard
                heading="Order Management (Orders & Multi Box)"
                images={[
                  ORDERLISTFR,
                  MULTIBOXLISTFR,
                  ADDORDERFR,
                  ADDMULTIBOXFR,
                  VIEWORDER,
                ]}
                description="The platform offers detailed management for both standard
                    and complex shipments. The main Orders list provides a
                    filterable view of all shipments, showing Order ID, Customer
                    Details, Order Date, Package Details, and Status. For
                    creating a new shipment, the Create CSB-IV Order workflow is
                    sequential, guiding the user through four steps: Consignor
                    Details (by searching for an existing customer), Consignee
                    Details, Shipment Information, and Select Shipping Partner.
                    For complex shipments, the Multi Box module is available to
                    manage and list orders comprising multiple packages under a
                    single Master Order ID, where users can define the weight,
                    dimensions, and product details for each separate box."
              />
              <ImageCard
                heading="Logistics Workflow (Manifest & Pickup)"
                images={[
                  MANIFESTLISTFR,
                  ADDMANIFESTFR,
                  PICKUPLISTFR,
                  ADDPICKUPFR,
                  VIEWPICKUPFR,
                ]}
                description="These tools are designed to streamline the handover of
                    packages to the carrier. The Manifest Creation function
                    enables merchants to group multiple orders (based on same or
                    other addresses) into a single Manifest Code for bulk
                    processing. Separately, the Pickup Requests module tracks
                    all scheduled pickups, linking the Pickup Code directly to
                    the orders and the associated Manifest Code, detailing the
                    pickup address, total weight, and status (Open/Picked)."
              />
              <ImageCard
                heading="Financial Management (Wallet & Documents)"
                images={[WALLETLISTFR, WALLETDETAILFR, RECHARGEFR]}
                description="The system ensures complete financial transparency and
                    control. The Wallet module displays the real-time balance
                    and facilitates instant Recharge while keeping a detailed
                    ledger of all financial movements in the Transaction History
                    (including wallet deductions and claims). The Documents
                    module provides easy access to all generated invoices (e.g.,
                    SGINV2528CRZC) with relevant accounting details."
              />
              <ImageCard
                heading=" Compliance, Profile, and Customer Management"
                images={[PROFILEFR, KYCFR, CUSTOMERFR, ADDCUSTOMERFR]}
                description="This section manages user profile, compliance, and recipient
                    data. The Profile area displays personal and business
                    information, including Billing Address and Pickup Address.
                    The KYC (Know Your Customer) section is critical for
                    compliance, facilitating the submission and verification of
                    key documents such as Aadhar, GST Number, Company PAN
                    Number, and a digital Signature with Stamp for achieving an
                    Approved status. Finally, the Customers module allows for
                    the management of the merchant's recipient database,
                    including the ability to Add New Customer with comprehensive
                    contact and address details, ensuring all shipping labels
                    are generated accurately."
              />
            </>
          }
        />
      </div>
    </>
  );
}

interface ProjectDescriptionProps {
  heading: string;
  description: string;
  view?: boolean;
  innerDescription?: string;
  innerContent?: React.ReactNode;
  projectImg: string;
  reverse?: boolean;
}

function ProjectDescription({
  heading,
  description,
  view = false,
  innerDescription,
  innerContent,
  projectImg,
  reverse = false,
}: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col items-center mt-14 lg:mt-20 mb-36 lg:mb-52 gap-14 lg:grid lg:grid-cols-2">
      <img
        src={projectImg}
        alt=""
        className={cn("h-76 w-136 hidden", reverse && "lg:flex")}
      />
      <div
        className={cn(
          "flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed"
        )}
      >
        <img src={SHIPLOGO} alt="" className="w-40 h-6" />
        <p className="text-xl font-medium md:text-2xl lg:text-3xl">{heading}</p>
        <p className="text-base md:text-lg">{description}</p>
        {view ? (
          <Dialog>
            <DialogTrigger className="w-fit">
              <p className="font-medium underline cursor-pointer hover:text-xl w-fit">
                View
              </p>
            </DialogTrigger>
            <DialogContent className="max-w-4xl overflow-auto max-h-[90dvh] leading-relaxed font-poppins">
              <DialogHeader>
                <DialogTitle className="my-4 text-2xl md:text:3xl lg:text-4xl">
                  {heading}
                </DialogTitle>
                <DialogDescription className="hidden" />
              </DialogHeader>
              <p>{innerDescription}</p>
              {innerContent}
            </DialogContent>
          </Dialog>
        ) : (
          <p className="text-gray-700 w-fit">Coming Soon . . .</p>
        )}
      </div>
      <img
        src={projectImg}
        alt=""
        className={cn("h-76 w-136", reverse && "lg:hidden")}
      />
    </div>
  );
}

function ImageCard({
  heading,
  images,
  description,
}: {
  heading: string;
  images: string[];
  description: string;
}) {
  return (
    <div className="grid gap-4 p-4 border rounded-2xl">
      <p className="my-2 text-xl font-medium text-black">{heading}</p>
      <div className="grid gap-2 m-4 rounded-xl">
        {images.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
}
