# Artesa MCP by usefulapi

Use your [Artesa](https://www.artesa.de) account from Claude, Cursor, or any MCP client. Read customers, assignments, staff, time entries and absences, and create customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://artesa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://artesa.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http artesa https://artesa.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=artesa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fartesa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "artesa": {
      "url": "https://artesa.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Artesa credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/artesa/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Artesa API key** (Artesa → **Settings**; an admin account is needed). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `artesa_list_customers` | read | List customers |
| `artesa_get_customer` | read | Get a customer |
| `artesa_create_customer` | **write** | Create a customer |
| `artesa_list_assignments` | read | List assignments |
| `artesa_get_assignment` | read | Get an assignment |
| `artesa_list_assignment_events` | read | List assignment events |
| `artesa_get_assignment_event` | read | Get an assignment event |
| `artesa_list_projects` | read | List projects |
| `artesa_get_project` | read | Get a project |
| `artesa_list_users` | read | List users |
| `artesa_get_user` | read | Get a user |
| `artesa_list_time_entries` | read | List time entries |
| `artesa_list_user_absences` | read | List user absences |
| `artesa_list_time_sheet_weeks` | read | List time sheet weeks |
| `artesa_list_assignment_status_types` | read | List assignment status types |
| `artesa_list_assignment_types` | read | List assignment types |
| `artesa_list_gangs` | read | List gangs |
| `artesa_list_roles` | read | List roles |
| `artesa_usage_status` | meta | Usage status (free-tier meter) |
| `artesa_request_feature` | meta | Request a missing feature |
| `artesa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `artesa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `artesa_upgrade` (it returns a Stripe Checkout link). Cancel any time with `artesa_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `artesa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
