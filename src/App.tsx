import { Header } from "@/components/projetor/Header";
import { OfferBanner } from "@/components/projetor/OfferBanner";
import { Gallery } from "@/components/projetor/Gallery";
import { PriceBlock } from "@/components/projetor/PriceBlock";
import { StoreCard } from "@/components/projetor/StoreCard";
import { ShippingWarranty } from "@/components/projetor/ShippingWarranty";
import { ShippingInfo } from "@/components/projetor/ShippingInfo";
import { Reviews } from "@/components/projetor/Reviews";
import { Specs } from "@/components/projetor/Specs";
import { Description } from "@/components/projetor/Description";
import { PurchaseNotifications } from "@/components/projetor/PurchaseNotifications";
import { BuyCTA } from "@/components/projetor/BuyCTA";
import { ExitIntentPopup } from "@/components/projetor/ExitIntentPopup";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-[480px] bg-background pb-24">
        <Header />
        <OfferBanner />
        <Gallery />
        <PriceBlock />
        <StoreCard />
        <ShippingWarranty />
        <ShippingInfo />
        <Reviews />
        <Specs />
        <Description />
        <PurchaseNotifications />
        <BuyCTA />
        <ExitIntentPopup />
      </div>
      <Toaster />
    </>
  );
}
