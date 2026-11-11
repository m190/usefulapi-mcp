# ERClinic MCP by usefulapi

Use your ERClinic account from Claude, Cursor, or any MCP client. Read units, professionals, agenda times and appointments, and book, confirm or cancel them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://erclinic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://erclinic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http erclinic https://erclinic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=erclinic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ferclinic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "erclinic": {
      "url": "https://erclinic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ERClinic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/erclinic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **ERClinic Api-Key** (Configurações → Configurações da Clínica → Integrações in ERClinic; your clinic admin creates it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `erclinic_list_unities` | read | List units |
| `erclinic_list_specialties` | read | List specialties |
| `erclinic_list_professionals` | read | List professionals |
| `erclinic_list_procedures` | read | List procedures |
| `erclinic_list_insurance` | read | List insurance plans |
| `erclinic_get_available_dates` | read | Find dates with free slots |
| `erclinic_get_available_times` | read | Find free times on a date |
| `erclinic_list_appointments` | read | List appointments |
| `erclinic_find_patient` | read | Find a patient |
| `erclinic_list_birthdays` | read | List patients with a birthday |
| `erclinic_create_appointment` | **write** | Create an appointment |
| `erclinic_confirm_appointment` | **write** | Confirm an appointment |
| `erclinic_cancel_appointment` | **write** | Cancel an appointment |
| `erclinic_create_patient` | **write** | Create a patient |
| `erclinic_update_patient` | **write** | Update a patient |
| `erclinic_usage_status` | meta | Usage status (free-tier meter) |
| `erclinic_request_feature` | meta | Request a missing feature |
| `erclinic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `erclinic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `erclinic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `erclinic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `erclinic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
