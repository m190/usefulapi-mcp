# Halaxy MCP by usefulapi

**Live endpoint:** `https://halaxy.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://halaxy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http halaxy https://halaxy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=halaxy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhalaxy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "halaxy": {
      "url": "https://halaxy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Halaxy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/halaxy/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Halaxy Client ID and Client Secret**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `halaxy_list_patients` | read | List or search patients |
| `halaxy_list_practitioners` | read | List practitioners |
| `halaxy_list_practitioner_roles` | read | List practitioner roles (clinic locations) |
| `halaxy_list_organizations` | read | List organizations and clinics |
| `halaxy_list_appointments` | read | List appointments |
| `halaxy_list_schedules` | read | List practitioner schedules |
| `halaxy_list_slots` | read | List time slots |
| `halaxy_list_healthcare_services` | read | List appointment types |
| `halaxy_list_fees` | read | List fees |
| `halaxy_list_coverage` | read | List patient coverage (claim details) |
| `halaxy_list_invoices` | read | List invoices |
| `halaxy_list_invoice_lines` | read | List invoice lines |
| `halaxy_list_payment_transactions` | read | List payment transactions |
| `halaxy_list_referrals` | read | List referrals |
| `halaxy_list_referral_definitions` | read | List referral templates |
| `halaxy_get_patient` | read | Get a patient |
| `halaxy_get_practitioner` | read | Get a practitioner |
| `halaxy_get_practitioner_role` | read | Get a practitioner role |
| `halaxy_get_organization` | read | Get an organization |
| `halaxy_get_appointment` | read | Get an appointment |
| `halaxy_get_schedule` | read | Get a schedule |
| `halaxy_get_slot` | read | Get a time slot |
| `halaxy_get_healthcare_service` | read | Get an appointment type |
| `halaxy_get_fee` | read | Get a fee |
| `halaxy_get_coverage` | read | Get patient coverage |
| `halaxy_get_invoice` | read | Get an invoice |
| `halaxy_get_invoice_line` | read | Get an invoice line |
| `halaxy_get_payment_transaction` | read | Get a payment transaction |
| `halaxy_get_referral` | read | Get a referral |
| `halaxy_get_referral_definition` | read | Get a referral template |
| `halaxy_find_available_appointments` | read | Find available appointment times |
| `halaxy_create_patient` | **write** | Create a patient |
| `halaxy_create_appointment` | **write** | Book an appointment |
| `halaxy_update_appointment_status` | **write** | Update an appointment status |
| `halaxy_create_clinical_note` | **write** | Create a draft clinical note |
| `halaxy_usage_status` | meta | Usage status (free-tier meter) |
| `halaxy_request_feature` | meta | Request a missing feature |
| `halaxy_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `halaxy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `halaxy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `halaxy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `halaxy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
