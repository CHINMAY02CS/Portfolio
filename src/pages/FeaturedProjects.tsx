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

export default function FeaturedProjects() {
  return (
    <>
      <div className="md:px-16 px-4 lg:px-[168px] lg:py-24 mx-auto">
        <p className="mt-2 text-5xl font-extrabold text-center">
          Featured Projects
        </p>
        <div className="flex flex-row items-center mt-20 mb-52 gap-14 md:grid-cols-2">
          <img src={ADMIN} alt="" className="rounded-xl h-76 w-136" />
          <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed">
            <img src={SHIPLOGO} alt="" className="w-40 h-6" />
            <p className="text-3xl font-medium">
              Admin Panel for Vendor & Franchise Revamp
            </p>
            <p className="text-lg">
              Rebuilt the legacy admin panel from PHP to React, improving
              performance, scalability, and developer efficiency. Implemented a
              modular component structure, API integration, and role-based
              access, enabling smoother management of vendors and franchise
              operations.
            </p>
            <p className="text-gray-700 w-fit">Coming Soon . . .</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-20 mb-52 gap-14 md:grid-cols-2">
          <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed">
            <img src={SHIPLOGO} alt="" className="w-40 h-6" />
            <p className="text-3xl font-medium">
              Redesign of ShipGlobal Portal for e-commerce exporters
            </p>
            <p className="text-lg">
              Led the frontend revamp of ShipGlobal’s vendor portal, enhancing
              usability and performance across key business modules that
              resulted in a 60% reduction in support tickets, demonstrating a
              significant improvement in vendor satisfaction and operational
              cost savings.
            </p>
            <Dialog>
              <DialogTrigger>
                <p className="font-medium underline cursor-pointer hover:text-xl w-fit">
                  View
                </p>
              </DialogTrigger>
              <DialogContent className="max-w-4xl overflow-auto max-h-[90dvh] leading-relaxed font-poppins">
                <DialogHeader>
                  <DialogTitle className="my-4 text-4xl">
                    Redesign of ShipGlobal Portal for e-commerce exporters
                  </DialogTitle>
                  <DialogDescription className="hidden" />
                </DialogHeader>
                <p>
                  This project involved designing and developing a comprehensive
                  Software as a Service (SaaS) vendor panel for ShipGlobal.in,
                  an international shipping platform. The objective was to
                  provide e-commerce merchants with a streamlined, all-in-one
                  system to manage global logistics, from calculating rates and
                  processing orders to handling financial transactions and
                  mandated export compliance.
                </p>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Rate Calculation & Service Selection
                  </p>
                  <img src={RATECALC} alt="" className="m-4 rounded-xl" />
                  <p className="mt-2">
                    This module allows users to determine shipping costs
                    instantly by inputting Destination Country, Pincode, Dead
                    Weight, and package Dimensions (L x W x H). The system
                    features intelligent weight handling by automatically
                    calculating Volumetric Weight and assigning the Billed
                    Weight as the higher of the Dead Weight or Volumetric
                    Weight, in line with industry standards. It then presents
                    multiple service options from different Courier Partners
                    with corresponding Shipment Rates and Estimated Delivery
                    Times for easy comparison.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Order Management (Orders & Multi Box)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={VIEWORDER} alt="" />
                    <img src={ADDMULTIBOX} alt="" />
                    <img src={ADDORDER} alt="" />
                    <img src={VIEWMULTIBOX} alt="" />
                    <img src={ORDERLIST} alt="" />
                  </div>
                  <p className="mt-2">
                    The platform provides a comprehensive view for tracking
                    individual shipments, whether it's a Single Order View or a
                    complex Multi Box Handling order. The views include granular
                    details such as Pickup Address, Delivery Address, full cost
                    Summary (Logistic Fee, GST), and detailed Billed Details
                    (Product Name, SKU, HSN). Orders are managed through a full
                    lifecycle of status tracking, including Drafts, Ready,
                    Packed, Manifested, Dispatched, Processed, and Cancelled.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Logistics Workflow (Manifest & Pickup)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={MANIFESTLIST} alt="" />
                    <img src={VIEWMANIFEST} alt="" />
                    <img src={PICKUPLIST} alt="" />
                    <img src={VIEWPICKUP} alt="" />
                  </div>
                  <p className="mt-2">
                    These tools are designed to streamline the handover of
                    packages to the carrier. The Manifest Creation function
                    enables merchants to group multiple orders (based on same or
                    other addresses) into a single Manifest Code for bulk
                    processing. Separately, the Pickup Requests module tracks
                    all scheduled pickups, linking the Pickup Code directly to
                    the orders and the associated Manifest Code, detailing the
                    pickup address, total weight, and status (Open/Picked).
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Financial Management (Wallet & Documents)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={WALLETTABS} alt="" />
                    <img src={RECHARGE} alt="" />
                    <img src={DOCS} alt="" />
                  </div>
                  <p className="mt-2">
                    The system ensures complete financial transparency and
                    control. The Wallet module displays the real-time balance
                    and facilitates instant Recharge while keeping a detailed
                    ledger of all financial movements in the Transaction History
                    (including wallet deductions and claims). The Documents
                    module provides easy access to all generated invoices (e.g.,
                    SGINV2528CRZC) with relevant accounting details.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Compliance and Settings
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={PROFILE} alt="" />
                    <img src={PICKUPADDRESS} alt="" />
                    <img src={TYPEKYC} alt="" />
                    <img src={KYCPAGE} alt="" />
                    <img src={KYCDETAILS} alt="" />
                  </div>
                  <p className="mt-2">
                    This is a critical feature for international trade, managing
                    both account and regulatory requirements. Profile Management
                    allows users to update basic contact details and manage
                    their pickup address. The KYC and Regulatory Compliance
                    section ensures necessary export adherence by facilitating
                    the submission and verification of Business KYC documents
                    (Aadhar, GST, PAN, Signature) and country-specific customs
                    documents like the IEC Number and ADCODE.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    E-commerce Integrations
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={INTEGRATIONS} alt="" />
                    <img src={ADDINTEGRATION} alt="" />
                  </div>
                  <p className="mt-2">
                    The platform ensures a seamless flow of data from
                    storefronts. The Channel List provides pre-built, one-click
                    connections with major e-commerce platforms like Shopify and
                    Walmart to enable orders to be automatically fetched,
                    eliminating manual entry and ensuring data accuracy.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <img src={VENDOR} alt="" className="h-76 w-136" />
        </div>
        <div className="flex flex-row items-center mt-52 mb-36 gap-14 md:grid-cols-2">
          <img src={FRANCHISE} alt="" className="h-76 w-136" />
          <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed">
            <img src={SHIPLOGO} alt="" className="w-40 h-6" />
            <p className="text-3xl font-medium">
              Franchise Model for Cross-Border Shipping
            </p>
            <p className="text-lg">
              This model targets local entrepreneurs (Franchise Partners) to
              establish and manage the crucial first-mile logistics for
              cross-border e-commerce, offering a tech-first, low-investment
              alternative to traditional logistics franchises. The platform
              equips partners with a dedicated system to manage regional
              pickups, ensure compliance adherence, and grow their local
              logistics business.
            </p>
            <Dialog>
              <DialogTrigger>
                <p className="font-medium underline cursor-pointer hover:text-xl w-fit">
                  View
                </p>
              </DialogTrigger>
              <DialogContent className="max-w-4xl overflow-auto max-h-[90dvh] leading-relaxed font-poppins">
                <DialogHeader>
                  <DialogTitle className="my-4 text-4xl">
                    Franchise Model for Cross-Border Shipping
                  </DialogTitle>
                  <DialogDescription className="hidden" />
                </DialogHeader>
                <p>
                  This project involved designing and developing a comprehensive
                  Software as a Service (SaaS) vendor panel for ShipGlobal.in,
                  an international shipping platform. The objective was to
                  provide e-commerce merchants with a streamlined, all-in-one
                  system to manage global logistics, from calculating rates and
                  processing orders to handling financial transactions and
                  mandated export compliance.
                </p>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Dashboard and Operational Overview
                  </p>
                  <img src={DASHBOARDFR} alt="" className="m-4 rounded-xl" />
                  <p className="mt-2">
                    The central Dashboard provides an immediate, high-level
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
                    orders.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Rate Calculation & Service Selection
                  </p>
                  <img src={RATECALCFR} alt="" className="m-4 rounded-xl" />
                  <p className="mt-2">
                    This module allows users to determine shipping costs
                    instantly by inputting Destination Country, Pincode, Dead
                    Weight, and package Dimensions (L x W x H). The system
                    features intelligent weight handling by automatically
                    calculating Volumetric Weight and assigning the Billed
                    Weight as the higher of the Dead Weight or Volumetric
                    Weight, in line with industry standards. It then presents
                    multiple service options from different Courier Partners
                    with corresponding Shipment Rates and Estimated Delivery
                    Times for easy comparison.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Order Management (Orders & Multi Box)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={ORDERLISTFR} alt="" />
                    <img src={MULTIBOXLISTFR} alt="" />
                    <img src={ADDORDERFR} alt="" />
                    <img src={ADDMULTIBOXFR} alt="" />
                    <img src={VIEWORDER} alt="" />
                  </div>
                  <p className="mt-2">
                    The platform offers detailed management for both standard
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
                    dimensions, and product details for each separate box.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Logistics Workflow (Manifest & Pickup)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={MANIFESTLISTFR} alt="" />
                    <img src={ADDMANIFESTFR} alt="" />
                    <img src={PICKUPLISTFR} alt="" />
                    <img src={ADDPICKUPFR} alt="" />
                    <img src={VIEWPICKUPFR} alt="" />
                  </div>
                  <p className="mt-2">
                    These tools are designed to streamline the handover of
                    packages to the carrier. The Manifest Creation function
                    enables merchants to group multiple orders (based on same or
                    other addresses) into a single Manifest Code for bulk
                    processing. Separately, the Pickup Requests module tracks
                    all scheduled pickups, linking the Pickup Code directly to
                    the orders and the associated Manifest Code, detailing the
                    pickup address, total weight, and status (Open/Picked).
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Financial Management (Wallet & Documents)
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={WALLETLISTFR} alt="" />
                    <img src={WALLETDETAILFR} alt="" />
                    <img src={RECHARGEFR} alt="" />
                  </div>
                  <p className="mt-2">
                    The system ensures complete financial transparency and
                    control. The Wallet module displays the real-time balance
                    and facilitates instant Recharge while keeping a detailed
                    ledger of all financial movements in the Transaction History
                    (including wallet deductions and claims). The Documents
                    module provides easy access to all generated invoices (e.g.,
                    SGINV2528CRZC) with relevant accounting details.
                  </p>
                </div>
                <div className="grid gap-4 p-4 border rounded-2xl">
                  <p className="my-2 text-xl font-medium text-black">
                    Compliance, Profile, and Customer Management
                  </p>
                  <div className="grid gap-2 m-4 rounded-xl">
                    <img src={PROFILEFR} alt="" />
                    <img src={KYCFR} alt="" />
                    <img src={CUSTOMERFR} alt="" />
                    <img src={ADDCUSTOMERFR} alt="" />
                  </div>
                  <p className="mt-2">
                    This section manages user profile, compliance, and recipient
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
                    are generated accurately.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
