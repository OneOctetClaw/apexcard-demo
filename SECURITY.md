# Security Policy — APEXCARD

## Supported Versions

| Version | Supported |
|---------|-----------|
| 2.x     | ✅ Active  |
| 1.x     | ❌ EOL     |

## Reporting a Vulnerability

If you discover a security vulnerability in APEXCARD, please report it responsibly:

**Email:** security@apexcard.io  
**Response time:** 48 hours for initial acknowledgment  
**Resolution SLA:** 7 days for critical, 30 days for others  

**Bug bounty program:** In progress — responsible disclosure rewarded.

Please **do not** open public GitHub issues for security vulnerabilities.

### What to include in your report
- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Suggested fix (optional)

## Security Measures

### Authentication & Access Control
- Supabase Auth with JWT tokens
- Row Level Security (RLS) on all database tables
- Admin access protected by email whitelist
- Rate limiting: max 5 login attempts per 15 minutes
- Session timeout: 30 minutes of inactivity (PCI DSS Req 8)
- Multi-factor authentication (2FA) available

### Data Protection
- All data encrypted at rest (AES-256 via Supabase)
- TLS 1.3 in transit
- PCI DSS compliant card data handling
  - Full PAN (card numbers) never stored in application database
  - Only masked card numbers (last 4 digits) displayed
  - CVV/CVC never stored
- No sensitive data in localStorage

### Application Security
- Content Security Policy (CSP) on all pages
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera/microphone/geolocation disabled
- Strict-Transport-Security (HSTS) on server
- XSS prevention via input sanitization
- No eval() usage
- CDN resources pinned to specific versions

### Compliance
- **GDPR/RGPD:** Full compliance — DPO appointed, privacy policy, data export (Art. 20), deletion requests (Art. 17)
- **PCI DSS:** Compliant card data handling
- **AMLD5/KYC-AML:** Transaction monitoring, high-value transaction alerts (>€10,000), KYC verification
- **ISO 27001:** Security controls implemented

### Audit & Monitoring
- Comprehensive audit logging for all sensitive actions
- Login attempt logging (success and failure)
- Transaction monitoring with automated alerts for suspicious activity
- Real-time admin notifications for high-value transactions

## Security Contacts

| Role | Email |
|------|-------|
| Security Team | security@apexcard.io |
| DPO (Data Protection Officer) | dpo@apexcard.io |
| Legal | legal@apexcard.io |
| Support | support@apexcard.io |

---

*Last updated: March 2026*
