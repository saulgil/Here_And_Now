// Canonical company legal identity used across all legal pages.
//
// The original WordPress content used three different company-name
// variants across its legal pages ("Here and Now", "HERE AND NOW IBIZA,
// SL", "Here and Now Ibiza SLU."). Per the migration rules, when two legal
// data points are incompatible we use the value that appears more
// consistently across the original documentation rather than inventing a
// new one. "HERE AND NOW IBIZA, SL" is used throughout the entire Aviso
// Legal (the document whose only purpose is to state the company's legal
// identity) and is the only variant that includes NIF AND a full address
// together; "SLU" appears only 3 times in the ~700-line Términos document
// (where "Here and Now" without any suffix is used everywhere else), and
// the Política de Privacidad uses no legal suffix at all. The address and
// postal code also follow the Aviso Legal version (03560, "local 58"),
// which matches the address already used elsewhere in the live app
// (components/layout/Footer.tsx, lib/schema/index.ts).
//
// See docs/legal/legal-review-pending.md for the documented discrepancy.
export const COMPANY_LEGAL_NAME = 'HERE AND NOW IBIZA, SL';
export const COMPANY_NIF = 'B44733210';
export const COMPANY_ADDRESS = 'Calle de la Figuera, 5, local 58, 03560, El Campello (Alicante)';
export const COMPANY_EMAIL = 'info@hereandnowibiza.com';
export const COMPANY_CLAIMS_EMAIL = 'administracion@hereandnowibiza.com';
export const SITE_DOMAIN = 'hereandnow.es';
