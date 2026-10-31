# Craftboxx MCP by usefulapi

Use your [Craftboxx](https://www.craftboxx.de) account from Claude, Cursor, or any MCP client. Read employees, customers, projects, assignments, timesheets, absences and documentations, and create customers and projects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://craftboxx.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://craftboxx.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http craftboxx https://craftboxx.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=craftboxx&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcraftboxx.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "craftboxx": {
      "url": "https://craftboxx.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Craftboxx credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/craftboxx/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Craftboxx email** and **password** of a Craftboxx Planner employee. The server has the permissions of that employee. The password is used once to get a token and is not stored. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `craftboxx_get_company` | read | Get my company |
| `craftboxx_list_employees` | read | List employees |
| `craftboxx_get_employee` | read | Get an employee |
| `craftboxx_list_customers` | read | List customers |
| `craftboxx_get_customer` | read | Get a customer |
| `craftboxx_list_projects` | read | List projects |
| `craftboxx_get_project` | read | Get a project |
| `craftboxx_list_assignments` | read | List assignments |
| `craftboxx_get_assignment` | read | Get an assignment |
| `craftboxx_list_timesheets` | read | List timesheets |
| `craftboxx_list_absences` | read | List absences |
| `craftboxx_list_absence_types` | read | List absence types |
| `craftboxx_list_articles` | read | List articles |
| `craftboxx_list_documentations` | read | List documentations |
| `craftboxx_create_customer` | **write** | Create a customer |
| `craftboxx_create_project` | **write** | Create a project |
| `craftboxx_usage_status` | meta | Usage status (free-tier meter) |
| `craftboxx_request_feature` | meta | Request a missing feature |
| `craftboxx_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `craftboxx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `craftboxx_upgrade` (it returns a Stripe Checkout link). Cancel any time with `craftboxx_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `craftboxx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
