import { SITE } from "@/data/site";
import { CalendarIcon, PhoneIcon } from "@/components/ui/Icons";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="予約と電話">
      <a href={`tel:${SITE.phone}`} data-cta="phone" data-cta-location="mobile_bar">
        <PhoneIcon />
        電話で相談
      </a>
      <a href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location="mobile_bar">
        <CalendarIcon />
        Web予約
      </a>
    </nav>
  );
}
