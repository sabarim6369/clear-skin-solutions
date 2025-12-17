import { Link } from "react-router-dom";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover:bg-muted transition-colors"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <Link
          to="/book-appointment"
          className="flex flex-col items-center justify-center py-3 gap-1 gradient-hero text-primary-foreground"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-medium">Book</span>
        </Link>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover:bg-muted transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
