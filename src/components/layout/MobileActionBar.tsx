import { SITE } from "@/data/site";
import { CalendarIcon, PhoneIcon } from "@/components/ui/Icons";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="予約と電話">
      <a href={`tel:${SITE.phone}`}>
        <PhoneIcon />
        電話で相談
      </a>
      <a href={SITE.reserveUrl} target="_blank" rel="noreferrer">
        <CalendarIcon />
        Web予約
      </a>
    </div>
  );
}
