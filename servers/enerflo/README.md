# Enerflo MCP by usefulapi

Use your [Enerflo](https://enerflo.com) account from Claude, Cursor, or any MCP client. Read customers, installs, tasks and notes, and add leads and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://enerflo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://enerflo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http enerflo https://enerflo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=enerflo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fenerflo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "enerflo": {
      "url": "https://enerflo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Enerflo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/enerflo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Enerflo API key** (an admin finds it in Enerflo → Company Settings → API Access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `enerflo_get_company` | read | Get my company |
| `enerflo_list_offices` | read | List offices |
| `enerflo_list_loan_products` | read | List loan products |
| `enerflo_list_products` | read | List products |
| `enerflo_list_install_statuses` | read | List install statuses |
| `enerflo_list_users` | read | List users |
| `enerflo_get_user` | read | Get a user |
| `enerflo_list_customers` | read | List customers |
| `enerflo_get_customer` | read | Get a customer |
| `enerflo_list_customer_notes` | read | List customer notes |
| `enerflo_list_customer_appointments` | read | List customer appointments |
| `enerflo_list_customer_tasks` | read | List customer tasks |
| `enerflo_list_installs` | read | List installs |
| `enerflo_get_install` | read | Get an install |
| `enerflo_find_install` | read | Find an install for a customer |
| `enerflo_list_install_notes` | read | List install notes |
| `enerflo_list_tasks` | read | List company tasks |
| `enerflo_add_customer_note` | **write** | Add a customer note |
| `enerflo_add_install_note` | **write** | Add an install note |
| `enerflo_add_lead` | **write** | Add a lead |
| `enerflo_usage_status` | meta | Usage status (free-tier meter) |
| `enerflo_request_feature` | meta | Request a missing feature |
| `enerflo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `enerflo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `enerflo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `enerflo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `enerflo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
