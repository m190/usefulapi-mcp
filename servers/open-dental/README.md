# Open Dental MCP by usefulapi

Use your [Open Dental](https://www.opendental.com) account from Claude, Cursor, or any MCP client. The server reads appointments, open slots, providers, procedure codes and recall lists, and changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://open-dental.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://open-dental.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http open-dental https://open-dental.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=open-dental&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopen-dental.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "open-dental": {
      "url": "https://open-dental.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Open Dental credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/open-dental/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **customer API key** (UsefulAPI sends it for your practice when you email developers@usefulapi.io with the practice name. The office adds it in Open Dental under Setup > Advanced Setup > API and turns on the API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `opendental_get_api_permissions` | read | Get API permissions |
| `opendental_list_patients` | read | List patients |
| `opendental_search_patients` | read | Search patients |
| `opendental_get_patient` | read | Get patient |
| `opendental_get_patient_notes` | read | Get patient notes |
| `opendental_list_appointments` | read | List appointments |
| `opendental_get_appointment` | read | Get appointment |
| `opendental_list_asap_appointments` | read | List ASAP appointments |
| `opendental_find_open_slots` | read | Find open appointment slots |
| `opendental_list_providers` | read | List providers |
| `opendental_list_operatories` | read | List operatories |
| `opendental_list_clinics` | read | List clinics |
| `opendental_list_appointment_types` | read | List appointment types |
| `opendental_list_procedure_codes` | read | List procedure codes |
| `opendental_list_procedure_logs` | read | List procedures |
| `opendental_list_commlogs` | read | List communication log entries |
| `opendental_list_recalls_due` | read | List recalls due |
| `opendental_usage_status` | meta | Usage status (free-tier meter) |
| `opendental_request_feature` | meta | Request a missing feature |
| `opendental_upgrade` | meta | Upgrade to Pro or Pro+ |
| `opendental_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `opendental_upgrade` (it returns a Stripe Checkout link). Cancel any time with `opendental_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `opendental_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
