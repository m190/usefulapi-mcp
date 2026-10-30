<!-- DRAFT — recommend a counsel skim before publishing. Not legal advice.
     Served in production at https://usefulapi.io/privacy. -->

# Privacy Policy

**Effective date:** 16 July 2026 · **Last updated:** 30 October 2026
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

**Email login (servers without a credential).** Servers for public data sources need no credential;
you log in with your email address instead, and we send a 6-digit code from login@usefulapi.io. The
address is used only to send that code. We do **not** store it: we keep only a one-way hash of it,
which is your account identifier for usage and billing.

**Usage metering.** We record counts and timestamps of tool calls per user and per server to
enforce plan limits and bill you. We do not need, and do not retain, the
*contents* of your tool calls to meter them. To avoid counting a repeated call twice, we keep a one-way
hash of the tool arguments for about 10 seconds.

**Product telemetry.** For each tool call we also record the server, the tool name, the outcome (for
example success, or the class of a vendor error), the duration, the size of the result and the name of
the type of AI client (for example Claude or Cursor). This record has **no user id, no tool arguments and no
results**. We keep it for **90 days** to find tools that fail.

**Feature requests.** When your AI client uses a server's `<prefix>_request_feature` tool, we store the
text it sends with the server name, the type of AI client and the name of the tool that you tried (if
any), **not with your account**, for up to **90 days**, to plan new tools. Do not put personal data in
such a request. To allow at most 5 requests per day, we count them per account for 24 hours; this count
does not contain the text.

**Request contents (transient).** To fulfil a tool call, the server passes your request to the
third-party API and returns the response to your AI client. This data is processed **in transit to
complete your request** and is not stored by us beyond what is technically necessary to serve the
response, except transient logs (see §4) and the resumable-workflow and polling metadata described below. Our servers
process tool arguments and results in memory to complete each call. We do not log or retain full tool
payloads, and no person at usefulapi reads them. A
server can filter, reformat or shorten a result, or add a usage notice to it, before it reaches your AI
client.
For feature requests, we keep and read the text that you send with a
`<prefix>_request_feature` tool.

**Resumable product-copy workflows (Printify).** When you confirm a product-copy job, we retain its
job identifier, source and target shop/product identifiers, selection, progress, timestamps, error status
and one-way checksums of supported product fields. These checkpoints let a job resume after a disconnect
and prevent repeated requests from creating duplicate products. They do not contain API credentials,
full product records, descriptions or artwork files. Each operation checks access to both shops again.
Source-to-target mappings are long-lived so later jobs can recognize previous copies. You may request
deletion at privacy@usefulapi.io; removing these records also removes their protection against duplicate copies.

**API polling limits (SMS Everyone).** We keep an opaque account identifier, the fixed polling
endpoint names and next-allowed-request timestamps to limit repeated polling across connections.
These records contain no API credentials, message contents or phone numbers. Cooldown records may
remain between sessions; you can request their deletion at privacy@usefulapi.io.

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
- EasyStore connections: stored OAuth grants and installation metadata are deleted after a verified
  uninstall notification or a confirmed rejection of the store token, and after **30 days without a
  successful EasyStore API call**. If an uninstall notification is missed, a later token rejection
  or the inactivity deadline triggers cleanup.
- Billing/accounting records: retained as required by Czech accounting and tax law (**up to 10
  years** for tax/VAT documentation).
- Operational logs: retained about **30 days**, then rotated.
- Tool-call telemetry and feature requests: about **90 days**, then deleted.
- Resumable copy checkpoints and mappings: kept until deletion is requested, then deleted within
  **30 days**. They are retained across completed jobs to prevent later duplicate copies.

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
