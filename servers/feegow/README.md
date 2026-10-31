# Feegow MCP by usefulapi

Connect your Feegow Clinic account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://feegow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http feegow https://feegow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=feegow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffeegow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "feegow": {
      "url": "https://feegow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Feegow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/feegow/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `feegow_list_units` | read | List units (branches) |
| `feegow_list_locations` | read | List locations (rooms) |
| `feegow_list_specialties` | read | List specialties |
| `feegow_list_professionals` | read | List professionals |
| `feegow_get_professional` | read | Get professional |
| `feegow_list_professional_insurances` | read | List insurances a professional accepts |
| `feegow_list_insurances` | read | List insurances (convênios) |
| `feegow_list_procedure_types` | read | List procedure types |
| `feegow_list_procedures` | read | List procedures |
| `feegow_list_appointment_statuses` | read | List appointment statuses |
| `feegow_list_appointment_reasons` | read | List cancel/reschedule reasons |
| `feegow_list_booking_channels` | read | List booking channels |
| `feegow_list_patient_sources` | read | List patient sources |
| `feegow_list_appointments` | read | List appointments |
| `feegow_get_available_schedule` | read | Find open appointment slots |
| `feegow_list_patients` | read | List patients |
| `feegow_get_patient` | read | Get patient |
| `feegow_list_patient_dependents` | read | List patient dependents |
| `feegow_list_proposals` | read | List proposals (quotes) |
| `feegow_list_invoices` | read | List invoices (receivables and payables) |
| `feegow_create_appointment` | **write** | Create appointment |
| `feegow_reschedule_appointment` | **write** | Reschedule appointment |
| `feegow_cancel_appointment` | **write** | Cancel appointment |
| `feegow_update_appointment_status` | **write** | Update appointment status |
| `feegow_create_patient` | **write** | Create patient |
| `feegow_update_patient` | **write** | Update patient |
| `feegow_usage_status` | meta | Usage status (free-tier meter) |
| `feegow_request_feature` | meta | Request a missing feature |
| `feegow_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `feegow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Feegow clinic) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `feegow_upgrade` (it returns a Stripe Checkout link). Cancel any time with `feegow_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `feegow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. Unofficial integration; no Feegow endorsement is claimed.

## Data and write effects

Do not use this server with protected health information (PHI); usefulapi does not sign HIPAA BAAs. Requested patient, appointment, contact and financial records pass to your chosen AI client and LLM provider. Use only data you are authorized to process with that service. Scope a dedicated token for this integration.

Six writes create, reschedule or cancel appointments, update appointment status and its agenda note, and create or update patient registration. Clinic automation may notify patients by SMS, email or WhatsApp. An existing CPF cannot be replaced. No clinical-record writes, prescriptions, payments or refunds are exposed.

Requests are never automatically retried. Inspect uncertain writes before repeating them. Revoke the dedicated token to stop access. Mock request-contract, security and Worker checks pass; authenticated clinic/patient reads, appointments, notifications and business writes have not been tested.
