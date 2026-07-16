<!-- DRAFT — recommend a counsel skim before publishing. Not legal advice.
     Served in production at https://usefulapi.io/privacy. -->

# Privacy Policy

**Effective date:** 16 July 2026
**Operator:** Alexandr Maximov, IČO 88788814, Jeseniova 1196, 130 00 Prague, Czech Republic
("usefulapi", "we", "us"). Contact: **privacy@usefulapi.io**.

usefulapi provides hosted [Model Context Protocol](https://modelcontextprotocol.io) (MCP) servers
that let AI clients (e.g. Claude, Cursor) access third-party services (such as Linear) **on your
behalf**. This policy explains what we collect, why, and your choices. It covers `usefulapi.io` and
the `*.usefulapi.io` MCP endpoints. We are the data controller for the personal data described here.

## 1. Data we process

**Account & identity.** When you connect a server, you authenticate to the underlying third-party
service via OAuth (or, for some servers, an API token you provide). We receive and store a
credential (OAuth access/refresh token, or your API token) so the server can call that service for
you. We derive a per-user identifier from it to key your usage and billing. We do **not** receive
your third-party account password.

**Usage metering.** We record counts and timestamps of tool calls per user (and, for team plans,
per workspace) to enforce plan limits and bill you. We do not need, and do not retain, the
*contents* of your tool calls to meter them.

**Request contents (transient).** To fulfil a tool call, the server passes your request to the
third-party API and returns the response to your AI client. This data is processed **in transit to
complete your request** and is not stored by us beyond what is technically necessary to serve the
response, except transient logs (see §4).

**Billing.** Payments are handled by **Stripe**. We do not receive or store full card numbers;
Stripe does. We store your Stripe customer/subscription identifiers and plan status.

**Operational logs.** Our infrastructure (Cloudflare) processes IP address, request metadata, and
error diagnostics for security, abuse prevention, and reliability.

## 2. Legal bases (GDPR)

We process personal data to: **perform our contract** with you (providing the service, billing);
pursue our **legitimate interests** (securing the service, preventing abuse, debugging); and
**comply with legal obligations** (accounting/tax). Where we ever rely on **consent**, you may
withdraw it at any time.

## 3. How we use data

- Provide the service — authenticate you and make the third-party API calls you request.
- Enforce plan limits and bill you.
- Secure the service, prevent abuse, and debug errors.
- Send you service and billing notices.

We do **not** sell your data, and we do **not** use your data or request contents to train machine
learning models.

## 4. Sub-processors

We rely on: **Cloudflare, Inc.** (hosting, DNS, storage of encrypted tokens), **Stripe** (payments),
and the **third-party service you connect** (e.g. Linear) — your requests go to that provider under
its own privacy policy. A current list is available on request at privacy@usefulapi.io.

## 5. Retention

- Stored credentials: kept until you disconnect, cancel, or request deletion, then deleted within
  **30 days**.
- Billing/accounting records: retained as required by Czech accounting and tax law (**up to 10
  years** for tax/VAT documentation).
- Operational logs: retained about **30 days**, then rotated.

## 6. Your rights

Under the GDPR you may request **access, correction, deletion, export (portability), restriction,
or object** to processing, and withdraw consent where applicable. Contact privacy@usefulapi.io; we
respond within one month. You can disconnect a server at any time, which revokes our stored
credential for that service. You also have the right to lodge a complaint with the Czech Data
Protection Authority (**Úřad pro ochranu osobních údajů**, uoou.gov.cz).

## 7. Security

Credentials are stored encrypted and scoped per user; webhook and payment flows are signature-
verified. No method of transmission or storage is perfectly secure, but we take measures
appropriate to the sensitivity of the data.

## 8. International transfers

We and our sub-processors may process data in the **European Union and the United States** (Stripe
and Cloudflare are US-based). Where data leaves the EEA, transfers rely on appropriate safeguards
(e.g. Standard Contractual Clauses and/or the EU-US Data Privacy Framework).

## 9. Children

The service is not directed to individuals under **16**, and we do not knowingly collect their
personal data.

## 10. Changes

We may update this policy; material changes will be posted here with a new effective date.

## 11. Contact

Alexandr Maximov — privacy@usefulapi.io — Jeseniova 1196, 130 00 Prague, Czech Republic.
