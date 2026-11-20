<!-- DRAFT — standard GDPR Article 28 template, not reviewed by counsel. Not legal advice.
     Served in production at https://usefulapi.io/dpa. -->

# Data Processing Agreement

**Effective date:** 20 November 2026 · **Last updated:** 20 November 2026
**Processor:** Alexandr Maximov, IČO 88788814, Jeseniova 1196, 130 00 Prague, Czech Republic
("usefulapi", "we", "us"). Contact: **privacy@usefulapi.io**.

This Data Processing Agreement ("DPA") forms part of the [Terms of Service](/terms/). It applies when
you use the Service for a business or other organization ("you", the "Customer") and the records that
the Service reads or writes for you contain personal data. It sets out the terms that Article 28 of
the EU General Data Protection Regulation (GDPR) requires. No signature is needed. A signed copy is
available on request at privacy@usefulapi.io.

## 1. Roles

- For the personal data in the records that the Service reads from or writes to a service that you
  connect (for example your accounting system), **you are the controller and we are the processor**.
- For your account, credential, usage and billing data, we are the controller, as described in our
  [Privacy Policy](/privacy/). This DPA does not cover that data.

## 2. Subject matter, nature and purpose

We process personal data only to provide the Service: when your AI client calls a tool, we send the
request to the service that you connected, and we return the result to that AI client. When you ask
for a write action, we create or change the record in that service. Each tool call that you or your
users make, and the configuration that you choose (for example read-only access), is your documented
instruction. We do not process the data for any other purpose, we do not sell it, and we do not use
it to train machine learning models.

## 3. Types of data and data subjects

- **Data subjects:** the people whose data is in the records that you request, for example your
  customers, suppliers, employees and contact persons.
- **Types of personal data:** the data in those records, for example names, contact details,
  addresses, invoice and payment details, bookkeeping entries and notes.
- We do not ask for special categories of personal data. Do not request them through the Service
  unless your connected service and your own legal basis allow it.

## 4. Duration and deletion

- The processing lasts as long as you use the Service.
- Records pass through the Service in memory to complete each call. We do not keep copies of them,
  except: operational logs with request metadata and error diagnostics, kept for about **30 days**;
  and, for some servers, the workflow records described in the Privacy Policy.
- When a connection ends, we delete the connection and its stored credentials as described in the
  Privacy Policy.
- The processing ends when you tell us at privacy@usefulapi.io that you stop using the Service, or when
  we end the Service for you. Then, or earlier on request, we delete or return to you, at your choice,
  the personal data that we still hold for you as processor (for example workflow records), within
  **30 days**. After a return, we delete the remaining copies. This does not apply where EU or Member
  State law requires us to keep the data. Operational logs are deleted when they rotate after about
  30 days.

## 5. Our obligations

We will:

1. process personal data only on your documented instructions, unless EU or Member State law requires
   otherwise (in that case we tell you first, unless that law forbids it), and tell you immediately if
   we believe that an instruction infringes the GDPR or other EU or Member State data protection law;
2. make sure that every person who can access the data is bound to confidentiality;
3. keep appropriate technical and organizational security measures (section 6);
4. use sub-processors only as described in section 7;
5. help you, as far as we reasonably can, to answer requests from data subjects and to meet your
   obligations on security, breach notification, impact assessments and prior consultation;
6. tell you about a personal data breach that affects your data **without undue delay, and at the
   latest 48 hours** after we become aware of it, with the information that we have at that time;
7. delete or return the data at the end of the processing, as described in section 4;
8. give you the information that you need to show compliance with Article 28, and allow audits by
   you or an auditor that you choose, on reasonable notice, at your cost, and no more than once a year
   unless a breach, a supervisory authority or reasonable grounds to suspect non-compliance require
   another audit.

## 6. Security measures

- Encryption in transit (TLS) for all connections.
- Stored credentials encrypted at rest; each connection is scoped to one user.
- No logging of full tool payloads; no person at usefulapi reads them during normal operation.
- Multi-factor authentication for administrative access to our infrastructure.
- Regular updates of software and dependencies.
- Signed login state and signature-verified webhook and payment flows.

## 7. Sub-processors

- You give general authorization for the sub-processors listed here. Current list:
  **Cloudflare, Inc.** (hosting, network, logs and storage of encrypted credentials).
- We will tell you at least **30 days** before we add or replace a sub-processor. We update this page
  and send an email to the billing email address of your subscription and to every address that has
  asked for these notices at privacy@usefulapi.io. If you have no paid subscription, ask for the
  notices at that address so that we can reach you. You may object for reasonable data protection
  reasons; if we cannot resolve the objection, you may stop using the Service.
- We bind each sub-processor to data protection obligations that are at least as protective as this
  DPA, and we remain responsible for its performance.
- **Your AI provider is not our sub-processor.** You choose the AI client and model provider (for
  example Anthropic or OpenAI) and receive the results through it under your own agreement with that
  provider. The connected service itself (for example your accounting system) also acts under your
  own agreement with it.

## 8. International transfers

Our sub-processors may process data in the European Union and the United States. Where data leaves
the European Economic Area, the transfer relies on the EU Standard Contractual Clauses and/or the
EU-US Data Privacy Framework.

## 9. Liability and order of precedence

The limitations of liability in the Terms of Service apply to this DPA, except where the GDPR does not
allow them. If this DPA conflicts with the Terms of Service on the processing of personal data, this
DPA prevails.

## 10. Governing law

This DPA is governed by the law that governs the Terms of Service. Questions: privacy@usefulapi.io.
