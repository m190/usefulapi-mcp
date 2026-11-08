# SureLC MCP by usefulapi

Use your [SureLC](https://www.surancebay.com) account from Claude, Cursor, or any MCP client. It reads producers, firms, licenses, carrier appointments and contracts, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://surelc.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://surelc.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http surelc https://surelc.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=surelc&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsurelc.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "surelc": {
      "url": "https://surelc.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SureLC credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/surelc/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SureLC API key**. Your admin creates it under **Account & Settings → API Tokens** in SureLC, and SuranceBay must first enable key management for that user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `surelc_list_changed_producers` | read | List changed producers |
| `surelc_get_producer` | read | Get a producer |
| `surelc_get_producer_by_npn` | read | Find a producer by NPN |
| `surelc_list_producers_licenses` | read | List producer licenses |
| `surelc_list_producer_licenses` | read | List one producer's licenses |
| `surelc_list_producer_appointments` | read | List one producer's appointments |
| `surelc_list_producer_appointment_requests` | read | List one producer's appointment requests |
| `surelc_list_producer_training_courses` | read | List one producer's training courses |
| `surelc_list_producer_errors_and_omissions` | read | List one producer's errors and omissions |
| `surelc_list_producer_employment_addresses` | read | List one producer's employment addresses |
| `surelc_list_firms` | read | List firms |
| `surelc_get_firm` | read | Get a firm |
| `surelc_get_firm_by_ein` | read | Find a firm by EIN |
| `surelc_get_firm_by_npn` | read | Find a firm by NPN |
| `surelc_list_firm_appointments` | read | List a firm's appointments |
| `surelc_list_firm_licenses` | read | List a firm's licenses |
| `surelc_list_firm_addresses` | read | List a firm's addresses |
| `surelc_list_appointment_requests` | read | List appointment requests |
| `surelc_get_appointment_request` | read | Get an appointment request |
| `surelc_list_appointment_request_notes` | read | List notes on an appointment request |
| `surelc_list_contracts` | read | List contracts |
| `surelc_list_producer_contracts` | read | List one producer's contracts |
| `surelc_list_carriers` | read | List carriers |
| `surelc_get_carrier` | read | Get a carrier |
| `surelc_list_lookup` | read | List a reference list |
| `surelc_usage_status` | meta | Usage status (free-tier meter) |
| `surelc_request_feature` | meta | Request a missing feature |
| `surelc_upgrade` | meta | Upgrade to Pro or Pro+ |
| `surelc_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `surelc_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `surelc_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `surelc_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
