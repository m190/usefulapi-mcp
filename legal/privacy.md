<!-- ┌──────────────────────────────────────────────────────────────────────────┐
     │ DRAFT — REVIEW BY COUNSEL BEFORE PUBLISHING. Not legal advice. Fill every  │
     │ [BRACKETED] placeholder. Served in production at https://usefulapi.io/privacy. │
     └──────────────────────────────────────────────────────────────────────────┘ -->

# Privacy Policy

**Effective date:** [EFFECTIVE DATE]
**Operator:** [LEGAL ENTITY NAME] ("usefulapi", "we", "us"), [ENTITY ADDRESS], contact
**[privacy@usefulapi.io]**.

usefulapi provides hosted [Model Context Protocol](https://modelcontextprotocol.io) (MCP) servers
that let AI clients (e.g. Claude, Cursor) access third‑party services (such as Linear) **on your
behalf**. This policy explains what we collect, why, and your choices. It covers the usefulapi
services at `usefulapi.io` and the `*.usefulapi.io` MCP endpoints.

## 1. Data we process

**Account & identity.** When you connect a server, you authenticate to the underlying third‑party
service via OAuth (or, for some servers, an API token you provide). We receive and store a
credential (OAuth access/refresh token, or your API token) so the server can call that service for
you. We derive a per‑user identifier from it to key your usage and billing. We do **not** receive
your third‑party account password.

**Usage metering.** We record counts and timestamps of tool calls per user (and, for team plans,
per workspace) to enforce plan limits and bill you. We do not need, and do not retain, the
*contents* of your tool calls to meter them.

**Request contents (transient).** To fulfil a tool call, the server passes your request to the
third‑party API and returns the response to your AI client. This data is processed **in transit to
complete your request** and is not stored by us beyond what is technically necessary to serve the
response, except transient logs (see §4).

**Billing.** Payments are handled by **Stripe**. We do not receive or store full card numbers;
Stripe does. We store your Stripe customer/subscription identifiers and plan status.

**Operational logs.** Our infrastructure (Cloudflare) processes IP address, request metadata, and
error diagnostics for security, abuse prevention, and reliability.

## 2. How we use data

- Provide the service — authenticate you and make third‑party API calls you request.
- Enforce plan limits and bill you.
- Secure the service, prevent abuse, and debug errors.
- Communicate service and billing notices to you.

We do **not** sell your data, and we do **not** use your data or request contents to train machine
learning models.

## 3. Sub‑processors

We rely on: **Cloudflare** (hosting, DNS, storage of encrypted tokens), **Stripe** (payments), and
the **third‑party service you connect** (e.g. Linear) — your requests go to that provider under its
own privacy policy. A current list is available on request at [privacy@usefulapi.io].

## 4. Retention

- Stored credentials: kept until you disconnect, cancel, or request deletion, then deleted within
  [30] days.
- Usage/billing records: retained as required for accounting and legal compliance ([e.g. 7 years]).
- Operational logs: retained for a short period ([e.g. 30 days]) then rotated.

## 5. Your rights

Depending on your location (e.g. GDPR/UK GDPR, CCPA), you may request access, correction, deletion,
export, or restriction of your personal data, and may object to certain processing. Contact
[privacy@usefulapi.io]; we respond within the period required by applicable law. You can disconnect
a server at any time, which revokes our stored credential for that service.

## 6. Security

Credentials are stored encrypted and scoped per user; webhook and payment flows are signature‑
verified. No method of transmission or storage is perfectly secure, but we take reasonable measures
appropriate to the sensitivity of the data.

## 7. International transfers

We and our sub‑processors may process data in [JURISDICTIONS]. Where required, transfers rely on
appropriate safeguards (e.g. Standard Contractual Clauses).

## 8. Children

The service is not directed to individuals under [16], and we do not knowingly collect their data.

## 9. Changes

We may update this policy; material changes will be posted here with a new effective date.

## 10. Contact

[LEGAL ENTITY NAME] — [privacy@usefulapi.io] — [ENTITY ADDRESS].
