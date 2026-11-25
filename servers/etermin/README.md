# eTermin MCP by usefulapi

Use your [eTermin](https://www.etermin.net) account from Claude, Cursor, or any MCP client. Read calendars, services, open booking slots, working times, absences and appointments, and book or delete appointments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://etermin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://etermin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http etermin https://etermin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=etermin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fetermin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "etermin": {
      "url": "https://etermin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eTermin credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/etermin/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **eTermin public key** and **secret key**, found in your eTermin account settings under the API section. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `etermin_list_calendars` | read | List calendars |
| `etermin_list_services` | read | List services |
| `etermin_list_service_groups` | read | List service groups |
| `etermin_get_available_slots` | read | Get available time slots |
| `etermin_get_working_times` | read | Get working times |
| `etermin_list_absences` | read | List absences |
| `etermin_list_appointments` | read | List appointments |
| `etermin_find_contact` | read | Find a contact |
| `etermin_create_contact` | **write** | Create a contact |
| `etermin_create_appointment` | **write** | Create an appointment |
| `etermin_delete_appointment` | **write** | Delete an appointment |
| `etermin_usage_status` | meta | Usage status (free-tier meter) |
| `etermin_request_feature` | meta | Request a missing feature |
| `etermin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `etermin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `etermin_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `etermin_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `etermin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
