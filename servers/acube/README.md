# A-Cube MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://acube.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http acube https://acube.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=acube&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Facube.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "acube": {
      "url": "https://acube.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your A-Cube credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/acube/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `acube_list_invoices` | read | List invoices |
| `acube_get_invoice` | read | Get an invoice |
| `acube_list_invoice_notifications` | read | List an invoice's SDI notifications |
| `acube_get_notification` | read | Get an SDI notification |
| `acube_get_invoice_stats` | read | Get invoice statistics |
| `acube_list_draft_invoices` | read | List draft invoices |
| `acube_get_draft_invoice` | read | Get a draft invoice |
| `acube_validate_invoice` | read | Validate an invoice (no save) |
| `acube_create_draft_invoice` | **write** | Create a draft invoice |
| `acube_send_draft_invoice` | **write** | Send a draft invoice to the SDI |
| `acube_delete_draft_invoice` | **write** | Delete a draft invoice |
| `acube_list_receipts` | read | List electronic receipts |
| `acube_get_receipt` | read | Get an electronic receipt |
| `acube_get_receipt_details` | read | Get electronic receipt details |
| `acube_list_business_registry_configurations` | read | List business registry configurations |
| `acube_get_business_registry_configuration` | read | Get a business registry configuration |
| `acube_list_webhooks` | read | List webhook configurations |
| `acube_list_numbering_sequences` | read | List numbering sequences |
| `acube_get_current_numbering_sequence` | read | Get the current numbering sequence |
| `acube_list_jobs` | read | List background jobs |
| `acube_get_job` | read | Get a background job |
| `acube_verify_fiscal_id` | read | Check a fiscal id |
| `acube_verify_company` | read | Look up an Italian company |
| `acube_get_recipient_code` | read | Get the SDI recipient code |
| `acube_usage_status` | meta | Usage status (free-tier meter) |
| `acube_request_feature` | meta | Request a missing feature |
| `acube_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `acube_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per A-Cube account) | $0 | 50 tool calls / month |
| **Pro** (per A-Cube account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `acube_upgrade` (it returns a Stripe Checkout link). Cancel any time with `acube_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `acube_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Account access and data

Use your licensed A-Cube API account and select sandbox or production. Your production Italy API contract must permit this hosted connection. Customer onboarding, vendor subscriptions and fiscal processing charges remain separate. No vendor app approval or endorsement is claimed.

Your password is sent only for this sign-in and is not stored in the hosted connection. Only the vendor JWT, email, environment, expiry and billing identity are retained encrypted. Vendor tokens last up to24hours; reconnect on expiry or revocation. There is no silent password login or invented refresh endpoint. Disconnect UsefulAPI to stop this connection; an issued JWT may remain valid until A-Cube expires or revokes it. Billing follows the validated account UID, normally across password changes and environments.

Requested fiscal invoices, tax identifiers, receipts and business records reach your connected AI client and LLM provider. Connect only data you are authorized to process there.

Draft creation saves a draft without transmission. Submission and deletion require explicit confirmation; without it, the tools return a preview. Production submission is a legal act and may incur charges. A-Cube's acknowledgement means accepted for transmission, not confirmed SDI delivery: check invoice notifications. After an uncertain result, check A-Cube before repeating. No operation is automatically replayed.

All24tools were checked against current API specifications and local mocks. Synthetic invoice test data matches required fields/types but is not a legally validated invoice. No real customer data, SDI submissions, receipts or charges were tested.
