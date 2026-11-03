# Progenda MCP by usefulapi

Use your Progenda account from Claude, Cursor, or any MCP client. It reads centers, calendars, patients, appointments and services, suggests open slots, and creates and updates patients and appointments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://progenda.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://progenda.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http progenda https://progenda.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=progenda&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprogenda.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "progenda": {
      "url": "https://progenda.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Progenda credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/progenda/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Progenda user e-mail address** and a **Progenda API token** (generate the token in the Progenda web application). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `progenda_list_centers` | read | List centers |
| `progenda_list_calendars` | read | List calendars |
| `progenda_list_patients` | read | List patients |
| `progenda_get_patient` | read | Get a patient |
| `progenda_list_appointments` | read | List appointments |
| `progenda_get_appointment` | read | Get an appointment |
| `progenda_list_services` | read | List services |
| `progenda_get_suggestions` | read | Suggest free slots |
| `progenda_create_patient` | **write** | Create a patient |
| `progenda_update_patient` | **write** | Update a patient |
| `progenda_create_appointment` | **write** | Create an appointment |
| `progenda_update_appointment` | **write** | Update an appointment |
| `progenda_usage_status` | meta | Usage status (free-tier meter) |
| `progenda_request_feature` | meta | Request a missing feature |
| `progenda_upgrade` | meta | Upgrade to Pro or Pro+ |
| `progenda_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `progenda_upgrade` (it returns a Stripe Checkout link). Cancel any time with `progenda_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `progenda_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
